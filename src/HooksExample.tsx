import React from 'react';


export function MyHooks({title, id}: {title: string, id?:string}) {

    React.useEffect(()=>{
        console.log('1)componentDidMount');
        console.log('1)componentWillUpdate');
    });
    
    React.useEffect(()=>{
        console.log('2)componentDidMount');
        return ()=>{
            console.log('2)componentWillUnmount');
        }
    },[]);

    React.useEffect(()=>{
        console.log('3)componentWillRecieveProps', title);
    },[title]);
    
//-------------------
    const [isMounted] = useIsMounted();

    React.useEffect(()=> {
        console.log('isMounted:',isMounted);
    },[isMounted]);

    return (
        <div>{title} {id}</div>
    )
}


export function useIsMounted () {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(()=>{
        setIsMounted(true)
    },[]);
    return [isMounted]
}