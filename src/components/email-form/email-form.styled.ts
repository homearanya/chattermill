import styled, { css } from "styled-components"

import media from "../../styles/media"
import {
  $white,
  $greyLight,
  $colorPrimary,
  $lime,
  $colorHeading,
} from "../../styles/variables"
import UniversalLink from "../universal-link"

interface StyledInputProps {
  border?: boolean
}
export const StyledInput = styled.input<StyledInputProps>`
  && {
    background-color: ${$white} !important;
    border: none;
    width: 98%;
    padding: 2.3rem 15rem 2.3rem 2rem;
    border-radius: 2rem;
    overflow: hidden;
    border: ${({ border }) => (border ? `1px solid ${$greyLight}` : "none")};

    :focus {
      outline: 0;
    }

    ::placeholder {
      font-size: 1.2em;
      font-weight: 500;
    }

    ${media.lessThan("sm")`
      padding: 1.5rem 1.5rem;
      margin: 0;

      ::placeholder {
        font-size: 1em;
        font-weight: 400;
        text-align: center;
      }
    `}
  }
`
interface StyledFormProps {
  inView?: boolean
}
export const StyledForm = styled.form<StyledFormProps>`
  position: relative;
  display: flex;
  margin-bottom: 1.5rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
`

const buttonStyles = css`
  border-radius: 4px !important;
  margin-right: 15px;
  text-align: center;
  text-decoration: none;

  &&,
  &&:link,
  &&:visited {
    opacity: 1;
    div {
      width: 170px;
      font-size: 1.7rem;
      font-weight: 400;
      padding: 1rem;
      ${media.lessThan("sm")`
        font-size: 1.4rem;
        width: unset;
      `}
    }
  }

  &&:hover,
  &&:active {
    opacity: 0.7;
    transition: opacity 0.2s;
  }
`

interface StyledButtonProps {
  submitting?: boolean
}

export const StyledLink2 = styled(UniversalLink)<StyledButtonProps>`
  ${buttonStyles};
  &&,
  &&:link,
  &&:visited {
    background-color: ${$lime};
    color: ${$colorHeading};
  }
`

export const StyledLink = styled(UniversalLink)<StyledButtonProps>`
  ${buttonStyles};
  &&,
  &&:link,
  &&:visited {
    background-color: ${$colorPrimary};
    color: ${$white};
  }
`
