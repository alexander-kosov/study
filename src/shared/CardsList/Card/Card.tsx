import React from 'react';
import styles from './card.less';
import CardCaption from './CardCaption';
import CardControls from './CardControls';
import CardImage from './CardImage';
import CardMenu from './CardMenu';

export default function Card (){

    return (
        <li className={styles.card}>
            <CardCaption />
            <CardImage />
            <CardMenu />
            <CardControls />
        </li>
    );
}