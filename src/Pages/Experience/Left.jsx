import styled from "styled-components";

export default function Left() {
  return (
    <Container>
      <Top>
        <CircleContainer>
          <Circle color={"#fd5d57"} />
          <Circle color={"#fdbc30"} />
          <Circle color={"#2ccb40"} />
        </CircleContainer>
        <Description>Lorem Ipsum Sucks</Description>
        <Title>Vincent's Skills</Title>
        <Title>And Languages</Title>
      </Top>
      <BackgroundImage src="https://res.cloudinary.com/practicaldev/image/fetch/s--xq8xxUmL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://external-preview.redd.it/x7vVnP3L75Wh4ApmXedKjze9b7ZuH5h7oW-4xbHMiHQ.jpg%3Fauto%3Dwebp%26s%3Db7d6873eed8c442bb685a083b3b4bfff6dd009ac" />
    </Container>
  );
}

const Description = styled.div`
  margin: 30px 0 8px 40px;
  opacity: 0.6;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0;
  margin-left: 40px;
  margin-bottom: 5px;
  font-size: 32px;
  font-weight: 400;
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
`;

const Container = styled.div`
  color: white;
  flex: 4;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #e9e9e9;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
