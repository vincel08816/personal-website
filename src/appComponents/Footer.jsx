import styled from "styled-components";
import Swal from "sweetalert2";

export default function Footer() {
  return (
    <StyledFooter>
      <Section
        style={{ marginLeft: "24px" }}
        onClick={() =>
          Swal.fire({
            title: "Watch Spy x Family!!",
            text: "Anyaaaa so cuteee.",
            imageUrl:
              "https://c.tenor.com/jiRSjXlEuF0AAAAd/waku-waku-excited.gif",
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Anyaaaa so cuteee",
          })
        }
      >
        Anya Waku Waku
      </Section>
      <Center>Copyright © 2022 Vincent Lee. All rights reserved.</Center>
      <Section style={{ paddingRight: "38px" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="github-footer"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          alt="linkedin-footer"
        />
      </Section>
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
  text-decoration: underline;
  img {
    width: 40px;
    height: 40px;
    margin: 0 7px;
  }
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
