import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BaseView from "./appComponents/BaseView";
import Home from "./Pages/Home/";

// {!} TODO: Add Not found page if I have time...

const theme = createTheme({});

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <BaseView>
        <Routes>{children}</Routes>
      </BaseView>
    </BrowserRouter>
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
