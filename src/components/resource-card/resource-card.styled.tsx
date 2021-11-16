import styled, { css } from "styled-components";
import media from "../../styles/media";
import TextBlock from "../text-block";

export const StyledCard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 40rem;
  padding: 3rem 2rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0 9px 25px -2px rgba(11, 26, 56, 0.12);
  background-color: #fff;
  cursor: pointer;

  ${media.lessThan("lg")`
    padding: 1rem;
  `}
`;
interface StyledTextBlockProps {
  imageCircle: boolean;
  imageHeight?: number;
  imageWidth?: number;
}
export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  width: 100%;
  .image {
    opacity: 1;
    border-radius: ${({ imageCircle }) => (imageCircle ? "50%" : "0")};
    width: 100%;
    ${({ imageHeight }) =>
      imageHeight &&
      css`
        height: ${imageHeight}px;
      `};
    ${({ imageWidth }) =>
      imageWidth &&
      css`
        width: ${imageWidth}px;
        margin: 0 auto 2rem;
      `};
    min-height: 14rem;
  }
  .tagline {
    opacity: 1;
  }
  .heading {
    opacity: 1;
    font-size: 3rem;
    ${media.lessThan("lg")`
      font-size: 2.4rem;
    `}
  }
  .subHeading {
    opacity: 1;
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin-bottom: 1rem;
  }

  .text {
    opacity: 1;
  }
`;
