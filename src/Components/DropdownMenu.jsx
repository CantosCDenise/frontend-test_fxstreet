import React, { useState } from "react";
import styled from "styled-components";
import DropdownIcon from '../icons/dots.svg';

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: lightgray;
    }
`;

const DropdownContent = styled.div`
    display: ${props => (props.show ? 'block' : 'none')};
    position: absolute;
    background-color: white;
    width: 160px;
    z-index: 1;

    & a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;

        &:hover {
            background-color: #f1f1f1;
        }
    }
`

const DropdownMenu = () => {
    const [show, setShow] = useState(false);

    const toggleDropdown = () => {
        setShow(!show);
    };

    return (
        <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
                <img src={DropdownIcon} alt="Dropdown Icon" />
            </DropdownButton>
            <DropdownContent show={show}>
                <a href="#option1">Hide</a>
                <a href="#option2">Improve my feed</a>
            </DropdownContent>
        </DropdownContainer>
    );
};

export default DropdownMenu;