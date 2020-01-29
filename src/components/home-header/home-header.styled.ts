import styled from "styled-components"

import media from "../../styles/media"
import { Section, fadeInTop, fadeIn } from "../../styles/common.styled"
import {
  absoluteCenter,
  boxShadow,
  verticalCenter,
  staggeredAnimation,
  animation,
  centerTextBlock,
} from "../../styles/mixins"
import Image from "../image"
import TextBlock from "../text-block"

export const StyledSection = styled(Section)``
export const HeroImageWrapper = styled.div`
  clip-path: ellipse(47% 175% at 100% 50%);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  ${animation(fadeIn, 1, 1.2)};
  ${media.lessThan("sm")`
    position: static;
    clip-path: none;
    z-index: -1;
  `}
`
export const StyledHeroImage = styled(Image)`
  position: absolute !important;
  width: 47%;
  bottom: 0;
  right: 0;
  ${media.lessThan("lg")`
  width:  65%;
  `}
  ${media.lessThan("md")`
  width:  75%;
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
    font-size: 3rem;
    line-height: 3.4rem;
  }

  ${props =>
    props.classNames &&
    staggeredAnimation(fadeInTop, 1, 0, 0.2, props.classNames)}

  ${media.lessThan("lg")`
  .subHeading {
      font-size: 2.8rem;
      line-height: 3.2rem;
      margin-bottom: 2rem;
    }
  `}

  ${media.lessThan("md")`
  .subHeading {
      font-size: 2.6rem;
      line-height: 3rem;
      margin-bottom: 2rem;
    }
  `}

  ${media.lessThan("sm")`
    padding: 5rem 0;
    ${centerTextBlock};

    .subHeading {
      font-size: 2.6rem;
      line-height: 3rem;
      margin-bottom: 2rem;
    }

    .text {
      width: 100%;
    }
  `}
`

export const CardsWrapper = styled.div`
  ${verticalCenter};
  ${animation(fadeIn, 1, 1)};

  ${media.lessThan("sm")`
    ${absoluteCenter};
    top: 65%;
    z-index: 1;
    width: 100%;
    max-width: 43rem;
    padding: 0 1rem;
  `}
`

export const Card = styled.img`
  ${verticalCenter};
  border-radius: 7px;
  overflow: hidden;
  ${boxShadow};

  ${media.lessThan("lg")`
    :first-child {  
      display: block;
    }
  `}

  ${media.lessThan("md")`
    :first-child {
      width:  100%;
    }
  `}

  ${media.lessThan("sm")`
    :first-child {
      display: block;
      width: 100%;
    }
  `}
`
export const Card2 = styled(Card)`
  position: absolute !important;
  top: -26.41%;
  right: -10.42%;

  ${media.lessThan("sm")`
      display: none;
  `}
`
export const Card3 = styled(Card)`
  position: absolute !important;
  bottom: -21.83%;
  right: -9.03%;

  ${media.lessThan("sm")`
      display: none;
  `}
`
