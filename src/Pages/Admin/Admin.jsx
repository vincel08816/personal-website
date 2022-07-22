import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Chat from "./chatComponents/Chat";
import { useMap, useSocket } from "./Hooks";
import Login from "./user/Login";
import Signup from "./user/SignUp";

const AdminContext = createContext();

export function useAdmin() {
  return { ...useContext(AdminContext) };
}

export default function Admin() {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState();
  const [messages, setMessages] = useState([]);

  const chatMap = useMap();
  const socketData = useSocket(userData, chatMap, selectedId, setMessages);

  useEffect(() => {
    console.log(chatMap);
  }, [chatMap]);
  const checkCookie = async () => {
    try {
      const result = await axios.get("/auth");
      setUserData(result.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkCookie();
  }, []);

  if (!userData) {
    return isLoading ? (
      <>Loading????</>
    ) : (
      <NoUser {...{ userData, isLoading, setUserData }} />
    );
  }

  return (
    <AdminContext.Provider
      value={{ ...socketData, messages, setSelectedId, chatMap }}
    >
      <Chat />
    </AdminContext.Provider>
  );
}

const NoUser = (props) => {
  const [form, setForm] = useState("Login");

  const parsedProps = { isLoggedIn: !!props.userData, ...props };

  if (window.location.hostname === "localhost") {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup size="large" aria-label="large button group">
          <Button onClick={() => setForm("Login")}>Login</Button>
          <Button onClick={() => setForm("Signup")}>Signup</Button>
        </ButtonGroup>
        {form === "Login" ? (
          <Login {...parsedProps} />
        ) : (
          <Signup {...parsedProps} />
        )}
      </Box>
    );
  }

  return <Login {...parsedProps} />;
};
