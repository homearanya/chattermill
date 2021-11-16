import styled from "styled-components";
import { Col } from "react-awesome-styled-grid";

import { fadeInLeft } from "../../styles/common.styled";
import media from "../../styles/media";
import { animation, transitionIntoViewLeft } from "../../styles/mixins";

export const StyledCol = styled(Col)`
  ${media.greaterThan("md")`
    flex: 0 1 auto !important;
    max-width: 100% !important;
  `}
`;

interface StyledLinkProps {
  index: number;
  withObserver?: boolean;
  inView?: boolean;
}
export const StyledLink = styled.a<StyledLinkProps>`
  position: relative;
  margin: 2rem 0;

  ${props =>
    props.withObserver
      ? transitionIntoViewLeft(
          props.withObserver,
          props.inView,
          props.index * 0.2
        )
      : animation(fadeInLeft, 1, (props.index + 1) * 0.2)};

  ${media.lessThan("sm")`
      padding: 2rem 0;
  `}
`;
export const StyledWhiteIcon = styled.img`
  opacity: 1;
  transition: opacity 0.2s;
  max-width: 170px;
  max-height: 75px;

  ${StyledLink}:hover & {
    opacity: 0;
  }
`;
export const StyledColorIcon = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  max-width: 170px;
  max-height: 75px;
  transition: opacity 0.2s;
  ${StyledLink}:hover & {
    opacity: 1;
  }
`;
