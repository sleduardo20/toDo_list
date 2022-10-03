import { useState } from "react";
import styled from "styled-components";
import imgRemove from "../assets/trash.svg";

interface Props {
  description: string;
  removeChore: () => void;
  countDone: (count: number) => void;
}

export function Chore({ description, removeChore, countDone }: Props) {
  const [isDone, setIsDone] = useState(false);

  return (
    <Container>
      {isDone ? (
        <Check
          onClick={() => {
            setIsDone(false);
            countDone(-1);
          }}
        />
      ) : (
        <Circle
          onClick={() => {
            setIsDone(true);
            countDone(1);
          }}
        />
      )}
      <p>{description}</p>
      <RemoveButton onClick={removeChore}>
        <img src={imgRemove} alt="Remove" />
      </RemoveButton>
    </Container>
  );
}

const Container = styled.div`
  height: 7.2rem;
  padding: 1.6rem;
  background-color: var(--gray500);
  color: var(--gray100);
  font-size: 1.4rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: flex-start;
  column-gap: 1.2rem;
  justify-content: space-between;

  p {
    flex: 1;
  }

  & + & {
    margin-top: 1.2rem;
  }
`;

const Circle = styled.div`
  height: 2.4rem;
  cursor: pointer;
  width: 2.4rem;
  border-radius: 50%;
  border: 2px solid var(--blue);
`;

const Check = styled.div`
  cursor: pointer;
  height: 2.4rem;
  width: 2.4rem;
  background-color: var(--purple);
  border-radius: 50%;
  position: relative;

  ::before {
    content: "";
    width: 7.31px;
    height: 4.69px;
    background-color: var(--purple);
    border-bottom: 2px solid var(--gray100);
    border-left: 2px solid var(--gray100);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-60deg);
  }
`;

const RemoveButton = styled.button`
  background-color: transparent;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  outline: none;
  border: none;
`;
