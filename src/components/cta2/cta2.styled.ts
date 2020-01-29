import styled, { css } from "styled-components"
import { Row } from "react-awesome-styled-grid"

import media from "../../styles/media"
import {
  WideContainer,
  Section,
  MediumHeading,
} from "../../styles/common.styled"
import { $white, $colorHeading } from "../../styles/variables"

import EmailForm from "../email-form"

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
  top: -43rem;
  left: -45rem;

  ${media.lessThan("sm")`
    top: -42rem;
    left: -45rem;
  `}
`

interface StyledShapeRightProps {
  color: string
}

export const StyledShapeRight = styled(ShapeLeft)<StyledShapeRightProps>`
  transform: rotate(215deg);
  ${props => shape(props.color)};
  top: 10rem;
  right: -45rem;

  ${media.lessThan("sm")`
    top: 27rem;
    right: -50rem;
  `}
`

interface StyledSectionProps {
  marginTop?: boolean | undefined
}
export const StyledSection = styled(Section)<StyledSectionProps>`
  margin-top: ${props => (props.marginTop ? "5rem" : "0")};

  ${({ marginTop }) => media.lessThan("sm")`
    margin-top: ${marginTop ? "3rem" : "0"};
  `}
`

export const StyledWideContainer = styled(WideContainer)`
  background-color: ${$colorHeading};
`

export const StyledRow = styled(Row)`
  padding: 9rem 0;
  display: flex;
  align-items: center;

  ${media.lessThan("sm")`
    padding: 9rem 0 16rem 0;
  `}
`
interface HeadingProps {
  inView?: boolean
}
export const Heading = styled(MediumHeading)<HeadingProps>`
  color: ${$white};
  margin: 0;

  ${props =>
    css`
      opacity: 0;
      transform: translateX(-40px);
      transition: all 1s;
      ${props.inView &&
        css`
          opacity: 1;
          transform: translateX(0);
        `}
    `}
  ${media.lessThan("sm")`
    text-align: center;
  `}
`

interface FormWrapperProps {
  inView?: boolean
}
export const FormWrapper = styled.div<FormWrapperProps>`
  width: 100%;
  ${props =>
    css`
      opacity: 0;
      transform: translateX(40px);
      transition: all 1s;
      ${props.inView &&
        css`
          opacity: 1;
          transform: translateX(0);
        `}
    `};
`

export const StyledEmailForm = styled(EmailForm)`
  width: 90%;
  margin-left: auto;

  ${media.lessThan("lg")`
    width: 93%;
  `}

  ${media.lessThan("sm")`
    width: 100%;
    max-width: 29rem;
    margin: 0 auto;
  `}
`
