import styled from "styled-components";
import { Left, Right } from "./Components";

export const Display = () => {
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border-radius: 15px;
  margin: 50px;
  background-color: white;
  width: 95%;
  min-height: 600px;
  flex: 1;
`;
