import React from 'react';
import { CommentIcon, ShareIcon, WarningIcon } from '../../Icons';
import styles from './commentitem.less';
import ResponseComment from '../ResponseComment';


//import {BlockIcon, WarningIcon, CommentIcon, ShareIcon, SaveIcon} from '../../../../Icons';

export default function CommentItem (){

    const [openResponseComment, setOpenResponseComment] = React.useState(false);

    return (
        <li className={styles.commentItem}>
            <div className={styles.commentCaption}>
                <img className={styles.avatar}
                    src="https://cdn.dribbble.com/users/133681/avatars/mini/46a5fbb029199915f49a465fb2dc4ac9.png?1589805794"
                    alt="avatar"/>
                <div className={styles.name}>Василий Рогов</div>
                <div className={styles.date}>2 часа назад</div>
                <div className={styles.group}>Лига правоохранителей</div>
            </div>

            <div className={styles.commentBody}>
                asdgf wg ertgherth tybh werth rtyj yun fgb erth rtjk rythn dfgh ertjhrt yj
            </div>

            <div className={styles.commentButtons}>
                <button className={styles.button} onClick={()=>setOpenResponseComment(true)}>
                    <CommentIcon />
                    <span>Ответить</span>
                </button>
                <button className={styles.button}>
                    <ShareIcon />
                    <span>Поделиться</span>
                </button>
                <button className={styles.button}>
                    <WarningIcon />    
                    <span>Пожаловаться</span>                
                </button>
            </div>
            {openResponseComment && <ResponseComment />}
        </li>
	);
}