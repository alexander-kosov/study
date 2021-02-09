import React, {useState} from 'react';
import { hot } from 'react-hot-loader/root';
import Layout from './shared/Layout';
import './main.global.css';
import Header from './shared/Header';
import Content from './shared/Content';
import CardsList from './shared/CardsList';
import {useToken} from './hooks/useToken';

import { tokenContext } from './shared/context/tokenContext';
//import { userContext } from './shared/context/userContext';
import { UserContextProvider } from './shared/context/userContext';
import { PostsContextProvider } from './shared/context/postsContext';
import { commentContext } from './shared/context/commentContext';

//---------------------------------
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

    //????????????????? хер знает, не работает, выдает ошибку
    // const url = new URL(window.location.href);
    // console.log(url.searchParams.get('code'));
   
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
    //------------------------------------------------------------------------
    const [commentValue, setCommentValue] = useState(''); 
    const [token] = useToken();

    const CommentProvider = commentContext.Provider;

    return (
        <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue
        }}>
            <tokenContext.Provider value={token}>
                <UserContextProvider >
                    <PostsContextProvider>
                    <Layout>
                        <Header />
                        <Content>
                            <CardsList />
                        </Content>
                    </Layout>
                    </PostsContextProvider>
                </UserContextProvider >
            </tokenContext.Provider>
        </CommentProvider>
    );
}

export const App = hot(()=><AppComponent/>);