import styled from "styled-components"

import media from "../../styles/media"
import { Section, MediumHeading } from "../../styles/common.styled"
import { transitionIntoView, boxShadow } from "../../styles/mixins"
import { $colorHeading } from "../../styles/variables"
import TextBlock from "../text-block"
import { Container } from "react-awesome-styled-grid"

export const StyledSection = styled(Section)`
  padding: 5rem 0;
`
interface AnimatedProps {
  inView?: boolean
}
export const StyledHeading = styled(MediumHeading)<AnimatedProps>`
  margin: 0 auto;
  margin-bottom: 5rem !important;
  ${props => transitionIntoView(true, props.inView)};
`

export const StyledContainer = styled(Container)`
  margin: 0 auto;
  align-items: center;
`

export const StyledTextBlock = styled(TextBlock)<AnimatedProps>`
  height: 32rem;
  ${boxShadow};
  padding: 3rem;
  ${props => transitionIntoView(true, props.inView)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .imageName {
    max-width: 100%;
  }  
 
  .text {
    color: ${$colorHeading};
    line-height: 2rem;
    margin-bottom: auto;
  }

  .moreDetails {
    margin-bottom: 0;
  }

  ${media.lessThan("lg")`
    padding: 1.5rem;
  `}    
  ${media.lessThan("md")`
    margin-bottom: 1.5rem;
  `}    
  ${media.lessThan("sm")`
    max-width: 29rem;
    margin-left: auto;
    margin-right: auto;
    /* align-items: flex-start; */
    .text {
      text-align: center;
    }
  `}    
`
