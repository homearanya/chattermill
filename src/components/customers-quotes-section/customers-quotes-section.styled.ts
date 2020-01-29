import styled from "styled-components"
import { Col } from "react-awesome-styled-grid"

import media from "../../styles/media"
import { $colorHeading } from "../../styles/variables"
import {
  Section,
  MediumHeading,
  Paragraph,
  fadeIn,
  fadeInTop,
  fadeInLeft,
  fadeInRight,
} from "../../styles/common.styled"

import {
  absoluteCenter,
  animation,
  transitionIntoView,
} from "../../styles/mixins"

import Image from "../image"

export const StyledSection = styled(Section)`
  padding: 5rem 0;
`

export const StyledHeading = styled(MediumHeading)`
  text-align: center;
  margin-bottom: 5rem;
  ${animation(fadeIn, 1, 0.2)};
`

interface StyledColProps {
  animated?: boolean
  index?: number
}
export const StyledCol = styled(Col)<StyledColProps>`
  display: block;
  position: relative;
  padding: 3rem 0;
  ${props =>
    props.animated &&
    (props.index || props.index === 0) &&
    animation(
      props.index === 0
        ? fadeInLeft
        : props.index === 1
        ? fadeInTop
        : fadeInRight,
      1,
      0.4 + props.index * 0.2
    )};

  ${media.lessThan("sm")`
    padding: 1rem 0;
    text-align: center;
  `}
`

export const ImageFrame = styled.img`
  width: 100%;
  z-index: 1;
`

export const StyledImage = styled(Image)`
  ${absoluteCenter};
  position: absolute !important;
  width: 95%;
  top: 48%;
  z-index: -1;
`
interface AnimatedProps {
  inView?: boolean
}

export const ImageWrapper = styled.div<AnimatedProps>`
  position: relative;
  width: 100%;
  ${props => transitionIntoView(true, props.inView)};
  margin-bottom: 2rem;

  ${media.lessThan("sm")`
    max-width: 29rem;
    margin-left: auto;
    margin-right: auto;
  `}
`

export const StyledLogo = styled.img<AnimatedProps>`
  margin-bottom: 3rem;
  ${props => transitionIntoView(true, props.inView)};
`
export const StyledText = styled(Paragraph)<AnimatedProps>`
  width: 90%;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: ${$colorHeading};
  ${props => transitionIntoView(true, props.inView)};

  ${media.lessThan("lg")`
    width: 100%;
  `}

  ${media.lessThan("sm")`
    max-width: 29rem;
    margin: 0 auto;
  `}
`

export const StyledPerson = styled.div<AnimatedProps>`
  display: flex;
  ${props => transitionIntoView(true, props.inView)};

  ${media.lessThan("lg")`
    flex-direction: column;
    align-items: center;
  `}
`
export const StyledPersonText = styled(Paragraph)`
  color: ${$colorHeading};
  line-height: 2rem;
  margin-bottom: 0;
`
export const PersonPicture = styled.img`
  border-radius: 50%;
  margin-right: 2rem;

  ${media.lessThan("lg")`
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 1rem;
    margin-top: 2rem;
    align-self: center;
  `}
`
