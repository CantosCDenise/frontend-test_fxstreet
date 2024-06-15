import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
    display: flex;
    width: 20vw;
    background-color: blue;
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <h1>Sidebar</h1>
        </SidebarContainer>
    );
};

export default Sidebar;