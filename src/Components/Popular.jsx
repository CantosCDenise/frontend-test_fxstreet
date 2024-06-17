import React, { useEffect, useState } from "react";
import CardPost from "./CardPost";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PopularContainer = styled.div`
    display: flex;
    width: 702px;
    flex-direction: column;

`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const LatestButton = styled.div`
    width: 76px;
    height: 21px;
    background-color: transparent;
    color: #8C8D91;
    font-size: 17.6px;
    font-weight: 700;

    &&:hover{
        cursor: pointer;
    }
`
const PopularButton = styled.div`
    width: 76px;
    height: 21px;
    background-color: transparent;
    color: #E4871B;
    font-size: 17.6px;
    font-weight: 700;

    &&:hover{
        cursor: pointer;
    }
`

const PostsContainter = styled.div`
    width: 100%;
`

const Popular = () => {
    const navigate = useNavigate();

    function handleLatestButtonClick() {
        navigate("/");
    }

    function handlePopularButtonClick() {
        navigate("/popular");
    }
    
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
        <PopularContainer>
        <ButtonsContainer>
                <LatestButton onClick={handleLatestButtonClick}>Latest</LatestButton>
                <PopularButton onClick={handlePopularButtonClick}>Popular</PopularButton>
        </ButtonsContainer>
        <PostsContainter>
            {posts.slice(0,1).map(post => (
                <CardPost key={post.id} {...post} />
            ))}
        </PostsContainter>
    </PopularContainer>
    );
};

export default Popular;