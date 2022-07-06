import styled from "styled-components";
import { Display } from "./Display";
import { Hero } from "./Hero";

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
  flex: 1;
`;
