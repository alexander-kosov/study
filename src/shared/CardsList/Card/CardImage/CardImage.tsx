import React from 'react';
import styles from './cardimage.less';

interface ICardImageProps {
    data: {
        thumbnail: string;  
    }
}

export default function CardImage ({data}: ICardImageProps){

if(data.thumbnail!=='default') {
    return (
        <div className={styles.preview}>
            <img className={styles.previewImg} src={data.thumbnail} />
        </div>
    );
} else return (
        <div className={styles.preview}>
            <div className={styles.fakePreview}/>
        </div>    
    )
}