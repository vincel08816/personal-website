import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [inChat, setInChat] = useState(false);

  const refreshUser = async () =>
    axios
      .get("/auth")
      .then((res) => setUserData(res.data))
      .catch((err) => console.error(err));

  const checkCookie = async () => {
    try {
      const result = await axios.get("/auth");
      setUserData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkCookie().then(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const checkPath = () => {
      const pathname = window.location.pathname;
      if (pathname.length < 3) return !!(pathname[0] && pathname[1] === "c");
      for (let i = 0; i < 3; i++) if ("/c/"[i] !== pathname[i]) return false;
      return true;
    };
    setInChat(!!(userData?.email && checkPath()));
  }, [userData]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  if (isLoading) return null;

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        isLoggedIn: !!userData?.email,
        inChat,
        isLoading,
        refreshUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
