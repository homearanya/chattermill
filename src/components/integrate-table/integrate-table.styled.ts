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
    padding: 0;
  `}
`

interface StyledHeadingProps {
  inView?: boolean
}
export const StyledHeading = styled(MediumHeading) <StyledHeadingProps>`
  color: ${$colorSecondary};
  margin-bottom: 5rem;
  margin-top: 4rem;
  text-align: center;
  ${props => transitionIntoView(true, props.inView)};

  ${media.lessThan("sm")`
    font-size: 3rem;
    line-height: 3.4rem;
    text-align: center;
  `}
`

export const StyledCol = styled(Col)`
  padding: 1.5rem 0;
`

interface StyledTextBlockProps {
  withBoxShadow?: boolean
}
export const StyledTextBlock = styled(TextBlock) <StyledTextBlockProps>`
  padding: 5rem 3rem;
  ${props => props.withBoxShadow && boxShadow};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:first-child {
    flex: 1 0 38%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imageName {
    max-width: 100%;
    display: block;
    margin-bottom: 0;
  }

  .smallHeading {
    margin: 2rem 0;
    .underline {
      padding-bottom: 5px;
    }
  }

  .text {
    position: relative;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  div:nth-last-child(2) {
    flex: 1 0 32%;
  }

  ${media.lessThan("lg")`
    padding: 3rem 3rem 5rem;
    ${centerTextBlock};
    max-width: 37rem;
    .smallHeading {
      margin: 1rem 0 2rem;
    } 

    div:nth-last-child(2) {
      flex: 1 0 42%;
    }
  `}

  ${media.lessThan("sm")`
    display: block;
    box-shadow: none !important;
    padding: 3rem 2rem 0;
    max-width: 29rem;

   .imageName {
    margin-bottom: 2rem;
  }
  `}
`
