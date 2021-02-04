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

    console.log("#token=",token);
    useEffect(()=>{
        if(!token) return;
        axios.get('https://oauth.reddit.com/best/', {
            headers:{Authorization: `bearer ${token}`}
        })
        .then((resp)=>{
            // const posts = resp.data.data.children;
            // console.log("#response=",resp.data.data.children);
            setData(resp.data.data.children)
        })
        .catch(console.log)
    },[token]);
    //console.log("DATA:",data);
    return [data]
}