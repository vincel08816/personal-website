import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import styled from "styled-components";
import { useAdmin } from "../Admin";

export default function Header() {
  const { selectedId } = useAdmin();
  return (
    <Container>
      <UserSection>
        <UserImage src="https://cdn.discordapp.com/emojis/998653442425896970.webp?size=96&quality=lossless" />
        <UserInfo>
          <Nickname>{selectedId || "I'm desparate, please hire me"}</Nickname>
          <Description>Hire Me Please</Description>
        </UserInfo>
      </UserSection>
      <IconSection>
        {[<LocalPhoneIcon />, <SearchRoundedIcon />, <MoreHorizIcon />].map(
          (icon, index) => (
            <IconContainer key={index * 10}>{icon}</IconContainer>
          )
        )}
      </IconSection>
    </Container>
  );
}
const UserSection = styled.div`
  display: flex;
  padding: 20px;
  text-align: left;
`;

const UserImage = styled.img`
  border-radius: 50%;
  width: 38px;
  height: 38px;
  margin-right: 10px;
  background-color: darkgrey;
`;

const UserInfo = styled.div``;

const Nickname = styled.div`
  line-height: 1.2;
`;

const Description = styled.div`
  opacity: 0.6;
  font-size: 13px;
`;
const IconSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  color: #2875ff;
`;

const Container = styled.div`
  height: 48px;
  grid-area: header;
  border-left: 1px solid lightgrey;
  box-shadow: 2px 3px 5px lightgrey;
  display: flex;
  align-items: center;
  color: black;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  margin-right: 10px;
  /* background-color: darkgrey; */
  margin: 0 8px;
`;
