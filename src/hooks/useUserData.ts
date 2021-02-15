import {useState, useEffect} from 'react';
import axios from 'axios';
import { RootState, setToken } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { useToken } from './useToken';
//import { tokenContext } from '../shared/context/tokenContext';


interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const [data, setData] = useState<IUserData>({});

    //const token = useContext(tokenContext);
    //const token = useSelector<RootState, string>(state=>state.token);
    //const dispatch = useDispatch();
    
    //const dispatch = useDispatch();
    // useEffect(()=>{
    //     if(window.__token__){
    //         //setToken(window.__token__)
    //         dispatch(setToken( window.__token__ ));
    //     }
    // },[]);
    
    const token = useToken();

    useEffect(()=>{
        if(!token) return;
        axios.get('https://oauth.reddit.com/api/v1/me', {
            headers:{Authorization: `bearer ${token}`}
        })
        .then((resp)=>{
            const userData = resp.data;
            //console.log("#",resp);
            setData({name: userData.name, iconImg: userData.icon_img});
        })
        .catch(console.log)
    },[token]);

    return [data]

}