import {useState, useEffect} from 'react';
import axios from 'axios';
//import { tokenContext } from '../shared/context/tokenContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setToken } from '../store';

// interface IPostsData {
//     name?: string;
//     iconImg?: string;
// }

export function usePostsData() {
    const [data, setData] = useState([]);

    //const token = useContext(tokenContext);
    const token = useSelector<RootState, string>(state=>state.token);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(window.__token__){
            //setToken(window.__token__)
            dispatch(setToken( window.__token__ ));
        }
    },[]);


    useEffect(()=>{
        if(!token) return;
        axios.get('https://oauth.reddit.com/best/', {
            headers:{Authorization: `bearer ${token}`}
        })
        .then((resp)=>{
            setData(resp.data.data.children)
        })
        .catch(console.log)
    },[token]);
    return [data]
}