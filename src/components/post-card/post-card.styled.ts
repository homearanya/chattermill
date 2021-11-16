import { Link } from "gatsby"
import styled, { css } from "styled-components"

import media from "../../styles/media"
import {
  TinyHeading,
  MediumHeading,
  Paragraph,
  fadeInTop,
  fadeIn,
} from "../../styles/common.styled"
import { animation } from "../../styles/mixins"
import { $colorHeading, $white } from "../../styles/variables"
import Image from "../image"

interface StyledImageProps {
  readonly imageWidth?: number
  readonly imageHeight?: number
  readonly imageHeightAuto: boolean
  readonly vertical?: boolean
  readonly imageFirst?: boolean
  readonly aspectRatio?: number
}
export const StyledImage = styled(Image)<StyledImageProps>`
  height: ${({ vertical }) => (vertical ? "auto" : "100%")};
  flex: ${({ imageWidth }) => `1 0 ${imageWidth}%`};
  ${animation(fadeIn, 1, 1)};
  width: 100%;

  ${({ vertical, imageFirst }) =>
    vertical
      ? imageFirst
        ? css`
            margin-bottom: 3rem;
          `
        : css`
            margin-top: 3rem;
          `
      : imageFirst
      ? css`
          margin-right: 3rem;
        `
      : css`
          margin-left: 3rem;
        `}

  &.gatsby-image-wrapper > div {
    ${({ imageHeightAuto, imageHeight, aspectRatio }) =>
      imageHeightAuto
        ? css`
            padding-bottom: unset !important;
          `
        : imageHeight &&
          aspectRatio &&
          css`
            padding-bottom: ${imageHeight / aspectRatio}% !important;
          `};
  }

  ${media.lessThan("sm")`
    flex: 1 1 50%;
  `}
`
export const TextBlockWrapper = styled.div``

export const StyledCategory = styled(TinyHeading)`
  margin-bottom: 1rem;
  ${animation(fadeInTop, 1, 0.2)};
`

interface StyledHeadingProps {
  readonly headingFontSize: number
}
export const StyledHeading = styled(MediumHeading)<StyledHeadingProps>`
  margin-bottom: 2rem;
  font-size: ${({ headingFontSize }) => `${headingFontSize}px !important`};
  line-height: ${({ headingFontSize }) =>
    `${headingFontSize + 4}px !important`};
  ${animation(fadeInTop, 1, 0.4)};
`
export const StyledAuthor = styled.p`
  color: ${$colorHeading};
  margin-bottom: 2rem;
  font-size: 1.4rem;
  text-transform: none;
  ${animation(fadeInTop, 1, 0.6)};
`

interface StyledIntroProps {
  readonly excerptFontSize: number
}
export const StyledIntro = styled(Paragraph)<StyledIntroProps>`
  font-size: ${({ excerptFontSize }) => `${excerptFontSize}px`};

  margin-bottom: 0;
  text-transform: none;
  ${animation(fadeInTop, 1, 0.8)};
`

export const StyledLink = styled(Link)`
  width: 100%;
  flex: 1 0 100%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  ${media.lessThan("sm")`
    max-width: 40rem;
  `}
`

interface ArticleProps {
  readonly imageFirst?: boolean
  readonly vertical?: boolean
}
export const Article = styled.article<ArticleProps>`
  flex: 1 0 100%;
  max-width: ${({ vertical }) => vertical && "50rem"};
  background-color: ${$white};
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ vertical, imageFirst }) =>
    vertical
      ? imageFirst
        ? "column"
        : "column-reverse"
      : imageFirst
      ? "row"
      : "row-reverse"};

  &::before{
    content: "";
    display: block;
    position: absolute;
    z-index: 0;
    width: calc(100% + 80px);
    height: calc(100% + 60px);
    padding: 30px 40px 0;
    left: -40px;
    top: -30px;
    transition: all .42s cubic-bezier(.165,.84,.44,1);
    background-color: transparent;
    border-radius: 2px;
    overflow: hidden;

    ${media.lessThan("lg")`
      width: calc(100% + 70px);
      height: calc(100% + 60px);
      padding: 25px 35px 0;
      left: -35px;
      top: -25px;
    `}
    ${media.lessThan("md")`
      width: calc(100% + 60px);
      height: calc(100% + 50px);
      padding: 20px 30px 0;
      left: -30px;
      top: -20px;
    `}
    ${media.lessThan("sm")`
      width: calc(100% + 40px);
      height: calc(100% + 30px);
      padding: 15px 20px 0;
      left: -20px;
      top: -15px;
    `}

  }

  ${StyledLink}:hover &::before {
    box-shadow: 0 0 40px rgba(0,0,0,.1);

    ${media.lessThan("lg")`
      box-shadow: 0 0 30px rgba(0,0,0,.1);
    `}

    ${media.lessThan("md")`
      box-shadow: 0 0 20px rgba(0,0,0,.1);
    `}
    ${media.lessThan("sm")`
      box-shadow: 0 0 10px rgba(0,0,0,.1);
    `}
  }
`
