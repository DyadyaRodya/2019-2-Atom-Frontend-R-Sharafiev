import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/appHeaderStyles.module.css';

const chatsArrayKey = 'chatsArray';

export default function ChatHeader(props) {
	const { chatId } = useParams();
	const storageChatArray = JSON.parse(localStorage.getItem(chatsArrayKey));
	let companionName = "Companion's name";
	if (storageChatArray !== null) {
		companionName = storageChatArray[chatId].companion;
	}

	return (
		<div className={`${styles.app_header} ${styles.chat_header}`}>
			<Link to="/" className={styles.button}>
				<div className={`${styles.button_backward} ${styles.button}`} />
			</Link>
			<div className={styles.companion}>
				<div className={styles.companion_image}/>
				<div className={styles.companion_info}>
					<span className={styles.companion_name}>{companionName}</span>
					<span className={styles.companion_status}>online</span>
				</div>
			</div>
			<button
					type="button"
					className={`${styles.button_search_chat} ${styles.button}`}
				/>
			<button
					type="button"
					className={`${styles.button_settings} ${styles.button}`}
				/>
		</div>
	);
}