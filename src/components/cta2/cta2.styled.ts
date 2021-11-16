import styled, { css } from "styled-components"

import media from "../../styles/media"
import { WideContainer } from "../../styles/common.styled"
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
  ${(props) => shape(props.color)};
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
  ${(props) => shape(props.color)};
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
export const StyledSection = styled.section<StyledSectionProps>`
  margin-top: ${(props) => (props.marginTop ? "5rem" : "0")};

  ${({ marginTop }) => media.lessThan("sm")`
    margin-top: ${marginTop ? "3rem" : "0"};
  `}
`

export const StyledWideContainer = styled(WideContainer)`
  background-color: ${$colorHeading};
  display: flex;
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 16rem;
  padding-bottom: 16rem;
  max-width: 600px;
  align-items: center;
  margin: 0 auto;
`

interface StyledHeadingProps {
  inView: boolean
}
export const Heading = styled.p<StyledHeadingProps>`
  color: ${$white};
  margin-bottom: 3rem;
  font-size: 4rem;
  text-align: center;

  ${(props) =>
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
    font-size: 2.5rem;
    padding: 1rem 4rem;
    text-align: center;
  `};
`

interface TextProps {
  inView: boolean
}
export const Text = styled.p<TextProps>`
  color: ${$white};
  margin-top: 4rem;
  text-align: center;
  font-size: 1.6rem;

  ${(props) =>
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
    font-size: 1.5rem;
    padding: 1rem 4rem;
    text-align: center;
  `}
`

export const StyledEmailForm = styled(EmailForm)``
