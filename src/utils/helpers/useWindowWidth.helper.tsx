import React, { useState, useEffect } from 'react';

export default function useWindowWidth(): number {
	// if (typeof window !== 'undefined') {
	// 	return 1200;
	// }

	function changeWindowWidth(): void {
		setWidth(window.innerWidth);
	}

	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		window.addEventListener('resize', changeWindowWidth);

		return () => window.removeEventListener('resize', changeWindowWidth);
	}, []);

	return width;
}
