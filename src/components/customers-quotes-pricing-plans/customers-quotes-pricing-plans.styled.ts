import styled from "styled-components"
import { Col } from "react-awesome-styled-grid"

import media from "../../styles/media"
import { $colorHeading } from "../../styles/variables"
import {
  MediumHeading,
  Paragraph,
  fadeIn,
  fadeInTop,
  fadeInLeft,
  fadeInRight,
} from "../../styles/common.styled"

import { animation, transitionIntoView } from "../../styles/mixins"

import Image from "../image"

export const StyledSection = styled.section`
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 2rem 2rem;
  ${(props) =>
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

  ${media.lessThan("md")`
      padding: 4rem;
      font-size: 16px;
  `}

  ${media.lessThan("sm")`
    padding: 2rem 2rem;
    text-align: center;
    border-bottom: 0.5px solid #bdd9ff;
  `}
`
interface AnimatedProps {
  inView: boolean
}
export const StyledLogo = styled.img<AnimatedProps>`
  margin-bottom: 3rem;
  ${(props) => transitionIntoView(true, props.inView)};
`
export const StyledText = styled(Paragraph)<AnimatedProps>`
  width: 90%;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: ${$colorHeading};
  ${(props) => transitionIntoView(true, props.inView)};

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
  ${(props) => transitionIntoView(true, props.inView)};

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
export const PersonPicture = styled(Image)`
  margin-right: 2rem !important;
  margin-left: 0 !important;
  width: 100%;
  max-width: 81px !important;

  ${media.lessThan("lg")`
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 1rem;
    margin-top: 2rem;
    align-self: center;
  `}
`
