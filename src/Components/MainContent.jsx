import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import CardPost from "./CardPost";
import Latest from "./Latest";
import { useNavigate } from "react-router-dom";

const MainContentContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: #ececf1;
`;

const MainContent = () => {
    const navigate = useNavigate();

    function handleLatestButtonClick() {
        navigate("/");
    }

    function handlePopularButtonClick() {
        navigate("/popular");
    }

    return (
        <MainContentContainer>
            <Navbar />
            <button onClick={handleLatestButtonClick}>Latest</button>
            <button onClick={handlePopularButtonClick}>Popular</button>
            <Latest /> {/* Opcional: Puedes renderizar Latest directamente */}
        </MainContentContainer>
    );
};

export default MainContent;
