import styled from "styled-components"
import { Row } from "react-awesome-styled-grid"

import media from "../../styles/media"
import { $colorSecondary } from "../../styles/variables"
import { animation, flexUnit, toVM } from "../../styles/mixins"
import { Section, MediumHeading, fadeIn } from "../../styles/common.styled"

export const StyledSection = styled(Section)`
  padding: 7rem 0 9rem 0;

  ${media.lessThan("md")`
    padding-top: 5rem !important;
    padding-bottom: 0rem !important;
  `};
`

export const StyledRow = styled(Row)`
  margin-bottom: 10rem;
  ${animation(fadeIn, 1, 0)};
  ${media.lessThan("sm")`
    margin-bottom: 7rem;
  `};
`
export const StyledHeading = styled(MediumHeading)`
  color: ${$colorSecondary};
  margin-bottom: 0 !important;
  ${flexUnit(toVM(20, 768), 20, 36)};

  ${media.lessThan("sm")`
    font-size: 2.6rem !important;
    line-height: 3rem !important;
    margin-bottom: 3rem !important;
    text-align: center;
  `};
`
