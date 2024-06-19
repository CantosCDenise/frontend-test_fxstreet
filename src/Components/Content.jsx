import React, { useEffect, useState } from "react";
import CardPost from "./CardPost";
import styled from "styled-components";

const ContentContainer = styled.div`
    width: 100%;
    padding: 20px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

const Button = styled.div`
    width: 76px;
    height: 21px;
    background-color: transparent;
    font-size: 17.6px;
    font-weight: 700;
    cursor: pointer;
    color: ${({ active }) => (active ? "#E4871B" : "#8C8D91")};

    &:hover {
        color: #E4871B;
    }
`;

const filterContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const PostsContainer = styled.div`
    width: 100%;
    max-height: 850px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Latest = () => {
    const [posts, setPosts] = useState([]);
    const [view, setView] = useState("latest"); // Estado para controlar la vista

    useEffect(() => {
        fetch('https://run.mocky.io/v3/ef694c62-9a57-4797-8624-d2afea2a2b1b')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            });
    }, []);

    function handleLatestButtonClick() {
        setView("latest");
    }

    function handlePopularButtonClick() {
        setView("popular");
    }

    const filteredPosts = view === "latest" ? posts : posts.filter(post => post.isPopular);

    return (
        <ContentContainer>
            <ButtonsContainer>
                <Button
                    onClick={handleLatestButtonClick}
                    active={view === "latest"}
                >
                    Latest
                </Button>
                <Button
                    onClick={handlePopularButtonClick}
                    active={view === "popular"}
                >
                    Popular
                </Button>
            </ButtonsContainer>
            <PostsContainer>
                {filteredPosts.map(post => (
                    <CardPost key={post.id} {...post} />
                ))}
            </PostsContainer>
        </ContentContainer>
    );
};

export default Latest;
