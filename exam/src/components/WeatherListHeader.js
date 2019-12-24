import React from 'react';
import styles from '../styles/appHeaderStyles.module.css';

export default function WeatherListHeader(props) {
	return (
		<div className={styles.app_header}>
			<button
				type="button"
				className={`${styles.button_backward} ${styles.button}`}
			/>
			<span className={styles.header}>Manage cities</span>
			<button
				type="button"
				className={`${styles.button_settings} ${styles.button}`}
			/>
		</div>
	);
}
