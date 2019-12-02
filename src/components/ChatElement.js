import React from 'react';
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
		<div
			id={props.id}
			className={styles.chat_elem}
			role="button"
			onClick={props.onClickFunc}
		>
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
		</div>
	);
}

ChatElement.propTypes = {
	onClickFunc: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	indicator: PropTypes.number.isRequired,
	lastmessageText: PropTypes.string.isRequired,
	lastmessageTime: PropTypes.string.isRequired,
	companionName: PropTypes.string.isRequired,
};
