const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		// Extend the default color palette rather than override it,
		extend: {
			colors: {
				text: colors.gray,
				subText: '#D4D4D8',
				background: '#fefefe',
				gray: '#F9FAFB',
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
