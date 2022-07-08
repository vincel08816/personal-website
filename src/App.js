import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BaseView from "./appComponents/BaseView";
import useWindowSize from "./hooks/useWindowSize";
import Home from "./Pages/Home/";

const theme = createTheme({});
export const AppContext = createContext();

const Wrapper = ({ children }) => {
  const { width, height } = useWindowSize();
  const aboutRef = useRef();
  const [isOpen, setisOpen] = useState(0);

  const executeScroll = () =>
    aboutRef.current.scrollIntoView({ screenTop: "200px", behavior: "smooth" });
  window.scrollTo(0, 0);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          width,
          height,
          isOpen,
          setisOpen,
          aboutRef,
          executeScroll,
        }}
      >
        <BrowserRouter>
          <BaseView>
            <Routes>{children}</Routes>
          </BaseView>
        </BrowserRouter>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <Wrapper>
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Wrapper>
  );
}
