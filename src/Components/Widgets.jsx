import React from "react";
import styled from "styled-components";

const WidgetsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    margin-top: 20px;
    margin-left: 30px;
    gap: 22px;
`
const FirstWidget = styled.div`
    width: 100%;
    height: 154px;
    border: 1px;
    background-color: #304C70;
    color: #DDDEDF;
    border: 1px solid #DDDEDF;
    border-radius: 5px;

    & p{
        font-size: 15px;
        padding: 10px;
    }
`
const Button = styled.button `
    width: 100%;
    height: 56px;
    border: 2px solid #304C70;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
`

const Widgets = () => {
    return (
        <WidgetsContainer>
            <FirstWidget>
                <p>Widget text</p>
            </FirstWidget>
            <Button>Link</Button>
        </WidgetsContainer>
    )
}

export default Widgets;