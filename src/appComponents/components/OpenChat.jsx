import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Message from "./Message";

function Messages() {
  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
      <Message isUser text="message" />
      <Message text="message" />
    </div>
  );
}

export default function OpenChat({ bottom }) {
  return (
    <Container bottom={bottom}>
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
`;
