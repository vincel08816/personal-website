import { createContext, useContext, useState } from "react";

export const ChatContext = createContext();

export function useChat() {
  return { ...useContext(ChatContext) };
}

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
