import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/chatElemStyles.module.css';

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

export default function ChatElement(props) {
	return (
		<Link to={`/chat_id=${props.id}`} className={styles.chat_elem}>
			<div className={styles.companion_img}/>
			<div className={styles.text_info}>
				<div className={styles.message_preview}>
					<span className={styles.companion_name}>{props.companionName}</span>
				</div>
				<div className={styles.lastmessage_info}>
					<p className={styles.lastmessage_text}>
						{props.lastmessageText}
					</p>
					<span className={styles.lastmessage_time}>
						{props.lastmessageTime}
					</span>
					<div className={styles.indicator}>
						{indicateArray[props.indicator]}
					</div>
				</div>
			</div>
		</Link>
	);
}

ChatElement.propTypes = {
	id: PropTypes.number.isRequired,
	indicator: PropTypes.number.isRequired,
	lastmessageText: PropTypes.string.isRequired,
	lastmessageTime: PropTypes.string.isRequired,
	companionName: PropTypes.string.isRequired,
};
