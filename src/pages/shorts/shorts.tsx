import { Container, ShortsContainer } from "./styles";
import { useAppContext } from "../../contexts/OpenMenu";
import Header from "../../components/header/index";
import Menu from "../../components/menu/index";

function Shorts() {

  const { openMenu } = useAppContext();

  return (
    <ShortsContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
        <h1>Página em construção - Shorts</h1>
      </Container>
    </ShortsContainer>
  )
}

export default Shorts;