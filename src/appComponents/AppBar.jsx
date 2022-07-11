import { useEffect, useState } from "react";
import styled from "styled-components";
import L from "../assets/L.png";
import V from "../assets/V.png";
import useApp from "../contexts/appContext";
import MobileDrawer from "./MobileDrawer";

const RefButton = ({ text }) => {
  const { executeScroll, openModal, aboutRef } = useApp();

  const handleClick = () => {
    executeScroll(aboutRef);
    setTimeout(() => {
      openModal(text);
    }, 250);
  };

  return (
    <Button hideMobile onClick={handleClick}>
      {text}
    </Button>
  );
};

export default function AppBar() {
  const [headerColor, setHeaderColor] = useState();
  const { openModal } = useApp();

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setHeaderColor(window.scrollY > 1 && "white")
    );
  }, [setHeaderColor]);

  return (
    <TopBar style={{ backgroundColor: headerColor }}>
      <Container>
        <Logo>
          <Image src={V} alt="v" />
          <Image src={L} alt="l" style={{ margin: "-3px 0 3px -32px" }} />
        </Logo>
        <LeftSide>
          {/* <Button style={{ marginLeft: "45px" }}>Home</Button> */}
          {["Experience", "Education"].map((text) => (
            <RefButton key={text} text={text} />
          ))}
        </LeftSide>
        <RightSide>
          <FilledButton
            style={{ marginLeft: "45px" }}
            onClick={() => openModal("Contact")}
          >
            {/* <a
              href="mailto:vincel08816@gmail.com"
              target="_blank"
              rel="noreferrer"
            > */}
            Contact Me
            {/* </a> */}
          </FilledButton>
          <MobileDrawer />
        </RightSide>
      </Container>
    </TopBar>
  );
}

const Button = styled.button`
  font-weight: bold;
  color: rgba(75, 85, 99, 1);
  margin-left: 30px;
  font-size: 16.8px;
  padding: 4px 20px;
  border: none;
  cursor: pointer;
  // change this to onHover later
  border-radius: 9999px;
  background-color: transparent;
  ${(props) =>
    props.hideMobile &&
    `@media only screen and (max-width: 900px) {
      display: none
    }
  `}
`;

const FilledButton = styled(Button)`
  border-radius: 9999px;
  background-color: #374150;
  color: #e0e2e7;
  padding: 7px 20px;
  width: 130px;
  font-size: 16px;
  margin-right: 40px;
  a {
    color: inherit;
    text-decoration: none;
  }

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 64px;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  width: 70px;
`;

const LeftSide = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const RightSide = styled(LeftSide)`
  flex: 0;
  margin-right: 20px;
`;

const TopBar = styled.div`
  display: flex;
  height: 72px;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1201;
  /* background-color: white; */
`;

const Container = styled.div`
  display: flex;
  padding: 4px 15px 4px 56px;
  flex: 1;
`;
