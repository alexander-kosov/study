import React from 'react';
import styles from './Header.less';
import SearchBlock from './SearchBlock';
import SortBlock from './SortBlock';
import ThreadTitle from './ThreadTitle';

export default function Header (){

    return (
        <header className={styles.header}>
            <SearchBlock/>
            <ThreadTitle />
            <SortBlock />
        </header>
    );
}