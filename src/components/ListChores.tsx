import styled from "styled-components";
import { Chore } from "./Chore";
import { Empty } from "./Empty";

export function ListChores() {
  return (
    <Container>
      <header>
        <strong>
          Tarefas criadas
          <span>0</span>
        </strong>
        <strong>
          Concluidas
          <span>0 de 5</span>
        </strong>
      </header>
      <Chore />
      <Empty />
    </Container>
  );
}

const Container = styled.article`
  margin-top: 6.4rem;

  header {
    width: 73.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: var(--blue);
    }
    strong + strong {
      color: var(--purple);
    }

    span {
      margin-left: 0.8rem;
      padding: 0.4rem 1rem;
      border-radius: 0.8rem;
      background-color: var(--gray400);
      color: var(--gray200);
    }
  }
`;
