import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

/* useState version of Map in React */

export function useMap() {
  const [state, setState] = useState(new Map());

  return {
    state,
    setMap: (newMap) => setState(newMap),
    get: (key) => state.get(key),
    has: (key) => state.has(key),
    set: (key, value) =>
      setState((prev) => {
        if (!state.has[key]) return new Map([...prev, [key, value]]);
        const newState = new Map(prev);
        newState.set(key, value);
        return newState;
      }),
    add: (key, value) => setState((prev) => new Map([...prev, [key, value]])),
    delete: (key) =>
      setState((prev) => {
        const newState = new Map(prev);
        newState.delete(key);
        return newState;
      }),
    clear: () => setState((prev) => new Map(prev.clear())),
    toArray: () => {
      const arr = [];
      state.forEach((value, key) => arr.push({ key, value }));
      return arr;
    },
  };
}

export function useSocket(userData, chatMap, selectedId, setMessages) {
  const [pendingData, setPendingData] = useState();

  const socket = useRef();

  useEffect(() => {
    if (!userData?._id) return;
    socket.current = io(`ws://${window.location.hostname}:3000`);
    socket.current.on("getMessage", (data) => {
      console.log(data);
      setPendingData(data);
    });
  }, [setPendingData, userData]);

  const getMessages = useCallback(() => {
    if (chatMap.state.size) return;

    axios.get(`/message/all`).then((res) => {
      let allMessages = res.data;
      if (!allMessages?.length) return;
      let tempChatMap = new Map();
      console.log("fetched");
      allMessages.forEach((message) => {
        const messages = tempChatMap.get(message.guestId) || [];
        tempChatMap.set(message.guestId, [...messages, message]);
      });
      if (chatMap.state !== tempChatMap) chatMap.setMap(tempChatMap);
    });
  }, [chatMap]);

  useEffect(() => {
    if (userData) getMessages();
  }, [userData, getMessages]);

  useEffect(() => {
    if (!userData || !socket?.current) return;
    console.log("userData", userData._id);
    socket.current.emit("addUser", userData._id);
  }, [userData]);

  const updateSelected = useCallback(() => {
    if (selectedId === pendingData?.guestId)
      setMessages((prev) => [...prev, pendingData]);
  }, [selectedId, pendingData, setMessages]);

  useEffect(() => {
    if (!pendingData) return;
    let previousArr = chatMap.get(pendingData.guestId) || [];
    chatMap.add(pendingData.guestId, [...previousArr, pendingData]);
    updateSelected(pendingData);
    setPendingData();
  }, [pendingData, chatMap, updateSelected]);

  return { id: userData?._id, socket, getMessages };
}
