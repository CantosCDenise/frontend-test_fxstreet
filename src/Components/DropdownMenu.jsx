import React, { useState } from "react";
import styled from "styled-components";
import DropdownIcon from '../icons/dots.svg';
import BackIcon from '../icons/leftarrow.svg';

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownButton = styled.button`
    width: 30px;
    height: 30px;
    
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
        color: #49494F;
        padding: 12px 16px;
        font-size: 16px;
        font-weight: 400;
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

    background-color: #f1f1f1;
    color: #49494F;
    border: none;

    font-size: 16px;
    font-weight: 400;

    img {
        width: 21px;
        height: 17px;
        margin-bottom: 12px;
    }

    &&:hover {
        cursor: pointer;
    }
`;

const SendFormButton = styled.button`
    margin-left: 20px;
    margin-bottom: 10px;
    width: 247px;
    height: 42px;
    font-size: 12.8px;
    font-weight: bold;
    color: lightgray;
    background-color: transparent;
    border: 1px solid lightgray;

`;

const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

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
                        <RadioOption>
                            <input type="radio" name="option" value="manyposts"/>
                            I've seen too many posts on this topic
                        </RadioOption>
                        <RadioOption>
                            <input type="radio" name="option" value="incorrect"/>
                            The information is incorrect
                        </RadioOption>
                        <RadioOption>
                            <input type="radio" name="option" value="postseen"/>
                            I've seen this post before
                        </RadioOption>
                        <RadioOption>
                            <input type="radio" name="option" value="other"/>
                            Other reasons
                        </RadioOption>
                    </RadioGroup>
                    <SendFormButton>Hide content</SendFormButton>
                </FormContainer>
            )}
        </DropdownContainer>
    );
};

export default DropdownMenu;