import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import { Left, Right } from "./components";

const components = { Education, Experience };

export const Display = () => {
  const { overlay, aboutRef } = useContext(AppContext);
  const OverlayComponent = components[overlay];
  const containerRef = useRef();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const getContainerSize = () => {
    const newWidth = containerRef.current.clientWidth;
    setWidth(newWidth);
    const newHeight = containerRef.current.clientHeight;
    setHeight(newHeight);
  };

  useEffect(getContainerSize, []);

  return (
    <>
      <div ref={aboutRef} style={{ marginTop: "-30px", height: "60px" }} />
      <Container ref={containerRef}>
        <Left />
        <Right />
        <OverlayComponent width={width} height={height} />
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
`;
