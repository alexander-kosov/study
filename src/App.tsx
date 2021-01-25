import React from 'react';
import { hot } from 'react-hot-loader/root';
import Layout from './shared/Layout';
import './main.global.css';
import Header from './shared/Header';
import Content from './shared/Content';
import CardsList from './shared/CardsList';

import { MyHooks, useIsMounted } from './HooksExample';
import {getValue} from '../utils/react/pickFromSyntheticEvent';
import { generateRandomString, generateId} from '../utils/react/generateRandomIndex';
import {MyList, GenericList} from './shared/GenericList/GenericList';

import {merge} from '../utils/js/merge';
import Dropdown from './shared/Dropdown';
//import { nanoid } from 'nanoid';


/* выносится ВНЕ AppComponent, чтобы не перегенерировалась каждый раз */
const LIST = [
    {text: 'some'},
    {text: 'other some'},
    {text: 'one more some'},
    {text: 'not some'},
    {text: 'other not some'}
//].map((item: {value: string})=>({...item, id: generateRandomString()}));
//].map(assignId);
].map(generateId);
//].map((item:{value:string})=> ({...item, id:nanoid()}));

function AppComponent(){
   // const [isVisible, setIsVisible] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [isVisible] = useIsMounted();

    const [list, setList] = React.useState(LIST);
    const handleItemClick = (id: string) => {
        setList(list.filter((item)=>item.id!==id))
    }

    const handleAdd = () => {
        setList(list.concat(generateId({text: generateRandomString() })))
    };

    return (
        <Layout>
           <Header />
            <Content>
                <CardsList />
                <hr />
                <Dropdown
                    onOpen={()=>console.log('opened')}
                    onClose={()=>console.log('closed')}
                    isOpen 
                    button={<button>Open|close</button>}>
                    <GenericList list={list.map(merge({onClick:handleItemClick}))} />
                </Dropdown>
                {/* //--------------------------------- */}
                <button onClick={handleAdd} >Add element to list</button>
                <GenericList list={list.map(merge({onClick:handleItemClick}))} />
                {/* <MyList list={list.map(merge({onClick:handleItemClick}))} /> */}
                {/* <MyList list={LIST} onClick={console.log} /> */}
                {/* <MyList list={LIST} onClick={(id)=>console.log(id)} /> */}
                <hr />
                {/* <button onClick={()=>setIsVisible(!isVisible)}>Change me!</button> */}
                <input type="text" onChange={getValue(setTitle)}/>
                {isVisible && <MyHooks title={title} id='11' />}
                {/* //--------------------------------- */}
            </Content>
        </Layout>
    );
}

export const App = hot(()=><AppComponent/>);