import styled from "styled-components"

import media from "../../styles/media"

import {
  centerTextBlock,
  verticalCenter,
  transitionIntoView,
} from "../../styles/mixins"
import TextBlock from "../text-block"

import Image from "../image"

export const StyledSection = styled.section`
  padding: 5rem 0;

  ${media.lessThan("sm")`
    padding: 2.5rem 0;
  `};
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  ${verticalCenter};
  margin: 0 auto;

  ${media.lessThan("sm")`
    margin-bottom: 2rem;
  `};
`

interface StyledImageProps {
  withObserver?: boolean
  inView?: boolean
}
export const StyledImage = styled(Image)<StyledImageProps>`
  ${props => transitionIntoView(props.withObserver, props.inView)};
`

export const StyledTextBlock = styled(TextBlock)`
  ${verticalCenter};
  .subHeading {
    margin-bottom: 2rem;
    line-height: 1.17;
  }

  .button {
    margin-bottom: 0;
  }

  .text {
    width: 97%;
  }

  .moreDetails {
    width: 103%;
    margin-bottom: 0;
  }

  .underline {
    padding-bottom: 3px;
  }

  ${media.lessThan("lg")`
    .subHeading {
      font-size: 5rem !important;
    }
  `};
  ${media.lessThan("md")`
    .subHeading {
      font-size: 4rem !important;
    }
  `};
  ${media.lessThan("sm")`
    ${centerTextBlock};
    .subHeading {
      font-size: 2.6rem !important;
      line-height: 3rem !important;
      margin-bottom: 1rem !important;
    }    
  `};
`
