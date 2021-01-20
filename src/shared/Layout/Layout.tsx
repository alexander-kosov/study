import React from 'react';
import styles from './Layout.less';

interface ILayoutProps {
    children?:React.ReactNode;
}

export default function Layout ({children}: ILayoutProps){

    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
}