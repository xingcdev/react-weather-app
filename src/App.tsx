import React, { useEffect, useState } from 'react';
import HomePage from './views/Home/HomePage/HomePage';
import DetailsPage from './views/Details/DetailsPage/DetailsPage';
import useWindowWidth from './utils/helpers/useWindowWidth.helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import '@fontsource/merriweather-sans/300.css';

function App() {
	const isMobile = useWindowWidth() <= 1024;

	return (
		<div className="App text-lg lg:text-sm font-sans text-gray-500">
			{isMobile ? (
				<Swiper spaceBetween={50} slidesPerView={1}>
					<SwiperSlide>
						<HomePage />
					</SwiperSlide>
					<SwiperSlide>
						<DetailsPage />
					</SwiperSlide>
				</Swiper>
			) : (
				<div className="pt-4 grid grid-cols-12">
					<HomePage />
					<DetailsPage />
				</div>
			)}
		</div>
	);
}

export default App;
