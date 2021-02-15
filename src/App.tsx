import React from 'react';
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

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import { rootReducer } from './store';

const store = createStore(rootReducer, composeWithDevTools());

//import { nanoid } from 'nanoid';


function AppComponent(){
    
    //const [token] = useToken();


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