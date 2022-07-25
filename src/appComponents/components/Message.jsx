import React from "react";
import styled from "styled-components";

const Message = ({ text, isVince, emoji }) => {
  if (emoji)
    return (
      <Container isVince={isVince}>
        <Bubble isVince={isVince} style={{ fontSize: "82px" }}>
          {emoji}
        </Bubble>
      </Container>
    );

  return (
    <Container isVince={isVince}>
      <Bubble isVince={isVince}>{text}</Bubble>
    </Container>
  );
};

export default Message;

const Bubble = styled.div`
  padding: 18px 22px;
  border-radius: 8px;
  background-color: ${({ isVince }) => (isVince ? "#f5f5f5" : "#bc45e5")};
  color: ${({ isVince }) => (isVince ? "black" : "white")};
  max-width: 60%;
  word-break: break-word;
  white-space: pre-wrap;
`;

const Container = styled.div`
  display: flex;
  flex-direction: ${({ isVince }) => (isVince ? "row" : "row-reverse")};
  margin-bottom: 12px;
`;
