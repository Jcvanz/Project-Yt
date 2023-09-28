import { 
  MenuItem,
  MenuItemDescription,
  ButtonIcon,
  MenuContainer,
  MenuTitles
} from "../styles";
import { useAppContext } from "../../../contexts/OpenMenu";
import Popular from '../../../assets/menuAssets/fireIcon.png';
import Shopping from '../../../assets/menuAssets/shoppingIcon.png';
import Music from '../../../assets/menuAssets/musicIcon.png';
import Films from '../../../assets/menuAssets/moviesIcon.png';
import Live from '../../../assets/menuAssets/LiveIcon.png';
import Games from '../../../assets/menuAssets/controlIcon.png';
import News from '../../../assets/menuAssets/newsIcon.png';
import Sports from '../../../assets/menuAssets/trofeuIcon.png';
import Learn from '../../../assets/menuAssets/lightIcon.png';

const items = [
  {icon: Popular, description: 'Em alta'},
  {icon: Shopping, description: 'Shopping'},
  {icon: Music, description: 'Música'},
  {icon: Films, description: 'Filmes'},
  {icon: Live, description: 'Ao vivo'},
  {icon: Games, description: 'Jogos'},
  {icon: News, description: 'Notícias'},
  {icon: Sports, description: 'Esportes'},
  {icon: Learn, description: 'Aprender'}
]

function ExplorerMenu() {

  const { openMenu } = useAppContext();

  return (
    <MenuContainer>
      <MenuTitles>
        <span>Explorar</span>
      </MenuTitles>
      {items.map((item, index) => (
        <MenuItem key={index} openMenu={openMenu}>
          <ButtonIcon alt="Ícone" src={item.icon}/>
          <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
        </MenuItem>
      ))}
    </MenuContainer>
  )
}

export default ExplorerMenu;