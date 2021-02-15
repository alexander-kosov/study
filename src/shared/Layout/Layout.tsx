import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store';
import styles from './Layout.less';

interface ILayoutProps {
    children?:React.ReactNode;
}

export default function Layout ({children}: ILayoutProps){
    
    const dispatch = useDispatch();
    useEffect(()=>{
        if(window.__token__){
            dispatch(setToken(window.__token__));   
        }
    },[]);

    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
}