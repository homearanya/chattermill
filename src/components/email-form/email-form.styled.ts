import styled from "styled-components"

import media from "../../styles/media"
import { $white, $colorPrimary, $greyLight } from "../../styles/variables"
import { Button } from "../../styles/common.styled"
import { absoluteCenter } from "../../styles/mixins"

interface StyledInputProps {
  border?: boolean
}
export const StyledInput = styled.input<StyledInputProps>`
  && {
    width: 100%;
    background-color: ${$white} !important;
    border: none;
    padding: 2.6rem 15rem 2.6rem 2rem;
    border-radius: 3.5rem;
    overflow: hidden;
    border: ${({ border }) => (border ? `1px solid ${$greyLight}` : "none")};

    :focus {
      outline: 0;
    }

    ${media.lessThan("sm")`
      padding: 2.6rem 2rem;
    `}
  }
`
interface StyledFormProps {
  inView?: boolean
}
export const StyledForm = styled.form<StyledFormProps>`
  position: relative;
`

export const StyledButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: -5rem;
  transform: translate(-50%, -50%);

  ${media.lessThan("sm")`
    ${absoluteCenter};
    right: initial;
    top: 11rem;

    &&,
    &&:link,
    &&:visited {
      background-color: ${$colorPrimary};
      color: ${$white};
      border: 1px solid${$colorPrimary};
    }

    &&:hover,
    &&:active {
      background-color: ${$white};
      color: ${$colorPrimary};
    }
  `}
`
