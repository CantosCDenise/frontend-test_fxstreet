import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
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

const Menu = styled.div`
    height: 217px;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    justify-content: space-between;
    

    & a {
        color: white;
        text-decoration: none;
    }

`

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarLogo src="src\assets\images\FXStreetpremium.png"/>
            <Menu>
                <a href="link">Trade ideas</a>
                <a href="link">Strategies</a>
                <a href="link">Signals</a>
                <a href="link">Events</a>
                <a href="link">Recordings</a>
            </Menu>
        </SidebarContainer>
    );
};

export default Sidebar;