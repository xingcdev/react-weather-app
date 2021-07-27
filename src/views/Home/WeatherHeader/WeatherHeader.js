function WeatherHeader({ city, temp, description, lon, lat }) {
	return (
		<div className="text-center text-2xl p-16 space-y-2">
			<h1 className="text-5xl">{city}</h1>
			<p className="text-7xl">{temp}&deg;</p>
			<p className="">{description}</p>
			<p>
				L:{lon} H:{lat}
			</p>
		</div>
	);
}

export default WeatherHeader;
