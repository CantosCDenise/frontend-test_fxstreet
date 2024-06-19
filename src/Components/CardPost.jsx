import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from '../icons/search.svg';
import ArrowIcon from '../icons/arrow.svg';
import ClockIcon from '../icons/clock.svg';
import { format } from 'date-fns';
import DropdownMenu from "./DropdownMenu";

const CardPostContainer = styled.div`
    width: 95%;
    height: auto;
    
    border: 1px solid #DDDEDF;
    border-radius: 5px;
    color: #49494F;
    background-color: #FFFFFF;
`
//Head styles
const CardTop = styled.div`
    display: flex;
    height: 44px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #f6f6f8;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    @media only screen and (max-width: 1080px) {
    height: auto;
  }

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

    @media only screen and (max-width: 1080px) {
    flex-direction: column;
    margin: 10px;
    gap: 0;

        img {
            display: none;
        }
  }
`
const PostType = styled.span`
    color: #304C70;

    @media only screen and (max-width: 1080px) {
    font-size: 12.8px;
  }
`
const PostSubType = styled.span`
    color: #7598C4;

    @media only screen and (max-width: 1080px) {
    font-size: 16px;
  }
`

const CardTime = styled.div`
    display: flex;
    flex-direction: row;
    color: #49494F;
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
    border-bottom: 1px solid #DDDEDF;
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

    & a{
        color: #e4871b;
        text-decoration: none;
        font-weight: bold;
    }

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
    justify-content: flex-start;
    gap: 8px;
    
    width: 100px;
    height: 19px;

    font-size: 18px;
    font-weight: 400;

    background-color: transparent;
    border: none;
    color: #49494F;

    &:hover {
        color: #D25746;
        cursor: pointer;
    }

    &:hover svg path{
        fill: #D25746;
    }
    
`
const LikedButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 8px;
    
    width: 100px;
    height: 19px;

    font-size: 18px;
    font-weight: 400;

    background-color: transparent;
    border: none;
    color: #D25746;

    &:hover {
        cursor: pointer;
    }

    svg path{
        fill: #D25746;
    }
    svg {
        fill: #D25746;
    }
    
`
const SaveButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 8px;
    
    width: 100px;
    height: 19px;

    font-size: 18px;
    font-weight: 400;

    background-color: transparent;
    border: none;
    color: #49494F;

    &:hover {
        color: #338473;
        cursor: pointer;
    }

    &:hover svg path{
        fill: #338473;
    }
    
`

const SavedButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 8px;
    
    width: 100px;
    height: 19px;

    font-size: 18px;
    font-weight: 400;

    background-color: transparent;
    border: none;
    color: #338473;

    &:hover {
        cursor: pointer;
    }

    svg path{
        fill: #338473;
    }
    svg {
        fill: #338473;
    }
    
`


const LikeIcon = styled.svg`
    width: 21px;
    height: 20px;
`
const SaveIcon = styled.svg`
    width: 15px;
    height: 19px;
