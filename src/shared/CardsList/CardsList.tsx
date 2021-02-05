import React from 'react';
import styles from './cardslist.less';
import Card from './Card';
import { usePostsData } from '../../hooks/usePostsData';

interface IPost {
    kind: string; 
    data: {
        id: string;
        author: string;
        created: number;
        num_comments: number;
        permalink: string;
        title: string;
        url: string;
    }
}

export default function CardsList (){

    //console.log('usePostsData');
    const [posts] = usePostsData();
    console.log("posts:",posts);

    let items = posts.map((post:IPost)=>{
        console.log("Post:", post.data.author, post);
        return <Card data={post.data}/>//
    });

    return (
        <ul className={styles.cardslist}>
            {/* <Card /> */}
            {items}
        </ul>
    );
}