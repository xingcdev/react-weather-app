import React from 'react';
import Card from '../../../components/Card/Card';
import { Chart, Line } from 'react-chartjs-2';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import dayjs from 'dayjs';

type Props = {
	data: any[];
};

const HourlyForecast = function ({ data }: Props) {
	Chart.register(ChartDataLabels);
	const temperatures: number[] = data.map((weather) => weather.temp);
	console.log(temperatures);

	const times: string[] = data.map((weather) =>
		convertToReadableHour(weather.dt)
	);
	console.log(times);

	const chartData = {
		labels: times,
		datasets: [
			{
				data: temperatures,
				fill: false,
				borderColor: '#333',
				borderWidth: 1,
				pointRadius: 0,
				tension: 0,
				datalabels: {
					align: 'top',
					anchor: 'end',
				},
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		responsive: false,
		plugins: {
			legend: {
				display: false,
			},
			datalabels: {
				display: true,
				color: '#333',
				labels: {
					temperature: {
						align: 'top',
						offset: 20,
						font: {
							weight: 'bold',
						},
					},
					time: {
						align: 'bottom',
						offset: 10,
						color: 'grey',
						formatter: (currentValue: any, context: Context) =>
							context.chart.data.labels[context.dataIndex],
					},
				},
			},
		},
		scales: {
			x: {
				display: false,
			},
			y: { display: false },
		},
	};

	return (
		<Card>
			<Line data={chartData} width={3000} options={options} />
		</Card>
	);
};

const convertToReadableHour = function (timestamp: any) {
	/* JavaScript works in milliseconds, multiplied by 1000 so that the argument is in milliseconds, not seconds. */
	return dayjs(timestamp * 1000).format('h A');
};

export default HourlyForecast;
