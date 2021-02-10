import React, { FormEvent, useEffect, useRef } from 'react';
import styles from './responsecomment.less';

export default function ResponseComment (){

  const ref = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event: FormEvent){
      event.preventDefault();
      console.log(ref.current?.value);
  }
  useEffect(() => {
    ref.current && ref.current.focus();
  },[]);

  return (
    <div className={styles.ResponseComment}>
      <div className={styles.ResponseCommentCaption}>
                <img className={styles.avatar}
                    src="https://cdn.dribbble.com/users/133681/avatars/mini/46a5fbb029199915f49a465fb2dc4ac9.png?1589805794"
                    alt="avatar"/>
                <div className={styles.name}>Василий Рогов</div>
            </div>
      <form className={styles.form} onSubmit={handleSubmit}>
          <textarea className={styles.input} ref={ref}/>
          <button type="submit" className={styles.button}>Комментировать</button>
      </form>
    </div>  
  );
}