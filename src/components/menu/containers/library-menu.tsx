import { useAppContext } from "../../../contexts/OpenMenu";
import { 
  MenuItem,
  MenuItemDescription,
  ButtonIcon,
  MenuContainer,
} from "../styles";
import History from '../../../assets/menuAssets/historicIcon.png'
import Videos from '../../../assets/menuAssets/myVideosIcon.png'
import Watch from '../../../assets/menuAssets/seeLaterIcon.png'
import Like from '../../../assets/menuAssets/likeIcon.png'
import Play from '../../../assets/menuAssets/li.png'

const items = [
  {icon: History, description: 'Histórico'},
  {icon: Videos, description: 'Seus vídeos'},
  {icon: Watch, description: 'Assistir mais tarde'},
  {icon: Like, description: 'Vídeos marcados como "Gostei"'},
  {icon: Play, description: 'Mix - Cd completo gospel'}
]

function LibraryMenu() {

  const { openMenu } = useAppContext();

  return (
    <MenuContainer>
      {items.map((item, index) => (
        <MenuItem key={index} openMenu={openMenu}>
          <ButtonIcon alt="Ícone" src={item.icon}/>
          <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
        </MenuItem>
      ))}
    </MenuContainer>
  )
}

export default LibraryMenu;