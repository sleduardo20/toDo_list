import styled from "styled-components";
import { ListChores } from "./components/ListChores";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { GlobalStyled } from "./styles/global";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Form />
        <ListChores />
      </Main>
      <GlobalStyled />
    </div>
  );
}

export default App;

const Main = styled.main`
  margin: 0 auto;
  max-width: 73.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
