import React from 'react';
import styles from '../styles/appHeaderStyles.module.css';

export default function ChatListHeader(props) {
	return (
		<div className={styles.app_header}>
			<button
				type="button"
				className={`${styles.button_menu} ${styles.button}`}
			/>
			<span className={styles.header}>Сообщения</span>
		</div>
	);
}