import React from 'react';
import styles from './post.less';
import ReactDOM from 'react-dom';

export default function Post (){

	const node = document.querySelector('#modal_root');
	if(!node) return null;

    return ReactDOM.createPortal((
        <div className={styles.modal}>
			<h2>Следует отметить, что новая модель чего-то там такое </h2>
			
			<div className={styles.content}>
				<p>9.1 Верстаем карточку поста, используя ReactPortal</p>
				<p>9.1 Верстаем карточку поста, используя ReactPortal</p>
				<p>9.1 Верстаем карточку поста, используя ReactPortal</p>
				<p>9.1 Верстаем карточку поста, используя ReactPortal</p>
			</div>
		</div>		
	), node);
}