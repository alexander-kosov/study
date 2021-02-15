import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../store';

export function useToken () {
    const [token, setToken] = useState('');
    const dispatch = useDispatch();
    useEffect(()=>{
        if(window.__token__){
            setToken(window.__token__)
            //dispatch(setToken(window.__token__));
        }
    },[]);

    return [token] //токен обернут в массив, т.к. многие из хуков реакта поддерживаются такого API
};