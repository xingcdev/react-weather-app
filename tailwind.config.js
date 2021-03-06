const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Merriweather Sans', 'sans-serif'],
		},
		// Extend the default color palette rather than override it,
		extend: {
			colors: {
				subText: '#D4D4D8',
				background: '#fefefe',
				card: '#F9FAFB',
			},
			flex: {
				2: '1 0 30%',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				'.no-scrollbar::-webkit-scrollbar': {
					display: 'none' /* Chrome */,
				},
				'.no-scrollbar': {
					'-ms-overflow-style': 'none' /* IE and Edge */,
					scrollbarWidth: 'none' /* Firefox */,
				},
			};

			addUtilities(newUtilities);
		}),
	],
};
