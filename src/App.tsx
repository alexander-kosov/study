import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Layout from './shared/Layout';
import './main.global.css';
import Header from './shared/Header';
import Content from './shared/Content';
import CardsList from './shared/CardsList';
//import {useToken} from './hooks/useToken';

//import { userContext } from './shared/context/userContext';
import { UserContextProvider } from './shared/context/userContext';
import { PostsContextProvider } from './shared/context/postsContext';

import { Action, applyMiddleware, createStore, Middleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import { rootReducer, RootState } from './store';
import thunk, { ThunkAction } from 'redux-thunk';


const logger: Middleware = (store) => (next) => (action)=> {
    console.log('dispatching:',action);
    const returnValue = next({...action, name: 'Valdemar'});
    console.log('action after next: ',returnValue);
}

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk, logger)
));

//import { nanoid } from 'nanoid';

const timeout =(ms: number): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch,getState) => {
    dispatch({type: 'START'});
    setTimeout(()=>{
        dispatch({type: 'FINISH'})
    },ms)
}

function AppComponent(){
    
    // useEffect(()=>{
    //     const token = localStorage.getItem('token') || window.__token__;
    //     store dispatchEvent(setToken(token));
    //     if(token){
    //         localStorage.setItem('token',token);
    //     }
    // },[])
    useEffect(()=>{
        //@ts-ignore
        store.dispatch(timeout(3000))
    },[])


    return (
        <Provider store={store}>
 
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
        </Provider>
    );
}

export const App = hot(()=><AppComponent/>);