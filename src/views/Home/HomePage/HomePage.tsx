import React, { useEffect, useState } from 'react';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import WeatherHeader from '../WeatherHeader/WeatherHeader';

function HomePage() {
	// TO REMOVE
	const testData = {
		coord: {
			lon: -122.08,
			lat: 37.39,
		},
		weather: [
			{
				id: 800,
				main: 'Clear',
				description: 'clear sky',
				icon: '01d',
			},
		],
		base: 'stations',
		main: {
			temp: 282.55,
			feels_like: 281.86,
			temp_min: 280.37,
			temp_max: 284.26,
			pressure: 1023,
			humidity: 100,
		},
		visibility: 16093,
		wind: {
			speed: 1.5,
			deg: 350,
		},
		clouds: {
			all: 1,
		},
		dt: 1560350645,
		sys: {
			type: 1,
			id: 5122,
			message: 0.0139,
			country: 'US',
			sunrise: 1560343627,
			sunset: 1560396563,
		},
		timezone: -25200,
		id: 420006353,
		name: 'Mountain View',
		cod: 200,
	};

	const [weatherData, setWeatherData] = useState(testData);
	const [isLoaded, setIsLoaded] = useState(false);

	// useEffect(() => {
	// 	const fetchWeather = async function () {
	// 		await fetch(
	// 			`${process.env.REACT_APP_WEATHER_API_URL}weather?q=Paris&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
	// 		)
	// 			.then((res) => res.json())
	// 			.then((result) => {
	// 				setWeatherData(result);
	// 				setIsLoaded(true);
	// 			});
	// 	};

	// 	fetchWeather();
	// }, []);
	type DataFormat = { hourly: []; daily: [] };
	const [forecastData, setForecastData] = useState<DataFormat>({
		hourly: [],
		daily: [],
	});
	useEffect(() => {
		const fetchData = async function () {
			await fetch(
				`${process.env.REACT_APP_WEATHER_API_URL}onecall?lat=33.44&lon=-94.04&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
			)
				.then((res) => res.json())
				.then((result) => {
					setForecastData(result);
					console.log(result);
					setIsLoaded(true);
				});
		};

		fetchData();
	}, []);

	if (!isLoaded) return <p>Loading...</p>;
	else
		return (
			<div>
				<WeatherHeader
					city={weatherData.name}
					temp={weatherData.main.temp}
					description={weatherData.weather[0].description}
					lon={weatherData.coord.lon}
					lat={weatherData.coord.lat}
				/>
				<HourlyForecast data={forecastData.hourly} />
			</div>
		);
}

const useHourlyData = function () {
	const [data, setData] = useState({});

	return data;
};

export default HomePage;
