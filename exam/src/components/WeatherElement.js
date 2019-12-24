import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/chatElemStyles.module.css';


export default function WeatherElement(props) {
	return (
		<div className={styles.chat_elem}>
			<div className={styles.companion_img}/>
			<div className={styles.text_info}>
				<div className={styles.message_preview}>
					<span className={styles.companion_name}>{props.cityName}</span>
				</div>
				<div className={styles.lastmessage_info}>
					<p className={styles.lastmessage_text}>
						{}
					</p>
					<span className={styles.lastmessage_time}>
						{}
					</span>
					<div className={styles.indicator}>
						{}
					</div>
				</div>
			</div>
		</div>
	);
}

WeatherElement.propTypes = {
	id: PropTypes.number.isRequired,
	cityName: PropTypes.string.isRequired,
};
