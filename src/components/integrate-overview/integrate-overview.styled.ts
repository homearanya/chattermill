import styled from "styled-components"

import media from "../../styles/media"
import { Section, fadeInTop } from "../../styles/common.styled"
import { staggeredAnimation, animation } from "../../styles/mixins"

import Image from "../image"
import TextBlock from "../text-block"

export const StyledSection = styled(Section)`
  padding: 5rem 0;
`
interface StyledTextBlockProps {
  classNames: string[]
}
export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  text-align: center;

  ${props =>
    props.classNames &&
    staggeredAnimation(fadeInTop, 1, 0.8, 0.2, props.classNames)}
`
export const ImageWrapper = styled.div`
  width: 100%;
  text-align: center;
`
export const StyledImage = styled(Image)`
  margin: 0 auto;
  ${animation(fadeInTop, 1, 1.4)}
  ${media.lessThan("sm")`
    display: none !important;
  `}
`

export const StyledImageSmall = styled(Image)`
  margin: 0 auto;
  display: none !important;
  ${media.lessThan("sm")`
    display: block !important;
  `}
`
