import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 5%;
    background-color: red;
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <h1>Navbar</h1>
        </NavbarContainer>
    );
};

export default Navbar;