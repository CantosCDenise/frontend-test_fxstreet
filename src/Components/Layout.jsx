import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Latest from "./Latest";
import Widgets from "./Widgets";
import GlobalStyles from "../styles/GlobalStyles";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 250px 4fr 2fr; /* Ajuste de anchuras */
  grid-template-rows: auto auto; /* Topbar | Main Content */
  width: 100vw;
  height: 100vh; /* Altura completa de la ventana */
  overflow: hidden; /* Evitar barra de desplazamiento horizontal */
`;

const SidebarGrid = styled.div`
  grid-column: 1 / 2; /* Ocupa desde la primera hasta la segunda columna */
  grid-row: 1 / span 2; /* Ocupa desde la primera fila hasta el final */
  background-color: #f0f0f0;
`;

const Topbar = styled.div`
  grid-column: 2 / span 2; /* Ocupa desde la primera columna hasta el final */
  grid-row: 1 / 2; /* Ocupa solo la primera fila */
  background-color: #e0e0e0;
`;

const MainContent = styled.div`
  grid-column: 2 / 3; /* Ocupa desde la segunda hasta la tercera columna */
  grid-row: 2 / span 1; /* Ocupa desde la segunda fila hasta el final */
  background-color: #ececf1;
`;

const Widget = styled.div`
  grid-column: 3 / 4; /* Ocupa desde la tercera hasta la cuarta columna */
  grid-row: 2 / span 1; /* Ocupa desde la segunda fila hasta el final */
  background-color: #ececf1;
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
        <Latest />
      </MainContent>
      <Widget>
        <Widgets />
      </Widget>
    </GridLayout>
  );
};

export default Layout;
