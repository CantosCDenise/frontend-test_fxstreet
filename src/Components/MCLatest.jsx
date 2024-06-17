import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Latest from "./Latest";
import { useNavigate } from "react-router-dom";

const MCLatestContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: #ececf1;
`;

const MCLatest = () => {
    const navigate = useNavigate();

    function handleLatestButtonClick() {
        navigate("/");
    }

    function handlePopularButtonClick() {
        navigate("/popular");
    }

    return (
        <MCLatestContainer>
            <Navbar />
            <button onClick={handleLatestButtonClick}>Latest</button>
            <button onClick={handlePopularButtonClick}>Popular</button>
            <Latest />
        </MCLatestContainer>
    );
};

export default MCLatest;
