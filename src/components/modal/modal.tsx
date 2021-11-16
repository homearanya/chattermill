import React, { useRef } from "react";
import { Transition } from "react-transition-group";

import { useLockBodyScroll } from "../../utils/hooks";
import { ModalWrapper, ModalContainer, Close } from "./modal.styled";

const duration = 500;
const defaultStyle = {
  transition: `transform ${duration}ms cubic-bezier(0.325, 0.09, 0, 1.28)`,
  transform: `scale(0)`
};

const transitionStyles = {
  entering: { transform: `scale(1)` },
  entered: { transform: `scale(1)` },
  exiting: { transform: `scale(0)` },
  exited: { transform: `scale(0)` }
};

interface ModalProps {
  children: React.ReactNode;
  open?: boolean;
  closeHandler: () => void;
  backgroundColor?: string;
  className?: string;
  mountOnEnter?: boolean;
}

const Modal = ({
  children,
  open = false,
  closeHandler,
  backgroundColor = "#ffffff",
  className,
  mountOnEnter = true,
  ...props
}: ModalProps) => {
  const ref = useRef(null);
  // useOnClickOutside(ref, () => closeHandler())
  // Call hook to lock body scroll
  useLockBodyScroll(open);

  return (
    <Transition in={open} timeout={duration} mountOnEnter={mountOnEnter}>
      {(state: "entering" | "entered" | "exiting" | "exited") => {
        return (
          <ModalWrapper
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
            className={`modal-wrapper${className ? ` ${className}` : ""}`}
          >
            <ModalContainer
              ref={ref}
              id="modal-container"
              className="modal-container"
              backgroundColor={backgroundColor}
            >
              <>
                {children}
                <Close
                  onClick={() => {
                    closeHandler();
                  }}
                >
                  X
                </Close>
              </>
            </ModalContainer>
          </ModalWrapper>
        );
      }}
    </Transition>
  );
};

export default Modal;
