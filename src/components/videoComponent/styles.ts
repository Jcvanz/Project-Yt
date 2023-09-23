import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const ImageBanner = styled.img`
    width: 100%;
    height: 150px;
    border-radius: 12px;
`;

export const TitleContent = styled.div`
    width: 100%;
    display: flex;
`;

export const ChannelImage = styled.div`
    background-color: beige;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
    font-size: 14px;
    height: 55px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 5px;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 12px;
`;