import React from 'react';
import CommentItem from './CommentItem';
import styles from './commentlist.less';


export default function CommentList (){

    return (
        <li className={styles.list}>
            <CommentItem />
        </li>
	);
}