import React from 'react';
import styles from './cardimage.less';

interface ICardImageProps {
    data: {
        thumbnail: string;  
    }
}

export default function CardImage ({data}: ICardImageProps){

    return (
        <div className={styles.preview}>
            <img className={styles.previewImg} src={data.thumbnail} />
        </div>

    );
}