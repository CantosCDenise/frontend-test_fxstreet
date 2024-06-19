import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <p>Navbar</p>
        </NavbarContainer>
    );
};

export default Navbar;