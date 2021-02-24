import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentform.less';
import { Formik, Field, Form } from 'formik';


function validateComment(value: string) {
  let error='';
  if(value.length<=3) error="Должно быть больше 3х символов!"
  return error;
}

export default function CommentForm (){
    // const [value, setValue] = useState('');
    // const [touched, setTouched] = useState(false); 
    // const [valueError, setValueError] = useState('');

    // function handleSubmit(event: FormEvent){
    //     event.preventDefault();
    //     setTouched(true);
    //     setValueError(validateValue());

    //     const isFormValid = !validateValue();
    //     if(!isFormValid) return
        
    //     console.log("send:",value);
    // }

    // function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
    //     setValue(event.target.value);
    //     //setValueTouched(true);
    // }

    // function handleBlur(){
    //     //setValueTouched(true);
    // }

    // function validateValue(){
    //     if(value.length <= 3 ) return 'Нужно больше трёх символов';
    //     return '';
    // }
    

  return (
    //https://formik.org/docs/guides/validation
    <Formik
       initialValues={{
         comment: '',
       }}
       onSubmit={values => {
         console.log(values);
         alert(`Отправка формы`);
       }}
     >
       {({ errors, touched, isValidating }) => (
         <Form className={styles.form}> 
           
           <Field name="comment" validate={validateComment} as='textarea' className={styles.input} />
           {errors.comment && touched.comment && <div>{errors.comment}</div>}
 
           <button type="submit" className={styles.button}>Комментировать</button>
         </Form>
       )}
     </Formik>
//=========================================================================================
        // <form className={styles.form} onSubmit={handleSubmit}>
        //     <textarea className={styles.input} 
        //     value={value} 
        //     onChange={handleChange}
        //     // onBlur={handleBlur}
        //     aria-invalid={valueError?'true':undefined}
        //     />
        //     {touched && validateValue() && (<div style={{color: 'red'}}>{validateValue()}</div>)}
        //     <button type="submit" className={styles.button}>Комментировать</button>		
		// </form>
    );
}