import { useState } from "react";
import styled from "styled-components";
import { Chore } from "./Chore";
import { Empty } from "./Empty";

interface Props {
  removeChore: (index: number) => void;
  chores: string[];
}

export function ListChores({ chores, removeChore }: Props) {
  const [totalDone, setTotalDone] = useState(0);
  const totalChores = chores.length;

  return (
    <Container>
      <header>
        <strong>
          Tarefas criadas
          <span>{totalChores}</span>
        </strong>
        <strong>
          Concluidas
          <span>
            {totalDone} de {totalChores}
          </span>
        </strong>
      </header>
      {chores.length > 0 ? (
        chores.map((item, index) => (
          <Chore
            key={item}
            description={item}
            removeChore={() => removeChore(index)}
            countDone={(count: number) => setTotalDone(count + totalDone)}
          />
        ))
      ) : (
        <Empty />
      )}
    </Container>
  );
}

const Container = styled.article`
  margin-top: 6.4rem;

  header {
    margin-bottom: 2.4rem;
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
