import styled from "styled-components";
import { ReactComponent as InfoSVG } from "../../../assets/info.svg";
import { ReactComponent as MenuSVG } from "../../../assets/menu.svg";
import { ReactComponent as StudySVG } from "../../../assets/study.svg";

const Circles = () => (
  <Top>
    <Circle color={"#fd5d57"} />
    <Circle color={"#fdbc30"} />
    <Circle color={"#2ccb40"} />
  </Top>
);

export default function Left() {
  return (
    <Container>
      <Circles />
      <SelectContainer>
        <Select selected>
          <MenuIcon />
          My Apps
        </Select>
        <Select>
          <StudyIcon />
          LeetCode
        </Select>
        <Select>
          <InfoIcon />
          About
        </Select>
      </SelectContainer>
    </Container>
  );
}

const MenuIcon = styled(MenuSVG)`
  width: 17px;
  height: 17px;
  margin-right: 12px;
`;

const StudyIcon = styled(StudySVG)`
  width: 18px;
  height: 18px;
  margin-right: 12px;
`;

const InfoIcon = styled(InfoSVG)`
  width: 19px;
  height: 19px;
  margin-right: 12px;
`;

const SelectContainer = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-family: "Source Sans Pro", Arial, sans-serif;
`;

const Select = styled.div`
  display: flex;
  cursor: pointer;
  padding: 15px 30px;
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
  margin: 5px;
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color};
`;

const Top = styled.div`
  display: flex;
  margin-top: 1%;
  padding: 0 15px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #e9e9e9;
  padding: 18px 15px;
`;
