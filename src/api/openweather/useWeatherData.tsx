import React, { useEffect, useState } from 'react';

function useWeatherData() {
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		const fetchData = async function () {
			await fetch(
				`${process.env.REACT_APP_WEATHER_API_URL}onecall?lat=48.856614&lon=2.3522219&units=metric&&exclude=minutely,daily,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
			)
				.then((res) => res.json())
				.then((result) => {
					setWeatherData(result);
					console.log(result);
				});
		};
		fetchData();
	}, []);

	return weatherData;
}

export default useWeatherData;
