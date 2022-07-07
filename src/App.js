import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BaseView from "./appComponents/BaseView";
import useWindowSize from "./hooks/useWindowSize";
import Home from "./Pages/Home/";

const theme = createTheme({});
export const HomeContext = createContext();

const Wrapper = ({ children }) => {
  const { width, height } = useWindowSize();

  return (
    <ThemeProvider theme={theme}>
      <HomeContext.Provider
        value={{
          width,
          height,
        }}
      >
        <BrowserRouter>
          <BaseView>
            <Routes>{children}</Routes>
          </BaseView>
        </BrowserRouter>
      </HomeContext.Provider>
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
