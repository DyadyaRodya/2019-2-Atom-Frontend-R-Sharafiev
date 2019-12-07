import React from 'react';
import styles from '../styles/profileStyles.module.css';

export default function Profile(props) {
	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleInvalid(event) {
		event.target.setCustomValidity(
			'Никнейм должен содержать минимум 5 символов: латинские буквы в нижнем регистре и цифры (например, john123).',
		);
	}

	return (
		<form
			id="profile-form"
			className={styles.profile_form}
			onSubmit={handleSubmit}
		>
			<div className={styles.profile_img_preview}>
				<div className={styles.profile_img} />
			</div>
			<div
				className={`${styles.profile_input_div} ${styles.fullname_input_div}`}
			>
				<span className={styles.field_info}>Полное имя</span>
				<input className={styles.profile_input} />
			</div>
			<div
				className={`${styles.profile_input_div} ${styles.username_input_div}`}
			>
				<span className={styles.field_info}>Никнейм</span>
				<input
					className={styles.profile_input}
					pattern="^[a-z][a-z0-9-_\.]{4,20}$"
					onInvalid={handleInvalid}
				/>
			</div>
			<div
				className={`${styles.profile_input_div} ${styles.biography_input_div}`}
			>
				<span className={styles.field_info}>О себе</span>
				<textarea className={styles.profile_input} />
			</div>
		</form>
	);
}