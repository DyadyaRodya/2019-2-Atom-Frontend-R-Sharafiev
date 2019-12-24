import React from 'react';
import WeatherList from '../components/WeatherList';

import '../styles/globalStyles.css';


import WeatherListHeader from '../components/WeatherListHeader';


export default class AppContainer extends React.Component {
	
	render() {
		return (
			<div className="main-window">
				<WeatherListHeader />
				<WeatherList />
			</div>
		);
	}
}
