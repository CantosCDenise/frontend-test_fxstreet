import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import CardPost from "./CardPost";

const MainContentContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: brown;
`

const MainContent = () => {
    const author = {
        name: "Michel Cano",
        imageUrl: "https://res.cloudinary.com/getoutbcn/image/upload/v1700586859/fxstreet/peter1_vs6rsr.jpg",
        companyName: "Skynet CORP"
    }

    const cardData = {
        author,
        title: "example title",
        feed: "example feed",
        subFeed: "example subfeed",
        publicationTime: "2023-11-19T09:00:00Z",
        content: "example content",
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcStM5tSHdr_tdTlvNYFraRsrY1KWUsPZYI9aEdQ6G1llhY3lgdMJ1rC4blV94cqHOu2TCRgVe7moVdmUT4"
    }

    return (
        <MainContentContainer>
            <Navbar></Navbar>
            <CardPost {...cardData}/>
        </MainContentContainer>
        
    )
}

export default MainContent;