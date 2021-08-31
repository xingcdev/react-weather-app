import { Swiper, SwiperSlide } from 'swiper/react';

export default function ScrollableContainer(props) {
	return (
		<Swiper
			slidesPerView={'auto'}
			freeMode={true}
			// Prevent the whole page to be swiped
			touchMoveStopPropagation={true}
		>
			{/* The width is the chart's */}
			<SwiperSlide style={{ width: '1200px' }}>{props.children}</SwiperSlide>
		</Swiper>
	);
}
