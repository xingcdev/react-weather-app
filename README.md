# Weather app

## Table of contents

- [Overview](#overview)
  - [The challenge](#user-stories)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### User stories

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- View informations: city name, temperature, weather infos (snow, heavy rain, etc.)latitude, longitude
- View every 2 hours weather
- View the weather in the next 10 days.
- backgroud animation depending the weather (rain, sun)
- add multiple city
- swipe to see another city's weather

### Screenshot

![](./screenshot.jpg)

## My process

### Built with

- Mobile-first workflow
- React
- Tailwind CSS
- TypeScript
- Day.js
- [Chart.js](https://www.chartjs.org/)
- [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)
- [Chart.js Datalabel plugin](https://chartjs-plugin-datalabels.netlify.app/)
- [React Feather icons](https://github.com/feathericons/react-feather)

### Components

- HomePage
- WeatherHeader
- HourlyForecast ([design](https://dribbble.com/shots/11474539-Weather-App))
- DailyForecast ([design](https://dribbble.com/shots/11474539-Weather-App))

## What I learned

### Setup TypeScript with React

See: [Setup TypeScript with React - React TypeScript CheatSheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)

### OpenWeather API

See: [OpenWeather One Call API docs](https://openweathermap.org/api/one-call-api)

### Day.js

Convert a timestamp (seconds) into hours (e.g 10 PM or 11 AM):

```javascript
dayjs(timestamp * 1000).format('h A');
```

### Make a scrollable chart in React and Tailwind

Create a `ScrollableContainer` component:

```javascript
export default function ScrollableContainer({ children }) {
	return <div className="overflow-x-scroll no-scrollbar">{children}</div>;
}
```

Add a new CSS class `no-scrollbar` in `tailwind.config.js` file. That will hide the scrollbar but keep the scroll functionality.
Notice that we don't use `overflow-x-hidden` class because it'll disable the scroll.

```css
const plugin = require('tailwindcss/plugin');

module.exports = {
	/* ... */
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
```

Create a chart that its width is greater than the container:

```javascript
<ScrollableContainer>
	<LineChart data={chartData} width={1200}>
		...
	</LineChart>
</ScrollableContainer>
```

Source : [How to create scrollable element in Tailwind without a scrollbar - Stack Overflow](https://stackoverflow.com/a/66436651)

## Author

- GitHub - [xingcdev](https://github.com/xingcdev)

## Acknowledgments

[How to Build a Weather Application with React and React Hooks](https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/)

https://objectifsmartphone.fr/wp-content/uploads/2021/06/iOS-15-weather-app.jpg
