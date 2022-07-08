import styled from "styled-components";

const Experience = (props) => {
  return (
    <Container {...props}>
      <div>Experience</div>
    </Container>
  );
};

export default Experience;

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

  animation: 1s ease-out 0s 1 slideInFromLeft;
  ${({ width, height }) => `width: ${width}px; height: ${height}px`};
`;
