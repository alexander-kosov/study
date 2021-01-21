import React from 'react';
import styles from './cardcaption.less';

export default function CardCaption (){

    return (
        <div className={styles.cardcaption}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img className={styles.avatar}
                    src="https://cdn.dribbble.com/users/133681/avatars/mini/46a5fbb029199915f49a465fb2dc4ac9.png?1589805794"
                    alt="avatar"/>
                    <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
                </div>
                <span className={styles.createdAt}><span className={styles.publishedLabel}>Опубликовано </span>4 часа назад</span>
            </div>
            <h2 className={styles.title}>
                <a href="#post-url" className={styles.postLink}>
                Следует отметить, что новая модель организационной Следует отметить, что новая модель организационной Следует отметить, что новая модель организационной Следует отметить, что новая модель организационной Следует отметить, что новая модель организационной Следует отметить, что новая модель организационной
                </a>
            </h2>
        </div>
    );
}