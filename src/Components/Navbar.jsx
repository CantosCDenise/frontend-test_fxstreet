import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;   
`

const FirstLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    gap: 10px;
    color: #304C70;
    font-size: 15px;

`
const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
    gap: 10px;
    color: #8C8D91;
    font-size: 15px;

    svg {
        fill: #8C8D91;
    }
`
const SvgIcon = styled.svg`
    width: 20px;
    height: 20px;
    fill:#304C70;
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <FirstLink>
                <SvgIcon>
                <path d="M2.8125 3.09766C4.52344 1.38672 6.58594 0.53125 9 0.53125C11.4141 0.53125 13.4648 1.38672 15.1523 3.09766C16.8633 4.78516 17.7188 6.83594 17.7188 9.25C17.7188 11.6641 16.8633 13.7266 15.1523 15.4375C13.4648 17.125 11.4141 17.9688 9 17.9688C6.58594 17.9688 4.52344 17.125 2.8125 15.4375C1.125 13.7266 0.28125 11.6641 0.28125 9.25C0.28125 6.83594 1.125 4.78516 2.8125 3.09766Z" />
                </SvgIcon>
                <p>Link</p>
            </FirstLink>
            <Profile>
            <SvgIcon>
                <path d="M2.8125 3.09766C4.52344 1.38672 6.58594 0.53125 9 0.53125C11.4141 0.53125 13.4648 1.38672 15.1523 3.09766C16.8633 4.78516 17.7188 6.83594 17.7188 9.25C17.7188 11.6641 16.8633 13.7266 15.1523 15.4375C13.4648 17.125 11.4141 17.9688 9 17.9688C6.58594 17.9688 4.52344 17.125 2.8125 15.4375C1.125 13.7266 0.28125 11.6641 0.28125 9.25C0.28125 6.83594 1.125 4.78516 2.8125 3.09766Z" />
                </SvgIcon>
                <p>Profile</p>
            </Profile>
        </NavbarContainer>
    );
};

export default Navbar;