import React, { useEffect, useState } from 'react';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import WeatherHeader from '../WeatherHeader/WeatherHeader';

interface Data {
	dt: number;
	temp?: number;
	weather?: [
		{
			id: number;
		}
	];
}

function HomePage() {
	const [backgroundColor, setBackgroundColor] = useState(
		'bg-gradient-to-b from-blue-100 to-blue-400'
	);

	const [weatherData, setWeatherData] = useState({
		timezone: '',
		current: {
			weather: [
				{
					id: 0,
				},
			],
		},
		hourly: [],
	});
	const [isLoaded, setIsLoaded] = useState(true);
	useEffect(() => {
		const fetchData = async function () {
			await fetch(
				`${process.env.REACT_APP_WEATHER_API_URL}onecall?lat=48.856614&lon=2.3522219&units=metric&&exclude=minutely,daily,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
			)
				.then((res) => res.json())
				.then((result) => {
					setWeatherData(result);
					console.log(result);
					setIsLoaded(true);
					setBackgroundColor(
						changeBackgroundColor(weatherData.current.weather[0].id)
					);
				});
		};

		fetchData();
	}, []);

	if (!isLoaded) return <p>Loading...</p>;
	else
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
