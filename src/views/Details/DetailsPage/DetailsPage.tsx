import React from 'react';
import DailyForecast from '../DailyForecast/DailyForecast';

export default function DetailsPage() {
	return (
		<div className="p-4 lg:rounded-lg lg:shadow-md lg:col-start-8 lg:col-end-11">
			<DailyForecast />
		</div>
	);
}
