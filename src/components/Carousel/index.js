import React, { useRef } from 'react';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Button, Carousel } from 'antd';
import classNames from "classnames";

import Paragraph from 'components/Paragraph';
import { PARAGRAPH_ADVERT_SERVICE } from 'utils/constant';
import './style.css';

const CarouselCustom = (props) => {
	const { dataList, autoplay, dots, className, ...rest } = props;
	const carouselRef = useRef();

	const onChangeSlide = (direction) => {
		const { current } = carouselRef;
		if (current) {
			direction === 'prev' ? current.prev() : current.next();
		}
	}

	return (
		<div className={classNames('carousel-container', className)}>
			<Carousel
				ref={carouselRef}
				autoplay={autoplay}
				dots={false}
				{...rest}
			>
				{
					(dataList || []).map((item, index) => (
						<div className="carousel-item" key={`img_${index}`}>
							<img className="carousel-item-img" src={item.imgUrl} alt={`Slide ${index}`} />
						</div>
					))
				}
			</Carousel>

			{/* Custom prev, next btn */}
			<Button
				className='arrow-btn left-arrow'
				onClick={() => onChangeSlide('prev')}
				icon={<DoubleLeftOutlined style={{ fontSize: 20 }} />}
			/>
			<Button
				className='arrow-btn right-arrow'
				onClick={() => onChangeSlide('next')}
				icon={<DoubleRightOutlined style={{ fontSize: 20 }} />}
			/>

			<div className='center-content'>
				<Paragraph
					className='paragraph-advert'
					levelTitle={2}
					data={PARAGRAPH_ADVERT_SERVICE}
				/>
			</div>
		</div>
	)
}

export default CarouselCustom;
