import React from 'react';
import styles from './cardmenu.less';
import Dropdown from '../../../Dropdown';
import {generateId} from '../../../../utils/react/generateRandomIndex';
import {GenericList} from '../../../../shared/GenericList/GenericList';
import {merge} from '../../../../utils/js/merge';

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
            <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
                <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
                <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
            </svg>
        </button>
    );


    return (
        <div className={styles.menu}>
            <Dropdown
                onOpen={()=>console.log('opened')}
                onClose={()=>console.log('closed')}
                // isOpen={menuOpen} 
                button={button}>

<GenericList list={list.map(merge({onClick:handleItemClick}))} />
            </Dropdown>
        </div>
    );
}


