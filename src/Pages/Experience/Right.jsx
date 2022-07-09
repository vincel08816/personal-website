import styled from "styled-components";

import { Content } from "./Content";

export default function Right() {
  return (
    <Container>
      <P>
        Hello! My name is Vincent and I have been developing at{" "}
        <b>Simple Breakthrough</b> for 8 months. My main tech-stack includes{" "}
        <i>MongoDB</i>, <i>Express</i>, <i>Node</i>, <i>EtherJS</i>, and{" "}
        <i>React</i>, all of which is in <i>JavaScript(ES6+)</i> and hosted on{" "}
        <i>Heroku</i>. Although my time working at Simple Breakthrough is short,
        I have been able to take on multiple positions such as speaking with
        clients, frontend, backend, and working with new hires and getting them
        familiar with the codebase. The projects I worked on at Simple
        Breakthrough are listed below.
      </P>
      {Content}
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
  -webkit-scrollbar {
    background-color: #fff;
    width: 16px;
  }

  /* background of the scrollbar except button or resizer */
  -webkit-scrollbar-track {
    background-color: #fff;
  }

  /* scrollbar itself */
  -webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
  }

  /* set button(top and bottom of the scrollbar) */
  -webkit-scrollbar-button {
    display: none;
  }
`;
