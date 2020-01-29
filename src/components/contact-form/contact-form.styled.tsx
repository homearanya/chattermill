import styled from "styled-components"

import media from "../../styles/media"
import { $white, $colorPrimary, $greyLight } from "../../styles/variables"
import { Button } from "../../styles/common.styled"
import { absoluteCenter, boxShadow } from "../../styles/mixins"

export const StyledLabel = styled.label`
  font-size: 1.6rem;
`
interface StyledInputProps {
  error?: boolean
}
export const StyledInput = styled.input<StyledInputProps>`
  && {
    display: block;
    font-size: 1.6rem;
    width: 100%;
    padding: 1rem 0 1rem 1.6rem;
    border: 1px solid ${({ error }) => (error ? "red" : `${$greyLight}`)};
    border-radius: 2px;
    text-align: left;
    outline: 0;

    ::placeholder {
      color: ${$greyLight};
    }

    transition: border-color 200ms cubic-bezier(0.325, 0.09, 0, 1.28),
      color 200ms cubic-bezier(0.325, 0.09, 0, 1.28);

    :focus {
      outline: 0;
    }
  }
`
export const ControlField = styled.div`
  margin: 0.5rem;
`
interface FieldMessageProps {
  show?: boolean
}
export const FieldMessage = styled.div<FieldMessageProps>`
  opacity: ${({ show }) => (show ? "1" : "0")};
  font-size: 1.4rem;
  line-height: 2rem;
  min-height: 2rem;
  color: red;
  transition: all 0.2s;
`

interface StyledFormProps {
  inView?: boolean
}
export const StyledForm = styled.form<StyledFormProps>`
  margin: 0 auto;
  width: 44rem;

  background-color: ${$white};
  border-color: ${$colorPrimary};
  border-radius: 2px;
  ${boxShadow};
  padding: 3.2rem 3.2rem 4.4rem;

  display: flex;
  flex-direction: column;

  ${media.lessThan("sm")`
    padding: 3.2rem 1.6rem 4.4rem;
    max-width: 41rem;
    width: 100%;
  `}
`
interface StyledButtonProps {
  submitting?: boolean
}
export const StyledButton = styled(Button)<StyledButtonProps>`
  position: relative;
  border-radius: 2px !important;

  &&,
  &&:link,
  &&:visited {
    width: 100%;
    font-size: 2rem;
    background-color: ${$colorPrimary};
    color: ${({ submitting }) =>
      submitting ? `${$colorPrimary}` : `${$white}`};
    border: 1px solid ${$colorPrimary};
    padding: 1rem 0;
  }

  &&:hover,
  &&:active {
    background-color: ${$white};
    color: ${$colorPrimary};
  }
`
export const ResultWrapper = styled.div`
  position: relative;
  margin-top: 10px;
  height: 60px;
  @media (min-width: 992px) {
    margin-bottom: -80px;
  }
`
export const ResultMessage = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
`

export const StyledText = styled.div`
  ${absoluteCenter};
  font-size: 1.6rem;
  padding: 0 10px;
  text-align: center;
  width: 100%;
`

interface ButtonWrapperProps {
  submitting?: boolean
}
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  position: relative;
  margin-top: 2rem;

  &&::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: ${({ submitting }) => (submitting ? "100%" : "0")};
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
`
