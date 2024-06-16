import React, { useEffect, useState } from "react";
import CardPost from "./CardPost";

const Popular = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/96314262-67b1-455b-a2b2-ef1711d4634c')
            .then(response => response.json())
            .then(data => {
                const popularPosts = data.filter(post => post.isPopular);
                setPosts(popularPosts);
            });
    }, []);

    return (
    <div>
        <h2>Popular posts</h2>
        {posts.map(post => (
            <CardPost key={post.id} {...post} />
        ))}
    </div>
    );
};

export default Popular;