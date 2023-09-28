import { useAppContext } from "../../../contexts/OpenMenu";
import { 
  MenuItem,
  MenuItemDescription,
  ButtonIcon,
  MenuContainer,
  MenuTitles
} from "../styles";
import Premium from '../../../assets/menuAssets/youtubePremiumIcon.png';
import Studio from '../../../assets/menuAssets/youtubeStudioIcon.png';
import Music from '../../../assets/menuAssets/youtubeMusicIcon.png';
import Kids from '../../../assets/menuAssets/youtubeKidsIcon.png';

const items = [
  {icon: Premium, description: 'YouTube Premium'},
  {icon: Studio, description: 'YouTube Studio'},
  {icon: Music, description: 'YouTube Music'},
  {icon: Kids, description: 'YouTube Kids'},
]

function MostMenu() {

  const { openMenu } = useAppContext();

  return (
    <MenuContainer>
      <MenuTitles>
        <span>Mais do YouTube</span>
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

export default MostMenu;