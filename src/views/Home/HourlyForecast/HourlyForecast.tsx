import React from 'react';
import Card from '../../../components/Card/Card';
import ScrollableContainer from '../../../components/ScrollableContainer/ScrollableContainer';
import { LineChart, Line, YAxis } from 'recharts';
import dayjs from 'dayjs';
import { Camera } from 'react-feather';

interface HourlyWeather {
	hour: string;
	temperature: number;
	icon: number;
}

type Props = {
	data: any[];
};

function CustomLabel(props) {
	const { x, y, index, data } = props;

	return (
		<svg>
			<g transform={`translate(${x - 20 / 2},${y - 70})`}>
				<Camera size="20" />
			</g>
			<g transform={`translate(${x},${y - 25})`}>
				<text fontSize={18} textAnchor="middle">
					{data[index].temperature}
				</text>
				<text dy={60} fontSize={13} textAnchor="middle">
					{data[index].hour}
				</text>
			</g>
		</svg>
	);
}

const HourlyForecast = function ({ data }: Props) {
	const chartData: HourlyWeather[] = computeHourlyForecast(data, 2);

	return (
		<Card>
			<ScrollableContainer>
				<LineChart
					data={chartData}
					width={1200}
					height={300}
					margin={{ top: 100, right: 0, left: 30, bottom: 10 }}
				>
					<Line
						type="linear"
						dataKey="temperature"
						dot={false}
						stroke="#333"
						strokeWidth={1}
						/* @ts-ignore The typings are incorrect */
						label={<CustomLabel data={chartData} />}
					/>
					{/* dataMin - 5 will NOT hide the hours below the line */}
					<YAxis
						hide={true}
						type="number"
						domain={['dataMin - 5', 'dataMax']}
					/>
				</LineChart>
			</ScrollableContainer>
		</Card>
	);
};

const convertToReadableHour = function (timestamp: any) {
	/* JavaScript works in milliseconds, multiplied by 1000 so that the argument is in milliseconds, not seconds. */
	return dayjs(timestamp * 1000).format('h A');
};

function computeHourlyForecast(data: any[], gap: number) {
	let hourlyWeather: HourlyWeather[] = [];

	for (let index = 0; index < data.length; index += gap) {
		const currentWeather = data[index];

		const object = {
			hour: convertToReadableHour(currentWeather.dt),
			temperature: currentWeather.temp,
			icon: currentWeather.weather[0].id,
		};

		hourlyWeather.push(object);
	}
	return hourlyWeather;
}

export default HourlyForecast;
