import styled from "styled-components";
import iconPlus from "../assets/plus.svg";

export function Form() {
  return (
    <Container action="">
      <Input placeholder="Adicione uma nova tarefa" type="text" />
      <Button type="submit">
        Criar <img src={iconPlus} alt="Plus" />
      </Button>
    </Container>
  );
}

const Container = styled.form`
  margin-top: -2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 63.8rem;
  max-width: 63.8rem;
  font-size: 1.6rem;
  color: var(--gray100);
  padding: 1.6rem;
  height: 5.4rem;
  background-color: var(--gray500);
  outline: none;
  border: 0.1rem solid var(--gray700);
  border-radius: 0.8rem;

  & ::placeholder {
    color: var(--gray300);
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.8rem;
  padding: 1.6rem;
  height: 5.4rem;
  font-weight: bold;
  color: var(--gray100);
  background-color: var(--blue-dark);
  outline: none;
  border: 0.1rem solid var(--gray700);
  cursor: pointer;
  width: 9rem;
  border-radius: 0.8rem;
`;
