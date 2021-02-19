import React, {useContext} from 'react';
import styles from './SearchBlock.less';
import UserBlock from './UserBlock';
//import {useUserData} from '../../../hooks/useUserData';
//import { userContext } from '../../context/userContext'; //Можно удалить?
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { IUserData } from '../../../me/actions';

export default function SearchBlock (){
    //const userData = useContext(userContext)
   ///// const {iconImg, name, loading} = useContext(userContext);
    //const {data, loading} = useUserData();

    const data = useSelector<RootState, IUserData>(state => state.me.data );
    const loading = useSelector<RootState, boolean>(state => state.me.loading ); 
    const token = useSelector<RootState, string>(state=>state.token);
	console.log(data)


    return (
        <div className={styles.searchBlock}>
            Search block
            <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading}/>
        </div>
    );
}