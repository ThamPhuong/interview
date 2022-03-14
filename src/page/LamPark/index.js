import React from 'react';
import { Layout } from 'antd';

import CarouselCustom from 'components/Carousel';
import HeaderPage from 'components/HeaderPage';
import FooterPage from 'components/FooterPage';
import CardItem from 'components/Card';
import Paragraph from 'components/Paragraph';

import { NAV_LIST, cardsList, PARAGRAPH_TOP_SERVICE, SLIDES_LIST } from 'utils/constant';
import './style.css';

const LamPark = (props) => {
	const { Content } = Layout;

	const onClickReadMore = () => {
		// doing some thing
	}

	return (
		<Layout>
			<HeaderPage menuList={NAV_LIST} webName='Sample Logo' />
			<Content className='content'>
				<CarouselCustom dataList={SLIDES_LIST} />

				<div className="site-layout-content">
					<Paragraph data={PARAGRAPH_TOP_SERVICE} levelTitle={3} />
					<div className='cards-list'>
						{
							cardsList(onClickReadMore).map(card => <CardItem data={card} />)
						}
					</div>
				</div>
			</Content>
			<FooterPage text={'Copyright ©2016 Sample Service CO., Ltd. All rights reserved'} />
		</Layout>
	)
}

export default LamPark;
