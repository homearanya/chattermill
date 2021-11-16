import styled from "styled-components";

import media from "../../../styles/media";
import { Button, SmallHeading, fadeInTop } from "../../../styles/common.styled";
import {
  $colorPrimary,
  $colorSecondary,
  $white,
  $greyLight
} from "../../../styles/variables";
import { absoluteCenter, animation } from "../../../styles/mixins";
import Modal from "../../modal";
import SignUpCTA from "../../sign-up-cta";

export const FormWrapper = styled.div`
  position: relative;
  box-shadow: 0px 2px 12px #d5daf0;
  padding: 2rem 10rem;
  width: 100%;
  max-width: 83rem;
  margin: 0 auto;
  ${animation(fadeInTop, 1, 0.6)};

  ${media.lessThan("md")`
    padding: 2rem 4rem;
  `}
  ${media.lessThan("sm")`
    padding: 2rem 2rem;
  `}
`;
interface StyledFormProps {
  submitting: boolean;
}
export const StyledForm = styled.form<StyledFormProps>`
  transition: opacity 0.2;
  opacity: ${({ submitting }) => (submitting ? "0" : "1")};
`;

export const StyledHeading = styled(SmallHeading)`
  text-align: center;
  margin-bottom: 3rem;
`;

interface StyledTextareaProps {
  error?: boolean;
}
export const StyledTextArea = styled.textarea<StyledTextareaProps>`
  width: 100%;
  padding: 1rem 1rem 1rem 1rem;
  border: 1px solid ${({ error }) => (error ? "red" : `${$greyLight}`)};
  border-radius: 2px;
  outline: 0;

  ::placeholder {
    color: #9b9b9b;
  }

  transition: border-color 200ms cubic-bezier(0.325, 0.09, 0, 1.28),
    color 200ms cubic-bezier(0.325, 0.09, 0, 1.28);

  :focus {
    outline: 0;
  }
`;
export const ControlField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem;
  padding: 0rem 1rem 1rem 0rem;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  margin: 2rem 0 4rem;
  text-align: center;

  &&::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    background-color: ${$colorPrimary};
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    svg {
      ${absoluteCenter};
      z-index: 1;
    }
  }
`;

export const StyledButton = styled(Button)`
  position: relative;
  border-radius: 5px !important;

  &&,
  &&:link,
  &&:visited {
    font-size: 2rem;
    background-color: ${$colorPrimary};
    color: ${$white};
    border: 1px solid ${$colorPrimary};
    padding: 1rem 3rem;
  }

  &&:hover,
  &&:active {
    background-color: ${$white};
    color: ${$colorPrimary};
  }
`;
export const ResultWrapper = styled.div`
  position: relative;
  margin-top: 80px;
  height: 60px;
  margin-bottom: -130px;
  @media (max-width: 423px) {
    margin-top: 100px;
    margin-bottom: -150px;
  }
`;
export const ResultMessage = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

export const StyledText = styled.div`
  ${absoluteCenter};
  font-size: 1.6rem;
  padding: 0 10px;
  text-align: center;
  width: 100%;
`;

export const StyledAnimation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  video {
    width: 15rem;
    height: 15rem;
  }
`;

export const SentimentCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledModal = styled(Modal)`
  .modal-container {
    width: unset;
    height: unset;
    overflow: hidden;
    background: transparent;
  }
`;
export const StyledSignUpCTA = styled(SignUpCTA)`
  width: 100vw;
  max-width: 51.6rem;
`;
export const Info = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: center;
  color: ${$colorSecondary};
`;
