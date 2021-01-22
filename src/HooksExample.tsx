import React from 'react';


export function MyHooks({title, id}: {title: string, id?:string}) {

    React.useEffect(()=>{
        console.log('componentDidMount');
        console.log('componentWillUpdate');
    });
    
    React.useEffect(()=>{
        console.log('componentDidMount');
        return ()=>{
            console.log('componentWillUnmount');
        }
    },[]);

    React.useEffect(()=>{
        console.log('componentWillRecieveProps', title);
    },[title]);
    

    return (
        <div>{title} {id}</div>
    )
}