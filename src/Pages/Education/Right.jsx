import styled from "styled-components";

export default function Right() {
  return (
    <Container>
      <InnerContainer>
        <P>
          <b>Hello! My name is Vincent</b> and I like working with others to
          create web applications in new spaces. My journey into web development
          began at 42 Silicon Valley, a coding school and startup incubator
          located in the Bay Area.
        </P>
        <P>
          <b>42 Silicon Valley</b>
        </P>
        <P>
          The program started with an intensive 28 day selection process where I
          worked on projects varying from a sudoku solver, calculator, and
          fractal. Throughout the next couple months, I worked with peers
          through a self-guided curriculum ranging from implementing standard C
          libraries to a Tetris puzzle solver, honing my algorithmic and
          development skills. At 42, I also met my roommate who later invited me
          to join his startup Simple Breakthrough.
        </P>
        <Wrapper>
          <Image
            src="https://foothillscript.com/wp-content/uploads/2019/12/20191002_175300.jpg"
            alt="42"
          />
        </Wrapper>
        <P>
          <b>Simple Breakthrough</b>
        </P>
        <P>
          Being in a startup, I was fortunate to step into multiple roles. As a
          full stack developer, I was responsible for all things technical,
          providing top quality website design and development services. On the
          frontend, I worked with JavaScript(ES6), EtherJS (Web3), MetaMask,
          MaterialUI, and styled-components. On the backend, I worked with
          Node.js, Express, AlpacaAPI, AWS S3, and MongoDB. I developed websites
          from idea to design to implementation, touching all areas of the
          stack.
        </P>
        <Wrapper>
          <Image
            src="https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2643&q=80"
            alt="Simple Breakthrough"
          />
        </Wrapper>
        <P>
          <b>Continuous Learning</b>
        </P>
        <P>
          As an avid learner, I always seek new learning opportunities, whether
          that is picking up backend technologies such as Go, or enrolling in
          the latest online development courses. During my free time, I apply
          these new skills to personal projects, including a responsive and
          secure chat messenger, and a platform for developers to share
          portfolios and stories.
        </P>
        <Wrapper>
          <Image
            src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
            alt="Studying"
          />
        </Wrapper>
      </InnerContainer>
    </Container>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  margin-top: -12px;
  padding-bottom: 20px;
`;

const Image = styled.img`
  flex: 1;
  margin: 20px 0;
  aspect-ratio: 16/10;
  object-fit: cover;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
`;

const P = styled.div`
  font-size: 18px;
  margin: 0px 5px 24px 5px;
  color: rgb(0, 0, 0, 0.4);
  b {
    color: black;
  }
`;

const InnerContainer = styled.div`
  padding: 80px 72px 80px 60px;
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`;

const Container = styled.div`
  flex: 5;
  overflow-y: scroll;
`;
