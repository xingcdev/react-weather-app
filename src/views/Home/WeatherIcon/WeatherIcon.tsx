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

type Props = {
	name: string;
	size: number;
	color: string;
};

export default function WeatherIcon({ name, size, color }: Props) {
	switch (name) {
		case '01d':
			return <WiDaySunny size={size} color={color} />;

		case '01n':
			return <WiMoonFull size={size} color={color} />;

		case '02d':
			return <WiDayCloudy size={size} color={color} />;

		case '02n':
			return <WiNightCloudy size={size} color={color} />;

		case '03d':
		case '03n':
			return <WiCloud size={size} color={color} />;

		case '04d':
		case '04n':
			return <WiCloudy size={size} color={color} />;
		case '09d':
		case '09n':
			return <WiRainWind size={size} color={color} />;
		case '10d':
			return <WiDayRainMix size={size} color={color} />;

		case '10n':
			return <WiNightRainMix size={size} color={color} />;
		case '11d':
		case '11n':
			return <WiThunderstorm size={size} color={color} />;
		case '13d':
		case '13n':
			return <WiSnowflakeCold size={size} color={color} />;
		case '50d':
		case '50n':
			return <WiFog size={size} color={color} />;
		default:
			return null;
	}
}
