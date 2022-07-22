import { createContext, useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

import { v4 as uuidv4 } from "uuid";

export const ChatContext = createContext();

export function useChat() {
  return { ...useContext(ChatContext) };
}

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [pendingData, setPendingData] = useState();

  const guestId = uuidv4();

  const socket = useRef();

  useEffect(() => {
    socket.current = io(`ws://${window.location.hostname}:3000`);
    socket.current.on("getMessage", (data) => setPendingData(data));
  }, [setPendingData]);

  useEffect(() => {
    socket.current.emit("addUser", guestId);
  }, [socket, guestId]);

  useEffect(() => {
    if (!pendingData) return;
    const newMessage = { isVince: true, text: pendingData.text };
    setMessages((prev) => [...prev, newMessage]);
  }, [pendingData]);

  return (
    <ChatContext.Provider value={{ messages, setMessages, guestId }}>
      {children}
    </ChatContext.Provider>
  );
}
