import styled from "styled-components";
import AppBar from "./AppBar";
import Footer from "./Footer";

export default function BaseView({ children }) {
  return (
    <BaseStyle>
      <AppBar />
      <Main>{children}</Main>
      <Footer />
    </BaseStyle>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 95%;
  margin-top: 72px;
`;

const BaseStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: #f3f4f6;
  overflow-x: hidden;
`;
