import React from 'react';
import styles from './card.less';
import CardCaption from './CardCaption';
import CardControls from './CardControls';
import CardImage from './CardImage';
import Menu from './Menu';

interface IPostData {
    data: {
        id: string;
        author: string;
        created_utc: number;
        num_comments: number;
        permalink: string;
        title: string;
        url: string;    
        thumbnail: string;     
    }
}

// interface LooseObject {
//     [key: string]: any
// }


export default function Card (props: IPostData){

    return (
        <li className={styles.card}>
            <CardCaption data={props.data}/>
            <CardImage data={props.data}/>
            <Menu />
            <CardControls />
        </li>
    );
}