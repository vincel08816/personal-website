import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoodOutlinedIcon from "@mui/icons-material/MoodOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useAdmin } from "../Admin";

export default function Chatbox() {
  const [newMessage, setNewMessage] = useState("");
  const { selectedId, setMessages, socket } = useAdmin();

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage === "" || newMessage.trim() === "") return;

    if (!selectedId) return;
    const payload = {
      key: Date.now(),
      isGuest: false,
      text: newMessage,
      guestId: selectedId,
      updatedAt: new Date(Date.now()),
    };
    axios
      .post("/message/me", payload)
      .then(() => {
        socket.current.emit("sendMessage", {
          ...payload,
          socketId: socket._id,
        });
        setMessages((prev) => [...prev, payload]);
        setNewMessage("");
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Unable to send message",
          text: err.error,
        })
      );
  };

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <Container>
      <Button>
        <AttachFileIcon style={{ fontSize: "28px", color: "darkgray" }} />
      </Button>
      <Form onSubmit={sendMessage}>
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
      <Button onClick={sendMessage} style={{ marginRight: "15px" }}>
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
  cursor: pointer;
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
