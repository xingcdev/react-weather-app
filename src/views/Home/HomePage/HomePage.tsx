import React, { useEffect, useState } from 'react';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import WeatherHeader from '../WeatherHeader/WeatherHeader';
import useWeatherData from '../../../api/openweather/useWeatherData';

interface WeatherData {
	timezone: string;
	current: {
		weather: [{ id: number }];
	};
	hourly: { [key: string]: any }[];
}

function HomePage() {
	const [backgroundColor, setBackgroundColor] = useState(null);

	const weatherData: WeatherData = useWeatherData();
	console.log(weatherData);

	useEffect(
		() =>
			setBackgroundColor(
				changeBackgroundColor(
					weatherData ? weatherData.current.weather[0].id : 0
				)
			),
		[]
	);
	if (!weatherData) return <p>Loading...</p>;

	return (
		<div
			className={`${backgroundColor} lg:rounded-lg lg:shadow-md lg:col-start-4 lg:col-end-7 lg:row-span-2 `}
		>
			<WeatherHeader city={weatherData.timezone} data={weatherData.current} />
			<HourlyForecast data={weatherData.hourly} />
		</div>
	);
}

function changeBackgroundColor(weatherId: number) {
	let colorCode: string = '#fefefe';
	if (weatherId <= 299) {
		colorCode = 'bg-gradient-to-b from-gray-200 to-gray-400';
	} else if (weatherId <= 399) {
		colorCode = 'bg-gradient-to-b from-gray-200 to-blue-200';
	} else if (weatherId <= 599) {
		colorCode = 'bg-gradient-to-b from-gray-200 to-blue-200';
	} else if (weatherId <= 699) {
		colorCode = 'bg-gradient-to-b from-white to-gray-100';
	} else if (weatherId <= 799) {
		colorCode = 'bg-gradient-to-b from-gray-200 to-yellow-700';
	} else if (weatherId <= 800) {
		colorCode = 'bg-gradient-to-b from-blue-100 to-blue-400';
	} else {
		colorCode = 'bg-gradient-to-b from-gray-50 to-blue-100';
	}
	return colorCode;
}

export default HomePage;
