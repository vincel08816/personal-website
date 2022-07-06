import styled from "styled-components";

export default function AppBar() {
  return (
    <TopBar>
      <Container>
        <Logo>
          <Image
            src="https://cdn.discordapp.com/attachments/594312779545051221/993959492121272380/unknown.png"
            alt="v"
          />
        </Logo>
        <LeftSide>
          <Button style={{ marginLeft: "45px" }}>Home</Button>
          <Button>About Me</Button>
        </LeftSide>
        <RightSide>
          <Button style={{ marginLeft: "45px" }}>Home</Button>
          <Button>🛝</Button> {/* {!} 🛝 */}
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
`;

const Image = styled.img`
  width: 64px;
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
`;

const Container = styled.div`
  display: flex;
  padding: 4px 48px 4px 56px;
  flex: 1;
`;
