import React from 'react';
import styles from './cardslist.less';
import Card from './Card';
import { usePostsData } from '../../hooks/usePostsData';

export default function CardsList (){

    console.log('usePostsData');
    const [posts] = usePostsData();
    //console.log("posts:",posts);

    return (
        <ul className={styles.cardslist}>
            <Card />
        </ul>
    );
}