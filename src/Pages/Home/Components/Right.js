import styled from "styled-components";
import { ReactComponent as SidebarSVG } from "../../../assets/sidebar.svg";

const Apps = () => {
  return (
    <>
      <AppsContainer style={{ marginTop: "10px" }}>
        {[0, 1, 2, 3].map((a, index) => (
          <AppContainer>
            <img
              style={{ height: "80px", margin: "-5px 0 -15px 0" }}
              key={index + "asdf"}
              src="https://www.blockduelers.io/static/media/logo_outline.a66a7019.png"
              alt="duelers lol"
            />
            Block Duelers
          </AppContainer>
        ))}
      </AppsContainer>
      <AppsContainer style={{ marginTop: "10px" }}>
        {[0, 1, 2, 3].map((a, index) => (
          <AppContainer>
            <img
              style={{ height: "80px", margin: "-5px 0 -15px 0" }}
              key={"asdf" + index}
              src="https://www.blockduelers.io/static/media/logo_outline.a66a7019.png"
              alt="duelers lol"
            />
            Block Duelers
          </AppContainer>
        ))}
      </AppsContainer>
      <AppsContainer></AppsContainer>
    </>
  );
  return (
    <>
      <AppsContainer style={{ marginTop: "10px" }}>
        <AppContainer>Block Duelers</AppContainer>
        <AppContainer>FanFare</AppContainer>
        <AppContainer>StockSwap</AppContainer>
        <AppContainer>NFT Lootbox</AppContainer>
      </AppsContainer>
      <AppsContainer>
        <AppContainer>DevConnector</AppContainer>
        <AppContainer>Telegram Clone</AppContainer>
        <AppContainer>This App?</AppContainer>
        <AppContainer>Please Hire Me lol</AppContainer>
        {/* <div style={{ flex: 1, margin: "8px" }} /> */}
      </AppsContainer>
    </>
  );
};

export default function Right() {
  return (
    <Container>
      <Top>
        <SidebarIcon />
      </Top>
      <Apps />
    </Container>
  );
}

const AppsContainer = styled.div`
  display: flex;
  padding: 8px 48px 0px 48px;
  justify-content: space-between;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  aspect-ratio: 1;
  margin: 8px;
  border-radius: 20px;
  background-color: #e5e2e3;
`;

const Top = styled.div`
  display: flex;
  margin-top: 1%;
  padding: 0 15px;
`;

const Container = styled.div`
  flex: 7;
  padding: 15px;
`;

const SidebarIcon = styled(SidebarSVG)`
  width: 25px;
  height: 25px;
  margin-right: 12px;
`;
