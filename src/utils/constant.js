import { DeploymentUnitOutlined, FlagOutlined, KeyOutlined, LikeOutlined } from "@ant-design/icons";
import slide1 from 'assets/images/slide1.jpg';
import slide2 from 'assets/images/slide2.jpg';
import slide3 from 'assets/images/slide3.jpg';

export const NAV_LIST = [
	{ name: 'home' },
	{
		name: 'about'
	},
	{
		name: 'services'
	},
	{
		name: 'portfolio'
	},
	{
		name: 'contact'
	}
];

export const cardsList = (onClickReadMore)=>  [
	{
		icon: <LikeOutlined />,
		title: 'suspendisse',
		description: 'Whether it’s simple sentences for those just learning the English language or phrasing for an academic paper',
		onClickBtn: onClickReadMore
	},
	{
		icon: <KeyOutlined />,
		title: 'suspendisse',
		description: 'Whether it’s simple sentences for those just learning the English language or phrasing for an academic paper',
		onClickBtn: onClickReadMore
	},
	{
		icon: <FlagOutlined />,
		title: 'suspendisse',
		description: 'Whether it’s simple sentences for those just learning the English language or phrasing for an academic paper',
		onClickBtn: onClickReadMore
	},
	{
		icon: <DeploymentUnitOutlined />,
		title: 'suspendisse',
		description: 'Whether it’s simple sentences for those just learning the English language or phrasing for an academic paper',
		onClickBtn: onClickReadMore
	},
];

export const PARAGRAPH_TOP_SERVICE = {
	title: 'Some of our top services',
	paragraph: 'In the process of internal desktop applications development, many different design specs and implementations would be involved'
}

export const PARAGRAPH_ADVERT_SERVICE = {
	title: 'Sample Service',
	paragraph: 'In the process of internal desktop applications development, many different design specs many different design specs'
}

export const SLIDES_LIST = [
	{imgUrl: slide1},
	{imgUrl: slide2},
	{imgUrl: slide3}
];
