import React, { useEffect, useState } from 'react';
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

    useEffect(()=>{

        if(!token) return;

        async function load(){
            setLoading(true);
            setErrorLoading('');
            try{
                const {data: {data: {children}}} = await axios.get('https://oauth.reddit.com/rising/',{
                //const response = await axios.get('https://oauth.reddit.com/rising/',{
                    headers: {Authorization: `bearer ${token}`}
                });
                //console.log('response:',children);
                setPosts(children);
            } catch (error){
                //console.error(error);
                setErrorLoading(String(error));
            }
            setLoading(false);
        }
  
        load(); //!!!!!!!!!!!!!!!
    },[token]);


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
             {posts.map((post:IPostObj) => {
               return <Card data={post.data} key={post.data.id}/> 
             })}

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