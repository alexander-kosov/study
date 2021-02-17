import {useState, useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { meRequest, meRequestError, meRequestSuccess } from '../me/actions';

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const [data, setData] = useState<IUserData>({});

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
            //console.log("#",resp);
            const myUserData = {name: userData.name, iconImg: userData.icon_img};
            setData(myUserData);
            dispatch(meRequestSuccess(myUserData));
        })
        .catch((error)=>{
            console.log(error);
            dispatch(meRequestError(error));
        })
    },[token]);

    return [data]

}
