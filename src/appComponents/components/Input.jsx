import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import { Divider, IconButton, TextField } from "@mui/material";
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

const Input = () => {
  const [isEmojiOpen, setEmojiOpen] = useState(false);
  const [message, setMessage] = useState("");
  const { setMessages } = useChat();

  const onEmojiClick = (event, emojiObject) => {
    setMessages((prev) => [...prev, { emoji: emojiObject.emoji }]);
    setEmojiOpen(false);
  };

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    setMessages((prev) => [...prev, { text: message }]);
    setMessage("");
  };

  return (
    <>
      <PickerContainer isOpen={isEmojiOpen}>
        <Picker onEmojiClick={onEmojiClick} />
      </PickerContainer>
      <Divider />
      <TextFieldContainer>
        <TextField
          sx={{ flex: 1, padding: "12px", width: "100%" }}
          placeholder="Write a reply"
          // maxRows={3}
          // multiline
          variant="standard"
          InputProps={{ disableUnderline: true }}
          value={message}
          onChange={handleOnChange}
        />
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
};

export default Input;

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
