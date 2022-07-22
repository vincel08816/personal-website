import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import styled from "styled-components";

const getColor = (active, index) => (active === index ? "#2875ff" : "darkgray");

export default function Nav() {
  const [active, setActive] = useState(2);

  return (
    <Container>
      {[
        { Icon: AccountCircleIcon, fontSize: "35px" },
        { Icon: LocalPhoneIcon, fontSize: "28px" },
        { Icon: ForumRoundedIcon, fontSize: "28px" },
        { Icon: SettingsIcon, fontSize: "28px" },
      ].map(({ Icon, fontSize }, index) => (
        <Button key={index} onClick={() => setActive(index)}>
          <Icon style={{ fontSize, color: getColor(active, index) }} />
        </Button>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-right: 10px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
