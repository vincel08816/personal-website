import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AppBar from "./AppBar";
import Footer from "./Footer";

export default function BaseView({ children }) {
  return (
    <BaseStyle>
      <AppBar />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flex: 1,
          width: "80%",
          marginTop: "72px",
        }}
      >
        {children}
      </main>
      <Footer />
    </BaseStyle>
  );
}

const BaseStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 99vw;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
`;
