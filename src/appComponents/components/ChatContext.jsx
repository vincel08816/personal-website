import { createContext, useContext } from "react";

export const ChatContext = createContext();

export function useChat() {
  return { ...useContext(ChatContext) };
}

export function ChatProvider({ children }) {
  return <ChatContext.Provider value={{}}>{children}</ChatContext.Provider>;
}
