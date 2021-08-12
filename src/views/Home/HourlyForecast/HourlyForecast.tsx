import React from 'react';
import Card from '../../../components/Card/Card';
import { Chart, Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

type Props = {
	data: any[];
};

const HourlyForecast = function ({ data }: Props) {
	Chart.register(ChartDataLabels);
	const temperatures: number[] = data.map((weather) => weather.temp);
	console.log(temperatures);

	const times: string[] = data.map((weather) =>
		convertToReadableDate(weather.dt).getHours().toString()
	);
	console.log(times);

	const chartData = {
		labels: times,
		datasets: [
			{
				data: temperatures,
				fill: false,
				// backgroundColor: 'rgb(255, 255, 255)',
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
			},
		},
		scales: {
			x: {
				display: false,
			},
			y: { display: false },
		},
	};

	const list = data.map((weather) => (
		<li>
			<p>{convertToReadableDate(weather.dt).getHours()} AM</p>
			<p>{weather.temp}&deg;</p>
		</li>
	));
	return (
		<Card>
			<Line data={chartData} width={3000} options={options} />
		</Card>
	);
};

const convertToReadableDate = function (timestamp: any) {
	/* JavaScript works in milliseconds, multiplied by 1000 so that the argument is in milliseconds, not seconds. */
	return new Date(timestamp * 1000);
};

export default HourlyForecast;
