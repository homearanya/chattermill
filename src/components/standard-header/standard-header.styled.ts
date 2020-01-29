import styled from "styled-components"
import { Col } from "react-awesome-styled-grid"

import media from "../../styles/media"
import { Section, fadeInTop, fadeIn } from "../../styles/common.styled"
import {
  centerTextBlock,
  absoluteCenter,
  staggeredAnimation,
  animation,
} from "../../styles/mixins"

import TextBlock from "../text-block"
import Image from "../image"

export const StyledSection = styled(Section)`
  overflow: hidden;
`

interface StyledTextBlockProps {
  classNames: string[]
}

export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  padding: 10rem 0;

  .tagline {
    margin-bottom: 3rem;
  }

  .subHeading {
    font-size: 3rem;
    line-height: 3.8rem;
    margin-bottom: 3rem;
  }

  ${props =>
    props.classNames &&
    staggeredAnimation(fadeInTop, 1, 0, 0.2, props.classNames)}

  ${media.lessThan("sm")`
    padding: 3rem 0;
    ${centerTextBlock};
    
    .subHeading {
      font-size: 2.6rem;
      line-height: 3rem;
      margin-bottom: 2rem;
    }

    .emailForm {
      margin-bottom: 7rem;
    }
  `}
`

export const StyledCol = styled(Col)`
  position: relative;

  ${media.lessThan("sm")`
    max-width: 29rem;
    margin: 0 auto 3rem auto;
  `}
`

export const StyledImage = styled(Image)`
  position: absolute !important;
  ${absoluteCenter};
  ${animation(fadeIn, 1, 0.8)};

  ${media.lessThan("lg")`
    width: 100% !important;
  `};

  ${media.lessThan("sm")`
    position: relative !important;
    height: auto !important;
  `};
`
