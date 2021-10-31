import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { setConstantValue } from 'typescript';
import { useConvertToCoord } from '../../../api/openweather/useWeatherData';

interface Props {
	updateCoord: Dispatch<SetStateAction<{}>>;
}

function Search(props: Props) {
	const [value, setValue] = useState('');
	const [cityName, setCityName] = useState('');
	useEffect(() => {
		async function fetchCoordinates() {
			const coord = useConvertToCoord(value);
			console.log(coord);
		}
		fetchCoordinates();
	}, [cityName]);

	const onSubmit = (event) => {
		event.preventDefault();
		setCityName(value);
	};
	return (
		<form className="my-3 flex justify-center" onSubmit={onSubmit}>
			<input
				className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				type="text"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
		</form>
	);
}

export default Search;
