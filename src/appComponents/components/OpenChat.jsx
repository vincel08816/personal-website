import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useChat } from "./ChatContext";
import Input from "./Input";
import Message from "./Message";

function Messages() {
  const { messages } = useChat();
  const messageRef = useRef();

  useEffect(() => {
    messageRef.current.scrollIntoView({
      screenTop: "100px",
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <MessagesContainer>
      <Message
        isVince
        text={
          "Hey there 👋" +
          "\n" +
          "\n" +
          "Welcome to My Website! 🙌" +
          "\n" +
          "\n" +
          "Take a look around! If you have any questions, just reply to this message." +
          "\n" +
          "\n" +
          "Vincent."
        }
      />
      {messages.map(({ text, isGuest, emoji }, i) => (
        <Message
          text={text}
          isVince={!isGuest}
          key={i + "message"}
          emoji={emoji}
        />
      ))}
      <div ref={messageRef} />
    </MessagesContainer>
  );
}

export default function OpenChat({ isOpen }) {
  return (
    <Container isOpen={isOpen}>
      <InnerContainer>
        <ChatTop>
          <DisplayInfo>
            <UserCircle>
              VL <StatusCircle />
            </UserCircle>
            <UserInfo>
              <Name>Vincent Lee</Name>
              <Status>Away</Status>
            </UserInfo>
          </DisplayInfo>
        </ChatTop>
        <Messages />
        <Input />
      </InnerContainer>
    </Container>
  );
}

const MessagesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  overflow-x: auto;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const UserCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bc45e5;
  margin-right: 10px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: 500;
`;
const Status = styled.small`
  opacity: 0.8;
`;

const StatusCircle = styled.div`
  position: fixed;
  margin-left: 30px;
  margin-top: 25px;
  background-color: #f5a419;
  width: 8px;
  height: 8px;
  border: 2px solid #252b36;
  border-radius: 50%;
`;

const ChatTop = styled.div`
  height: 75px;
  display: flex;
  background-color: #252b36;
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  align-items: center;
`;

const DisplayInfo = styled.div`
  display: flex;
  padding: 0 25px;
`;

const Container = styled.div`
  position: fixed;
  width: 400px;
  right: 20px;
  bottom: 103px;
  border-radius: 15px;
  background-color: white;
  height: 80vh;
  max-height: 600px;
  box-shadow: 1px 2px 4px hsl(0, 0%, 75%);
  z-index: 1204;
  ${(props) => !props.isOpen && `display: none`};
`;
