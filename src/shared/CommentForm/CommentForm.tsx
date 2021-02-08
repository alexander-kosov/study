import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentform.less';

export default function CommentForm (){
   
   const [value, setValue] = useState(''); 

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
        setValue(event.target.value);
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