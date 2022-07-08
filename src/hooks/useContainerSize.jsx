import { useEffect, useRef, useState } from "react";

/*
 *  This hook used to find the width and the height of the selected container.
 *  Track the container by setting the ref to the container ref like the example below
 *  <Container ref={containerRef}>Content </Container>
 */

export default function useContainerSize() {
  const [size, setSize] = useState([0, 0]);
  const [width, height] = size;
  const containerRef = useRef();

  useEffect(() => {
    setSize([
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    ]);
  }, []);

  return { width, height, containerRef };
}
