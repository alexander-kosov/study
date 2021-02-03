import React from 'react';
import styles from './SearchBlock.less';
import UserBlock from './UserBlock';
import {useUserData} from '../../../hooks/useUserData';

export default function SearchBlock (){

    const [data] = useUserData();


    return (
        <div className={styles.searchBlock}>
            Search block
            <UserBlock avatarSrc={data.iconImg} username={data.name}/>
        </div>
    );
}