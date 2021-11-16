import styled from "styled-components";
import media from "../../styles/media";
import { boxShadow } from "../../styles/mixins";
import { $white, $greyUltraLight, $colorPrimary } from "../../styles/variables";
import TextBlock from "../text-block";

export const Grid = styled.div`
  display: Grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 5rem 5rem;
  ${media.lessThan("lg")`
    grid-gap: 2rem 4rem;

  `}
`;

interface StyledTextBlockProps {
  withBoxShadow?: boolean;
}
export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  position: relative;
  height: 100%;
  padding: 5rem 3rem 7rem;
  ${props => props.withBoxShadow && boxShadow};
  text-align: center;

  .image {
    display: inline-block;
    max-height: 70px;
    max-width: 200px;
    width: 100%;
    margin-bottom: 80px;
    picture img {
      object-fit: contain !important;
    }
  }

  .tagline {
    position: absolute;
    top: 18rem;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: ${$colorPrimary};
    color: ${$white};
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 18px;
    text-align: center;
    border-radius: 14px;
    text-transform: none;
    margin-bottom: 0;
    ${media.lessThan("sm")`
      top: 16rem;
    `}
  }

  .smallHeading {
    margin: 2rem 0;
    .underline {
      padding-bottom: 5px;
    }
  }

  .text {
    position: relative;
    margin: 0 auto;
    margin-bottom: 3rem;
  }
  .moreDetails {
    position: absolute;
    margin-bottom: 0;
    top: calc(100% - 60px);
    left: 50%;
    transform: translateX(-50%);
  }

  ${media.lessThan("sm")`
    /* display: block;
    box-shadow: none !important; */
    padding: 3rem 2rem 4rem;

   .imageName {
    margin-bottom: 2rem;
  }
  `}

  :before {
    position: absolute;
    left: 0;
    top: 18rem;
    content: "";
    width: 100%;
    height: 1px;
    background: ${$greyUltraLight};
    ${media.lessThan("sm")`
      top: 16rem;
  `}
  }
`;
