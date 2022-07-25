import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import { useState } from "react";
import { ChatProvider } from "./components/ChatContext";
import OpenChat from "./components/OpenChat";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <ChatProvider>
      <OpenChat isOpen={isOpen} />
      <ChatButton onClick={handleClick} isOpen={isOpen} />
    </ChatProvider>
  );
}

const sx = {
  width: "38px",
  height: "38px",
  alignSelf: "center",
  justifySelf: "center",
};

function ChatButton({ onClick, isOpen }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        display: "flex",
        width: "60px",
        height: "60px",
        position: "fixed",
        bottom: `18px`,
        right: "20px",
        borderRadius: "50%",
        backgroundColor: "#bc45e5",
        color: "white",
      }}
    >
      {!isOpen ? <ChatBubbleOutlineIcon sx={sx} /> : <ExpandMoreIcon sx={sx} />}
    </Button>
  );
}
