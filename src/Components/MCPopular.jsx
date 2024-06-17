import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Popular from "./Popular";
import Widgets from "./Widgets";


const MCPopularContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: #ececf1;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`

const MCPopular = () => {

    return (
        <MCPopularContainer>
            <Navbar/>
            <Content>
                <Popular/>
                <Widgets/>
            </Content>
        </MCPopularContainer>
    );
};

export default MCPopular;