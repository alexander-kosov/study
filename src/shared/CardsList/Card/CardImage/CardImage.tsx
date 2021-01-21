import React from 'react';
import styles from './cardimage.less';

export default function CardImage (){

    return (
        <div className={styles.preview}>
            <img className={styles.previewImg} src="https://cdn.dribbble.com/users/383235/screenshots/14963459/media/47dcedb0c5412adfbabc548064005663.png" />
        </div>

    );
}