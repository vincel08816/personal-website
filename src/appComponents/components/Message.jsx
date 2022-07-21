import React from "react";
import styled from "styled-components";

const Message = ({ text, isUser }) => {
  return (
    <Container isUser={isUser}>
      <Bubble isUser={isUser}>{text}</Bubble>
    </Container>
  );
};

export default Message;

const Bubble = styled.div`
  padding: 20px;
  margin: 10px 20px;
  border-radius: 8px;
  background-color: ${({ isUser }) => (isUser ? "#f5f5f5" : "#bc45e5")};
  color: ${({ isUser }) => (isUser ? "black" : "white")};
`;

const Container = styled.div`
  display: flex;
  flex-direction: ${({ isUser }) => (isUser ? "row" : "row-reverse")};
`;
