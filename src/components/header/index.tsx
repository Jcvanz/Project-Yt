import { 
    ButtonContainer, 
    Container, 
    LogoContainer, 
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButtons
} from "./styles";
import HamburgerIcon from '../../assets/headerAssets/hamburgerMenuIcon.png';
import YoutubeLogo from '../../assets/headerAssets/youtubeLogo.png';
import LoupeIcon from '../../assets/headerAssets/loupeIcon.png';
import MicIcon from '../../assets/headerAssets/microphoneIcon.png';
import AddVideoIcon from '../../assets/headerAssets/addVideoIcon.png';
import NotificationIcon from '../../assets/headerAssets/notificationIcon.png';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

interface IProps {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
}

function Header({openMenu, setOpenMenu}: IProps) {
    const { login, logOut } = useContext(UserContext);
    const navigate = useNavigate();

    return(
        <div>
            <Container>
                <LogoContainer>
                    <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 5px'>
                        <ButtonIcon src={HamburgerIcon} alt=""/>
                    </ButtonContainer>
                    <img 
                        style={{ cursor: 'pointer', width: '100px' }}
                        src={YoutubeLogo}
                        alt=""
                    />
                </LogoContainer>
                <SearchContainer>
                    <SearchInputContainer>
                        <SearchInput placeholder="Pesquisar"/>
                    </SearchInputContainer>
                    <SearchButton>
                        <ButtonIcon alt="" src={LoupeIcon} />
                    </SearchButton>
                    <ButtonContainer margin='0 0 0 5px'>
                        <ButtonIcon alt="" src={MicIcon}/>
                    </ButtonContainer>
                </SearchContainer>
                <HeaderButtons>
                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={AddVideoIcon}/>
                    </ButtonContainer>
                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={NotificationIcon}/>
                    </ButtonContainer>

                    {login?
                        <>
                            <ButtonContainer margin='0 0 0 10px'>
                                J
                            </ButtonContainer>
                            <span onClick={() => logOut()}>Sair</span> 
                        </> :
                        <button onClick={() => navigate('/login')}>Fazer login</button>
                    }
                </HeaderButtons>
            </Container>
        </div>
    )
}

export default Header;