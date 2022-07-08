import { createContext, useContext, useRef } from "react";
import useContainerSize from "../hooks/useContainerSize";
import useWindowSize from "../hooks/useWindowSize";
import Education from "../Pages/Education/Education";
import Experience from "../Pages/Experience/Experience";
import useModal from "./modalContext";

export default function useApp() {
  return { ...useContext(AppContext) };
}

export const AppContext = createContext();

export function AppProvider({ children }) {
  const containerWatch = useContainerSize();
  const { width, height } = useWindowSize();
  const [presentEducation] = useModal(<Education />);
  const [presentExperience] = useModal(<Experience />);
  const modals = {
    Education: presentEducation,
    Experience: presentExperience,
  };
  const aboutRef = useRef();
  const openModal = (text) => modals[text]();

  const executeScroll = () =>
    aboutRef.current.scrollIntoView({ screenTop: "100px", behavior: "smooth" });

  return (
    <AppContext.Provider
      value={{
        width,
        height,
        aboutRef,
        executeScroll,
        containerWatch,
        openModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
