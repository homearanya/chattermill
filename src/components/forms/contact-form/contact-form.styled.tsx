import styled, { css } from "styled-components"
import { $colorSecondary, $white } from "../../../styles/variables"
import { absoluteCenter } from "../../../styles/mixins"
import { Button } from "../../../styles/common.styled"
import media from "../../../styles/media"

interface FormWrapperProps {
  oneColumn: boolean
}
export const FormWrapper = styled.div<FormWrapperProps>`
  ${({ oneColumn }) =>
    oneColumn &&
    css`
      max-width: 40rem;
      margin: 0 auto;
    `};
`
export const Form = styled.form``

interface ControlFieldWrapperProps {
  oneColumn: boolean
}
export const ControlFieldWrapper = styled.div<ControlFieldWrapperProps>`
  display: grid;
  grid-template-columns: ${({ oneColumn }) =>
    oneColumn ? "1fr" : "repeat(2, 1fr)"};
  grid-gap: 1rem 2rem;

  ${media.lessThan("sm")`
  grid-template-columns: repeat(1,1fr);
`}
`
export const ControlField = styled.div`
  &.checkbox {
    margin-bottom: 0;
    margin-top: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`
export const StyledLabel = styled.label`
  font-size: 1.3rem;
`

interface StyledInputProps {
  error?: boolean
}
export const StyledInput = styled.input<StyledInputProps>`
  && {
    display: block;
    font-size: 1.6rem;
    font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    color: #434c5e;
    width: 100%;
    padding: 1rem 0 1rem 1rem;
    border: solid 1px #979797;
    box-shadow: 0px 2px 4px #d5daf0;
    background-color: transparent !important;
    text-align: left;
    outline: 0;
    transition: border-color 200ms cubic-bezier(0.325, 0.09, 0, 1.28),
      color 200ms cubic-bezier(0.325, 0.09, 0, 1.28);
    :focus {
      outline: 0;
    }
    ::placeholder {
      color: #9b9b9b;
      font-family: inherit;
      font-size: 15px;
    }
  }
`
export const CheckboxArea = styled.div`
  /* max-width: 40rem; */
  margin: 1rem 0 1rem;
  ${media.lessThan("sm")`
    margin: 1rem 0 2rem;
  `};
`
export const StyledCheckbox = styled.input`
  margin-left: 3rem;
  border: solid 1px #2f3945;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`
export const StyledBoxLabel = styled.label`
  color: ${$colorSecondary};
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.3rem;
  a {
    color: ${$colorSecondary};
  }
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
  margin-top: 0.3rem;
`
interface ButtonWrapperProps {
  buttonPosition: string
}
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  margin-bottom: 1rem;
  text-align: ${({ buttonPosition }) => buttonPosition};
`
interface ButtonContainerProps {
  submitting?: boolean
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: inline-block;
  position: relative;

  &&::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: ${({ submitting }) => (submitting ? "100%" : "0")};
    background-color: ${$colorSecondary};
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: ${({ submitting }) => (submitting ? 1 : 0)};

    svg {
      ${absoluteCenter};
      z-index: 1;
    }
  }
`

interface StyledButtonProps {
  submitting?: boolean
}
export const StyledButton = styled(Button)<StyledButtonProps>`
  position: relative;
  display: inline-block;
  height: 100%;
  border-radius: 10px !important;

  &&,
  &&:link,
  &&:visited {
    /* width: 100%; */
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 3.3rem;
    background-color: ${$colorSecondary};
    color: ${({ submitting }) =>
      submitting ? `${$colorSecondary}` : `${$white}`};
    border: 1px solid ${$colorSecondary};
    padding: 0.7rem 3rem;

    ${media.lessThan("sm")`
      font-size: 1.4rem;
      line-height: 2.8rem;
      padding: 0.5rem 2rem;
    `};
  }

  &&:hover,
  &&:active {
    background-color: ${$white};
    color: ${$colorSecondary};
  }
`

export const ResultWrapper = styled.div`
  position: relative;
  margin-top: 10px;
  height: 60px;
  @media (min-width: 992px) {
    margin-bottom: -60px;
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
