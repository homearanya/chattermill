import styled from "styled-components";

import media from "../../styles/media";
import { fadeInTop } from "../../styles/common.styled";
import { centerTextBlock, staggeredAnimation } from "../../styles/mixins";
import { $colorPrimary, $white, $colorHeading } from "../../styles/variables";

import TextBlock from "../text-block";
import Image from "../image";

export const Card = styled.article`
  border-radius: 10px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.15);
`;
export const StyledHeader = styled.header`
  display: flex;

  ${media.lessThan("sm")`
      flex-direction: column;

  `}
`;

export const StyledImageContainer = styled.div`
  background: ${$colorPrimary};
  flex: 1 0 43%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.lessThan("sm")`
      flex: 1 0 auto;
      padding: 5rem 0;
  `}
`;
export const StyledImageWrapper = styled.div`
  background: ${$white};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  border-radius: 40px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.15);
  ${media.lessThan("sm")`
      height: 60%;
  `}
`;
export const Background = styled.div`
  padding-bottom: 100%;
  width: 100%;
`;
export const StyledImage = styled(Image)`
  position: absolute !important;
  width: 40%;
  height: auto;
`;

interface StyledTextBlockProps {
  classNames: string[];
}

export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  flex: 1 0 57%;
  padding: 10rem 5rem;

  .tagline {
    font-size: 1.4rem;
    letter-spacing: 0.5rem;
    line-height: 1.8rem;
    margin-bottom: 3rem;
  }

  .heading {
    font-size: 3.8rem;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 3.8rem;
    text-transform: none;
  }

  .richText {
    margin-bottom: 3rem;
    color: ${$colorHeading};
    p {
      font-size: 20px;
      line-height: 31px;
      margin: 1rem 0rem;
    }
  }

  ${props => {
    return (
      props.classNames &&
      staggeredAnimation(fadeInTop, 1, 0, 0.2, props.classNames)
    );
  }}

  ${media.lessThan("md")`
    flex: 1 0 57%;
    padding: 6rem 4rem;

    .tagline {
    font-size: 1.4rem;
    letter-spacing: 0.5rem;
    line-height: 1.8rem;
    margin-bottom: 3rem;
  }

  .heading {
    font-size: 3.2rem;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 3.2rem;
    text-transform: none;
  }

  .richText {
    margin-bottom: 2rem;
    color: ${$colorHeading};
    p {
      font-size: 16px;
      line-height: 27px;
    }
  `}

  ${media.lessThan("sm")`
    padding: 3rem 2rem;
    ${centerTextBlock};
    flex: 1 0 auto;
    
    .subHeading {
      font-size: 2.6rem;
      line-height: 3rem;
      margin-bottom: 2rem;
    }

  `}
`;
