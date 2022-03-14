import React from 'react';
import { Typography } from 'antd';

import './style.css';

const ParagraphBox = props => {
	const { data, levelTitle, className } = props;
	const { Title, Paragraph } = Typography;

	return (
		<Typography className={className ? className : 'paragraph'}>
			<Title level={levelTitle}>{data.title}</Title>
			<Paragraph>{data.paragraph}</Paragraph>
		</Typography>
	)
}

export default ParagraphBox;
