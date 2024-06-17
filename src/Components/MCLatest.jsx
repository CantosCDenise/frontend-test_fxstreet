import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Latest from "./Latest";
import Widgets from "./Widgets";

const MCLatestContainer = styled.div`
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

const MCLatest = () => {

    return (
        <MCLatestContainer>
            <Navbar />
            <Content>
                <Latest/>
                <Widgets/>
            </Content>
        </MCLatestContainer>
    );
};

export default MCLatest;
