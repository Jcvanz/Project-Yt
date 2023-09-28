import { useAppContext } from "../../../contexts/OpenMenu";
import { 
  MenuItem,
  MenuItemDescription,
  ButtonIcon,
  MenuContainer,
  Link 
} from "../styles";
import HomeIcon from '../../../assets/menuAssets/buttonHomeIcon.png'
import ShortsLogo from '../../../assets/menuAssets/shortsIcon.png'
import LibraryIcon from '../../../assets/menuAssets/libraryIcon.png'
import SubscribeIcon from '../../../assets/menuAssets/subscribeIcon.png'

const items = [
  {icon: HomeIcon, description: 'Início', link: '/'},
  {icon: ShortsLogo, description: 'Shorts', link: '/shorts'},
  {icon: SubscribeIcon, description: 'Inscrições', link: '/subscribe'},
  {icon: LibraryIcon, description: 'Biblioteca', link: '/library'}
]

function HomeMenu() {

  const { openMenu, setOpenMenu } = useAppContext();

  return (
    <MenuContainer>
      {items.map((item, index) => (
        <Link key={index} to={item.link} onClick={() => setOpenMenu(false)}>
          <MenuItem openMenu={openMenu}>
            <ButtonIcon alt="Ícone" src={item.icon}/>
            <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
          </MenuItem>
        </Link>
      ))}
    </MenuContainer>
  )
}

export default HomeMenu;