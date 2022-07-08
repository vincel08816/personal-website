import React, { createContext, useCallback, useContext, useState } from "react";
import styled from "styled-components";

export default function useModal(modal) {
  const { onDismiss, onPresent } = useContext(ModalContext);

  const handlePresent = useCallback(() => {
    onPresent(modal);
  }, [modal, onPresent]);

  return [handlePresent, onDismiss];
}

export const ModalContext = createContext({
  onPresent: () => {},
  onDismiss: () => {},
});

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState();

  const handlePresent = useCallback(
    (modalContent) => {
      setContent(modalContent);
      setIsOpen(true);
    },
    [setContent, setIsOpen]
  );

  const handleDismiss = useCallback(() => {
    setContent(undefined);
    setIsOpen(false);
  }, [setContent, setIsOpen]);

  return (
    <ModalContext.Provider
      value={{
        content,
        isOpen,
        onPresent: handlePresent,
        onDismiss: handleDismiss,
      }}
    >
      {children}
      {isOpen && (
        <StyledModalWrapper>
          <StyledModalBackdrop onClick={handleDismiss} />
          {React.isValidElement(content) &&
            React.cloneElement(content, {
              onDismiss: handleDismiss,
            })}
        </StyledModalWrapper>
      )}
    </ModalContext.Provider>
  );
}

const StyledModalWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

const StyledModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
