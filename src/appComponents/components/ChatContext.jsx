import axios from "axios";
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

  const guestId = window.localStorage.getItem("guestId") || uuidv4();
  window.localStorage.setItem("guestId", guestId);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("");
    socket.current.on("getMessage", (data) => setPendingData(data));
  }, [setPendingData]);

  useEffect(() => {
    axios.get(`/message/guest/${guestId}`).then((res) => {
      setMessages([...res.data]);
    });
  }, [guestId]);

  useEffect(() => {
    socket.current.emit("addUser", guestId);
  }, [socket, guestId]);

  useEffect(() => {
    if (!pendingData) return;
    const newMessage = { isVince: true, text: pendingData.text };
    setMessages((prev) => [...prev, newMessage]);
  }, [pendingData]);

  let value = { messages, setMessages, guestId, socket };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
