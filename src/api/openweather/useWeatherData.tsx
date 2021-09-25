import React, { useEffect, useState } from 'react';

function useWeatherData(dataType?: string) {
	let apiUrl = `${process.env.REACT_APP_WEATHER_API_URL}onecall?lat=48.856614&lon=2.3522219&units=metric&&exclude=minutely,daily,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
	if (dataType === 'daily') {
		apiUrl = `${process.env.REACT_APP_WEATHER_API_URL}onecall?lat=48.856614&lon=2.3522219&units=metric&&exclude=current,minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
	}

	const [weatherData, setWeatherData] = useState(null);
	useEffect(() => {
		const fetchData = async function () {
			await fetch(apiUrl)
				.then((res) => res.json())
				.then((result) => {
					setWeatherData(result);
				});
		};
		fetchData();
	}, []);

	return weatherData;
}

export default useWeatherData;
