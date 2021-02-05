import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

// interface IPostsData {
//     name?: string;
//     iconImg?: string;
// }

export function usePostsData() {
    const [data, setData] = useState([]);

    const token = useContext(tokenContext);

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