import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.less';
import Card from './Card';
import { usePostsData } from '../../hooks/usePostsData';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

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

    const token = useSelector<RootState>(state=>state.token);
    const [posts, setPosts] = useState<IPostObj[]>([]);
    const [loading, setLoading] = useState(false);//false т.к. изначально загрузки нет, нет токена
    const [errorLoading, setErrorLoading] = useState('');
    const [nextAfter, setNextAfter] = useState(''); //"курсор" для курсорной пагинации 
    const bottomOfList = useRef<HTMLDivElement>(null);

    //IntersectionObserver
    useEffect(()=>{
        async function load(){
            setLoading(true);
            setErrorLoading('');
            try{
                const {data: {data: {after, children}}} = await axios.get('https://oauth.reddit.com/rising/',{
                //const response = await axios.get('https://oauth.reddit.com/rising/',{
                    headers: {Authorization: `bearer ${token}`},
                    params: {
                        limit: 10,
                        after: nextAfter,
                    }
                });
                //console.log('response:',children);
                setNextAfter(after);
                setPosts(prevChildren => prevChildren.concat(...children));
            } catch (error){
                //console.error(error);
                setErrorLoading(String(error));
            }
            setLoading(false);
        }
        //-----------------
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting){
                load();
            } 
        },{
            rootMargin: '10px',
        })
        if(bottomOfList.current){
           observer.observe(bottomOfList.current) 
        }

        return () => {
            if(bottomOfList.current){
                observer.unobserve(bottomOfList.current)
            }
        }
    },[bottomOfList.current, nextAfter, token]);


    // const [posts] = usePostsData();
    // let items = posts.map((post:IPostObj)=>{
    //     return <Card data={post.data} key={post.data.id}/>
    // });

    // return (
    //     <ul className={styles.cardslist}>
    //         {items}
    //     </ul>
    // );
    return (
         <ul className={styles.cardslist}>

            {posts.length === 0 && !loading && !errorLoading && (
              <div style={{textAlign: 'center'}}>
                Нет ни одного поста
            </div>
            )}

             {posts.map((post:IPostObj) => {
               return <Card data={post.data} key={post.data.id}/> 
             })}

            <div ref={bottomOfList} />   

            {loading && (
                <div style={{textAlign: 'center'}}>
                Загрузка...
            </div>
            )}
            {errorLoading && (
                <div role="alert" style={{textAlign: 'center'}}>
                    {errorLoading}
                </div>
            )}
        </ul>
    )   

}