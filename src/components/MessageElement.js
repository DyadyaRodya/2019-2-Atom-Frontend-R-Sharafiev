import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/messageElemStyles.module.css';

const indicateArray = ['', '', ''];
indicateArray[0] = (
	<div
		className={styles.sending}
	/>
);
indicateArray[1] = (
	<div
		className={styles.sent}
	/>
);
indicateArray[2] = (
	<div
		className={styles.read}
	/>
);

export default function MessageElement(props) {
	return (
		<div className={`${styles.message_element} ${styles[props.position]}`}>
			<div className={styles.message_text}>{props.messageText}</div>
			<div className={styles.message_info}>
				<span className={styles.message_time}>{props.messageTime}</span>
				<div className={styles.mes_indicator}>
					{indicateArray[props.indicator]}
				</div>
			</div>
		</div>
	);
}

MessageElement.propTypes = {
	messageText: PropTypes.string.isRequired,
	messageTime: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	indicator: PropTypes.number.isRequired,
};
