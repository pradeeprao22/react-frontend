import { useState, useEffect, useContext } from "react";
import { getAllPosts } from "../../services/posts"
// import api from "../../services/railsApi";

export default function Post() {
    const [posts, setResponseData] = useState([]);

    const fetchData = (e) => {
        e.preventDefault()

        getAllPosts()
        .then((resonse)=>{
            setResponseData(resonse.data);
            console.log(resonse)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //       const postData = await getAllPosts();
    //       setResponseData(postData);       
    //     };

    //     fetchPosts();
    // });

    // const [ ] = useState()

    return (
        <button onClick={(e) => fetchData(e)} type='button'>Click Me</button>
    );
}

