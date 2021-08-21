import {
	WiDaySunny,
	WiMoonFull,
	WiDayCloudy,
	WiNightCloudy,
	WiCloud,
	WiCloudy,
	WiRainWind,
	WiDayRainMix,
	WiNightRainMix,
	WiThunderstorm,
	WiSnowflakeCold,
	WiFog,
} from 'weather-icons-react';

import sun from '../../../assets/WeatherIcons/sun.png';
import moon from '../../../assets/WeatherIcons/moon.png';
import dayCloudy from '../../../assets/WeatherIcons/dayCloudy.png';
import nightCloudy from '../../../assets/WeatherIcons/nightCloudy.png';
import cloud from '../../../assets/WeatherIcons/cloud.png';
import showerRain from '../../../assets/WeatherIcons/showerRain.png';
import dayRain from '../../../assets/WeatherIcons/dayRain.png';
import nightRain from '../../../assets/WeatherIcons/nightRain.png';
import thunderstorm from '../../../assets/WeatherIcons/thunderstorm.png';
import snow from '../../../assets/WeatherIcons/snow.png';

type Props = {
	name: string;
	size: number;
	color?: string;
	is3D?: boolean;
};

export default function WeatherIcon({ name, size, color, is3D }: Props) {
	switch (name) {
		case '01d':
			return is3D ? (
				<img src={sun} alt="3D icon" width={size} />
			) : (
				<WiDaySunny size={size} color={color} />
			);

		case '01n':
			return is3D ? (
				<img src={moon} alt="3D icon" width={size} />
			) : (
				<WiMoonFull size={size} color={color} />
			);

		case '02d':
			return is3D ? (
				<img src={dayCloudy} alt="3D icon" width={size} />
			) : (
				<WiDayCloudy size={size} color={color} />
			);

		case '02n':
			return is3D ? (
				<img src={nightCloudy} alt="3D icon" width={size} />
			) : (
				<WiNightCloudy size={size} color={color} />
			);

		case '03d':
		case '03n':
			return is3D ? (
				<img src={cloud} alt="3D icon" width={size} />
			) : (
				<WiCloud size={size} color={color} />
			);

		case '04d':
		case '04n':
			return is3D ? (
				<img src={cloud} alt="3D icon" width={size} />
			) : (
				<WiCloudy size={size} color={color} />
			);
		case '09d':
		case '09n':
			return is3D ? (
				<img src={showerRain} alt="3D icon" width={size} />
			) : (
				<WiRainWind size={size} color={color} />
			);
		case '10d':
			return is3D ? (
				<img src={dayRain} alt="3D icon" width={size} />
			) : (
				<WiDayRainMix size={size} color={color} />
			);

		case '10n':
			return is3D ? (
				<img src={nightRain} alt="3D icon" width={size} />
			) : (
				<WiNightRainMix size={size} color={color} />
			);
		case '11d':
		case '11n':
			return is3D ? (
				<img src={thunderstorm} alt="3D icon" width={size} />
			) : (
				<WiThunderstorm size={size} color={color} />
			);
		case '13d':
		case '13n':
			return is3D ? (
				<img src={snow} alt="3D icon" width={size} />
			) : (
				<WiSnowflakeCold size={size} color={color} />
			);
		case '50d':
		case '50n':
			return is3D ? (
				<img src={cloud} alt="3D icon" width={size} />
			) : (
				<WiFog size={size} color={color} />
			);
		default:
			return null;
	}
}
