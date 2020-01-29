import styled from "styled-components"

import media from "../../styles/media"
import {
  centerTextBlock,
  verticalCenter,
  transitionIntoView,
} from "../../styles/mixins"
import { Section } from "../../styles/common.styled"

import TextBlock from "../text-block"
import Image from "../image"

export const StyledSection = styled(Section)`
  padding: 9rem 0 7rem 0;

  ${media.lessThan("sm")`
  padding: 3rem 0 0 0;
`}
`

export const ImageWrapper = styled.div`
  width: 100%;
`

interface StyledImageProps {
  withObserver?: boolean
  inView?: boolean
  textPosition: TextPosition
}
export const StyledImage = styled(Image)<StyledImageProps>`
  ${props =>
    props.textPosition === "left"
      ? "margin-left: 3rem"
      : "float:right; margin-right: 3rem;"};

  ${props => transitionIntoView(props.withObserver, props.inView)};

  ${media.lessThan("md")`
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
`}
`

export const StyledTextBlock = styled(TextBlock)`
  width: 90%;
  ${verticalCenter};

  .smallHeading {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }

  ${media.lessThan("sm")`
    padding: 3rem 0;
    ${centerTextBlock};
    
    .smallHeading {
      font-size: 2.6rem;
      line-height: 3rem;
    }
  `}
`
