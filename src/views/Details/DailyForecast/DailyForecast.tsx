import dayjs from 'dayjs';
import WeatherIcon from '../../../components/WeatherIcon/WeatherIcon';
import { removeDecimal } from '../../../utils/helpers/number.helper';

interface ForecastData {
	time: number;
	dayTemp: number;
	nightTemp: number;
	description: string;
	icon: string;
}

function extractForecastData(data: { [key: string]: any }[]): ForecastData[] {
	const result: ForecastData[] = data.map((singleDay) => {
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

type Props = {
	data: { [key: string]: any }[];
};

const DailyForecast = function (props: Props) {
	const forecastData: ForecastData[] = extractForecastData(props.data);

	return (
		<div>
			<h2>This week</h2>
			<ul className="space-y-4 lg:space-y-2">
				{forecastData.map((singleDay, index) => (
					<li key={index} className="flex justify-center items-center">
						<section className="flex-1">
							<p className="font-bold">
								{index === 0 ? 'Now' : dayjs.unix(singleDay.time).format('ddd')}
							</p>
						</section>

						<section className="flex-1 mr-6">
							<span className="mr-5 text-black font-bold">
								{singleDay.dayTemp}&deg;
							</span>
							<span className="font-bold">{singleDay.nightTemp}&deg;</span>
						</section>

						<section className="flex-2 text-sm">
							<span className="mr-2 font-bold">
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
