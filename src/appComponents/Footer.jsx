import styled from "styled-components";
import Swal from "sweetalert2";

export default function Footer() {
  return (
    <StyledFooter>
      <Section
        style={{ marginLeft: "24px" }}
        onClick={() =>
          Swal.fire({
            title: "Terms and Conditions",
            icon: "info",
          })
        }
      >
        Terms and Conditions
      </Section>
      <Center>Copyright © 2022 Vincent Lee. All rights reserved.</Center>
      <Section style={{ paddingRight: "38px" }}>
        <a
          href="https://github.com/vincel08816/personal-website"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="github-footer"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/vincentlee28"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="linkedin-footer"
          />
        </a>
      </Section>
    </StyledFooter>
  );
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  padding: 0 48px;
  text-decoration: underline;
  img {
    width: 40px;
    height: 40px;
    margin: 0 7px;
    width: 30px;
    height: 30px;
  }
`;

const StyledFooter = styled.footer`
  color: rgba(156, 163, 175, 1);
  font-family: "Source Sans Pro", Arial, sans-serif;
  display: flex;
  width: 100%;
  align-items: center;
  background-color: white;
  margin-left: 12px;
  flex-direction: column;
  height: 170px;
  justify-content: space-around;
`;
