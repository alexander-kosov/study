import React, {useState, useEffect} from 'react';
import styles from './SearchBlock.less';
import UserBlock from './UserBlock';
import axios from 'axios';

interface ISearchBlockProps {
    token: string
}

interface IUserData {
    name?: string;
    iconImg?: string;
}

export default function SearchBlock ({token}:ISearchBlockProps){

    const [data, setData] = useState<IUserData>({});

    useEffect(()=>{
        axios.get('https://oauth.reddit.com/api/v1/me', {
            headers:{Authorization: `bearer ${token}`}
        })
        .then((resp)=>{
            const userData = resp.data;
            setData({name: userData.name, iconImg: userData.icon_img});
        })
        .catch(console.log)
    },[token]);

    return (
        <div className={styles.searchBlock}>
            Search block

            <UserBlock avatarSrc={data.iconImg} username={data.name}/>
        </div>
    );
}