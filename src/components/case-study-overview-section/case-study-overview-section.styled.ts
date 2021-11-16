import styled from "styled-components"
import { Container } from "react-awesome-styled-grid"
import media from "../../styles/media"

import {
  centerTextBlock,
  verticalCenter,
  transitionIntoView,
} from "../../styles/mixins"
import TextBlock from "../text-block"

import Image from "../image"

export const StyledSection = styled.section`
  padding: 10rem 0;

  ${media.lessThan("md")`
    padding: 6rem 0;
  `};
  ${media.lessThan("sm")`
    padding: 2.5rem 0;
  `};
`
export const StyledContainer = styled(Container)``

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${media.lessThan("md")`
    flex-direction: column-reverse;
  `};
`
export const ImageWrapper = styled.div`
  padding-left: 10rem;
  width: 50%;
  max-width: 50rem;
  ${verticalCenter};
  margin: 0 auto;

  ${media.lessThan("lg")`
    padding-left: 6rem;
  `};
  ${media.lessThan("md")`
    padding-left: 0;
    width: 100%;
  `};

  ${media.lessThan("sm")`
    max-width: 30rem;
    margin-bottom: 2rem;
  `};
`

interface StyledImageProps {
  withObserver?: boolean
  inView?: boolean
}
export const StyledImage = styled(Image)<StyledImageProps>`
  width: 100% !important;
  ${(props) => transitionIntoView(props.withObserver, props.inView)};
`

export const StyledTextBlock = styled(TextBlock)`
  width: 50%;

  ${verticalCenter};
  .subHeading {
    font-size: 4.5rem;
    line-height: 6rem;
    margin-bottom: 3rem;
  }

  .button {
    margin-bottom: 0;
  }

  .html {
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 2.9rem;
  }

  .moreDetails {
    width: 103%;
    margin-bottom: 0;
  }

  .underline {
    padding-bottom: 3px;
  }

  p:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  ${media.lessThan("lg")`
    .subHeading {
      font-size: 5rem !important;
    }
  `};
  ${media.lessThan("md")`
    width: 100%;
    text-align: center;

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

    .html {
      font-size: 1.8rem
    }    
  `};
`
