import styled, { css } from "styled-components"
import { Col } from "react-awesome-styled-grid"

import media from "../../styles/media"
import { $colorHeading } from "../../styles/variables"
import TextBlock from "../text-block"
import {
  boxShadow,
  verticalCenter,
  transitionIntoView,
  centerTextBlock,
} from "../../styles/mixins"

import ShapeLeft from "../../images/shape1.inline.svg"

import Image from "../image"
import { WideContainer } from "../../styles/common.styled"

export const StyledWideContainer = styled(WideContainer)`
  ${media.lessThan("md")`
      margin: 3rem 0 !important;
  `}

  ${media.lessThan("sm")`
    padding: 2.5rem 0 !important;
    margin-top: 0 !important;
    margin-bottom: 2rem !important;
  `};
`

export const StyledCol = styled(Col)`
  position: relative;

  ${media.lessThan("sm")`
    &:first-child {
      margin-bottom: 3rem;
    }
  `}
`

const shape = (color: string) => css`
  position: absolute;
  top: 0;
  height: 100%;
  width: auto;
  fill: ${color};
  z-index: -1;
`
interface StyledShapeLeftProps {
  color: string
}
export const StyledShapeLeft = styled(ShapeLeft)<StyledShapeLeftProps>`
  ${props => shape(props.color)};
  left: -30%;
`

interface StyledShapeRightProps {
  color: string
}

export const StyledShapeRight = styled(ShapeLeft)<StyledShapeRightProps>`
  transform: rotateY(180deg);
  ${props => shape(props.color)};
  right: -30%;
`

interface StyledImageProps {
  withObserver?: boolean
  inView?: boolean
  justifyRight?: boolean
}

export const ImageWrapper = styled.div`
  width: 100%;
`
export const StyledImage = styled(Image)<StyledImageProps>`
  width: 100%;
  margin: 9rem 0;
  border-radius: 5px;
  overflow: hidden;
  ${boxShadow};
  margin-left: ${props => props.justifyRight && "auto"};
  ${props => transitionIntoView(props.withObserver, props.inView)};
`

interface StyledTextBlockProps {
  textPosition?: string
}
export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  ${verticalCenter};

  .subHeading {
    color: ${$colorHeading};
    font-size: 6rem;
    margin-bottom: 3rem;
  }

  ${media.lessThan("lg")`
    .subHeading {
      font-size: 5rem 
    }
  `};

  ${media.lessThan("md")`
    margin: 0 2rem;
    
    .subHeading {
        font-size: 4rem;
        margin-bottom: 2rem;
      }
  `}

  ${media.lessThan("sm")`
    ${centerTextBlock};
  `};
`
