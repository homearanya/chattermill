import styled from "styled-components";
import { Container } from "react-awesome-styled-grid";

import media from "../../styles/media";
import { MediumHeading } from "../../styles/common.styled";
import { $colorSecondary, $greyLight } from "../../styles/variables";
import { transitionIntoView } from "../../styles/mixins";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 30rem auto;
  ${media.lessThan("md")`
    grid-template-columns: 0rem auto;
  `}
`;
export const Results = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  text-align: right;
  position: relative;
  top: 1rem;
  text-transform: uppercase;
`;
export const TableWrapper = styled.div`
  ${media.lessThan("md")`
    margin-top: 2rem;
  `}
`;
export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 3rem 3rem;
  margin-top: 3rem;
`;

interface StyledSectionProps {
  withBorder?: boolean;
}
export const StyledSection = styled.section<StyledSectionProps>`
  padding: 5rem 0;
  border-top: ${({ withBorder }) =>
    withBorder ? `1px solid ${$greyLight}` : 0};
  border-bottom: ${({ withBorder }) =>
    withBorder ? `1px solid ${$greyLight}` : 0};
  ${media.lessThan("sm")`
    padding: 0;
  `}
`;

export const StyledContainer = styled(Container)`
  padding: 0 3rem;
`;

interface StyledHeadingProps {
  inView?: boolean;
}
export const StyledHeading = styled(MediumHeading)<StyledHeadingProps>`
  color: ${$colorSecondary};
  margin-bottom: 7rem;
  margin-top: 4rem;
  text-align: center;
  ${props => transitionIntoView(true, props.inView)};
  ${media.lessThan("md")`
    margin-bottom: 2rem;
  `}

  ${media.lessThan("sm")`
    font-size: 3rem;
    line-height: 3.4rem;
    text-align: center;
  `}
`;
