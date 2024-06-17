import React, { useEffect, useState } from "react";
import CardPost from "./CardPost";

const Latest = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/96314262-67b1-455b-a2b2-ef1711d4634c')
            .then(response => response.json())
            .then(data => {
                const latestPosts = data.filter(post => !post.isPopular)
                setPosts(latestPosts);
            });
    }, []);

    return (
        <div>
            <h2>Latest Posts</h2>
            {posts.slice(0,2).map(post => (
                <CardPost key={post.id} {...post} />
            ))}
        </div>
    );
};

export default Latest;