`

const CardPost = ({ author, title, feed, subFeed, publicationTime, content}) => {
    const formattedDate = format(new Date(publicationTime), "MMM dd, HH:mm");
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked)
    }
    const handleSaveClick = () => {
        setSaved(!saved)
    }

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
            <ContentContainer>
            <CardContent dangerouslySetInnerHTML={{ __html: content }} />
            <CardOptions>
            {!liked && (
                        <LikeButton onClick={handleLikeClick}>
                            <LikeIcon>
                                <path d="M10.5977 16.3359C12.1602 14.9362 13.3158 13.8783 14.0645 13.1621C14.8132 12.446 15.627 11.5996 16.5059 10.623C17.3848 9.64648 17.987 8.78385 18.3125 8.03516C18.6706 7.28646 18.8496 6.55404 18.8496 5.83789C18.8496 4.79622 18.4915 3.93359 17.7754 3.25C17.0918 2.56641 16.2292 2.22461 15.1875 2.22461C14.3737 2.22461 13.6087 2.45247 12.8926 2.9082C12.209 3.36393 11.737 3.94987 11.4766 4.66602H9.52344C9.26302 3.94987 8.77474 3.36393 8.05859 2.9082C7.375 2.45247 6.6263 2.22461 5.8125 2.22461C4.77083 2.22461 3.89193 2.56641 3.17578 3.25C2.49219 3.93359 2.15039 4.79622 2.15039 5.83789C2.15039 6.55404 2.31315 7.28646 2.63867 8.03516C2.99674 8.78385 3.61523 9.64648 4.49414 10.623C5.37305 11.5996 6.18685 12.446 6.93555 13.1621C7.68424 13.8783 8.83984 14.9362 10.4023 16.3359L10.5 16.4336L10.5977 16.3359ZM15.1875 0.125C16.8151 0.125 18.166 0.678385 19.2402 1.78516C20.347 2.89193 20.9004 4.24284 20.9004 5.83789C20.9004 6.7819 20.7214 7.70964 20.3633 8.62109C20.0052 9.5 19.3379 10.4928 18.3613 11.5996C17.4173 12.7064 16.5547 13.6341 15.7734 14.3828C14.9922 15.1315 13.7389 16.2871 12.0137 17.8496L10.5 19.2168L8.98633 17.8984C6.74023 15.8802 5.11263 14.3665 4.10352 13.3574C3.12695 12.3483 2.21549 11.1602 1.36914 9.79297C0.522786 8.42578 0.0996094 7.10742 0.0996094 5.83789C0.0996094 4.24284 0.636719 2.89193 1.71094 1.78516C2.81771 0.678385 4.1849 0.125 5.8125 0.125C7.70052 0.125 9.26302 0.857422 10.5 2.32227C11.737 0.857422 13.2995 0.125 15.1875 0.125Z" fill="#49494F" />
                            </LikeIcon>
                            <span>Like</span>
                        </LikeButton>
                    )}
                    {liked && (
                        <LikedButton onClick={handleLikeClick}>
                            <LikeIcon>
                            <path d="M10.5 19.2168L8.98633 17.8496C7.26107 16.2871 6.00781 15.1315 5.22656 14.3828C4.44531 13.6341 3.56641 12.7064 2.58984 11.5996C1.64583 10.4928 0.994792 9.5 0.636719 8.62109C0.278646 7.70964 0.0996094 6.7819 0.0996094 5.83789C0.0996094 4.24284 0.636719 2.89193 1.71094 1.78516C2.81771 0.678385 4.1849 0.125 5.8125 0.125C7.70052 0.125 9.26302 0.857422 10.5 2.32227C11.737 0.857422 13.2995 0.125 15.1875 0.125C16.8151 0.125 18.166 0.678385 19.2402 1.78516C20.347 2.89193 20.9004 4.24284 20.9004 5.83789C20.9004 7.10742 20.4772 8.42578 19.6309 9.79297C18.7845 11.1602 17.8568 12.3483 16.8477 13.3574C15.8711 14.3665 14.2598 15.8802 12.0137 17.8984L10.5 19.2168Z" fill="#D25746"/>
                            </LikeIcon>
                            <span>Liked!</span>
                        </LikedButton>
                    )}
                
                {!saved && (
                    <SaveButton onClick={handleSaveClick}>
                    <SaveIcon>
                    <path d="M12.7246 15.75V2.22461H2.27539V15.75L7.5 13.4551L12.7246 15.75ZM12.7246 0.125C13.278 0.125 13.75 0.336589 14.1406 0.759766C14.5638 1.18294 14.7754 1.67122 14.7754 2.22461V18.875L7.5 15.75L0.224609 18.875V2.22461C0.224609 1.67122 0.419922 1.18294 0.810547 0.759766C1.23372 0.336589 1.72201 0.125 2.27539 0.125H12.7246Z" fill="#49494F"/>
                    </SaveIcon>
                    Save
                </SaveButton>
                )}
                {saved && (
                    <SavedButton onClick={handleSaveClick}>
                    <SaveIcon>
                    <path d="M12.7246 0.125C13.278 0.125 13.75 0.336589 14.1406 0.759766C14.5638 1.18294 14.7754 1.67122 14.7754 2.22461V18.875L7.5 15.75L0.224609 18.875V2.22461C0.224609 1.67122 0.419922 1.18294 0.810547 0.759766C1.23372 0.336589 1.72201 0.125 2.27539 0.125H12.7246Z" fill="#338473"/>
                    </SaveIcon>
                    Saved!
                </SavedButton>
                )}
                
                <DropdownMenu/>
            </CardOptions>
            </ContentContainer>
        </CardPostContainer>
    )
}

export default CardPost;