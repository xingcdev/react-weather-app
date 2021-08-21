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
	const [isLoaded, setIsLoaded] = useState(true);

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
	const [forecastData, setForecastData] = useState<{
		hourly: { [key: string]: any }[];
		daily: { [key: string]: any }[];
	}>({
		hourly: [
			{
				dt: 1628787600,
				temp: 32.55,
				feels_like: 37.11,
				pressure: 1019,
				humidity: 56,
				dew_point: 22.63,
				uvi: 8.71,
				clouds: 1,
				visibility: 10000,
				wind_speed: 3.35,
				wind_deg: 200,
				wind_gust: 3.95,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d',
					},
				],
				pop: 0,
			},
			{
				dt: 1628791200,
				temp: 33.08,
				feels_like: 37.36,
				pressure: 1019,
				humidity: 53,
				dew_point: 22.22,
				uvi: 9.83,
				clouds: 1,
				visibility: 10000,
				wind_speed: 3.13,
				wind_deg: 191,
				wind_gust: 3.31,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n',
					},
				],
				pop: 0,
			},
			{
				dt: 1628794800,
				temp: 34.03,
				feels_like: 37.8,
				pressure: 1018,
				humidity: 48,
				dew_point: 21.47,
				uvi: 9.22,
				clouds: 1,
				visibility: 10000,
				wind_speed: 2.88,
				wind_deg: 184,
				wind_gust: 2.81,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '02d',
					},
				],
				pop: 0,
			},
			{
				dt: 1628798400,
				temp: 35.23,
				feels_like: 38.29,
				pressure: 1017,
				humidity: 42,
				dew_point: 20.38,
				uvi: 7.68,
				clouds: 9,
				visibility: 10000,
				wind_speed: 2.81,
				wind_deg: 172,
				wind_gust: 2.7,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '02n',
					},
				],
				pop: 0,
			},
			{
				dt: 1628802000,
				temp: 36.41,
				feels_like: 38.58,
				pressure: 1016,
				humidity: 36,
				dew_point: 18.94,
				uvi: 5.35,
				clouds: 20,
				visibility: 10000,
				wind_speed: 2.89,
				wind_deg: 162,
				wind_gust: 2.83,
				weather: [
					{
						id: 801,
						main: 'Clouds',
						description: 'few clouds',
						icon: '03d',
					},
				],
				pop: 0,
			},
			{
				dt: 1628805600,
				temp: 37.18,
				feels_like: 38.67,
				pressure: 1015,
				humidity: 32,
				dew_point: 17.81,
				uvi: 2.34,
				clouds: 34,
				visibility: 10000,
				wind_speed: 2.97,
				wind_deg: 153,
				wind_gust: 2.86,
				weather: [
					{
						id: 802,
						main: 'Clouds',
						description: 'scattered clouds',
						icon: '03n',
					},
				],
				pop: 0.01,
			},
			{
				dt: 1628809200,
				temp: 35.73,
				feels_like: 37.65,
				pressure: 1014,
				humidity: 37,
				dew_point: 18.97,
				uvi: 0.96,
				clouds: 33,
				visibility: 10000,
				wind_speed: 3.4,
				wind_deg: 153,
				wind_gust: 3.7,
				weather: [
					{
						id: 802,
						main: 'Clouds',
						description: 'scattered clouds',
						icon: '04d',
					},
				],
				pop: 0.11,
			},
			{
				dt: 1628812800,
				temp: 30.25,
				feels_like: 32.31,
				pressure: 1015,
				humidity: 55,
				dew_point: 20.13,
				uvi: 0.23,
				clouds: 31,
				visibility: 10000,
				wind_speed: 7.26,
				wind_deg: 158,
				wind_gust: 12.31,
				weather: [
					{
						id: 802,
						main: 'Clouds',
						description: 'scattered clouds',
						icon: '09d',
					},
				],
				pop: 0.18,
			},
			{
				dt: 1628816400,
				temp: 27.68,
				feels_like: 28.61,
				pressure: 1015,
				humidity: 56,
				dew_point: 18.15,
				uvi: 0,
				clouds: 60,
				visibility: 10000,
				wind_speed: 5.02,
				wind_deg: 162,
				wind_gust: 11.69,
				weather: [
					{
						id: 803,
						main: 'Clouds',
						description: 'broken clouds',
						icon: '10d',
					},
				],
				pop: 0.18,
			},
			{
				dt: 1628820000,
				temp: 26.85,
				feels_like: 27.34,
				pressure: 1016,
				humidity: 51,
				dew_point: 15.9,
				uvi: 0,
				clouds: 58,
				visibility: 10000,
				wind_speed: 2.86,
				wind_deg: 130,
				wind_gust: 7.85,
				weather: [
					{
						id: 803,
						main: 'Clouds',
						description: 'broken clouds',
						icon: '10n',
					},
				],
				pop: 0.24,
			},
			{
				dt: 1628823600,
				temp: 23.88,
				feels_like: 24.1,
				pressure: 1017,
				humidity: 68,
				dew_point: 17.52,
				uvi: 0,
				clouds: 49,
				visibility: 10000,
				wind_speed: 1.74,
				wind_deg: 112,
				wind_gust: 2.85,
				weather: [
					{
						id: 500,
						main: 'Rain',
						description: 'light rain',
						icon: '11n',
					},
				],
				pop: 0.62,
				rain: {
					'1h': 0.4,
				},
			},
			{
				dt: 1628827200,
				temp: 23.08,
				feels_like: 23.35,
				pressure: 1018,
				humidity: 73,
				dew_point: 18,
				uvi: 0,
				clouds: 43,
				visibility: 10000,
				wind_speed: 2.5,
				wind_deg: 142,
				wind_gust: 4.08,
				weather: [
					{
						id: 500,
						main: 'Rain',
						description: 'light rain',
						icon: '13n',
					},
				],
				pop: 0.44,
				rain: {
					'1h': 0.12,
				},
			},
			{
				dt: 1628830800,
				temp: 23.01,
				feels_like: 23.32,
				pressure: 1018,
				humidity: 75,
				dew_point: 18.29,
				uvi: 0,
				clouds: 35,
				visibility: 10000,
				wind_speed: 2.66,
				wind_deg: 161,
				wind_gust: 4.48,
				weather: [
					{
						id: 500,
						main: 'Rain',
						description: 'light rain',
						icon: '50n',
					},
				],
				pop: 0.42,
				rain: {
					'1h': 0.11,
				},
			},
			{
				dt: 1628834400,
				temp: 22.98,
				feels_like: 23.4,
				pressure: 1017,
				humidity: 79,
				dew_point: 19.3,
				uvi: 0,
				clouds: 29,
				visibility: 10000,
				wind_speed: 3,
				wind_deg: 199,
				wind_gust: 6.48,
				weather: [
					{
						id: 802,
						main: 'Clouds',
						description: 'scattered clouds',
						icon: '23n',
					},
				],
				pop: 0.34,
			},
			{
				dt: 1628838000,
				temp: 23.35,
				feels_like: 23.91,
				pressure: 1017,
				humidity: 83,
				dew_point: 20.33,
				uvi: 0,
				clouds: 2,
				visibility: 10000,
				wind_speed: 2.94,
				wind_deg: 206,
				wind_gust: 7.57,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n',
					},
				],
				pop: 0,
			},
			{
				dt: 1628841600,
				temp: 23.56,
				feels_like: 24.19,
				pressure: 1017,
				humidity: 85,
				dew_point: 20.87,
				uvi: 0,
				clouds: 2,
				visibility: 10000,
				wind_speed: 2.62,
				wind_deg: 206,
				wind_gust: 6.69,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n',
					},
				],
				pop: 0,
			},
			{
				dt: 1628845200,
				temp: 23.34,
				feels_like: 24,
				pressure: 1018,
				humidity: 87,
				dew_point: 21.05,
				uvi: 0,
				clouds: 2,
				visibility: 10000,
				wind_speed: 1.96,
				wind_deg: 188,
				wind_gust: 4.28,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n',
					},
				],
				pop: 0,
			},
			{
				dt: 1628848800,
				temp: 23.08,
				feels_like: 23.77,
				pressure: 1018,
				humidity: 89,
				dew_point: 21.22,
				uvi: 0,
				clouds: 2,
				visibility: 10000,
				wind_speed: 1.66,
				wind_deg: 197,
				wind_gust: 2.53,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n',
					},
				],
				pop: 0,
			},
			{
				dt: 1628852400,
				temp: 23.02,
				feels_like: 23.73,
				pressure: 1018,
				humidity: 90,
				dew_point: 21.33,
				uvi: 0,
				clouds: 3,
				visibility: 10000,
				wind_speed: 1.81,
				wind_deg: 221,
				wind_gust: 2.21,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01n',
					},
				],
				pop: 0,
			},
			{
				dt: 1628856000,
				temp: 23.22,
				feels_like: 23.95,
				pressure: 1019,
				humidity: 90,
				dew_point: 21.57,
				uvi: 0,
				clouds: 3,
				visibility: 10000,
				wind_speed: 2.01,
				wind_deg: 218,
				wind_gust: 3.33,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d',
					},
				],
				pop: 0.12,
			},
			{
				dt: 1628859600,
				temp: 25.17,
				feels_like: 25.91,
				pressure: 1020,
				humidity: 83,
				dew_point: 22.2,
				uvi: 0.54,
				clouds: 3,
				visibility: 10000,
				wind_speed: 1.98,
				wind_deg: 255,
				wind_gust: 4.1,
				weather: [
					{
						id: 500,
						main: 'Rain',
						description: 'light rain',
						icon: '10d',
					},
				],
				pop: 0.34,
				rain: {
					'1h': 0.32,
				},
			},
			{
				dt: 1628863200,
				temp: 27.48,
				feels_like: 30.02,
				pressure: 1020,
				humidity: 73,
				dew_point: 22.37,
				uvi: 1.71,
				clouds: 4,
				visibility: 10000,
				wind_speed: 1.9,
				wind_deg: 254,
				wind_gust: 3.11,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d',
					},
				],
				pop: 0.25,
			},
		],
		daily: [],
	});

	// useEffect(() => {
	// 	const fetchData = async function () {
	// 		await fetch(
	// 			`${process.env.REACT_APP_WEATHER_API_URL}onecall?lat=33.44&lon=-94.04&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
	// 		)
	// 			.then((res) => res.json())
	// 			.then((result) => {
	// 				setForecastData(result);
	// 				console.log(result);
	// 				setIsLoaded(true);
	// 			});
	// 	};

	// 	fetchData();
	// }, []);

	if (!isLoaded) return <p>Loading...</p>;
	else
		return (
			<div>
				<WeatherHeader
					city={weatherData.name}
					temp={weatherData.main.temp}
					description={weatherData.weather[0].description}
					icon={weatherData.weather[0].icon}
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
