import WeatherIcon from '../../../components/WeatherIcon/WeatherIcon';

type Props = {
	city: string;
	temp: number;
	description: string;
	icon: string;
};

function WeatherHeader(props: Props) {
	return (
		<div className=" text-2xl p-3">
			<h1 className="text-left text-3xl">{props.city}</h1>
			<main className="p-4 flex flex-col justify-center items-center p-12">
				<WeatherIcon name={props.icon} size={220} is3D={true} />
				<p className="text-6xl">{props.temp}&deg;</p>
				<p className="">{props.description}</p>
			</main>
		</div>
	);
}

export default WeatherHeader;
