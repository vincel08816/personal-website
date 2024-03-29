import styled from "styled-components";
import { ReactComponent as MenuSVG } from "../../assets/menu.svg";
import { ReactComponent as StudySVG } from "../../assets/study.svg";
import useApp from "../../contexts/appContext";

const Circles = () => (
  <Top>
    <Circle color={"#fd5d57"} />
    <Circle color={"#fdbc30"} />
    <Circle color={"#2ccb40"} />
  </Top>
);

export default function Left() {
  const { openModal } = useApp();

  return (
    <Container>
      <Circles />
      <SelectContainer>
        <Select selected>
          <MenuIcon />
          My Apps
        </Select>
        <Select onClick={() => openModal("LeetCode")}>
          <StudyIcon />
          LeetCode
        </Select>
      </SelectContainer>
    </Container>
  );
}

const MenuIcon = styled(MenuSVG)`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;

const StudyIcon = styled(StudySVG)`
  width: 17px;
  height: 17px;
  margin-right: 12px;
`;

const SelectContainer = styled.div`
  margin-top: 20px;
  font-size: 16px;
  font-family: "Source Sans Pro", Arial, sans-serif;
`;

const Select = styled.div`
  display: flex;
  cursor: pointer;
  padding: 11px 30px;
  align-items: center;
  border-radius: 8px;
  ${(props) =>
    props.selected &&
    `
    background-color: #bc45e5;
    color: white;
    svg {
      fill: white;
    }
  `}
`;

const Circle = styled.div`
  border-radius: 50%;
  margin: 4px;
  width: 14px;
  height: 14px;
  background-color: ${(props) => props.color};
`;

const Top = styled.div`
  display: flex;
  margin-top: 1%;
  padding: 5 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #e9e9e9;
  padding: 22px 15px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
