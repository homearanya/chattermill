import styled from "styled-components";
import { Container } from "react-awesome-styled-grid";

import { $greyLight } from "../../styles/variables";
import media from "../../styles/media";

interface StyledSectionProps {
  borderTop?: boolean | undefined;
  borderBottom?: boolean | undefined;
}
export const StyledSection = styled.section<StyledSectionProps>`
  padding: 3rem 0;
  border-top: ${props => props.borderTop && `1px solid ${$greyLight}`};
  border-bottom: ${props => props.borderBottom && `1px solid ${$greyLight}`};
`;
export const StyledContainer = styled(Container)`
  ${media.between("md", "lg")`
  padding: 0 6.5rem;

`}
`;
