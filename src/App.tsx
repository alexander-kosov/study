import React from 'react';
import { hot } from 'react-hot-loader/root';
import Layout from './shared/Layout';


function AppComponent(){

    return (
        <Layout>
            ...
            {/* <Header></Header>
            <Content/> */}
        </Layout>
    );
}

export const App = hot(AppComponent);