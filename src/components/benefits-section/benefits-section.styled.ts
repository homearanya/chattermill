import styled from "styled-components";
import { Col, Container } from "react-awesome-styled-grid";

import media from "../../styles/media";
import { MediumHeading } from "../../styles/common.styled";
import {
  $colorPrimary,
  $colorSecondary,
  $greyLight,
  $white
} from "../../styles/variables";
import {
  centerTextBlock,
  boxShadow,
  transitionIntoView
} from "../../styles/mixins";
import TextBlock from "../text-block";

interface StyledSectionProps {
  withBorder?: boolean;
  inverted?: boolean;
}
export const StyledSection = styled.section<StyledSectionProps>`
  padding: 2rem 0;
  border-top: ${({ withBorder }) =>
    withBorder ? `1px solid ${$greyLight}` : 0};
  border-bottom: ${({ withBorder }) =>
    withBorder ? `1px solid ${$greyLight}` : 0};

  ${media.lessThan("sm")`
    padding: 3rem 0 0;
  `};
`;

interface StyledContainerProps {
  withBorder?: boolean;
  inverted?: boolean;
}
export const StyledContainer = styled(Container)<StyledContainerProps>`
  background-color: ${({ inverted }) =>
    inverted ? $colorPrimary : `transparent`};
`;
interface StyledHeadingProps {
  inView?: boolean;
}
export const StyledHeading = styled(MediumHeading)<StyledHeadingProps>`
  color: ${$colorSecondary};
  margin-bottom: 9rem;
  text-align: center;
  ${props => transitionIntoView(true, props.inView)};

  ${media.lessThan("sm")`
    text-align: center;
  `}
`;

export const StyledCol = styled(Col)``;

interface StyledTextBlockProps {
  withBoxShadow?: boolean;
  inverted?: boolean;
}
export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  height: 100%;
  padding: 5rem 3rem;
  ${props => props.withBoxShadow && boxShadow};
  text-align: center;


  .imageName {
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

 .smallHeading {
   color: ${({ inverted }) => (inverted ? $white : `unset`)};
   margin-bottom: 3rem;
   .underline {
     padding-bottom: 5px;
    }
  }

  .text {
    margin: 0 auto;
    margin-bottom: 3rem;
    color: ${({ inverted }) => (inverted ? $white : `unset`)};
  }

  ${media.lessThan("lg")`
    padding: 5rem 2rem;
  `}

  ${media.lessThan("md")`
    box-shadow: none !important;
    ${centerTextBlock};
  `}

  ${media.lessThan("sm")`
    padding-top: 2rem;
    padding-bottom: 2rem;
    box-shadow: none !important;
    ${centerTextBlock};
  `}
`;
