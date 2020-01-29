import styled from "styled-components"

import media from "../../styles/media"
import { MediumHeading } from "../../styles/common.styled"

import Logo from "../../images/logo.inline.svg"
import Image from "../image"

export const StyledLogo = styled(Logo)`
  margin: 2rem 0;
  width: 20rem;
  height: auto;
`
export const StyledImage = styled(Image)`
  ${media.lessThan("sm")`
    display: none;
  `}
`

export const SmallHeader = styled.div`
  text-align: center;
  display: none;

  ${media.lessThan("sm")`
    display: block;
  `}
`

export const StyledHeading = styled(MediumHeading)`
  ${media.lessThan("sm")`
    font-size:  3.6rem !important;
    line-height: 4rem !important;
    margin-bottom: 0;
  `}
`
