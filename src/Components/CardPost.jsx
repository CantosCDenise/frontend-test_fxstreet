import React from "react";
import styled from "styled-components";
import SearchIcon from '../icons/search.svg';
import ArrowIcon from '../icons/arrow.svg';
import { format } from 'date-fns';


const CardPostContainer = styled.div`
    width: 700px;
    height: 626px;
    background-color: #FFFFFF;
    border: 1px;
    border-color: #ECECF1;
    color: #49494F;
    margin-left: 1px;
`
//Head styles
const CardHead = styled.div`
    display: flex;
    height: 44px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #f6f6f8;
`
const CardCategory = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;

    gap: 5px;
    

    font-size: 17.6px;
    font-weight: 700;
    line-height: 20.8px;
`
const PostType = styled.span`
    color: #304C70;
`
const PostSubType = styled.span`
    color: #7598C4;
`

const CardTime = styled.div`
    width: 102px;
`
const PublicationTime = styled.span`
    font-weight: 400;
    font-size: 12.8px;
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
    font-size: 22.4px;
    font-weight: 700;
    line-height: 25.6px;
`

const CardContent = styled.p`
    font-size: 19.2px;
    line-height: 22.4px;
    font-weight: 300;
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
    const formattedDate = format(new Date(publicationTime), "PPpp");

    return (
        <CardPostContainer>
            <CardHead>
                <CardCategory>
                    <img src={SearchIcon} alt="Search Icon" />
                    <PostType>{feed}</PostType>
                    <img src={ArrowIcon} alt="Arrow Icon" />
                    <PostSubType>{subFeed}</PostSubType>
                </CardCategory>
                <CardTime>
                    <PublicationTime>{formattedDate}</PublicationTime>
                </CardTime>
            </CardHead>
            <CardAuthor>
                <AuthorAvatar src={author.imageUrl} alt={`${author.name}'s Avatar`}/>
                <div>
                    <AuthorName>{author.name}</AuthorName>
                    <AuthorCompany>{author.companyName}</AuthorCompany>
                </div>
            </CardAuthor>
            <CardTitle>{title}</CardTitle>
            <CardContent dangerouslySetInnerHTML={{ __html: content }} />
            {image && <CardImage src={image} alt="Card Image" />}
        </CardPostContainer>
    )
}

export default CardPost;