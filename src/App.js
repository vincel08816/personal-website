import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BaseView from "./appComponents/BaseView";
import { AppProvider } from "./contexts/appContext";
import { ModalProvider } from "./contexts/modalContext";

import Home from "./Pages/Home/";

const theme = createTheme({});

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <AppProvider>
        <BrowserRouter>
          <BaseView>
            <Routes>{children}</Routes>
          </BaseView>
        </BrowserRouter>
      </AppProvider>
    </ModalProvider>
  </ThemeProvider>
);

export default function App() {
  return (
    <Wrapper>
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Wrapper>
  );
}
