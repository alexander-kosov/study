import React from 'react';
import styles from './SearchBlock.less';
import UserBlock from './UserBlock';
import {useUserData} from '../../../hooks/useUserData';

interface ISearchBlockProps {
    token: string
}


export default function SearchBlock ({token}:ISearchBlockProps){

    const [data] = useUserData(token);


    return (
        <div className={styles.searchBlock}>
            Search block

            <UserBlock avatarSrc={data.iconImg} username={data.name}/>
        </div>
    );
}