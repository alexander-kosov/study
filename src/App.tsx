import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Layout from './shared/Layout';
import './main.global.css';
import Header from './shared/Header';
import Content from './shared/Content';
import CardsList from './shared/CardsList';
//import {useToken} from './hooks/useToken';

//import { userContext } from './shared/context/userContext';
// import { UserContextProvider } from './shared/context/userContext';
import { PostsContextProvider } from './shared/context/postsContext';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import { rootReducer } from './store';
import thunk from 'redux-thunk';
//import { nanoid } from 'nanoid';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));


function AppComponent(){
    
    // useEffect(()=>{
    //     const token = localStorage.getItem('token') || window.__token__;
    //     store dispatchEvent(setToken(token));
    //     if(token){
    //         localStorage.setItem('token',token);
    //     }
    // },[])
    useEffect(()=>{
 
    },[])


    return (
        <Provider store={store}>
 
            {/* <UserContextProvider > */}
                <PostsContextProvider>
                <Layout>
                    <Header />
                    <Content>
                        <CardsList />
                    </Content>
                </Layout>
                </PostsContextProvider>
            {/* </UserContextProvider > */}
        </Provider>
    );
}

export const App = hot(()=><AppComponent/>);