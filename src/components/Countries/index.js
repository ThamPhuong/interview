import React, { useEffect, useState } from 'react';
import { Modal, Table } from 'antd';

import { getCoutries } from 'services/virusCorona';
import columns from './columns';
import CountryDetailDrawer from 'components/CountryDetailDrawer';
import { InfoCircleTwoTone } from '@ant-design/icons';

const Countries = (props) => {

	const [loading, setLoading] = useState(false);
	const [isVisible, setIsvisible] = useState(false);
	const [countries, setCountries] = useState([]);
	const [countryCodeSelected, setCountryCodeSelected] = useState(null);

	const onTableChange = () => { };

	const onSelectCountry = (countryCode) => {
		setCountryCodeSelected(countryCode)
		setIsvisible(true);
	}

	const fetchCountries = async () => {
		setLoading(true);
		const res = await getCoutries();
		console.log('Res', res);
		if (res?.status === 200 && res.data) {
			const { Countries: countriesList } = res.data;

			const newCountries = (countriesList || []).sort((a, b) =>
				b.TotalConfirmed - a.TotalConfirmed ||
				b.NewDeaths - a.NewDeaths ||
				a.NewRecovered - b.NewRecovered
			);

			setCountries(newCountries || []);
		}

		setLoading(false);
	}

	const onDeleteCountry = (countryId) => {
		Modal.confirm({
			title: 'Do you want to delete this country?',
			icon: <InfoCircleTwoTone twoToneColor="#faad14" />,
			content: '',
			onOk: () => {
				const foundIndex = countries.findIndex(c => c.id === countryId);
				if (foundIndex !== -1) {
					const temp = [...countries];
					temp.splice(foundIndex,1);
					setCountries(temp);
				}
			}
		})
	}

	useEffect(() => {
		fetchCountries();
	}, []);

	return (
		<>
			<Table
				loading={loading}
				columns={columns({ onSelectCountry, onDeleteCountry })}
				dataSource={countries}
				rowKey="id"
				onChange={onTableChange}
				pagination={{
					pageSizeOptions: [10, 20, 50],
					showSizeChanger: true,
					showQuickJumper: true,
					total: countries?.length || 0,
					showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
				}}
				showSorterTooltip={false}
			/>
			<CountryDetailDrawer
				isVisible={isVisible}
				setIsvisible={setIsvisible}
				countryCode={countryCodeSelected}
			/>
		</>
	)
}

export default Countries;