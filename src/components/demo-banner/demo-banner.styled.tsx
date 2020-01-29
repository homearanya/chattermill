import styled, { css } from "styled-components";
import { WideContainer, Section } from "../../styles/common.styled";
import { $white, $colorHeading } from "../../styles/variables";
import media from "../../styles/media";
import { BigHeading } from "../../styles/common.styled";

import ShapeLeft from "../../images/shape1.inline.svg";

const shape = (color: string) => css`
  position: absolute;
  fill: #0000;
  z-index: 1;
`;
interface StyledShapeLeftProps {
  color: string;
}
export const StyledShapeLeft = styled(ShapeLeft)<StyledShapeLeftProps>`
  transform: rotate(45deg);
  ${props => shape(props.color)};
  top: -43rem;
  left: -45rem;

  ${media.lessThan("sm")`
    top: -42rem;
    left: -45rem;
  `}
`;

interface StyledShapeRightProps {
  color: string;
}

export const StyledShapeRight = styled(ShapeLeft)<StyledShapeRightProps>`
  transform: rotate(215deg);
  ${props => shape(props.color)};
  top: 10rem;
  right: -45rem;

  ${media.lessThan("sm")`
    top: 27rem;
    right: -50rem;
  `}
`;

export const StyledWideContainer = styled(WideContainer)`
  background-color: ${$colorHeading};
`;

export const StyledSection = styled(Section)<StyledSectionProps>`
  margin-top: ${props => (props.marginTop ? "5rem" : "0")};

  ${({ marginTop }) => media.lessThan("sm")`
    margin-top: ${marginTop ? "3rem" : "0"};
  `}
`;
