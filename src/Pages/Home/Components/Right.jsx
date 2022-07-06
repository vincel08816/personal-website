import styled from "styled-components";
import { ReactComponent as SidebarSVG } from "../../../assets/sidebar.svg";
import Apps from "./Apps";

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
