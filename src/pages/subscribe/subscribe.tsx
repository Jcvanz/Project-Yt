import { Container, SubscribeContainer } from "./styles";
import { useAppContext } from "../../contexts/OpenMenu";
import Header from "../../components/header/index";
import Menu from "../../components/menu/index";

function Subscribe() {

  const { openMenu } = useAppContext();

  return (
    <SubscribeContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
        <h1>Página em construção - Subscribe</h1>
      </Container>
    </SubscribeContainer>
  )
}

export default Subscribe;