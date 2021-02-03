import React from 'react';
import styles from './header.less';
import SearchBlock from './SearchBlock';
import SortBlock from './SortBlock';
import ThreadTitle from './ThreadTitle';

interface IHeaderProps {
   token: string; 
};

export default function Header ({token}:IHeaderProps){

    return (
        <header className={styles.header}>
            <SearchBlock token={token}/>
            <ThreadTitle />
            <SortBlock />
        </header>
    );
}