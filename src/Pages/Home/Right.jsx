import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as RightArrowSVG } from "../../assets/rightArrow.svg";
import useApp from "../../contexts/appContext";
import useWindowSize from "../../hooks/useWindowSize";
import Apps from "./Apps";

const MobilePaginator = ({ panels }) => {
  const [pageIndex, setPageIndex] = useState(0);

  const paginate = () => setPageIndex((prev) => (prev === 1 ? 0 : 1));
  return (
    <AboutMeContainer isMobile>
      <PaginateArrow left onClick={paginate} />
      {panels[pageIndex]}
      <PaginateArrow onClick={paginate} />
    </AboutMeContainer>
  );
};

const AboutMe = () => {
  const { openModal } = useApp();
  const { width } = useWindowSize();

  const panels = [
    <SubSection onClick={() => openModal("Experience")} left>
      <small>TECHNOLOGIES</small>
      <h3>JavaScript Full-Stack </h3>
      <p>View the tech stacks and experience offered.</p>
      <CoverImage
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--xq8xxUmL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://external-preview.redd.it/x7vVnP3L75Wh4ApmXedKjze9b7ZuH5h7oW-4xbHMiHQ.jpg%3Fauto%3Dwebp%26s%3Db7d6873eed8c442bb685a083b3b4bfff6dd009ac"
        alt="mern"
      />
    </SubSection>,
    <SubSection onClick={() => openModal("Education")}>
      <small>EDUCATION</small>
      <h3>Personal Journey into Tech</h3>
      <p>Take a look at my motivations and resources.</p>
      <CoverImage
        src="https://cdn.discordapp.com/attachments/594312779545051221/995061960007753808/unknown.png"
        alt="mern"
      />
    </SubSection>,
  ];
  if (width < 600) return <MobilePaginator panels={panels} />;

  return <AboutMeContainer>{panels}</AboutMeContainer>;
};

const PaginateArrow = styled(RightArrowSVG)`
  margin-top: 30px;
  opacity: 0.4;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  ${(props) => props.left && `transform: rotate(180deg)`};
  ${(props) => (props.left ? `margin-left : -42px` : `margin-right: -42px`)};

  width: 45px;
`;

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

const SubSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  ${(props) => props.left && `margin-right: 20px;`}

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

const AboutMeContainer = styled.div`
  display: flex;
  margin-bottom: 35px;
  ${(props) =>
    props.isMobile &&
    `
    ${SubSection} {
      margin : 30px 0;
    }
    align-items: center;
    justify-content: center;
    margin-top : -30px;
    margin-bottom: 20px;

  `};
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
