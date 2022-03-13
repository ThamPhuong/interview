import { Avatar, Col, Descriptions, Divider, Drawer, Row, Skeleton, Space, Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { FlagOutlined } from '@ant-design/icons';
import moment from 'moment';

import { getCountryDetail, getCovidDetailByCountry } from 'services/virusCorona';
import useIsMounted from 'utils/useIsMounted';
import LineChart from 'components/LineChart';

const CountryDetail = props => {
	const { isVisible, setIsvisible, countryCode } = props;
	const isMounted = useIsMounted();
	const { Text } = Typography;

	console.log('isMounted', isMounted);
	const [loading, setLoading] = useState(false);
	const [loadingCovid, setLoadingCovid] = useState(false);
	const [country, setCountry] = useState({});
	const [covidData, setCovidData] = useState([]);

	const fetchCountryDetail = async () => {
		setLoading(true);
		const res = await getCountryDetail(countryCode);
		console.log('Res', res);

		if (res?.status === 200 && res.data) {
			const { data } = res;
			const newCountry = {
				name: data.name,
				nativeName: data.nativeName,
				flagUrl: data.flag,
				population: data.population,
				capital: data.capital,
				region: data.region,
				subregion: data.subregion
			}

			isMounted() && setCountry(newCountry);
		}

		isMounted() && setLoading(false);
	}

	const fetchCovidDetail = async () => {
		setLoadingCovid(true);
		const res = await getCovidDetailByCountry(countryCode);

		if (res?.status === 200 && res.data) {
			const { data } = res;
			const covidData60Days = data?.slice(-60) || [];

			let confirmedList = [];
			let deathsList = [];
			let recoveredList = [];

			covidData60Days.forEach(item => {
				confirmedList.push({
					date: item.Date,
					value: item.Confirmed,
					type: 'Confirmed'
				});

				deathsList.push({
					date: item.Date,
					value: item.Deaths,
					type: 'Deaths'
				});

				recoveredList.push({
					date: item.Date,
					value: item.Recovered,
					type: 'Recovered'
				});
			});

			isMounted() && setCovidData([...confirmedList, ...deathsList, ...recoveredList]);
		}

		isMounted() && setLoadingCovid(false);
	}

	useEffect(() => {
		if (countryCode) {
			fetchCountryDetail();
			fetchCovidDetail();
		}
	}, [countryCode]);

	return (
		<Drawer
			width={1024}
			title={"Country Detail"}
			placement="right"
			onClose={() => setIsvisible(false)}
			visible={isVisible}
		>
			{/* Content */}
			{loading || loadingCovid ? (
				<Row gutter={24}>
					<Col flex="180px">
						<Skeleton.Avatar style={{ width: 120, height: 120 }} active size='large' shape="circle" />
					</Col>
					<Col xs={{ span: 24 }} flex="400px">
						<Space direction="vertical">
							<Skeleton.Input style={{ width: 300, height: 40 }} active size="default" />
							<Skeleton.Input active />
						</Space>
					</Col>
					<Divider orientation="left">Country Information</Divider>
					<Skeleton.Input style={{ height: 54 }} active size={'large'} block />
					<Skeleton.Input style={{ height: 54 }} active size={'large'} block />

					<Divider orientation="left">Covid19 Chart</Divider>
					<Skeleton.Input style={{ height: 200 }} active size='large' block />
				</Row>) : (
				<>
					<Spin spinning={loading}>
						<Row gutter={24}>
							<Col flex="180px">
								<Avatar
									src={country.flagUrl}
									icon={country.flagUrl ? null : <FlagOutlined />}
									size={120}
								/>
							</Col>
							<Col xs={{ span: 24 }} flex="400px">
								<Typography.Title level={2}>{country.name || 'N/A'}</Typography.Title>
								<Text type="success">{country.nativeName || 'N/A'}</Text>
							</Col>
						</Row>
						<Divider orientation="left">Country Information</Divider>

						<Descriptions column={{ xs: 1, sm: 2 }} bordered labelStyle={{ fontWeight: 'bold' }}>
							<Descriptions.Item label={'Population'}>{country.population || 'N/A'}</Descriptions.Item>
							<Descriptions.Item label={'Capital'}>{country.capital || 'N/A'}</Descriptions.Item>
							<Descriptions.Item label={'Region'}>{country.region || 'N/A'}</Descriptions.Item>
							<Descriptions.Item label={'subregion'}>{country.subregion || 'N/A'}</Descriptions.Item>
						</Descriptions>
					</Spin>

					<Divider orientation="left">Covid19 Chart</Divider>
					<Spin spinning={loadingCovid}>
						<LineChart data={covidData} />
					</Spin>
				</>)
			}

		</Drawer>
	);
}

export default CountryDetail;