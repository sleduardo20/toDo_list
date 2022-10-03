import { FormEvent, useState } from "react";
import styled from "styled-components";
import { ListChores } from "./components/ListChores";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { GlobalStyled } from "./styles/global";

function App() {
  const [chores, setChores] = useState<string[]>([]);

  const [description, setDescription] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setChores([...chores, description]);
    setDescription("");
  };

  const removeChore = (index: number) => {
    const newChores = chores.filter((_, i) => i !== index);
    setChores(newChores);
  };

  return (
    <div className="App">
      <Header />
      <Main>
        <Form
          handleSubmit={handleSubmit}
          description={description}
          changeDescription={(value: string) => setDescription(value)}
        />
        <ListChores chores={chores} removeChore={removeChore} />
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
