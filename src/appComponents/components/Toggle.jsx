import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer lightTheme={theme === "light"} onClick={toggleTheme}>
      <img
        style={{ width: "18px", height: "18px" }}
        src="https://www.svgrepo.com/show/137591/sun.svg"
        alt="Sun"
      />
      <img
        style={{ width: "18px", height: "18px" }}
        src="https://www.svgrepo.com/show/187683/crescent-moon-moon.svg"
        alt="Moon"
      />
    </ToggleContainer>
  );
};

const ThemeSlider = () => {
  const [theme, setTheme] = useState("light");
  const handleToggle = () => {
    Swal.fire({
      icon: "info",
      title: "Dark Mode is coming soon!",
      text: "Maybe...",
    });
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <Container data-tip data-for="Toggle">
      <Toggle theme={theme} toggleTheme={handleToggle} />
    </Container>
  );
};

const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.containerOnHover};
  margin: 0 auto;
  width: 55px;
  border-radius: 30px;
  border: none;
  border: 1px solid ${({ theme }) => theme.containerOnHover};
  font-size: 0.5rem;
  padding: 6px 7px;
  overflow: hidden;
  cursor: pointer;

  img {
    max-width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

export default ThemeSlider;

const Container = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 17px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
