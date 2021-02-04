import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';


// interface IPostsData {
//     name?: string;
//     iconImg?: string;
// }

export function usePostsData() {
    //const [data, setData] = useState<IPostsData>({});

    const token = useContext(tokenContext);

    console.log("#token=",token);
    useEffect(()=>{
       // if(!token) return;
        axios.get('https://www.reddit.com/best/', {
            headers:{Authorization: `bearer ${token}`}
        })
        .then((resp)=>{
            const posts = resp.data;
            console.log("#response=",resp);
        })
        .catch(console.log)
    },[token]);
    return []
}