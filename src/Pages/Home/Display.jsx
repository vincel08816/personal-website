import styled from "styled-components";
import { Left, Right } from "./components";

// {!} Need to change these to be responsive later
// {!} Add box shadow to container

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
  box-shadow: 1px 6px 12px hsl(0, 0%, 75%);
`;
