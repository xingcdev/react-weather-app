import React from 'react';
import DailyForecast from '../DailyForecast/DailyForecast';
import useWeatherData from '../../../api/openweather/useWeatherData';

interface WeatherData {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	daily: { [key: string]: any }[];
}

export default function DetailsPage() {
	const weatherData: WeatherData = useWeatherData('daily');
	console.log(weatherData);

	if (!weatherData) return <p>Loading...</p>;

	return (
		<div className="p-4 lg:rounded-lg lg:shadow-md lg:col-start-8 lg:col-end-12">
			<DailyForecast data={weatherData.daily} />
		</div>
	);
}
