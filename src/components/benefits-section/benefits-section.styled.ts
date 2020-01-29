import styled from "styled-components"
import { Col } from "react-awesome-styled-grid"

import media from "../../styles/media"
import { Section, MediumHeading } from "../../styles/common.styled"
import { $colorSecondary, $greyLight } from "../../styles/variables"
import {
  centerTextBlock,
  boxShadow,
  transitionIntoView,
} from "../../styles/mixins"
import TextBlock from "../text-block"

interface StyledSectionProps {
  withBorder?: boolean
}
export const StyledSection = styled(Section) <StyledSectionProps>`
  padding: 5rem 0;
  border-top: ${({ withBorder }) =>
    withBorder ? `1px solid ${$greyLight}` : 0};
  border-bottom: ${({ withBorder }) =>
    withBorder ? `1px solid ${$greyLight}` : 0};
  ${media.lessThan("sm")`
    padding: 3rem 0 0;
  `}
`

interface StyledHeadingProps {
  inView?: boolean
}
export const StyledHeading = styled(MediumHeading) <StyledHeadingProps>`
  color: ${$colorSecondary};
  margin-bottom: 9rem;
  text-align: center;
  ${props => transitionIntoView(true, props.inView)};

  ${media.lessThan("sm")`
    text-align: center;
  `}
`

export const StyledCol = styled(Col)``

interface StyledTextBlockProps {
  withBoxShadow?: boolean
}
export const StyledTextBlock = styled(TextBlock) <StyledTextBlockProps>`
  padding: 5rem 3rem;
  ${props => props.withBoxShadow && boxShadow};
  text-align: center;


  .imageName {
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

 .smallHeading {
   margin-bottom: 3rem;
   .underline {
     padding-bottom: 5px;
    }
  }
  
  .text {
    margin: 0 auto;
    margin-bottom: 3rem;
  }
  
  ${media.lessThan("lg")`
    padding: 5rem 2rem;
  `}
  
  ${media.lessThan("md")`
    box-shadow: none !important;
    ${centerTextBlock};
  `}

  ${media.lessThan("sm")`
    padding-top: 2rem;
    padding-bottom: 2rem;
    box-shadow: none !important;
    ${centerTextBlock};
  `}
`
