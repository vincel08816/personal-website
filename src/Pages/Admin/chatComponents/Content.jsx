import { useRef } from "react";
import styled from "styled-components";
import { useAdmin } from "../Admin";
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
  const { messages } = useAdmin();

  const scrollRef = useRef();

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  return (
    <Container>
      <Messages>
        {messages?.map(({ text, isGuest, _id, emoji }) => (
          <StyledMessage
            key={_id}
            isUser={!isGuest}
            ref={scrollRef}
            emoji={!!emoji}
          >
            {emoji ? emoji : text}
          </StyledMessage>
        ))}
      </Messages>
    </Container>
  );
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

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 6px;
`;

const receive = "white";
const sent = "#6a9eff";

const StyledMessage = styled.div`
  box-shadow: 2px 4px 10px hsl(0, 0%, 65%);
  position: relative;
  font-size: ${(props) => (props.emoji ? 24 : 14)}px;
  padding: 5px 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 60%;
  min-width: 10px;
  min-height: 20px;
  line-height: 1.6;
  text-align: left;
  color: black;

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    bottom: 6px;
  }

  ${(props) =>
    props.isUser
      ? `
      background-color: ${sent};
      margin-left: auto;

      &:before {
        border-left: 6px solid ${sent};
        border-right: 6px solid transparent;
        border-bottom: 6px solid ${sent};
        border-top: 6px solid transparent;
        right: -10px;
      }
      `
      : `
      background-color: ${receive};
      margin-right: auto;

      &:before {
        border-left: 6px solid transparent;
        border-right: 6px solid ${receive};
        border-bottom: 6px solid ${receive};
        border-top: 6px solid transparent;
        left: -10px;
      }
  `}
`;
