import React, { useEffect, useState } from 'react';
import WeatherHeader from '../WeatherHeader/WeatherHeader';

function HomePage() {
	const [weatherData, setWeatherData] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const fetchWeather = async function () {
			await fetch(
				`${process.env.REACT_APP_WEATHER_API_URL}weather?q=Paris&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
			)
				.then((res) => res.json())
				.then((result) => {
					setWeatherData(result);
					setIsLoaded(true);
				});
		};

		fetchWeather();
	}, []);

	if (!isLoaded) return <p>Loading...</p>;
	else
		return (
			<WeatherHeader
				city={weatherData.name}
				temp={weatherData.main.temp}
				description={weatherData.weather[0].description}
				lon={weatherData.coord.lon}
				lat={weatherData.coord.lat}
			/>
		);
}

export default HomePage;
