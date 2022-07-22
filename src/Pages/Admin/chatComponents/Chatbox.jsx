import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoodOutlinedIcon from "@mui/icons-material/MoodOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useState } from "react";
import styled from "styled-components";

export default function Chatbox() {
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = async (e) => {};

  const handleChange = (e) => {
    setNewMessage(e.target.value);
    // {!} Add to local storage draft.
  };

  return (
    <Container>
      <Button>
        <AttachFileIcon style={{ fontSize: "28px", color: "darkgray" }} />
      </Button>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Write a message..."
          type="text"
          value={newMessage}
          onChange={handleChange}
        />
      </Form>
      <Button>
        <MoodOutlinedIcon style={{ fontSize: "28px", color: "darkgray" }} />
      </Button>
      <Button onClick={handleSubmit} style={{ marginRight: "15px" }}>
        <SendRoundedIcon style={{ fontSize: "28px", color: "#2875ff" }} />
      </Button>
    </Container>
  );
}

const Button = styled.div`
  display: flex;
  height: 75%;
  aspect-ratio: 1;
  border-radius: 50%;
  margin: 5px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  grid-area: input;
  border-left: 1px solid lightgrey;
  display: flex;
  align-items: center;
  height: 46px;
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  height: 80%;
  margin-left: 0px;
`;

const Input = styled.input`
  flex: 1;
  padding: 0 5px;
  border: none;
`;
