import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/appHeaderStyles.module.css';

export default function AppHeader(props) {
	const displayArray = [{ display: 'flex' }, { display: 'none' }];
	return (
		<div className={styles.app_header}>
			<div
				className={styles.chatlist_header}
				style={displayArray[props.isChatOpen]}
			>
				<button
					type="button"
					className={`${styles.button_menu} ${styles.button}`}
				/>
				<span className={styles.header}>Сообщения</span>
			</div>
			<div
				className={styles.chat_header}
				style={displayArray[(props.isChatOpen + 1) % 2]}
			>
				<button
					type="button"
					className={`${styles.button_backward} ${styles.button}`}
					onClick={props.backwardFunc}
				/>
				<div className={styles.companion}>
					<div className={styles.companion_image}/>
					<div className={styles.companion_info}>
						<span className={styles.companion_name}>{props.companionName}</span>
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
		</div>
	);
}

AppHeader.propTypes = {
	backwardFunc: PropTypes.func.isRequired,
	companionName: PropTypes.string.isRequired,
	isChatOpen: PropTypes.number.isRequired,
};
