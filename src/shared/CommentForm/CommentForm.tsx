import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentform.less';
import { Formik, Field, Form } from 'formik';


function validateComment(value: string) {
  let error='';
  if(value.length<=3) error="Должно быть больше 3х символов!"
  return error;
}

function validateEmail(value: string) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateUsername(value: string) {
  let error;
  if (value === 'admin') {
    error = 'Nice try!';
  }
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
    
    interface Values {
      comment: string;
    }

    return (

<Formik
       initialValues={{
         username: '',
         email: '',
         comment: '',
       }}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched, isValidating }) => (
         <Form>
           
           <Field name="comment" validate={validateComment} as='textarea'/>
           {errors.comment && touched.comment && <div>{errors.comment}</div>}

           <Field name="email" validate={validateEmail} />
           {errors.email && touched.email && <div>{errors.email}</div>}
 
           <Field name="username" validate={validateUsername} />
           {errors.username && touched.username && <div>{errors.username}</div>}
 
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>


    //   <Formik
    //     initialValues={{
    //       comment: '',
    //     }}
    //     onSubmit={(
    //       values: Values,
    //       { setSubmitting }: FormikHelpers<Values>
    //     )=>{
    //       //типа асинхронно
    //       setTimeout(() => {
    //         alert(JSON.stringify(values, null, 2));
    //         setSubmitting(false);
    //       }, 0);
    //     }}
    //   >
    //     {({ errors, touched }) => (
    //     <Form className={styles.form}>
    //       <label htmlFor="comment" style={{visibility: 'hidden'}}>Комментарий</label>
    //       <Field 
    //         className={styles.input} 
    //         type="comment" 
    //         id="comment" 
    //         name="comment" 
    //         as='textarea'
    //         validate={validateComment}
    //         {...errors.comment && touched.comment && <div>{errors.comment}</div>}
    //       />
    //       <button type="submit" className={styles.button}>Комментировать</button>		

    //     </Form>
    //     )}
    //  </Formik>
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