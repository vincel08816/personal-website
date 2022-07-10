import styled from "styled-components";
import LeetCodeCircle from "../../assets/LeetCodeProgress.png";
import { Bars } from "./Bars";

const LeetCode = () => {
  return (
    <Container>
      <InnerContainer>
        <Title>LeetCode Solved Problems</Title>
        <Image src={LeetCodeCircle} alt={"Circle?"} />
        {Bars}
      </InnerContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button href="https://leetcode.com/vincel08816/" target="_blank">
          See LeetCode Page
        </Button>
      </div>
    </Container>
  );
};

const Button = styled.a`
  margin-top: 15px;
  cursor: pointer;
  color: #fbb964;
  background-color: #f2f3f4;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    background-color: #dcdbdba6;
  }
`;

export default LeetCode;

const Image = styled.img`
  margin-top: 15px;
  width: 180px;
  height: 180px;
`;

const Title = styled.h2`
  font-weight: 1;
  font-size: 24px;
`;

const InnerContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  position: absolute;
  background: white;
  border-radius: 15px;
  box-shadow: 1px 6px 12px hsl(0, 0%, 75%);
  width: 80vw;
  max-width: 600px;
  height: 600px;

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
  transition-timing-function: ease-in;
  transition: 1s;
  animation: 1s ease-out 0s 1 slideInFromLeft;
`;
