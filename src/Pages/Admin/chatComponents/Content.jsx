import styled from "styled-components";
import Chatbox from "./Chatbox";
import Header from "./Header";

export default function Content() {
  return (
    <ContentContainer>
      <Header />
      <Conversation />
      <Chatbox />
    </ContentContainer>
  );
}

function Conversation() {
  return <Container></Container>;
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Container = styled.div`
  flex: 1;
  border: 1px solid lightgrey;
  border-right: none;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-image: url("https://raw.githubusercontent.com/telegramdesktop/tdesktop/dev/Telegram/Resources/art/bg_initial.jpg");
  background-position-y: -54px;
  background-attachment: fixed;
`;
