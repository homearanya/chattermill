import styled from "styled-components";
import { $colorHeading } from "../../styles/variables";
import media from "../../styles/media";

export const Container = styled.div`
  background-color: ${$colorHeading};
  padding: 15rem 15rem 15rem 15rem;
`;

interface StyledSectionProps {
  marginTop?: string;
}

export const StyledSection = styled.section<StyledSectionProps>`
  margin-top: ${props => (props.marginTop ? "5rem" : "0")};

  ${({ marginTop }) => media.lessThan("sm")`
    margin-top: ${marginTop ? "3rem" : "0"};
  `}
`;
