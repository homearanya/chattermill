import styled from "styled-components"

import media from "../../styles/media"
import {
  Section,
  WideContainer,
  TinyHeading,
  fadeInTop,
  fadeIn,
} from "../../styles/common.styled"
import {
  absoluteCenter,
  centerTextBlock,
  boxShadow,
  verticalCenter,
  staggeredAnimation,
  animation,
} from "../../styles/mixins"
import { $white, $colorSecondary } from "../../styles/variables"
import Image from "../image"
import TextBlock from "../text-block"

export const StyledSection = styled(Section)`
  margin-top: 9rem;
`
export const StyledWideContainer = styled(WideContainer)`
  background-color: ${$colorSecondary};
`
export const BorderWrapperOut = styled.div`
  clip-path: ellipse(calc(46% + 3.5rem) 100% at 100% 50%);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${$white};

  ${media.lessThan("sm")`
    position: static;
    clip-path: none;
    z-index: -2;
  `}
`

export const BorderWrapperIn = styled.div`
  clip-path: ellipse(calc(46% + 2rem) 100% at 100% 50%);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${$colorSecondary};

  ${media.lessThan("sm")`
    position: static;
    clip-path: none;
    z-index: -2;
  `}
`

export const HeroImageWrapper = styled.div`
  clip-path: ellipse(46% 100% at 100% 50%);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  ${media.lessThan("sm")`
    position: static;
    clip-path: none;
    z-index: -1;
  `}
`

export const HeroImage = styled(Image)`
  width: 46%;
  bottom: 0;
  right: 0;

  ${media.lessThan("lg")`
    width:  55%;
  `}
  ${media.lessThan("md")`
    width:  70%;
  `}

  ${media.lessThan("sm")`
    position: relative !important;
    height: 34.3rem !important;
    width: 100% !important;
    display: block !important;
  `}
`
interface StyledTextBlockProps {
  classNames: string[]
}
export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  padding: 10rem 0;

  ${verticalCenter};

  .subHeading {
    color: ${$white};
    font-size: 3rem;
    line-height: 3.8rem;
  }

  ${props =>
    props.classNames &&
    staggeredAnimation(fadeInTop, 1, 0, 0.2, props.classNames)}

  ${media.lessThan("sm")`
    padding: 5rem 0;
    ${centerTextBlock};

    .subHeading {
      font-size: 2.4rem;
      line-height: 2.8rem;
      margin-bottom: 2rem;
    }

    .text {
      width: 100%;
    }
  `}
`

export const Wrapper = styled.div`
  padding: 10rem 0;
  width: 100%;
  display: flex;
  align-items: center;
`

export const Heading = styled(TinyHeading)``

export const SubHeading = styled.h1`
  color: ${$white};
  font-size: 3rem;
  line-height: 3.8rem;
  margin-bottom: 4rem;
`
export const CardsWrapper = styled.div`
  ${verticalCenter};
  ${animation(fadeIn, 1, 1)};
  z-index: 1;

  ${media.lessThan("sm")`
    ${absoluteCenter};
    top: 65%;
    z-index: 1;
    width: 100%;
    max-width: 41rem;
    padding: 0 1rem;
  `}
`

export const Card = styled.img`
  border-radius: 20px;
  overflow: hidden;
  ${boxShadow};
  display: block;

  ${media.lessThan("md")`
    width:  100%;
  `}
`
