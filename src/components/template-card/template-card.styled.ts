import styled, { css } from "styled-components"
import { Link } from "gatsby"

import Image from "../image"
import media from "../../styles/media"
import { $colorHeading, $colorSecondary } from "../../styles/variables"

export const StyledLink = styled(Link)`
  text-decoration: none;
  height: 100%;
  width: 100%;
  margin-bottom: 3rem;
  ${media.lessThan("md")`
    margin-bottom: 1.5rem;
  `}
`

export const StyledImg = styled(Image)``

export const StyledHeader = styled.h1`
  font-size: 4rem;
  color: ${$colorHeading};
  text-align: center;
  padding-top: 2rem;

  ${media.lessThan("lg")`
    text-align: center;
  `}
`
interface StyledHeadingProps {
  textHeight?: number
}
export const StyledHeading = styled.h3<StyledHeadingProps>`
  font-size: 2rem;
  color: ${$colorHeading};
  text-align: left !important;
  ${({ textHeight }) =>
    textHeight &&
    css`
      height: ${textHeight + 10}px;
    `};
`

export const StyledSmallHeadingLink = styled.a`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: left;
  text-decoration: none;
  color: ${$colorSecondary};

  a:hover {
    text-decoration: none;
    cursor: pointer;
  }

  a,
  a:link,
  a:visited {
    color: ${$colorSecondary};
    text-decoration: none;
  }
`

export const StyledCard = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 40rem;
  padding: 3rem 3rem;
  border-radius: 10px;
  box-shadow: 0 9px 25px -2px rgba(11, 26, 56, 0.12);
  background-color: #fff;

  ${media.lessThan("lg")`
    padding: 1rem;
  `}
`

export const RadientStroke = styled.div`
  height: 4px;
  background: #bdd9ff;
  border-radius: 10px;
  width: 100% !important;
`

export const StyledParagraph = styled.p`
  font-size: 1.5rem;
  margin: 2rem 0;
  color: ${$colorSecondary};
`
