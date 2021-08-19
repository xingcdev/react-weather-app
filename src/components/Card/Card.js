import React from 'react';

const Card = function ({ children }) {
	return (
		<div class="bg-white bg-opacity-25 backdrop-filter backdrop-blur-2xl rounded-2xl mx-3 pt-3 pl-3 pb-3">
			{children}
		</div>
	);
};

export default Card;
