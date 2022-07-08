import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import { Left, Right } from "./components";

// {!} Need to change these to be responsive later
// {!} Add box shadow to container

export const Display = () => {
  const { aboutRef } = useContext(AppContext);

  return (
    <>
      <div ref={aboutRef} style={{ marginTop: "-30px", height: "60px" }} />
      <Container>
        <Left />
        <Right />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  border-radius: 15px;
  margin: 25px 0 75px 0;
  background-color: white;
  width: 95%;
  max-width: 1200px;
  min-height: 600px;
  flex: 1;
  box-shadow: 1px 6px 12px hsl(0, 0%, 75%);
`;
