import React from 'react';
import styles from './cardcaption.less';


export default function CardCaption ({data}: any){

    let date = new Date(parseInt(data.created+'000'));
    var options = {
        //era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        //weekday: 'long',
        timezone: 'UTC+04:00',//'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
     //console.log( "date",date.toLocaleString("ru", options)); 
      let realDate = date.toLocaleString("ru", options);

    return (
        <div className={styles.cardcaption}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img className={styles.avatar}
                    src="https://cdn.dribbble.com/users/133681/avatars/mini/46a5fbb029199915f49a465fb2dc4ac9.png?1589805794"
                    alt="avatar"/>
                    <a href="#user-url" className={styles.username}>{data.author}</a>
                </div>
                <span className={styles.createdAt}><span className={styles.publishedLabel}>Опубликовано </span>{realDate}</span>
            </div>
            <h2 className={styles.title}>
                <a href={data.url} className={styles.postLink}>
                    {data.title}
                </a>
            </h2>
        </div>
    );
}