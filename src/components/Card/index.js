import React from 'react';
import { Button, Card, Typography } from 'antd';

import './style.css';

const CardItem = props => {
	const { data, onClickBtn } = props;

	const { Text, Title } = Typography;

	return (
		<div className='card-box'>
			<Card className='card-content'>
				<div className='card-icon'>{data.icon}</div>
				<Title level={3}>{data.title || 'N/A'}</Title>
				<Text className='card-description'>{data.description || 'N/A'}</Text>
				<Button className='card-read-more' onClick={() => onClickBtn()}>read more</Button>
			</Card>
		</div>
	);
}

export default CardItem;
