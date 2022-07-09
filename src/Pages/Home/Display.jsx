import styled from "styled-components";
import useApp from "../../contexts/appContext";
import Left from "./components/Left";
import Right from "./components/Right";

export const Display = () => {
  const { aboutRef } = useApp();

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

  /* makes text unhighlightable */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -khtml-user-select: none;
`;
