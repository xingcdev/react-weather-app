import { AnyMxRecord } from 'node:dns';
import WeatherIcon from '../../../components/WeatherIcon/WeatherIcon';

type Props = {
	city: string;
	data: { [key: string]: any };
};

function WeatherHeader(props: Props) {
	return (
		<div className="p-3">
			<h1 className="text-left">{props.city}</h1>
			<main className="p-4 flex flex-col justify-center items-center p-12">
				<WeatherIcon name={props.data.weather[0].icon} size={220} is3D={true} />
				<p className="text-6xl lg:text-3xl text-gray-800">
					{props.data.temp}&deg;
				</p>
				<p className="">{props.data.weather[0].description}</p>
			</main>
		</div>
	);
}

export default WeatherHeader;
