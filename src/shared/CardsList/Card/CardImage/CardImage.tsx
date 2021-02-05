import React from 'react';
import styles from './cardimage.less';

export default function CardImage ({data}: any){

    return (
        <div className={styles.preview}>
            <img className={styles.previewImg} src={data.thumbnail} />
        </div>

    );
}