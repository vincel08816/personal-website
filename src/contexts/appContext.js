import { createContext, useContext, useRef, useState } from "react";
import useContainerSize from "../hooks/useContainerSize";
import useWindowSize from "../hooks/useWindowSize";

export default function useApp() {
  return { ...useContext(AppContext) };
}

export const AppContext = createContext();

export function AppProvider({ children }) {
  const containerWatch = useContainerSize();
  const { width, height } = useWindowSize();
  const [overlay, setOverlay] = useState();
  const aboutRef = useRef();

  const executeScroll = () =>
    aboutRef.current.scrollIntoView({ screenTop: "100px", behavior: "smooth" });

  window.scrollTo(0, 0);

  return (
    <AppContext.Provider
      value={{
        width,
        height,
        overlay,
        setOverlay,
        aboutRef,
        executeScroll,
        containerWatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
