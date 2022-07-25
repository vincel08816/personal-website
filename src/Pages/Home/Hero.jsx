import styled from "styled-components";
import resume from "../../assets/resume.pdf";

const DownloadButton = ({ children, disabled }) => {
  const ButtonType = disabled ? DisabledButton : StyledDownload;
  return (
    <ButtonType>
      <StyledDownloadSVG
        disabled={disabled}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path>
      </StyledDownloadSVG>
      {children}
    </ButtonType>
  );
};

export const Hero = () => (
  <Container>
    <Me>Vincent Lee</Me>
    <RandomLines>
      Software Engineer. JavaScript Fullstack. Mongo, Express, Node, ReactJS and
      more.
    </RandomLines>
    <ButtonContainer>
      <DownloadButton>
        <a href={resume} target="_blank" rel="noreferrer">
          DOWNLOAD VINCENT'S RESUME
        </a>
      </DownloadButton>
    </ButtonContainer>
  </Container>
);
const Me = styled.h1`
  font-size: 75px;
  margin-bottom: 23px;
  font-weight: 900;

  @media only screen and (max-width: 600px) {
    font-size: 62px;
  }
`;

const RandomLines = styled.h2`
  font-weight: 500;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${RandomLines} {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0em; /* Adjust as needed */
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
    /* The typing effect */
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: black;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 20px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: space-between;
    height: 125px;
  }
`;

const StyledDownloadSVG = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${({ disabled }) => (disabled ? "rgba(156, 163, 175, 1)" : "white")};
  padding: 0 4px;
`;

const StyledDownload = styled.button`
  width: 380px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: "Open Sans", Arial, sans-serif;
  margin-left: 30px;
  padding: 16px 56px;
  font-size: 14px;
  color: white;
  background-color: #b634e9;

  /* makes text unhighlightable */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -khtml-user-select: none;

  /* makes it undraggable */
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  &:hover {
    background-color: #9128bb;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  // change this to onHover later
  border-radius: 9999px;
  border: none;
`;

const DisabledButton = styled(StyledDownload)`
  background-color: #e4e2e3;
  /* color: rgba(156, 163, 175, 1); */
  color: black;
  /* cursor: not-allowed; */
  &:hover {
    background-color: #e4e2e3;
  }
`;
