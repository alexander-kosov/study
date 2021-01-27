import React from 'react';
import styles from './card.less';
import CardCaption from './CardCaption';
import CardControls from './CardControls';
import CardImage from './CardImage';
import Menu from './Menu';

export default function Card (){

    return (
        <li className={styles.card}>
            <CardCaption />
            <CardImage />
            <Menu />
            <CardControls />
        </li>
    );
}