import styled from "styled-components"
import { Container } from "react-awesome-styled-grid"

import media from "../../styles/media"
import { fadeIn, Button } from "../../styles/common.styled"
import { animation } from "../../styles/mixins"
import { $colorPrimary, $white } from "../../styles/variables"
import Image from "../image"

export const StyledSection = styled.section``
export const StyledContainer = styled(Container)`
  position: relative;
`
export const StyledExternalLink = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
`

export const StyledBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextBlock = styled.div`
  max-width: 41rem;
  text-align: center;
  ${media.lessThan("lg")`
    max-width: 40rem;
  `}
  ${media.lessThan("md")`
    max-width: 30rem;
  `}
  ${media.lessThan("sm")`
    max-width: 28rem;
  `}
`

export const StyledHeading = styled.h1`
  font-size: 40px;
  line-height: 1.17;
  text-align: center;
  padding: 0;
  margin-bottom: 1.5rem;
  ${animation(fadeIn, 1, 0.3)};

  ${media.lessThan("lg")`
		font-size: 32px;
  	`}
  ${media.lessThan("md")`
		font-size: 26px;
    margin-bottom: 1rem;
  `}
`

export const StyledSpan = styled.span`
  display: block;
  font-size: 16px;
  margin-bottom: 1.5rem;
  ${media.lessThan("md")`
    margin-bottom: 1rem;
  `}
  ${media.lessThan("sm")`
      font-size: 1.5rem;
  `}

  ${animation(fadeIn, 1, 0.3)};
  text-align: center;
`

export const ButtonWrapper = styled.div`
  position: relative;
  text-align: center;
`

export const StyledButton = styled(Button)`
  position: relative;
  border-radius: 1.4rem !important;
  font-size: 1.4rem !important;

  &&,
  &&:link,
  &&:visited {
    font-size: 1.7rem;
    background-color: ${$colorPrimary};
    color: ${$white};
    border: 1px solid ${$colorPrimary};
    padding: 1.5rem 4rem;
    ${media.lessThan("sm")`
      font-size: 1.4rem;
      padding: 1rem 2rem;
    `}
  }

  &&:hover,
  &&:active {
    background-color: ${$white};
    color: ${$colorPrimary};
  }
`
export const ImageWrapper = styled.div`
  ${media.lessThan("sm")`
      opacity: 0.3;
    `}
`
export const StyledImage = styled(Image)``
