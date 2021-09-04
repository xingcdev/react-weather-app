import React, { useState } from 'react';
import HomePage from './views/Home/HomePage/HomePage';
import DetailsPage from './views/Details/DetailsPage/DetailsPage';
import useWindowWidth from './utils/helpers/useWindowWidth.helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

function App() {
	const isMobile = useWindowWidth() <= 1024;

	return (
		<div className="App text-lg font-mono">
			{isMobile ? (
				<Swiper spaceBetween={50} slidesPerView={1}>
					<SwiperSlide>
						<HomePage />
					</SwiperSlide>
					<SwiperSlide>
						<DetailsPage />
					</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
				</Swiper>
			) : (
				<div className="flex justify-center items-center max-w-screen-xl m-auto">
					<HomePage />
					<DetailsPage />
				</div>
			)}
		</div>
	);
}

export default App;
