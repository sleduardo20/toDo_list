import styled from "styled-components";
import imgRemove from "../assets/trash.svg";

export function Chore() {
  return (
    <Container>
      <Check />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <RemoveButton>
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
  border-radius: 0.8rem;
  display: flex;
  align-items: flex-start;
  column-gap: 1.2rem;
  justify-content: space-between;
`;

const Circle = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  border: 2px solid var(--blue);
`;

const Check = styled.div`
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
