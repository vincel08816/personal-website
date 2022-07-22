import styled from "styled-components";
import { Display } from "./Display";
import { Hero } from "./Hero";
import React from "react";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Display />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
