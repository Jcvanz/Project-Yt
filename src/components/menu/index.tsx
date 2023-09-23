import { 
    Container, 
    MenuItem, 
    ButtonIcon, 
    Divider,
    SpanTitle
} from "./styles";
import HomeIcon from '../../assets/menuAssets/buttonHomeIcon.png';
import ShortsIcon from '../../assets/menuAssets/shortsIcon.png';
import SubscribeIcon from '../../assets/menuAssets/subscribeIcon.png';
import LiberyIcon from '../../assets/menuAssets/liberyIcon.png';
import HistoricIcon from '../../assets/menuAssets/historicIcon.png';
import MyVideosIcon from '../../assets/menuAssets/myVideosIcon.png'; 
import LaterIcon from '../../assets/menuAssets/seeLaterIcon.png';
import LikeIcon from '../../assets/menuAssets/likeIcon.png';
import SearchChanelIcon from '../../assets/menuAssets/searchChanaisIcon.png';
import FireIcon from '../../assets/menuAssets/fireIcon.png';
import ShoppIcon from '../../assets/menuAssets/shoppingIcon.png';
import MusicIcon from '../../assets/menuAssets/musicIcon.png';
import MoviesIcon from '../../assets/menuAssets/moviesIcon.png';
import LiveIcon from '../../assets/menuAssets/LiveIcon.png';
import GamesIcon from '../../assets/menuAssets/controlIcon.png';
import NewsIcon from '../../assets/menuAssets/newsIcon.png';
import SportsIcon from '../../assets/menuAssets/trofeuIcon.png';
import LearnIcon from '../../assets/menuAssets/lightIcon.png';
import YoutubePremiumIcon from '../../assets/menuAssets/youtubePremiumIcon.png';
import YoutubeStudioIcon from '../../assets/menuAssets/youtubeStudioIcon.png';
import YoutubeMusicIcon from '../../assets/menuAssets/youtubeMusicIcon.png';
import YoutubeKidsIcon from '../../assets/menuAssets/youtubeKidsIcon.png';
import ConfigIcon from '../../assets/menuAssets/configIcon.png';
import DenIcon from '../../assets/menuAssets/denIcon.png';
import HelpIcon from '../../assets/menuAssets/helpIcon.png';
import FeedbackIcon from '../../assets/menuAssets/feedbackIcon.png';
import { useNavigate } from "react-router-dom";

const items = [
    {name: 'Início', link: '/'},
];

interface IProps {
    openMenu: boolean;
}

function Menu({openMenu}: IProps) {
    const navigate = useNavigate();
    return(
        <div>
            <Container openMenu={openMenu}>
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={HomeIcon} alt=""/>
                        <span>Início</span>
                    </MenuItem>
                ))}
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={ShortsIcon} alt=""/>
                        <span>Shorts</span>
                    </MenuItem>
                ))}
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={SubscribeIcon} alt=""/>
                        <span>Inscrições</span>
                    </MenuItem>
                ))}  
                <Divider openMenu={openMenu}/>
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={LiberyIcon} alt=""/>
                        <span>Biblioteca</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={HistoricIcon} alt=""/>
                        <span>Histórico</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={MyVideosIcon} alt=""/>
                        <span>Seus vídeos</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={LaterIcon} alt=""/>
                        <span>Assistir mais tarde</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={LikeIcon} alt=""/>
                        <span>Vídeos marcados com gostei</span>
                    </MenuItem>
                ))} 
                <Divider openMenu={openMenu}/>
                <SpanTitle openMenu={openMenu}>Inscrições</SpanTitle>
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={SearchChanelIcon} alt=""/>
                        <span>Procurar canais</span>
                    </MenuItem>
                ))}   
                <Divider openMenu={openMenu}/>
                <SpanTitle openMenu={openMenu}>Explorar</SpanTitle>
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={FireIcon} alt=""/>
                        <span>Em alta</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={ShoppIcon} alt=""/>
                        <span>Shopping</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={MusicIcon} alt=""/>
                        <span>Música</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={MoviesIcon} alt=""/>
                        <span>Filmes</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={LiveIcon} alt=""/>
                        <span>Ao vivo</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={GamesIcon} alt=""/>
                        <span>Jogos</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={NewsIcon} alt=""/>
                        <span>Notícias</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={SportsIcon} alt=""/>
                        <span>Esportes</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={LearnIcon} alt=""/>
                        <span>Aprender</span>
                    </MenuItem>
                ))} 
                <Divider openMenu={openMenu}/>
                <SpanTitle openMenu={openMenu}>Mais do YouTube</SpanTitle>
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={YoutubePremiumIcon} alt=""/>
                        <span>YouTube Premium</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={YoutubeStudioIcon} alt=""/>
                        <span>YouTube Studio</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={YoutubeMusicIcon} alt=""/>
                        <span>YouTube Music</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={YoutubeKidsIcon} alt=""/>
                        <span>YouTube Kids</span>
                    </MenuItem>
                ))} 
                <Divider openMenu={openMenu}/>
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={ConfigIcon} alt=""/>
                        <span>Configurações</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={DenIcon} alt=""/>
                        <span>Histórico de denúncias</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={HelpIcon} alt=""/>
                        <span>Ajuda</span>
                    </MenuItem>
                ))} 
                {items.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon src={FeedbackIcon} alt=""/>
                        <span>Envias feedback</span>
                    </MenuItem>
                ))} 
            </Container>
        </div>
    )
}

export default Menu;