import React from 'react';
import styles from './card.less';
import CardCaption from './CardCaption';
import CardControls from './CardControls';
import CardImage from './CardImage';
import Menu from './Menu';

// interface IPostData {
//     id: string;
//     author: string;
//     created: number;
//     num_comments: number;
//     permalink: string;
//     title: string;
//     url: string;
// }

interface LooseObject {
    [key: string]: any
}


export default function Card (props: LooseObject){
console.log(">>>>>",props);
    return (
        <li className={styles.card}>
            <CardCaption data={props.data}/>
            <CardImage data={props.data}/>
            <Menu />
            <CardControls />
        </li>
    );
}