import {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


// interface IPostsData {
//     name?: string;
//     iconImg?: string;
// }

export function usePostsData() {
    const [data, setData] = useState([]);

    const token = useSelector<RootState, string>(state=>state.token);

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