import styled from "styled-components";

export default function Right() {
  return (
    <Container>
      <p>
        <b>Hello! My name is Vincent</b> and I like working with others to
        create apps in new spaces. My journey into web development actually
        began when my ex-roommate, Jackson, invited me to join his startup
        Simple Breakthrough. His confidence in me eventually lead to me
        believing in myself, allowing me to become the developer I am today.
      </p>
      <p>
        Being in a smaller startup, I was very fortunate to be able to step into
        multiple roles within the company. In the company, I was developing
        mostly the MERN stack, which is all JavaScript(ES6+) stack with a little
        bit of EtherJS(Web3). On the frontend, I was working with MetaMask,
        MaterialUI, styled-components, as well as communicate servers. On the
        backend, I able to work with Express, AlpacaAPI, Node-cron, AWS S3, and
        MongoDB.
      </p>
    </Container>
  );
}

const Container = styled.div`
  padding: 80px 52px 40px 40px;
  flex: 5;
  overflow-y: scroll;
  p {
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 24px;
    color: rgb(0, 0, 0, 0.4);
    b {
      color: black;
    }
  }
`;
