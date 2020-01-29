import styled from "styled-components"
import { Row } from "react-awesome-styled-grid"

import media from "../../styles/media"
import { $colorHeading, $colorSecondary } from "../../styles/variables"
import TextBlock from "../text-block"
import { Section, MediumHeading } from "../../styles/common.styled"
import {
  centerTextBlock,
  verticalCenter,
  transitionIntoView,
} from "../../styles/mixins"

import Image from "../image"

interface StyledSectionProps {
  verticalPadding?: boolean
}
export const StyledSection = styled(Section)<StyledSectionProps>`
  padding: ${props => (props.verticalPadding ? "9rem 0" : "0")} 0;

  ${({ verticalPadding }) => media.lessThan("sm")`
    padding: ${verticalPadding ? "3rem 0" : "0"};
    padding-bottom: 0rem;
  `};
`
interface StyledHeadingProps {
  inView?: boolean
}
export const StyledHeading = styled(MediumHeading)<StyledHeadingProps>`
  color: ${$colorSecondary};
  margin-bottom: 5rem;
  ${props => transitionIntoView(true, props.inView)};

  ${media.lessThan("lg")`
    margin-bottom: 5rem !important;
  `};

  ${media.lessThan("sm")`
    font-size: 2.4rem;
    line-height: 2.8rem;
    margin-bottom: 2rem !important;
    text-align: center;
  `};
`

export const StyledRow = styled(Row)`
  padding: 5rem 0;

  ${media.lessThan("lg")`
    padding: 3rem 0;
  `};
`

export const ImageWrapper = styled.div`
  margin: auto auto;
  width: 80%;

  ${media.lessThan("lg")`
    max-width: 46rem;
    width: 100%;
  `};

  ${media.lessThan("sm")`
    margin-bottom: 2rem !important;
  `};
`
interface StyledImageProps {
  withObserver?: boolean
  inView?: boolean
}
export const StyledImage = styled(Image)<StyledImageProps>`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  ${props => transitionIntoView(props.withObserver, props.inView)}
`

export const StyledTextBlock = styled(TextBlock)`
  ${verticalCenter};
  .tagline {
    color: ${$colorHeading};
  }

  .smallHeading {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }

  .subHeading {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  .text {
    width: 75%;
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  .moreDetails {
    margin-bottom: 0rem;
  }

  ${media.lessThan("md")`
    .text {
      width: 100%;
      margin-bottom: 2rem;
    } 
  `};

  ${media.lessThan("sm")`
    ${centerTextBlock};
    .text{
      font-size: 1.4rem !important;
      line-height: 2rem !important;
    }
  `};
`
