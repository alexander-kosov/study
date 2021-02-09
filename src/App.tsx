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

//import { nanoid } from 'nanoid';


function AppComponent(){
    //????????????????? хер знает, не работает, выдает ошибку
    // const url = new URL(window.location.href);
    // console.log(url.searchParams.get('code'));
    //---------------------------------------------------------
    
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