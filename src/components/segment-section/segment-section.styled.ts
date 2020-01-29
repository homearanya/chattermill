import styled from "styled-components"

import media from "../../styles/media"
import { Section } from "../../styles/common.styled"

export const StyledSection = styled(Section)`
  padding: 0 0 5rem;

  .text {
    width: 110%;
    margin-bottom: 0;
  }
  ${media.lessThan("lg")`
    padding: 3rem 0;
  `};
`
