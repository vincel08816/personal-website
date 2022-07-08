import styled from "styled-components";
import { ReactComponent as SidebarSVG } from "../../../assets/sidebar.svg";
import Apps from "./Apps";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <SubSection>
        <small>TECHNOLOGIES</small>
        <h3>JavaScript Full-Stack </h3>
        <p>View the tech stacks and experience offered.</p>
        <CoverImage
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--WPQ75f2s--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/epv55hgtsfi8csprpj9u.jpg"
          alt="mern"
        />
      </SubSection>
      <div style={{ width: "20px" }} />
      <SubSection>
        <small>EDUCATION</small>
        <h3>Personal Journey into Tech</h3>
        <p>Take a look at my motivations and resources.</p>
        <CoverImage
          src="https://cdn.discordapp.com/attachments/594312779545051221/994688681258528798/unknown.png"
          alt="mern"
        />
      </SubSection>
    </AboutMeContainer>
  );
};

export default function Right() {
  return (
    <Container>
      <Title>About Me</Title>
      <Divider />
      <AboutMe />
      <Divider />
      <Apps />
    </Container>
  );
}

const AboutMeContainer = styled.div`
  display: flex;
  margin-bottom: 35px;
`;

const SubSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 5px 0;
    font-weight: 1;
  }
  p {
    margin: 0 0 10px 0;
    color: #c7c7c7;
  }
  small {
    color: #0c7fff;
    margin: 0;
    margin-top: 20px;
    font-weight: bold;
    font-size: 12px;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  aspect-ratio: 816/522;
  object-fit: cover;
  overflow: hidden;
  border-radius: 7px;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const Title = styled.h1`
  display: flex;
  margin-top: 1%;
  margin-bottom: 20px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e2e3;
`;

const Container = styled.div`
  flex: 8;
  padding: 60px 40px 20px 40px;
`;

const SidebarIcon = styled(SidebarSVG)`
  width: 25px;
  height: 25px;
  margin-right: 12px;
`;
