import styled, { css } from "styled-components";

import media from "../../styles/media";
import { WideContainer } from "../../styles/common.styled";
import { $white, $colorPrimary, $colorHeading } from "../../styles/variables";
import { centerTextBlock } from "../../styles/mixins";

import TextBlock from "../text-block";

import ShapeLeft from "../../images/shape1.inline.svg";

const shape = (color: string) => css`
  position: absolute;
  fill: ${color};
  z-index: 1;
`;
interface StyledShapeLeftProps {
  color: string;
}
export const StyledShapeLeft = styled(ShapeLeft)<StyledShapeLeftProps>`
  transform: rotate(45deg);
  ${props => shape(props.color)};
  top: -40rem;
  left: -36rem;

  ${media.lessThan("sm")`
    top: -49rem;
    left: -45rem;
  `}
`;

interface StyledShapeRightProps {
  color: string;
}

export const StyledShapeRight = styled(ShapeLeft)<StyledShapeRightProps>`
  transform: rotate(215deg);
  ${props => shape(props.color)};
  top: 27rem;
  right: -33rem;

  ${media.lessThan("sm")`
    top: 27rem;
    right: -51rem;
  `}
`;

export const StyledSection = styled.section``;

interface StyledWideContainerProps {
  backgroundColor: string;
}
export const StyledWideContainer = styled(WideContainer)<
  StyledWideContainerProps
>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : $colorPrimary};
`;

export const StyledTextBlock = styled(TextBlock)`
  padding: 6rem 0;
  ${centerTextBlock};
  max-width: 60rem;

  .image {
    width: 25.3rem;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .heading {
    color: ${$white};
    margin: 0;
  }
  .subHeading {
    color: ${$white};
    margin: 5rem;
  }
  .text {
    color: ${$colorHeading};
    font-size: 2.4rem;
    line-height: 1.3;
    margin-bottom: 3rem;
  }

  .button {
    font-size: 1.4rem;
  }
  &&& {
    a.button2 {
      background: none;
    }
  }

  > div:nth-child(2) {
    display: inline-block;
  }
  > div:nth-child(3) {
    display: inline-block;
  }

  ${media.lessThan("sm")`
    padding: 3rem 0;
    .subHeading {
      font-size:3.6rem;
      line-height: 1.3;
    }
  `}
`;
