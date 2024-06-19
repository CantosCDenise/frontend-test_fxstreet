import React, { useEffect, useState } from "react";
import CardPost from "./CardPost";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LatestContainer = styled.div`
    width: 100%;
    padding: 15px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`
const LatestButton = styled.div`
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
const PopularButton = styled.div`
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

const PostsContainter = styled.div`
    width: 100%;
    max-height: 850px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 15px;

`
const Latest = () => {

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
                setPosts(data);
            });
    }, []);

    return (
        <LatestContainer>
            <ButtonsContainer>
                    <LatestButton onClick={handleLatestButtonClick}>Latest</LatestButton>
                    <PopularButton onClick={handlePopularButtonClick}>Popular</PopularButton>
            </ButtonsContainer>
            <PostsContainter>
                {posts.map(post => (
                    <CardPost key={post.id} {...post} />
                ))}
            </PostsContainter>
        </LatestContainer>
    );
};

export default Latest;