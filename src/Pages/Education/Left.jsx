import styled from "styled-components";

export default function Left() {
  return (
    <>
      <Container>
        <BackgroundImage src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      </Container>
      <Top>
        <CircleContainer>
          <Circle color={"#fd5d57"} />
          <Circle color={"#fdbc30"} />
          <Circle color={"#2ccb40"} />
        </CircleContainer>
        <Description>EDUCATION</Description>
        <Title>Personal Journey</Title>
        <Title>Into Web Development</Title>
      </Top>
    </>
  );
}

const Description = styled.div`
  margin: 30px 0 8px 40px;
  opacity: 0.6;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 1px 1px #000000;
`;

const Title = styled.h2`
  margin: 0;
  margin-left: 40px;
  margin-bottom: 5px;
  font-size: 32px;
  font-weight: 400;
  text-shadow: 1px 1px #000000;
`;

const CircleContainer = styled.div`
  display: flex;
`;
const Circle = styled.div`
  border-radius: 50%;
  margin: 4px;
  width: 14px;
  height: 14px;
  background-color: ${(props) => props.color};
`;

const Top = styled.div`
  color: white;
  margin: 22px 15px;
  position: fixed;
  display: flex;
  padding: 5 30px;
  flex-direction: column;
`;

const BackgroundImage = styled.img`
  object-fit: cover;
  overflow: hidden;
  aspect-ratio: 1;
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  filter: brightness(65%);

  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const Container = styled.div`
  flex: 4;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #e9e9e9;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
