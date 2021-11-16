import styled from "styled-components";
import { $white } from "../../styles/variables";
import media from "../../styles/media";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
interface ModalContainerProps {
  backgroundColor: string;
}
export const ModalContainer = styled.div<ModalContainerProps>`
  width: 80vw;
  height: 95vh;
  max-width: 101.7rem;
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : $white};
  overflow-y: auto;
`;
export const Close = styled.div`
  font-weight: normal;
  font-size: 4rem;
  position: absolute;
  top: 0rem;
  right: 3rem;
  padding: 1.5rem;
  color: ${$white};
  cursor: pointer;
  ${media.lessThan("md")`
    right: 1rem;
  `};
  ${media.lessThan("sm")`
    font-size: 2rem;
    right: 0rem;
    padding: 1rem;
  `};
`;
