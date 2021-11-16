import styled from "styled-components"
import { Container } from "react-awesome-styled-grid"

import { $colorHeading, $colorPrimary } from "../../styles/variables"
import { MediumHeading } from "../../styles/common.styled"

export const StyledSection = styled.section``

export const StyledContainer = styled(Container)`
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: ${$colorPrimary};
`

export const StyledMediumHeading = styled(MediumHeading)`
  color: ${$colorHeading};
  text-align: center;
  margin: 4rem 0;
`
