import React, {useContext} from 'react';
import styles from './SearchBlock.less';
import UserBlock from './UserBlock';
//import {useUserData} from '../../../hooks/useUserData';
import { userContext } from '../../context/userContext';

export default function SearchBlock (){
    //const userData = useContext(userContext)
    const {iconImg, name, loading} = useContext(userContext);
    //const {data, loading} = useUserData();

    return (
        <div className={styles.searchBlock}>
            Search block
            <UserBlock avatarSrc={iconImg} username={name} loading={loading}/>
        </div>
    );
}