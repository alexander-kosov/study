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

import { ActionCreator, AnyAction, bindActionCreators, createStore, Reducer } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';


export type RootState = {
    commentText: string;
};

const initialState: RootState = {
    commentText: 'Усем превед!',
};
const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text
});

const rootReducer: Reducer<RootState> = (state=initialState, action)=>{
    switch(action.type){
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            }
        default:
            return state;
    }
}

const store = createStore(rootReducer, composeWithDevTools());

//import { nanoid } from 'nanoid';


function AppComponent(){
    //????????????????? хер знает, не работает, выдает ошибку
    // const url = new URL(window.location.href);
    // console.log(url.searchParams.get('code'));
    //---------------------------------------------------------
    
    const [token] = useToken();

    return (
        <Provider store={store}>
  
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
      
        </Provider>
    );
}

export const App = hot(()=><AppComponent/>);