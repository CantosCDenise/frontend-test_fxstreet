import React from "react";
import styled from "styled-components";

const WidgetsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 410px;
    height: 100%;
    background-color: black;
`
const FirstWidget = styled.div`
    width: 100%;
    height: 154px;
    border: 1px;
    background-color: #304C70;
    color: #DDDEDF;
`

const Widgets = () => {
    return (
        <WidgetsContainer>
            <FirstWidget>
                <p>Probando widget</p>
            </FirstWidget>
        </WidgetsContainer>
    )
}

export default Widgets;