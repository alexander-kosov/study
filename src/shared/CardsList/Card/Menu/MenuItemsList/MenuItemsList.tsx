import React from 'react';
import {BlockIcon, WarningIcon} from '../../../../Icons';
import Text, {EColor} from '../../../../Text';
//import Text, {EColor} from '../../../../Text/Text';
import styles from './menuitemslist.less';
import classNames from 'classnames';

interface IMenuItemsList{
   postId: string;
}

export default function MenuItemsList ({postId}: IMenuItemsList){

    return (
       <ul className={styles.menuItemsList}>
            <li className={styles.menuItem} 
                onClick={()=>console.log(postId)}>
                <BlockIcon />
                <Text size={12} tabletSize={14} desktopSize={14} bold
                color={EColor.grey99}>
                Скрыть
                </Text>
            </li>

            <div className={styles.divider} />

            <li className={styles.menuItem}>
                <WarningIcon />
                <Text size={12} tabletSize={14} desktopSize={14} color={EColor.grey99}>
                Пожаловаться
                </Text>
            </li>
       </ul>
    );
}
