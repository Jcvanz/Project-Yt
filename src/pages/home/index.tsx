import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";

interface IProps {
    openMenu: boolean;
}

const videos = [{
    image: '', 
    title: 'asasa',
    channel: 'asdsdsa',
    views: '100 mi',
    time: '1 hora'
}]

function Home({openMenu}: IProps) {
    return(
        <Container openMenu={openMenu}>
            {videos.map(() => (
                <VideoComponent videos={videos}/>
            ))}
        </Container>
        
    )
}

export default Home;