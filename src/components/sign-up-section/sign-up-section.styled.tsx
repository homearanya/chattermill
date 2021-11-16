import styled, { css } from "styled-components"
import { Container } from "react-awesome-styled-grid"
import {
  $colorPrimary,
  $colorHeading,
  $colorSecondary,
  $white,
} from "../../styles/variables"
import { absoluteCenter } from "../../styles/mixins"
import { MediumHeading, Paragraph, Button } from "../../styles/common.styled"
import Image from "../image"
import media from "../../styles/media"

export const StyledSection = styled.section`
  padding: 5rem 0;
  background: #f7f8fc;
`
export const StyledContainer = styled(Container)``
export const Wrapper = styled.div`
  padding: 7rem 5rem;
  background: ${$white};
  box-shadow: 2px 5px 9px #ebedf8;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 3rem;
  ${media.lessThan("md")`
    padding: 5rem 3rem;
    grid-template-columns: repeat(1, 1fr);
  `};
`
export const FormArea = styled.div``
export const ImageArea = styled.div``
export const Heading = styled(MediumHeading)`
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 2.8rem;
  margin-bottom: 3rem;
  color: ${$colorHeading};
  ${media.lessThan("md")`
    font-size: 2.8rem;
    line-height:3rem;
    margin-bottom: 2rem;
  `};
`
export const SubHeading = styled(Paragraph)`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.8rem;
  color: ${$colorHeading};
  margin-bottom: 2rem;
  ${media.lessThan("md")`
    font-size: 1.7rem;
    line-height:2.5rem;
    margin-bottom: 1rem;
  `};
`
export const Form = styled.form``
export const ControlField = styled.div``
export const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 400;
  line-height: 28px;
  color: ${$colorHeading};
`
export const Input = styled.input`
  display: block;
  padding: 0.7rem;
  margin-bottom: 2rem;
  width: 25rem;
  background: #f7f8fc;
  border: solid 1px #d5daf0;
  ::placeholder {
    color: #9b9b9b;
    font-size: 12px;
    font-weight: 400;
    line-height: 28px;
  }
`
interface ButtonWrapperProps {
  submitting?: boolean
}
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  position: relative;
  margin-bottom: 1rem;
  display: inline-block;

  &&::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: ${({ submitting }) => (submitting ? "100%" : "0")};
    background-color: ${$colorPrimary};
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    svg {
      ${absoluteCenter};
      z-index: 1;
    }
  }
`

interface StyledButtonProps {
  submitting?: boolean
}
export const StyledButton = styled(Button)<StyledButtonProps>`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 2px !important;

  &&,
  &&:link,
  &&:visited {
    /* width: 100%; */
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    background-color: ${$colorPrimary};
    color: ${({ submitting }) =>
      submitting ? `${$colorPrimary}` : `${$white}`};
    border: 1px solid ${$colorPrimary};
    padding: 0.7rem 3rem;
  }

  &&:hover,
  &&:active {
    background-color: ${$white};
    color: ${$colorPrimary};
  }
`

export const ResultWrapper = styled.div`
  position: relative;
  margin-top: 10px;
  height: 60px;
  @media (min-width: 992px) {
    margin-bottom: -60px;
  }
`
export const ResultMessage = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
`

export const StyledText = styled.div`
  ${absoluteCenter};
  font-size: 1.6rem;
  padding: 0 10px;
  text-align: center;
  width: 100%;
`

export const Terms = styled.p`
  color: ${$colorSecondary};
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
`
export const StyledImage = styled(Image)`
  margin-left: 0 !important;
  margin-bottom: 1rem;
`
export const Caption = styled.p`
  font-size: 11px;
  font-weight: 400;
  line-height: 15px;
`
