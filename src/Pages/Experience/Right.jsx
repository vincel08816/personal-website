import styled from "styled-components";

import { Content } from "./Content";

export default function Right() {
  return (
    <Container>
      <P>
        <b>Hello! My name is Vincent</b> and I have been developing at{" "}
        <b>Simple Breakthrough</b>. My main tech-stack includes <i>MongoDB</i>,{" "}
        <i>Express</i>, <i>Node</i>, <i>EtherJS</i>, and <i>React</i>, all of
        which is in <i>JavaScript(ES6+)</i> and hosted on <i>Heroku</i>. I have
        been able to take on multiple positions such as frontend, backend,
        speaking with clients, and working with new hires and getting them
        familiar with the codebase. The projects I worked on at Simple
        Breakthrough are listed below.
      </P>
      <Content />
    </Container>
  );
}

const P = styled.div`
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 24px;
  color: rgb(0, 0, 0, 0.4);
  b {
    color: black;
  }
`;

const Container = styled.div`
  padding: 80px 52px 40px 40px;
  flex: 5;
  overflow-y: auto;
`;
