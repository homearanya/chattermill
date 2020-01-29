import styled from "styled-components"

import { Section } from "../../styles/common.styled"
import { $greyLight } from "../../styles/variables"

interface StyledSectionProps {
  borderTop?: boolean | undefined
  borderBottom?: boolean | undefined
}
export const StyledSection = styled(Section)<StyledSectionProps>`
  padding: 3rem 0;
  border-top: ${props => props.borderTop && `1px solid ${$greyLight}`};
  border-bottom: ${props => props.borderBottom && `1px solid ${$greyLight}`};
`
