import React, {useEffect, useRef} from 'react';
import styles from './post.less';
import ReactDOM from 'react-dom';
import CommentList from '../CommentList';
import CommentFormContainer from '../CommentFormContainer';

interface IPost {
	onClose?:()=> void;	
}

export default function Post (props:IPost){

	const ref = useRef<HTMLDivElement>(null);

	useEffect(()=>{
		function handleClick(event: MouseEvent) {
			if(event.target instanceof Node && !ref.current?.contains(event.target)){
				console.log('clicked!',event.target);
				props.onClose?.();
				//про эту последнюю точку f?.() между  ? и (), то она нужна для того, чтобы 
				//не перепутать с тернарным оператором. Вот тут тред на эту тему можно 
				//почитать https://github.com/claudepache/es-optional-chaining/issues/3
 			
			}
			
		};

		document.addEventListener('click',handleClick);
		return ()=>{
			document.removeEventListener('click',handleClick);	
		}
	},[]);


	const node = document.querySelector('#modal_root');
	if(!node) return null;

    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
			<h2>Следует отметить, что новая модель чего-то там такое </h2>
			
			<div className={styles.content}>
				<p>9.1 Верстаем карточку поста, используя ReactPortal</p>
				<p>9.1 Верстаем карточку поста, используя ReactPortal</p>
				<p>9.1 Верстаем карточку поста, используя ReactPortal</p>
				<p>9.1 Верстаем карточку поста, используя ReactPortal</p>
			</div>

			<CommentFormContainer />
			<CommentList />
		</div>		
	), node);
}