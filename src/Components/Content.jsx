import React from "react";
import styled from "styled-components";
import CardPost from "./CardPost";


const ContentContainer = styled.div`
    background-color: pink;
`

const Content = () => {
    const author = {
        name: "Michel Cano",
        imageUrl: "https://res.cloudinary.com/getoutbcn/image/upload/v1700586859/fxstreet/peter1_vs6rsr.jpg",
        companyName: "Skynet CORP"
    }

    const cardData = {
        author,
        title: "The economy of bitcoins",
        feed: "Insights",
        subFeed: "Understanding Bitcoin's Value Trends",
        publicationTime: "May 23, 10:44",
        content: "Cryptocurrency markets have experienced unprecedented growth in recent years. The rise of Bitcoin, Ethereum, and other altcoins has reshaped the financial landscape, driving both excitement and uncertainty. Analyzing the market's behavior and the factors influencing these trends is crucial. <a href='https://www.linktosomething.com'>This link refers to an external resource</a>. Furthermore, the implications of decentralized finance (DeFi) and blockchain technology have sparked widespread discussion and innovation in fintech circles.",
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcStM5tSHdr_tdTlvNYFraRsrY1KWUsPZYI9aEdQ6G1llhY3lgdMJ1rC4blV94cqHOu2TCRgVe7moVdmUT4"
    }

    return (
        <ContentContainer>
            <CardPost {...cardData}/>
        </ContentContainer>
        
    )
}

export default Content;