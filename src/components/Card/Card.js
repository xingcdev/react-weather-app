import React from 'react';

const Card = function ({ children }) {
	return (
		<div class="rounded-lg backdrop-filter backdrop-blur-lg">{children}</div>
	);
};

export default Card;
