import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { useSelector, useStore } from 'react-redux';
import { RootState } from '../../App';
import { commentContext } from '../context/commentContext';
import styles from './commentform.less';

export default function CommentForm (){
   
    // const store = useStore<RootState>();
    // const value = store.getState().commentText
    const value = useSelector<RootState, string>(state=>state.commentText);
   

    const { onChange} = useContext(commentContext);

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
        onChange(event.target.value);
    }

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        console.log(value);
    }
    

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input} value={value} onChange={handleChange}/>
            <button type="submit" className={styles.button}>Комментировать</button>		
		</form>
    );
}