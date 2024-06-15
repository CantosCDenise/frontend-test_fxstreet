import React from "react";
import styled from "styled-components";

const CardPostContainer = styled.div`
    width: 700px;
    height: 626px;
    background-color: black;
`
//Head styles
const CardHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
`
const PostType = styled.span`
    font-size: 10px;
`
const PostSubType = styled.span`
    font-size: 10px;
`
const PublicationTime = styled.span`
    font-size: 10px;
`

//Author styles
const CardAuthor = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const AuthorAvatar = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`
const AuthorName = styled.span`
    font-weight: bold;
`
const AuthorCompany = styled.span`
    color: blanchedalmond;
`
//Content styles
const CardImage = styled.img`
    width: 100%;
    height: 300px; 
    object-fit: cover; 
`

const CardTitle = styled.h1`
    font-size: 20px;
    color: white;
`

const CardContent = styled.p`
    font-size: 16px;
    color: white;
    margin-bottom: 10px;
`
//Button styles
const CardButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const LikeButton = styled.button`
    background-color: lightcoral;
    color: black;
    cursor: pointer;

    &:hover {
        background-color: green;
    }
`
const SaveButton = styled.button`
    background-color: #830202;
    color: black;
    cursor: pointer;
    
    &:hover{
        background-color: green;
    }
`

const CardPost = ({ author, title, feed, subFeed, publicationTime, content, image}) => {
    return (
        <CardPostContainer>
            <CardHead>
                <PostType>{feed}</PostType>
                <PostSubType>{subFeed}</PostSubType>
                <PublicationTime>{publicationTime}</PublicationTime>
            </CardHead>
            <CardAuthor>
                <AuthorAvatar src={author.imageUrl}/>
                <AuthorName>{author.name}</AuthorName>
                <AuthorCompany>{author.companyName}</AuthorCompany>
            </CardAuthor>
            <CardTitle>{title}</CardTitle>
            <CardContent>{content}</CardContent>
            <CardImage src={image} alt="Card Image"/>
        </CardPostContainer>
    )
}

export default CardPost;