import React from 'react';
import styles from './cardslist.less';
import Card from './Card';
import { usePostsData } from '../../hooks/usePostsData';

interface IPostObj {
    kind: string; 
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

export default function CardsList (){

    const [posts] = usePostsData();
    let items = posts.map((post:IPostObj)=>{
        return <Card data={post.data} key={post.data.id}/>
    });

    return (
        <ul className={styles.cardslist}>
            {items}
        </ul>
    );
}