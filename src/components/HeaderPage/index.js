import React from 'react';
import { Col, Menu, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';

import './style.css';

const HeaderPage = props => {
	const { menuList, webName } = props;

	return (
		<Header className="header">
			<Row>
				<Col sm={10} md={6}>
					<span className="logo">{webName}</span>
				</Col>
				<Col sm={14} md={18}>
						<Menu theme="dark" mode="horizontal">
							{
								(menuList || []).map((item, index) => <Menu.Item key={`${item.name}_${index}`}>{item.name}</Menu.Item>)
							}
						</Menu>
				</Col>
			</Row>
		</Header>
	)
}

export default HeaderPage;