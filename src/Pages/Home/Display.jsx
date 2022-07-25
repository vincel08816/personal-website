import styled from "styled-components";
import useApp from "../../contexts/appContext";
import Left from "./Left";
import Right from "./Right";

export const Display = () => {
  const { aboutRef } = useApp();

  return (
    <>
      <div ref={aboutRef} style={{ marginTop: "-30px", height: "60px" }} />
      <Container>
        <InnerContainer>
          <Left />
          <Right />
        </InnerContainer>
      </Container>
    </>
  );
};

const InnerContainer = styled.div`
  display: flex;
  border-radius: 15px;
  margin: 25px 0 75px 0;
  background-color: white;
  min-height: 600px;
  box-shadow: 1px 6px 12px hsl(0, 0%, 75%);
`;

const Container = styled.div`
  max-width: 1200px;
  /* makes text unhighlightable */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -khtml-user-select: none;

  @keyframes fadeUp {
    0% {
      opacity: 0%;
      transform: translateY(10%);
    }
    100% {
      opacity: 100%;
      transform: translateY(0);
    }
  }
  transition-timing-function: ease-in;
  transition: 1s;
  animation: 1.5s ease-out 0s 1 fadeUp;
`;
