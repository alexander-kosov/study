import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentform.less';


export default function CommentForm (){
    const [value, setValue] = useState('');
    const [valueTouched, setValueTouched] = useState(false); 
    const [valueError, setValueError] = useState('');

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        console.log("send:",value);
    }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
        setValue(event.target.value);
        setValueTouched(true);
    }

    function handleBlur(){
        setValueTouched(true);
    }

    function validateValue(){
        if(value.length <= 3 ) return 'Нужно больше трёх символов';
        return '';
    }
    const isFormValid = !validateValue();

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input} 
            value={value} 
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={valueError?'true':undefined}/>
            {valueTouched && validateValue() && (<div style={{color: 'red'}}>{validateValue()}</div>)}
            <button type="submit" className={styles.button} disabled={!isFormValid}>Комментировать</button>		
		</form>
    );
}