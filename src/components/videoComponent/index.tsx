import { 
    ChannelImage,
    Container, ImageBanner, TextCard, TextContainer, Title, TitleContent, 
} from "./styles";

function VideoComponent({videos}: any) {
    return(
        <Container>
            <ImageBanner src='https://i.ytimg.com/vi/WhU956Zdaic/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDST7tHcrf__T8wWLTHgTJzGYTPjg'/>
            <TitleContent>
                <ChannelImage>
                    JC
                </ChannelImage>
                <TextContainer>
                    <Title>{videos.title}</Title>
                    <TextCard>{videos.channel}</TextCard>
                    <TextCard>{videos.views} de visualizações {videos.time}</TextCard>
                </TextContainer>
            </TitleContent>
        </Container>
    )
}

export default VideoComponent;