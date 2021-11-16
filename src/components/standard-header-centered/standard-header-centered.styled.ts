import styled from "styled-components"
import { Row } from "react-awesome-styled-grid"

import media from "../../styles/media"
import { boxShadow } from "../../styles/mixins"
import { fadeIn, Button } from "../../styles/common.styled"
import { animation } from "../../styles/mixins"
import { $colorPrimary, $white } from "../../styles/variables"
import ShapeLeft from "../../images/shape1.inline.svg"
import Image from "../image"

export const StyledShapeLeft = styled(ShapeLeft)`
  left: -45%;
  width: 100%;
  position: absolute;
  height: 350px;
  top: 20;
  z-index: -1;
  fill: #f3effb;
  ${animation(fadeIn, 1, 0.3)};

  ${media.lessThan("sm")`
		display: none;
		left: -50%;
		height: 250px;
  	`}
`

export const StyledShapeRight = styled(ShapeLeft)`
  transform: rotate(180deg);
  position: absolute;
  fill: #0fc2ed;
  opacity: 0.15;
  right: -15%;
  height: 350px;
  z-index: -1;
  ${media.lessThan("sm")`
    display: none;
  `}
`

export const StyledSection = styled.section`
  padding: 16rem 0;
  ${media.lessThan("md")`
  	padding: 10rem 0;
  `}
  ${media.lessThan("sm")`
  	padding: 3rem 0;
  `}
`

export const StyledExternalLink = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
`

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin: 0 auto 5rem;
`

export const StyledRow = styled(Row)`
  text-align: center;
`

export const StyledHeading = styled.h1`
  font-size: 40px;
  text-align: center;
  ${animation(fadeIn, 1, 0.3)};

  ${media.lessThan("sm")`
		font-size: 32px;
  	`}
`

export const StyledSpan = styled.span`
  font-size: 16px;
  padding: 14px;

  ${animation(fadeIn, 1, 0.3)};
  text-align: center;
`

export const ButtonWrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem !important;
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
  }

  &&:hover,
  &&:active {
    background-color: ${$white};
    color: ${$colorPrimary};
  }
`
export const ImageWrapper = styled.div`
  padding: 0 2rem;
  max-width: 100rem;
  margin: 0 auto;
`
export const StyledImage = styled(Image)`
  ${boxShadow};
`
