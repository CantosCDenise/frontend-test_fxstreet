import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import CardPost from "./CardPost";
import Latest from "./Latest";
import { useNavigate } from "react-router-dom";
import Content from "./Content";
import Popular from "./Popular";


const MainContentContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: #ececf1;
`

const MainContent = () => {
   const [view, setView] = useState("latest");

    return (
        <MainContentContainer>
            <Navbar />
            <button onClick={() => setView("latest")}>Latest</button>
            <button onClick={() => setView("popular")}>Popular</button>
            {view === "latest" ? <Latest /> : <Popular />}
        </MainContentContainer>
        
    );
};

export default MainContent;