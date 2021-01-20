import React from 'react';
import styles from './cardslist.less';
import Card from './Card';

export default function CardsList (){

    return (
        <ul className={styles.cardslist}>
            <Card />
        </ul>
    );
}