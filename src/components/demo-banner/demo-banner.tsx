import React from "react";
import { Row } from "react-awesome-styled-grid";
import styled, { css } from "styled-components";
import ShapeLeft from "../../images/shape1.inline.svg";
import media from "../../styles/media";
import { BigHeading } from "../../styles/common.styled";

import { StyledWideContainer, StyledSection } from "./demo-banner.styled";

export const DemoBanner = () => {
  return (
    <StyledWideContainer>
      <StyledSection>
        <StyledRow>
          <StyledShapeLeft />
          <StyledHeader>Shake off the feedback fog</StyledHeader>
        </StyledRow>
      </StyledSection>
    </StyledWideContainer>
  );
};

export default DemoBanner;

interface StyledShapeLeftProps {
  color: string;
}

export const StyledHeader = styled(BigHeading)`
  color: #ffff;
  padding: 2rem;

  ${media.lessThan("sm")`
    display: none;
  `}
`;

export const StyledRow = styled(Row)`
  padding: 4rem 0;
  display: flex;
  align-items: center;

  ${media.lessThan("sm")`
    display: none;
  `}
`;

export const StyledShapeLeft = styled(ShapeLeft)<StyledShapeLeftProps>`
  transform: rotate(360deg);
  margin-left: -25rem;
  top: -1rem;
  padding: 3rem;
  height: 30rem;
  fill: #def200 ${media.lessThan("sm")`
    display: none;
  `};
`;
