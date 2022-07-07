import { createContext } from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import { Display } from "./Display";
import { Hero } from "./Hero";

export const HomeContext = createContext();

export default function Home() {
  const { width, height } = useWindowSize();

  return (
    <HomeContext.Provider
      value={{
        width,
        height,
      }}
    >
      <Container>
        <Hero />
        <Display />
      </Container>
    </HomeContext.Provider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
