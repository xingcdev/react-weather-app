import dayjs from 'dayjs';
import WeatherIcon from '../../../components/WeatherIcon/WeatherIcon';
import { removeDecimal } from '../../../utils/helpers/number.helper';

interface ApiData {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	daily: { [key: string]: any }[];
}

interface ForecastData {
	time: number;
	dayTemp: number;
	nightTemp: number;
	description: string;
	icon: string;
}

function extractDataFromApi(apiData: ApiData): ForecastData[] {
	const result: ForecastData[] = apiData.daily.map((singleDay) => {
		return {
			time: singleDay.dt,
			dayTemp: removeDecimal(singleDay.temp.day),
			nightTemp: removeDecimal(singleDay.temp.night),
			description: singleDay.weather[0].description,
			icon: singleDay.weather[0].icon,
		};
	});
	return result;
}

const DailyForecast = function () {
	const APIData: ApiData = {
		lat: 33.44,
		lon: 37.39,
		timezone: 'Asia/Damascus',
		timezone_offset: 10800,
		daily: [
			{
				dt: 1631350800,
				sunrise: 1631329877,
				sunset: 1631374993,
				moonrise: 1631346120,
				moonset: 1631385480,
				moon_phase: 0.16,
				temp: {
					day: 29.14,
					min: 18.81,
					max: 30.31,
					night: 20.75,
					eve: 29.29,
					morn: 18.81,
				},
				feels_like: {
					day: 27.83,
					night: 20.45,
					eve: 27.9,
					morn: 18.68,
				},
				pressure: 1009,
				humidity: 27,
				dew_point: 8.25,
				wind_speed: 8.48,
				wind_deg: 243,
				wind_gust: 11.49,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d',
					},
				],
				clouds: 0,
				pop: 0,
				uvi: 8.36,
			},
			{
				dt: 1631437200,
				sunrise: 1631416316,
				sunset: 1631461311,
				moonrise: 1631436720,
				moonset: 1631474340,
				moon_phase: 0.2,
				temp: {
					day: 27.2,
					min: 17.74,
					max: 30.62,
					night: 21.8,
					eve: 29.72,
					morn: 17.74,
				},
				feels_like: {
					day: 26.81,
					night: 21.71,
					eve: 28.12,
					morn: 17.71,
				},
				pressure: 1009,
				humidity: 36,
				dew_point: 10.85,
				wind_speed: 6.89,
				wind_deg: 256,
				wind_gust: 10.22,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d',
					},
				],
				clouds: 0,
				pop: 0,
				uvi: 8.56,
			},
			{
				dt: 1631523600,
				sunrise: 1631502755,
				sunset: 1631547628,
				moonrise: 1631527320,
				moonset: 1631563680,
				moon_phase: 0.25,
				temp: {
					day: 27.68,
					min: 17.97,
					max: 31.81,
					night: 23.25,
					eve: 30.76,
					morn: 17.97,
				},
				feels_like: {
					day: 27.16,
					night: 22.73,
					eve: 28.81,
					morn: 18.04,
				},
				pressure: 1009,
				humidity: 36,
				dew_point: 11.25,
				wind_speed: 6.34,
				wind_deg: 257,
				wind_gust: 10.33,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d',
					},
				],
				clouds: 0,
				pop: 0,
				uvi: 8.43,
			},
			{
				dt: 1631610000,
				sunrise: 1631589194,
				sunset: 1631633944,
				moonrise: 1631617740,
				moonset: 0,
				moon_phase: 0.27,
				temp: {
					day: 30.24,
					min: 19.25,
					max: 33.03,
					night: 27,
					eve: 31.42,
					morn: 19.25,
				},
				feels_like: {
					day: 28.4,
					night: 26.5,
					eve: 29.41,
					morn: 18.67,
				},
				pressure: 1010,
				humidity: 19,
				dew_point: 4.25,
				wind_speed: 7.21,
				wind_deg: 264,
				wind_gust: 10.8,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d',
					},
				],
				clouds: 0,
				pop: 0,
				uvi: 8.33,
			},
			{
				dt: 1631696400,
				sunrise: 1631675633,
				sunset: 1631720261,
				moonrise: 1631707860,
				moonset: 1631653380,
				moon_phase: 0.3,
				temp: {
					day: 30.13,
					min: 19.2,
					max: 32.78,
					night: 25.36,
					eve: 30.48,
					morn: 19.2,
				},
				feels_like: {
					day: 28.38,
					night: 24.66,
					eve: 28.6,
					morn: 18.79,
				},
				pressure: 1012,
				humidity: 21,
				dew_point: 5.2,
				wind_speed: 6.9,
				wind_deg: 262,
				wind_gust: 12.01,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d',
					},
				],
				clouds: 0,
				pop: 0,
				uvi: 8.36,
			},
			{
				dt: 1631782800,
				sunrise: 1631762073,
				sunset: 1631806578,
				moonrise: 1631797500,
				moonset: 1631743500,
				moon_phase: 0.34,
				temp: {
					day: 29.62,
					min: 19.97,
					max: 31.55,
					night: 25.05,
					eve: 30.6,
					morn: 19.97,
				},
				feels_like: {
					day: 28.04,
					night: 24.81,
					eve: 29.03,
					morn: 19.22,
				},
				pressure: 1010,
				humidity: 23,
				dew_point: 6.42,
				wind_speed: 7.99,
				wind_deg: 265,
				wind_gust: 12.07,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d',
					},
				],
				clouds: 0,
				pop: 0,
				uvi: 9,
			},
			{
				dt: 1631869200,
				sunrise: 1631848512,
				sunset: 1631892894,
				moonrise: 1631886660,
				moonset: 1631833800,
				moon_phase: 0.38,
				temp: {
					day: 27.74,
					min: 18.7,
					max: 30.93,
					night: 24.53,
					eve: 30.18,
					morn: 18.7,
				},
				feels_like: {
					day: 26.95,
					night: 24.03,
					eve: 28.42,
					morn: 18.69,
				},
				pressure: 1009,
				humidity: 31,
				dew_point: 9.28,
				wind_speed: 5.58,
				wind_deg: 276,
				wind_gust: 9.75,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d',
					},
				],
				clouds: 0,
				pop: 0,
				uvi: 9,
			},
			{
				dt: 1631955600,
				sunrise: 1631934951,
				sunset: 1631979210,
				moonrise: 1631975460,
				moonset: 1631924220,
				moon_phase: 0.41,
				temp: {
					day: 29.13,
					min: 19.07,
					max: 31.85,
					night: 26.48,
					eve: 31.07,
					morn: 19.07,
				},
				feels_like: {
					day: 27.77,
					night: 26.48,
					eve: 29.04,
					morn: 18.68,
				},
				pressure: 1009,
				humidity: 26,
				dew_point: 7.86,
				wind_speed: 4.3,
				wind_deg: 299,
				wind_gust: 6.37,
				weather: [
					{
						id: 800,
						main: 'Clear',
						description: 'clear sky',
						icon: '01d',
					},
				],
				clouds: 0,
				pop: 0,
				uvi: 9,
			},
		],
	};

	const forecastData: ForecastData[] = extractDataFromApi(APIData);
	return (
		<div>
			<h2>This week</h2>
			<ul className="space-y-4 lg:space-y-2">
				{forecastData.map((singleDay, index) => (
					<li key={index} className="flex justify-between items-center">
						<p className="font-bold">
							{index === 0 ? 'Now' : dayjs.unix(singleDay.time).format('ddd')}
						</p>
						<section>
							<span className="mr-5 text-black font-bold">
								{singleDay.dayTemp}&deg;
							</span>
							<span className="font-bold">{singleDay.nightTemp}&deg;</span>
						</section>

						<section>
							<span className="mr-4 font-bold">
								{<WeatherIcon name={singleDay.icon} size={32} color="#333" />}
							</span>

							<span className="text-gray-700">{singleDay.description}</span>
						</section>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DailyForecast;
