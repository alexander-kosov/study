import React from 'react';
import styles from './SearchBlock.less';
import UserBlock from './UserBlock';

export default function SearchBlock (){

    return (
        <div className={styles.searchBlock}>
            Search block

            <UserBlock />
        </div>
    );
}