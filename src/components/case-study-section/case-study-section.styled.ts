import styled from "styled-components";
import { Container } from "react-awesome-styled-grid";

import media from "../../styles/media";

import {
  absoluteCenter,
  verticalCenter,
  transitionIntoView,
  centerTextBlock
} from "../../styles/mixins";

import Image from "../image";
import TextBlock from "../text-block";

export const StyledSection = styled.section``;

export const BackgroundImageWrapper = styled.div`
  clip-path: ellipse(39% 98% at 100% 50%);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;

  ${media.lessThan("sm")`
    position: static;
    clip-path: none;
    z-index: -1;
  `}
`;

export const BackgroundImage = styled(Image)`
  display: block !important;
  height: 100%;
  width: 39%;
  bottom: 0;
  right: 0;

  ${media.lessThan("lg")`
    width: 61%;
  `}
  ${media.lessThan("md")`
    width: 76%;
  `}

  ${media.lessThan("sm")`
    position: relative !important;
    height: 34.3rem !important;
    width: 100% !important;
  `}
`;

export const StyledContainer = styled(Container)`
  background-color: rgba(189, 217, 255, 0.1);
`;

export const StyledTextBlock = styled(TextBlock)`
  ${verticalCenter};

  padding: 12.5rem 0;
  .tagline {
    margin-bottom: 3rem;
  }

  .text {
    width: 63%;
    margin: 0;
  }

  ${media.lessThan("lg")`
    .text {
      width: 80%;
    }
  `}

  ${media.lessThan("md")`
    .text {
      width: 80%;
    }
  `}

  ${media.lessThan("sm")`
    .text {
      width: 100%;
    }
      ${centerTextBlock};
      padding: 5rem 0;
  `}
`;

export const CardWrapper = styled.div`
  ${verticalCenter};
  margin-left: auto;
  width: 100%;
  max-width: 52.6rem;

  ${media.lessThan("sm")`
    ${absoluteCenter};
    top: 70%;
    z-index: 1;
    width: 100%;
    max-width: 43rem;
    padding: 0 1rem;
  `}
`;

interface CardProps {
  inView?: boolean;
}
export const Card = styled(Image)<CardProps>`
  ${props => transitionIntoView(true, props.inView)}
`;
