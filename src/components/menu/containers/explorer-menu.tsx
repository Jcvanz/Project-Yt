import { 
  MenuItem,
  MenuItemDescription,
  ButtonIcon,
  MenuContainer
} from "../styles";
import { useAppContext } from "../../../contexts/OpenMenu";
import Config from '../../../assets/menuAssets/configIcon.png';
import complaint from '../../../assets/menuAssets/denIcon.png';
import Help from '../../../assets/menuAssets/helpIcon.png';
import Feedback from '../../../assets/menuAssets/feedbackIcon.png';

const items = [
  {icon: Config, description: 'Configurações'},
  {icon: complaint, description: 'Histórico de denúncias'},
  {icon: Help, description: 'Ajuda'},
  {icon: Feedback, description: 'Enviar feedback'},
]

function ConfigMenu() {

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

export default ConfigMenu;