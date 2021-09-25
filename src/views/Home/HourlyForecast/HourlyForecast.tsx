import React from 'react';
import Card from '../../../components/Card/Card';
import ScrollableContainer from '../../../components/ScrollableContainer/ScrollableContainer';
import { LineChart, Line, YAxis } from 'recharts';
import dayjs from 'dayjs';
import WeatherIcon from '../../../components/WeatherIcon/WeatherIcon';

interface ChartData {
	hour: string;
	temperature: number;
	icon: string;
}

function CustomLabel(props) {
	const { x, y, index, data } = props;
	const iconSize = 32;
	return (
		<svg>
			<g transform={`translate(${x - iconSize / 2},${y - 65})`}>
				<WeatherIcon name={data[index].icon} size={iconSize} color="#333" />
			</g>
			<g transform={`translate(${x},${y - 15})`}>
				<text fontSize={15} textAnchor="middle">
					{data[index].temperature}
				</text>
				<text dy={40} fill="#6B7280" fontSize={12} textAnchor="middle">
					{data[index].hour}
				</text>
			</g>
		</svg>
	);
}

type Props = {
	data: any[];
};

const HourlyForecast = function (props: Props) {
	let chartData: ChartData[] = convertTo24Hours(props.data);
	chartData = computeHourlyForecast(chartData, 2);

	return (
		<Card>
			<h2>Today</h2>
			<ScrollableContainer>
				<LineChart
					data={chartData}
					width={1200}
					height={143}
					margin={{ top: 70, right: 23, left: 20, bottom: 0 }}
				>
					<Line
						type="linear"
						dataKey="temperature"
						dot={false}
						stroke="#333"
						strokeWidth={1}
						isAnimationActive={false}
						/* @ts-ignore The typings are incorrect */
						label={<CustomLabel data={chartData} />}
					/>
					{/* dataMin - 5 will NOT hide the hours below the line */}
					<YAxis
						hide={true}
						type="number"
						allowDataOverflow={true}
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

// The default hourly data contains 48 elements.
function convertTo24Hours(data: any[]) {
	return data.slice(0, 24);
}

function computeHourlyForecast(data: any[], gap: number) {
	let hourlyWeather: ChartData[] = [];

	for (let index = 0; index < data.length; index += gap) {
		const currentWeather = data[index];

		const object = {
			hour: convertToReadableHour(currentWeather.dt),
			temperature: currentWeather.temp,
			icon: currentWeather.weather[0].icon,
		};

		hourlyWeather.push(object);
	}
	return hourlyWeather;
}

export default HourlyForecast;
