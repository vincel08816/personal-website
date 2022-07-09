import styled from "styled-components";
import Left from "./Left";
import Right from "./Right";

const Education = () => {
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  );
};

export default Education;

const Container = styled.div`
  @keyframes slideInFromLeft {
    0% {
      opacity: 0;
      transform: translateX(30%);
    }
    50% {
      opacity: 70;
    }
    100% {
      opacity: 100%;
      transform: translateX(0);
    }
  }

  position: absolute;
  display: flex;
  background: white;
  border-radius: 15px;
  transition-timing-function: ease-in;
  transition: 1s;
  /* margin: 25px 0 75px 0; */
  box-shadow: 1px 6px 12px hsl(0, 0%, 75%);
  width: 80vw;
  max-width: 1200px;
  height: 80%;

  /* makes text unhighlightable */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -khtml-user-select: none;

  animation: 1s ease-out 0s 1 slideInFromLeft;
`;
