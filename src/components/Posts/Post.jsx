import { useState, useEffect, useContext } from "react";
import { getAllPosts } from "../../services/posts"
// import api from "../../services/railsApi";

export default function Post() {
    const [posts, setResponseData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // const fetchData = (e) => {
    //     e.preventDefault()

    //     getAllPosts()
    //     .then((resonse)=>{
    //         setResponseData(resonse.data);
    //         console.log(resonse)
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }

    useEffect(() => {
        const fetchPosts = async () => {
          const postData = await getAllPosts();
          setResponseData(postData);
          setLoaded(true);
        };

        fetchPosts();
    });

    return (
        <div>
          {posts.map((post) => (

            <div>{post.id}</div>,
            <div>{post.frontend}</div>
            
          ))}
        </div>
    );
}

