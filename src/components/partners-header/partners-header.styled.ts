import styled from "styled-components";
import { Col } from "react-awesome-styled-grid";

import media from "../../styles/media";
import { $colorPrimary } from "../../styles/variables";
import { fadeInTop, fadeIn } from "../../styles/common.styled";
import {
  centerTextBlock,
  absoluteCenter,
  staggeredAnimation,
  animation
} from "../../styles/mixins";

import TextBlock from "../text-block";
import Image from "../image";

export const StyledSection = styled.section`
  overflow: hidden;
  /* Row */
  & > div > div {
    ${media.lessThan("md")`
      flex-direction: column-reverse;
    `};
  }
  /* first column */
  & > div > div > div:first-child {
    padding: 13rem 0;
    ${media.lessThan("md")`
      padding: 0 0 3rem;
    `};
    ${media.lessThan("sm")`
      padding: 0rem;
    `};
  }
  /* second column */
  & > div > div > div:last-child {
    ${media.lessThan("md")`
      padding: 3rem 0;
    `};
  }
`;

interface StyledTextBlockProps {
  classNames: string[];
}

export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  .subHeading {
    font-size: 3.3rem;
    line-height: 4.1rem;
    margin-bottom: 3rem;
  }
  .text {
    font-size: 2rem;
    line-height: 2.7rem;
  }
  .text span {
    color: ${$colorPrimary};
  }

  ${props =>
    props.classNames &&
    staggeredAnimation(fadeInTop, 1, 0, 0.2, props.classNames)}

  ${media.lessThan("sm")`
    ${centerTextBlock};
    
    .subHeading {
      font-size: 2.6rem;
      line-height: 3rem;
      margin-bottom: 2rem;
    }

    .emailForm {
      margin-bottom: 7rem;
      text-align: left;
    }
  `}
`;

export const FormWrapper = styled.div`
  width: 100%;
  border-color: ${$colorPrimary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 50rem;
  ${animation(fadeInTop, 1, 0.8)};

  ${media.lessThan("sm")`
    width: 31rem !important;
    width: 100%;
    align-items: center;
    margin: 0 auto;
  `}
`;

export const StyledCol = styled(Col)`
  position: relative;

  ${media.lessThan("md")`
    max-width: 29rem;
    margin: 0 auto;
  `}
`;

export const StyledImage = styled(Image)`
  width: 100%;
  position: absolute !important;
  ${absoluteCenter};
  ${animation(fadeIn, 1, 1.2)};
  ${media.lessThan("md")`
    position: static !important;
    top: unset;
    left: unset;
    transform: none;
  `}
`;
