import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import { Divider, IconButton } from "@mui/material";
import axios from "axios";
import Picker from "emoji-picker-react";
import React, { useState } from "react";
import styled from "styled-components";
import { useChat } from "./ChatContext";

const sx = {
  width: "45px",
  height: "45px",
  alignSelf: "center",
  justifySelf: "center",
};

// {!} Add error message for unsent messages and perhaps UI for unsent messages

export default function Input() {
  const [isEmojiOpen, setEmojiOpen] = useState(false);
  const [message, setMessage] = useState("");
  const { guestId, setMessages, socket } = useChat();

  const onEmojiClick = (e, { emoji }) => {
    if (!guestId || !socket.current) return;
    const payload = { isGuest: true, guestId, emoji };
    axios
      .post("/message", payload)
      .then(() => {
        socket.current.emit("sendMessage", payload);
        setMessages((prev) => [...prev, payload]);
        setEmojiOpen(false);
      })
      .catch((err) => "failed sending emoji");
  };

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message === "" || message.trim() === "") return;

    if (!guestId || !socket.current) return;
    axios
      .post("/message", { isGuest: true, guestId, text: message })
      .then(() => {
        socket.current.emit("sendMessage", {
          isGuest: true,
          guestId,
          text: message,
        });
        setMessages((prev) => [...prev, { isGuest: true, text: message }]);
        setMessage("");
      })
      .catch(() => "failed sending message");
  };

  return (
    <>
      <PickerContainer isOpen={isEmojiOpen}>
        <Picker onEmojiClick={onEmojiClick} />
      </PickerContainer>
      <Divider />
      <TextFieldContainer>
        <Form onSubmit={sendMessage}>
          <InputField
            placeholder="Write a reply"
            type="text"
            value={message}
            onChange={handleOnChange}
          />
        </Form>
        <IconButton sx={sx} onClick={() => setEmojiOpen(!isEmojiOpen)}>
          <InsertEmoticonIcon />
        </IconButton>
        {message?.length ? (
          <IconButton sx={sx} onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        ) : null}
      </TextFieldContainer>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex: 1;
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`;

const InputField = styled.input`
  flex: 1;
  padding: 0 5px;
  border: none;
  background-color: transparent;
`;

const TextFieldContainer = styled.div`
  display: flex;
  padding: 0 10px;
`;

const PickerContainer = styled.div`
  position: absolute;
  display: ${(props) => (props.isOpen ? `flex` : `none`)};
  right: 10px;
  bottom: 65px;
`;
