import styled from "styled-components";
import logoTodoList from "../assets/todoList.svg";

export function Header() {
  return (
    <Container>
      <img src={logoTodoList} alt="Logo" />
    </Container>
  );
}

const Container = styled.header`
  background-color: var(--gray700);
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
