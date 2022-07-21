import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import { Divider, IconButton, TextField } from "@mui/material";
import Picker from "emoji-picker-react";
import React, { useState } from "react";
import styled from "styled-components";

const sx = {
  width: "45px",
  height: "45px",
  alignSelf: "center",
  justifySelf: "center",
};

const Input = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [isEmojiOpen, setEmojiOpen] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <>
      <PickerContainer isOpen={isEmojiOpen}>
        <Picker onEmojiClick={onEmojiClick} />
      </PickerContainer>
      <Divider sx={{ marginTop: "12px" }} />
      <TextFieldContainer>
        <TextField
          id="standard-textarea"
          sx={{ flex: 1, padding: "12px" }}
          // label="Multiline Placeholder"
          placeholder="Write a reply"
          multiline
          variant="standard"
          InputProps={{ disableUnderline: true }}
        />
        <IconButton sx={sx} onClick={() => setEmojiOpen(!isEmojiOpen)}>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton sx={sx}>
          <SendIcon />
        </IconButton>
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
