import React from "react";
import styled from "styled-components";
import SearchIcon from '../icons/search.svg';
import ArrowIcon from '../icons/arrow.svg';
import ClockIcon from '../icons/clock.svg';
import LikeIcon from '../icons/like.svg';
import SaveIcon from '../icons/save.svg';
import { format } from 'date-fns';
import DropdownMenu from "./DropdownMenu";

const CardPostContainer = styled.div`
    width: 700px;
    height: auto;
    
    border: 1px;
    border-color: #ECECF1;
    color: #49494F;
    background-color: #FFFFFF;

    margin-left: 1px;
`
//Head styles
const CardTop = styled.div`
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
    width: 70%;
    margin-left: 30px;

    gap: 8px;
    

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
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: 102px;
    margin-right: 25px;
`
const PublicationTime = styled.span`
    font-weight: 400;
    font-size: 12.8px;
`
const ContentContainer = styled.div`
    padding: 25px;
    padding-top: 0px;
`

//Author styles
const CardHead = styled.div`
    display: flex;
    padding: 20px;
    padding-bottom: 10px;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    border-bottom: 3px;
    border-color: black;
`

const AuthorAvatar = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
`
const HeadRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`
const AuthorInfo = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #A3A3A8;
`
//Content styles

const CardTitle = styled.span`
    font-size: 22.4px;
    font-weight: 700;
`

const CardContent = styled.p`
    font-size: 19.2px;
    line-height: 22.4px;
    font-weight: 300;
    margin-bottom: 10px;
`
//Button styles
const CardOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 253px;
    height: 21px;
`
const LikeButton = styled.button`
    display: flex;
    flex-direction: row;
    gap: 8px;
    
    width: 70px;
    height: 19px;

    font-size: 18px;
    font-weight: 400;

    background-color: transparent;
    border: none;
    color: #49494F;

    &:hover {
        color: red;
    }
`
const SaveButton = styled.button`
    display: flex;
    flex-direction: row;
    gap: 10px;
    
    width: 70px;
    height: 19px;

    font-size: 18px;
    font-weight: 400;

    background-color: transparent;
    border: none;
    color: #49494F;
    
    &:hover{
        color: green;
    }
`

const Separator = styled.hr`

`

const CardPost = ({ author, title, feed, subFeed, publicationTime, content}) => {
    const formattedDate = format(new Date(publicationTime), "MMM dd, HH:mm");

    return (
        <CardPostContainer>
            <CardTop>
                <CardCategory>
                    <img src={SearchIcon} alt="Search Icon" />
                    <PostType>{feed}</PostType>
                    <img src={ArrowIcon} alt="Arrow Icon" />
                    <PostSubType>{subFeed}</PostSubType>
                </CardCategory>
                <CardTime>
                    <img src={ClockIcon} alt="Clock Icon" />
                    <PublicationTime>{formattedDate}</PublicationTime>
                </CardTime>
            </CardTop>

            

            <CardHead>
                <AuthorAvatar src={author.imageUrl} alt={`${author.name}'s Avatar`}/>
                <HeadRight>
                    <AuthorInfo>
                        {author.name} | {author.companyName}
                    </AuthorInfo>
                    <CardTitle>{title}</CardTitle>
                </HeadRight>
            </CardHead>
            <Separator/>
            <ContentContainer>
            <CardContent dangerouslySetInnerHTML={{ __html: content }} />
            <CardOptions>
                <LikeButton>
                    <img src={LikeIcon} alt="Like Icon" />
                    Like
                </LikeButton>
                <SaveButton>
                    <img src={SaveIcon} alt="Save Icon" />
                    Save
                </SaveButton>
                <DropdownMenu/>
            </CardOptions>
            </ContentContainer>
        </CardPostContainer>
    )
}

export default CardPost;