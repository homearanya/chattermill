import styled from "styled-components"
import { Container } from "react-awesome-styled-grid"
import { Section } from "../../styles/common.styled"
import { $colorPrimary } from "../../styles/variables"

export const StyledSection = styled(Section)``

export const StyledContainer = styled(Container)`
  padding: 3rem 0;
  background-color: ${$colorPrimary};
`
