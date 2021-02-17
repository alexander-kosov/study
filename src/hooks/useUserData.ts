import {useState, useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { IUserData, meRequest, meRequestError, meRequestSuccess } from '../me/actions';

export function useUserData() {
    const data = useSelector<RootState, IUserData>(state => state.me.data )
    const token = useSelector<RootState, string>(state=>state.token);

    const dispatch = useDispatch();

    useEffect(()=>{
        if(!token) return;
        
        dispatch(meRequest());
        axios.get('https://oauth.reddit.com/api/v1/me', {
            headers:{Authorization: `bearer ${token}`}
        })
        .then((resp)=>{
            const userData = resp.data;
            dispatch(meRequestSuccess({name: userData.name, iconImg: userData.icon_img}));
        })
        .catch((error)=>{
            console.log(error);
            dispatch(meRequestError(String(error)));
        })
    },[token]);

    return [data]

}
