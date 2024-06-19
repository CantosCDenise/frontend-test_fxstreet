import React, { useEffect, useState } from "react";
import CardPost from "./CardPost";
import styled from "styled-components";
import DownArrowIcon from "../icons/downarrow.svg";
import FilterIcon from "../icons/filter.svg";

const ContentContainer = styled.div`
    width: 100%;
    padding: 20px;
`;

const FiltersContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
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

const ShowFilter = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 14.72px;
    font-weight: 400;
    color: #49494F;
    gap: 10px;
    margin-right: 70px;
    align-items: center;
    cursor: pointer;

    span:last-of-type{
        font-weight: 700;
        font-size: 17.6px;
    }
    img {
        width: 10px;
        height: 10px;
    }

    @media only screen and (max-width: 1080px) {
        display: none;
    }
`

const MobileFilter = styled.div`
    display: none;
    margin-right: 40px;
    align-items: center;

    @media only screen and (max-width: 1080px) {
    display: flex;
    
  }
`

const PostsContainer = styled.div`
    width: 100%;
    max-height: 800px;
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
            <FiltersContainer>
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
                <ShowFilter>
                    <span>Show:</span>
                    <span>All</span>
                    <img src={DownArrowIcon} alt="Down Arrow Icon"/>
                </ShowFilter>
                <MobileFilter>
                    <img src={FilterIcon} alt="Filter Icon" />
                </MobileFilter>
            </FiltersContainer>
            <PostsContainer>
                {filteredPosts.map(post => (
                    <CardPost key={post.id} {...post} />
                ))}
            </PostsContainer>
        </ContentContainer>
    );
};

export default Latest;
