import styled from "styled-components"
import { Row } from "react-awesome-styled-grid"

import TextBlock from "../text-block"
import media from "../../styles/media"
import {
  Section,
  MediumHeading,
  fadeInTop,
  fadeIn,
} from "../../styles/common.styled"
import {
  verticalCenter,
  staggeredAnimation,
  animation,
} from "../../styles/mixins"

import Image from "../image"

export const StyledSection = styled(Section)`
  padding: 5rem 0;

  ${media.lessThan("sm")`
    padding-bottom: 0;
  `}
`

export const StyledImage = styled(Image)`
  ${verticalCenter};
  width: 83%;
  margin-left: auto;
  ${animation(fadeIn, 1, 1)};

  ${media.lessThan("sm")`
    width: 100%;
    margin: 0 auto 5rem auto;
    max-width: 15rem;
  `}
`

export const TextBlockWrapper = styled.div`
  ${verticalCenter};
  padding: 5rem 0;

  ${media.lessThan("lg")`
    padding: 0;
  `}
`

export const StyledHeading = styled(MediumHeading)`
  margin-bottom: 6rem;
  ${animation(fadeInTop, 1, 0.4)};

  ${media.lessThan("sm")`
    text-align: center;
    margin: 0 auto 5rem auto;
    
  `}
`

export const StyledRow = styled(Row)`
  width: 100%;
  && {
    margin-left: auto;
  }
`
export const FeatureWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  ${media.lessThan("sm")`
    max-width: 29rem;
    margin: 0 auto;
  `}
`
export const StyledFeatureImage = styled.img`
  flex: 1 0 auto;
  margin-right: 2rem;
  ${animation(fadeIn, 1, 0.4)};
`
interface StyledFeatureTextProps {
  classNames: string[]
}
export const StyledFeatureText = styled(TextBlock)<StyledFeatureTextProps>`
  align-items: flex-start;
  margin-top: 0.5rem;
  margin-right: 2rem;
  .smallHeading {
    line-height: 1;
    margin-bottom: 2rem;
  }
  .text {
    margin-bottom: 4rem;
  }

  ${props =>
    props.classNames &&
    staggeredAnimation(fadeInTop, 1, 0.4, 0.2, props.classNames)}
`
