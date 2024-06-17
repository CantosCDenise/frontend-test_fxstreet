import React, { useState } from "react";
import styled from "styled-components";
import DropdownIcon from '../icons/dots.svg';
import BackIcon from '../icons/leftarrow.svg';

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
    width: 290px;
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
const FormContainer = styled.div`
    position: absolute;
    background-color: white;
    width: 290px;
    z-index: 2;
`;

const BackButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
    height: 48px;

    background-color: lightblue;
    border: none;

    font-size: 16px;
    font-weight: 400;

    &&:hover {
        cursor: pointer;
    }
`;

const SendFormButton = styled.button`
    
`;

const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;

`;

const RadioOption = styled.div`
    margin-bottom: 10px;

    & input {
        margin-right: 10px;
    }
`;


const DropdownMenu = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleHideClick = () => {
        setShowDropdown(false);
        setShowForm(true);
    }
    const handleBackClick = () => {
        setShowForm(false);
        setShowDropdown(true);
    }

    return (
        <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
                <img src={DropdownIcon} alt="Dropdown Icon" />
            </DropdownButton>
            <DropdownContent show={showDropdown}>
                <a href="#hide" onClick={handleHideClick}>Hide</a>
                <a href="#improve">Improve my feed</a>
            </DropdownContent>
            {showForm && (
                <FormContainer>
                    <BackButton onClick={handleBackClick}>
                        <img src={BackIcon} alt="Back Icon" />
                        Tell us why:
                    </BackButton>
                    <RadioGroup>
                        <RadioOption>
                            <input type="radio" name="option" value="notauthor" />
                            I'm not interested in this author
                        </RadioOption>
                        <RadioOption>
                            <input type="radio" name="option" value="nottopic" />
                            I'm not interested in this topic
                        </RadioOption>
                    </RadioGroup>
                    <SendFormButton>Hide content</SendFormButton>
                </FormContainer>
            )}
        </DropdownContainer>
    );
};

export default DropdownMenu;