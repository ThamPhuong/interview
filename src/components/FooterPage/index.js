import React from 'react';
import { Footer } from 'antd/lib/layout/layout';

import './style.css';

const FooterPage = props => {
	const { text } = props;

	return (
		<Footer className='footer'>{text}</Footer>
	)
}

export default FooterPage;
