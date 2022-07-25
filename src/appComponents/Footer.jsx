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
        <FooterIcon
          href="https://github.com/vincel08816/personal-website"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="github-footer"
        />
        <FooterIcon
          href="https://www.linkedin.com/in/vincentlee28"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          alt="linkedin-footer"
        />
      </Section>
    </StyledFooter>
  );
}

const FooterIcon = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <img src={src} alt={alt} />
  </a>
);

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
  background-color: rgba(255, 255, 255, 0.6);
  flex-direction: column;
  height: 180px;
  justify-content: space-around;
  z-index: 2;
`;
