import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Content from "./Content";
import Widgets from "./Widgets";
import GlobalStyles from "../styles/GlobalStyles";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 250px 4fr 2fr; 
  grid-template-rows: auto auto; 
  width: 100vw;
  height: 100vh; 
  overflow: hidden; 

  @media only screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-template-rows: 55px auto;
  }
`;

const SidebarGrid = styled.div`
  grid-column: 1 / 2; 
  grid-row: 1 / span 2; 
  background-color: #f0f0f0;

  @media only screen and (max-width: 1080px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

const Topbar = styled.div`
  grid-column: 2 / span 2; 
  grid-row: 1 / 2; 
  background-color: #e0e0e0;

  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

const MainContent = styled.div`
  grid-column: 2 / 3; 
  grid-row: 2 / span 1; 
  background-color: #ececf1;

  @media only screen and (max-width: 1080px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;

const Widget = styled.div`
  grid-column: 3 / 4; 
  grid-row: 2 / span 1; 
  background-color: #ececf1;

  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

const Layout = () => {
  return (
    <GridLayout>
      <GlobalStyles />
      <SidebarGrid>
        <Sidebar />
      </SidebarGrid>
      <Topbar>
        <Navbar />
      </Topbar>
      <MainContent>
        <Content />
      </MainContent>
      <Widget>
        <Widgets />
      </Widget>
    </GridLayout>
  );
};

export default Layout;
