import styled from "styled-components";

import media from "../../styles/media";
import {
  $colorPrimary,
  $colorHeading,
  $lime,
  $white
} from "../../styles/variables";
import { centerTextBlock, boxShadow } from "../../styles/mixins";
import TextBlock from "../text-block";

interface StyledTextBlockProps {
  withBoxShadow?: boolean;
}
export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  position: relative;
  height: 100%;
  padding: 5rem 3rem;
  ${props => props.withBoxShadow && boxShadow};
  display: flex;
  flex-direction: column;

  > div:first-child {
    height: 11rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div:last-child {
    margin-top: auto;
  }

  .image {
    display: inline-block;
    max-height: 70px;
    max-width: 200px;
    width: 100%;
    margin: 0;
  }

  .tagline {
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${$lime};
    color: ${$white};
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: unset;
    padding: 0.5rem 2rem;
  }

  .smallHeading {
    margin: 2rem 0 1rem;
  }

  .text {
    position: relative;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  .moreDetails {
    margin-bottom: 0;
    a,
    a:link,
    a:visited {
      font-size: 1.8rem;
      color: ${$colorHeading} !important;
    }

    a:hover,
    a:active {
      color: ${$colorPrimary} !important;
    }
  }

  ${media.lessThan("lg")`
      padding: 3rem 3rem 5rem;
      ${centerTextBlock};
      max-width: 37rem;
      .smallHeading {
        margin: 1rem 0 2rem;
      } 
  
    `}

  ${media.lessThan("sm")`
      display: block;
      box-shadow: none !important;
      padding: 3rem 2rem 0;
      max-width: 29rem;
  
     .image {
      margin-bottom: 2rem;
    }
    `}
`;
