import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/appHeaderStyles.module.css';

export default function ProfileHeader(props) {
	return (
		<div className={`${styles.app_header} ${styles.profile_header}`}>
			<Link to="/" className={styles.button}>
				<div className={`${styles.button_backward} ${styles.button}`} />
			</Link>
			<span className={styles.header}>Редактирование профиля</span>
			<button type="submit" form="profile-form" className={styles.button}>
				<div className={styles.button_tick} />
			</button>
		</div>
	);
}