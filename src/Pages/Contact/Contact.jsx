import MailIcon from "@mui/icons-material/Mail";
import styled from "styled-components";

const LeetCode = () => {
  return (
    <Container>
      <InnerContainer>
        <Title>Contact Me</Title>
        <Divider />
        <p>
          Feel free to contact me by LinkedIn or email about any opportunities!
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button href="https://linkedin.com/in/vincentlee28" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="linkedin-footer"
            />
            Connect on LinkedIn
          </Button>
          <Button
            style={{ marginLeft: "20px" }}
            href="mailto:vincel08816@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MailIcon style={{ marginRight: "7px" }} />
            Email me
          </Button>
        </div>
      </InnerContainer>
    </Container>
  );
};

export default LeetCode;

const Title = styled.h3`
  font-size: 32px;
  margin: 10px;
`;

const InnerContainer = styled.div`
  text-align: center;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(156, 163, 175, 1);
  margin: 10px 0;
`;

const Button = styled.a`
  display: flex;
  margin-top: 15px;
  cursor: pointer;
  color: inherit;
  background-color: #f2f3f4;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 500;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #dcdbdba6;
  }

  img {
    width: 22px;
    height: 22px;
    margin: 0 7px;
  }
`;

const Container = styled.div`
  position: absolute;
  background: white;
  border-radius: 15px;
  box-shadow: 1px 6px 12px hsl(0, 0%, 75%);

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
