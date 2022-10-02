import styled from "styled-components";
import imgEmpty from "../assets/empty.svg";

export function Empty() {
  return (
    <Container>
      <img src={imgEmpty} alt="Empty" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 2.4rem;
  height: 30rem;
  width: 100%;
  border-radius: 8px;
  border-top: 2px solid var(--gray400);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    margin-top: 1.6rem;
    color: var(--gray300);
  }
  p {
    color: var(--gray300);
  }

  img {
    width: 5.6rem;
  }
`;
