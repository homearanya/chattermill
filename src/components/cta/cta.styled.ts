import styled, { css } from "styled-components"

import media from "../../styles/media"
import { WideContainer, Section } from "../../styles/common.styled"
import { $white, $colorPrimary, $colorHeading } from "../../styles/variables"
import { centerTextBlock } from "../../styles/mixins"

import TextBlock from "../text-block"

import ShapeLeft from "../../images/shape1.inline.svg"

const shape = (color: string) => css`
  position: absolute;
  fill: ${color};
  z-index: 1;
`
interface StyledShapeLeftProps {
  color: string
}
export const StyledShapeLeft = styled(ShapeLeft)<StyledShapeLeftProps>`
  transform: rotate(45deg);
  ${props => shape(props.color)};
  top: -40rem;
  left: -36rem;

  ${media.lessThan("sm")`
    top: -49rem;
    left: -45rem;
  `}
`

interface StyledShapeRightProps {
  color: string
}

export const StyledShapeRight = styled(ShapeLeft)<StyledShapeRightProps>`
  transform: rotate(215deg);
  ${props => shape(props.color)};
  top: 27rem;
  right: -33rem;

  ${media.lessThan("sm")`
    top: 27rem;
    right: -51rem;
  `}
`

export const StyledSection = styled(Section)``
export const StyledWideContainer = styled(WideContainer)`
  background-color: ${$colorPrimary};
`

export const StyledTextBlock = styled(TextBlock)`
  padding: 6rem 0;
  ${centerTextBlock};

  .image {
    width: 25.3rem;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .subHeading {
    color: ${$white};
    margin: 0;
  }
  .text {
    color: ${$colorHeading};
    font-size: 2.4rem;
    line-height: 4rem;
    margin-bottom: 3rem;
  }

  .button {
    font-size: 3rem;
  }

  ${media.lessThan("sm")`
    padding: 3rem 0;
    .subHeading {
      font-size:3.6rem;
      line-height: 4rem;
    }
  `}
`
