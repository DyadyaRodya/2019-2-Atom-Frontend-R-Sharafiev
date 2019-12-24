import React, { useState } from 'react';
import WeatherElement from './WeatherElement';
import styles from '../styles/chatListStyles.module.css';


export default function WeatherList(props) {
	let WeatherCounter = 0;
	let Weathers = [
		<WeatherElement cityName="Moscow"></WeatherElement>
	];
	function handleCreateWeather(){
		WeatherCounter+=1;
	}
	return (
		<div
			
			className={styles.Weathers_list}
		>
			{Weathers}
			<button
				type="button"
				className={styles.create_chat}
				onClick={handleCreateWeather}
			/>
		</div>
	);
}
