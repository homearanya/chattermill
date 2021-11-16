import styled, { css } from "styled-components"
import UniversalLink from "../universal-link"
import media from "../../styles/media"
import { WideContainer } from "../../styles/common.styled"
import { $white, $colorPrimary } from "../../styles/variables"

import EmailForm from "../email-form"

interface StyledButtonProps {
  submitting?: boolean
}

export const StyledLink = styled(UniversalLink)<StyledButtonProps>`
  position: relative;
  width: 100%;
  border-radius: 2px !important;
  height: 40px;
  margin: 15px;
  width: 200px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  padding: 0.25rem;

  &&,
  &&:link,
  &&:visited {
    font-size: 2rem;
    background-color: rgb(45, 127, 249);
    color: ${({ submitting }) =>
      submitting ? `${$colorPrimary}` : `${$white}`};
    border: 1px solid rgb(45, 127, 249);
  }

  &&:hover,
  &&:active {
    opacity: 0.5;
    color: ${$white};
  }
`

export const StyledLink2 = styled(UniversalLink)<StyledButtonProps>`
  position: relative;
  width: 100%;
  border-radius: 2px !important;
  height: 40px;
  margin: 15px;
  width: 200px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  padding: 0.25rem;

  &&,
  &&:link,
  &&:visited {
    font-size: 2rem;
    background-color: #ffff;
    color: ${({ submitting }) =>
      submitting ? `${$colorPrimary}` : `rgb(45, 127, 249)`};
    border: 2px solid rgb(45, 127, 249);
  }

  &&:hover,
  &&:active {
    opacity: 0.5;
    color: rgb(45, 127, 249);
  }
`

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
  background-color: ${$white};
  display: flex;
  margin-top: 5rem;
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

interface HeadingProps {
  inView: boolean
}
export const Heading = styled.p<HeadingProps>`
  color: #291c45;
  margin: 0;
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
  color: #291c45;
  margin: 0;
  padding: 2rem;
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

interface FormWrapperProps {
  inView?: boolean
}
export const FormWrapper = styled.div<FormWrapperProps>`
  width: 100%;
  ${(props) =>
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
  padding-top: 15px;

  ${media.lessThan("lg")`
    width: 93%;
  `}

  ${media.lessThan("sm")`
    width: 100%;
    max-width: 29rem;
    margin: 0 auto;
  `}
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${media.lessThan("sm")`
    flex-direction: column;
    
  `}
`
