import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cardcaption.less';

interface ICardCaptionProps {
    data: {
        id: string;
        created_utc: number;
        author: string;
        url: string;
        title: string;
    }
}

export default function CardCaption ({data}: ICardCaptionProps){

    let date = new Date(parseInt(data.created_utc+'000'));
    var options = {
        //era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        //weekday: 'long',
        timezone: 'UTC+04:00',//'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      let realDate = date.toLocaleString("ru", options);

    //const [isModalOpened, setIsModalOpened] = useState(false);   



    return (
        <div className={styles.cardcaption}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img className={styles.avatar}
                    src="https://cdn.dribbble.com/users/133681/avatars/mini/46a5fbb029199915f49a465fb2dc4ac9.png?1589805794"
                    alt="avatar"/>
                    <a href="#user-url" className={styles.username}>{data.author}</a>
                </div>
                <span className={styles.createdAt}><span className={styles.publishedLabel}>Опубликовано </span>{realDate}</span>
            </div>
            <h2 className={styles.title}>
                <Link to={`/posts/${data.id}`}
                className={styles.postLink}
                >
                    {data.title}
                </Link>

                {/* {isModalOpened && (
                    <Post onClose={()=>{setIsModalOpened(false)}}/>
                )} */}
            </h2>
        </div>
    );
}