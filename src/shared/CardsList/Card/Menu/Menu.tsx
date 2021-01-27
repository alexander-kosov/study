import React from 'react';
import styles from './menu.less';
import Dropdown from '../../../Dropdown';
import {generateId} from '../../../../utils/react/generateRandomIndex';
import {GenericList} from '../../../../shared/GenericList/GenericList';
import {merge} from '../../../../utils/js/merge';
import { MenuIcon } from '../../../Icons';
import Text, {EColor} from '../../../Text/Text';

const LIST = [
    {text: 'Скрыть', icon: 'block'},
    {text: 'Пожаловаться', icon:'warning'},
    {text: 'Закрыть'}
//].map((item: {value: string})=>({...item, id: generateRandomString()}));
//].map(assignId);
].map(generateId);

export default function CardMenu (){
  
    const [list, setList] = React.useState(LIST);
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleItemClick = (id: string) => {
        console.log("clicked", id);
    }

    const handleButtonClick = () => {
        //setMenuOpen(!menuOpen)
    };

    const button = (
        <button className={styles.menuButton} onClick={handleButtonClick}>
            <MenuIcon />
        </button>
    );

    return (
        <div className={styles.menu}>
            <Dropdown
                onOpen={()=>console.log('opened')}
                onClose={()=>console.log('closed')}
                // isOpen={menuOpen} 
                button={button}>
                
                <div className={styles.dropdown}>
                    {/* <GenericList list={list.map(merge({onClick:handleItemClick}))} /> */}

                    <button className={styles.closeButton}>
                        <Text As="div" mobileSize={12} size={14} color={EColor.grey66}>
                            Закрыть
                        </Text>
                    </button>
                </div>
                
            </Dropdown>
        </div>
    );
}


