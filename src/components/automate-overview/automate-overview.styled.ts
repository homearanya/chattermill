import styled from "styled-components"
import { Row } from "react-awesome-styled-grid"

import media from "../../styles/media"
import { Section } from "../../styles/common.styled"
import { $colorHeading, $colorSecondary } from "../../styles/variables"
import { transitionIntoViewLeft, flexUnit, toVM } from "../../styles/mixins"
import TextBlock from "../text-block"

export const StyledSection = styled(Section)`
  padding: 5rem 0;
`

export const StyledTextHeaderBlock = styled(TextBlock)`
  text-align: center;
  .subHeading {
    color: ${$colorSecondary};
    width: 90%;
    font-size: 3rem;
    line-height: 3.8rem;
    margin: 0 auto;
    margin-bottom: 3rem;
    .underline {
      padding-bottom: 5px;
    }
  }

  .text {
    color: ${$colorHeading};
    font-size: 2.2rem;
    line-height: 4rem;
    margin-bottom: 3rem;
  }

  ${media.lessThan("sm")`
  .subHeading {
    width: 100%;
    font-size: 2.6rem;
    line-height: 3rem;
  }
  
  .text {
    font-size: 1.4rem;
    line-height: 2rem;
    margin-bottom: 1rem;
    }
  `}
`

export const StyledRow = styled(Row)`
  position: relative;
`

interface ArrowsWrapperProps {
  inView?: boolean
}
export const ArrowsWrapper = styled.div<ArrowsWrapperProps>`
  position: absolute;
  left: 25%;
  top: 11%;
  z-index: 1;
  ${props => transitionIntoViewLeft(true, props.inView)};

  img:first-child {
    margin-right: 21rem;
  }

  ${media.lessThan("lg")`
    img:first-child {
      ${flexUnit(toVM(135, 1024), 135, 210, "vw", "margin-right")};
    }
  `}

  ${media.lessThan("md")`
    display: none;
  `}
`

export const StyledArrow = styled.img`
  ${media.lessThan("lg")`
    width: 12.65vw;
    max-width: 21rem;
  `}
`

export const StyledTextBlock = styled(TextBlock)`
  text-align: center;
  .smallHeading {
    margin-bottom: 3rem;
    .underline {
      padding-bottom: 5px;
    }
  }

  .text {
    width: 84%;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  ${media.lessThan("md")`
    .text {
      margin-bottom: 1rem;
    }
  `}
`
