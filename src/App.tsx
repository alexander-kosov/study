import React from 'react';
import { hot } from 'react-hot-loader/root';
import Layout from './shared/Layout';
import './main.global.css';
import Header from './shared/Header';
import Content from './shared/Content';
import CardsList from './shared/CardsList';

import { MyHooks, useIsMounted } from './HooksExample';
import {getValue} from '../utils/react/pickFromSyntheticEvent';
import { generateRandomString, assignId, generateId} from '../utils/react/generateRandomIndex';
import {MyList} from './shared/GenericList/GenericList';

import { nanoid } from 'nanoid';


/* выносится ВНЕ AppComponent, чтобы не перегенерировалась каждый раз */
const LIST = [
    {value: 'some'},
    {value: 'other some'},
    {value: 'one more some'},
    {value: 'not some'},
    {value: 'other not some'}
//].map((item: {value: string})=>({...item, id: generateRandomString()}));
//].map(assignId);
//].map(generateId);
].map((item:{value:string})=> ({...item, id:nanoid()}));




function AppComponent(){
   // const [isVisible, setIsVisible] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [isVisible] = useIsMounted();

    return (
        <Layout>
           <Header />
            <Content>
                <CardsList />
                {/* //--------------------------------- */}
                <MyList list={LIST} />
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