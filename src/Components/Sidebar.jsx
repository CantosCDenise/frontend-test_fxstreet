import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
    display: flex;
    width: 255px;
    height: 100%;
    background-color: #242d38;
`;

const SidebarLogo = styled.img`
    width: 163px;
    height: 53.94px;
    margin-top: 47px;
    margin-left: 46px;
    margin-right: 46px;
    padding: 0;
`

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarLogo src="src\assets\images\FXStreetpremium.png"/>
        </SidebarContainer>
    );
};

export default Sidebar;