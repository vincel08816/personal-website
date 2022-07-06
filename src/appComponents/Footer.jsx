import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <Section>aaaa</Section>
      <Center>Copyright © 2022 Vincent Lee. All rights reserved.</Center>
      <Section>aaaa</Section>
    </StyledFooter>
  );
}

const Center = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Section = styled.div`
  padding: 0 48px;
`;

const StyledFooter = styled.footer`
  color: rgba(156, 163, 175, 1);
  font-family: "Source Sans Pro", Arial, sans-serif;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: white;
`;
