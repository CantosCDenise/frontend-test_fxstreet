import React, { useEffect, useState } from "react";
import CardPost from "./CardPost";

const Popular = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/ef694c62-9a57-4797-8624-d2afea2a2b1b')
            .then(response => response.json())
            .then(data => {
                const popularPosts = data.filter(post => post.isPopular);
                setPosts(popularPosts);
            });
    }, []);

    return (
    <div>
        <h2>Popular posts</h2>
        {posts.slice(0,1).map(post => (
            <CardPost key={post.id} {...post} />
        ))}
    </div>
    );
};

export default Popular;