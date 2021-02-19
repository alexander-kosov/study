import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { meRequestAsync } from '../../me/actions';
import { RootState, saveToken } from '../../store';
import styles from './Layout.less';

interface ILayoutProps {
    children?:React.ReactNode;
}

export default function Layout ({children}: ILayoutProps){
    
    const token = useSelector<RootState, string>(state=>state.token);

    const dispatch = useDispatch();
    
    useEffect(()=>{
            dispatch(saveToken());   
    },[]);

    useEffect(()=>{
        if(!token) return;
        dispatch(meRequestAsync());
    },[token]);

    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
}