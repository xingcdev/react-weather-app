import React from 'react';
import DailyForecast from '../DailyForecast/DailyForecast';
import useWeatherData from '../../../api/openweather/useWeatherData';

interface WeatherData {
	daily: { [key: string]: any }[];
}

export default function DetailsPage() {
	const weatherData: WeatherData = useWeatherData('daily');
	console.log(weatherData);

	if (!weatherData) return <p>Loading...</p>;

	return (
		<div className="p-4 lg:rounded-lg lg:shadow-md lg:col-start-8 lg:col-end-11">
			<DailyForecast />
		</div>
	);
}
