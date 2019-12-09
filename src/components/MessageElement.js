import React, { useEffect } from 'react';
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

function MessageContent(props) {
	let content = <div />;

	if (props.contentType === 'text') {
		const re = /(https:\/\/\S+[^\s.,> )\];'"!?])/;
		const parts = props.messageContent.split(re);

		for (let i = 1; i < parts.length; i += 2) {
			parts[i] = (
				<a
					className={styles.link}
					key={`link${i}`}
					target="_blank"
					rel="noopener noreferrer"
					href={parts[i]}
				>
					{parts[i]}
				</a>
			);
		}

		content = <div className={styles.message_text}>{parts}</div>;
	} else if (props.contentType === 'img') {
		content = (
			<img
				className={styles.image}
				src={props.messageContent}
				alt='Изображение не отображается'
				onLoad={() => {
					message.current.scrollIntoView();
					window.URL.revokeObjectURL(props.messageContent);
				}}
			/>
		);
	} else if (props.contentType === 'audio') {
		content = (
			// eslint-disable-next-line jsx-a11y/media-has-caption
			<audio
				src={props.messageContent}
				controls
				onLoad={() => {
					window.URL.revokeObjectURL(props.messageContent);
				}}
			/>
		);
	}

	return content;
}

const message = React.createRef();

export default function MessageElement(props) {

	useEffect(() => {
		message.current.scrollIntoView();
	});

	return (
		<div
			ref={message}
			className={`${styles.message_element} ${styles[props.position]}`}
		>
			<MessageContent
				messageContent={props.messageContent}
				contentType={props.contentType}
			/>
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
	messageContent: PropTypes.string.isRequired,
	contentType: PropTypes.string.isRequired,
	messageTime: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	indicator: PropTypes.number.isRequired,
};
