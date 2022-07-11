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
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius ornare maximus. Curabitur vitae orci ac purus lacinia condimentum. Praesent dapibus est lorem, ut tincidunt odio accumsan nec. Integer cursus risus non ullamcorper vehicula. Mauris iaculis vehicula est. Nulla iaculis est enim, pretium aliquam mi molestie a. Ut hendrerit porta viverra. Vestibulum convallis vitae massa a vehicula. Donec purus ligula, hendrerit mattis vulputate a, sodales at dolor. Mauris eu tempor turpis, a tristique lorem. Praesent vulputate justo lacus, in consequat urna sodales non. Ut dui leo, consequat nec porta at, varius a nibh. Duis ullamcorper lorem risus, vitae commodo est tempor vitae. Aliquam rutrum, justo at fermentum scelerisque, felis orci accumsan lacus, vel aliquet elit nibh eget nisl.`,
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
  flex: 1;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 900px) {
    flex: 0;
  }
`;

const Section = styled.div`
  padding: 0 48px;
  text-decoration: underline;
  img {
    width: 40px;
    height: 40px;
    margin: 0 7px;
    @media only screen and (max-width: 900px) {
      width: 30px;
      height: 30px;
    }
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
  margin-left: 12px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: 150px;
    justify-content: space-evenly;
  }
`;
