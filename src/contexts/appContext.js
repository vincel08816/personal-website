import { createContext, useContext, useRef } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Education from "../Pages/Education/Education";
import Experience from "../Pages/Experience/Experience";
import useModal from "./modalContext";

export default function useApp() {
  return { ...useContext(AppContext) };
}

const executeScroll = (whichRef) =>
  whichRef.current.scrollIntoView({ screenTop: "100px", behavior: "smooth" });

export const AppContext = createContext();

export function AppProvider({ children }) {
  const aboutRef = useRef();
  const windowSize = useWindowSize();
  const table = {
    Education: useModal(<Education />),
    Experience: useModal(<Experience />),
  };

  return (
    <AppContext.Provider
      value={{
        windowSize,
        aboutRef,
        executeScroll,
        openModal: (text) => table[text][0](),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
