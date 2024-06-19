import React from "react";
import styled from "styled-components";
import MenuIcon from "../icons/menu.svg";

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: 100%;
    height: 100%;
    background-color: #242d38;

    @media only screen and (max-width: 1080px) {
    flex-direction: row;
  }
`;

const SidebarLogo = styled.img`
    width: 163px;
    height: 53.94px;
    margin-top: 47px;
    margin-left: 46px;
    margin-right: 46px;
    padding: 0;

    @media only screen and (max-width: 1080px) {
    display: none;
  }
`
const MobileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    margin-right: 20px; 

    @media only screen and (max-width: 1080px) {
        display: flex; 
    }


`

const MobileLogo = styled.img`
    display: none;
    width: 137px;
    height: 26.22px;
    margin-left: 20px;

    @media only screen and (max-width: 1080px) {
    display: flex;
  }
`

const MobileMenu = styled.div`
    display: none;
    flex-direction: row;
    align-items: center;
    width: 50px;
    justify-content: space-between;

    @media only screen and (max-width: 1080px) {
    display: flex;
  }
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

    @media only screen and (max-width: 1080px) {
    display: none;
  }

`

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarLogo src="src\assets\images\FXStreetpremium.png" alt="FXS logo"/>
            <Menu>
                <a href="link">Trade ideas</a>
                <a href="link">Strategies</a>
                <a href="link">Signals</a>
                <a href="link">Events</a>
                <a href="link">Recordings</a>
            </Menu>
            <MobileContainer>
                <MobileLogo src="src\assets\images\FXStreetpremium_mobile.png" alt="FXS logo" />
                <MobileMenu>
                    <img src={MenuIcon} alt="Menu Icon" />
                    <img src={MenuIcon} alt="Menu Icon" />
                </MobileMenu>
            </MobileContainer>

        </SidebarContainer>
    );
};

export default Sidebar;