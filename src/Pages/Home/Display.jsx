import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import useContainerSize from "../../hooks/useContainerSize";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import { Left, Right } from "./components";

const components = { Education, Experience };

export const Display = () => {
  const { overlay, aboutRef } = useContext(AppContext);
  const OverlayComponent = components[overlay];
  const { width, height, containerRef } = useContainerSize();

  return (
    <>
      <div ref={aboutRef} style={{ marginTop: "-30px", height: "60px" }} />
      <Container ref={containerRef}>
        <Left />
        <Right />
        {OverlayComponent && <OverlayComponent width={width} height={height} />}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  border-radius: 15px;
  margin: 25px 0 75px 0;
  background-color: white;
  width: 95%;
  max-width: 1200px;
  min-height: 600px;
  flex: 1;
  box-shadow: 1px 6px 12px hsl(0, 0%, 75%);

  /* makes text unhighlightable */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -khtml-user-select: none;
`;
