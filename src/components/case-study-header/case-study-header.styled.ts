import styled from "styled-components"
import { Link } from "gatsby"
import { Container } from "react-awesome-styled-grid"

import { $white, $colorPrimary } from "../../styles/variables"
import media from "../../styles/media"

import Image from "../image"

export const Wrapper = styled.div`
  position: relative;
`

export const StyledSection = styled.section`
  min-height: 50rem;
  padding: 6rem 0 20rem;
  ${media.lessThan("sm")`
    padding: 5rem 0;
  `};
`

export const StyledContainer = styled(Container)`
  color: ${$white};
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`

export const StyledImage = styled(Image)`
  height: 100%;
`

export const StyledLink = styled(Link)`
  &&,
  &&:link,
  &&:visited {
    display: block;
    color: ${$white};
    text-decoration: none;
    font-size: 1.6rem;
    line-height: 2.1rem;
    margin-bottom: 3rem;

    span {
      display: inline-block;
      color: ${$colorPrimary};
      font-size: 2rem;
      margin-right: 1rem;
      transform: translateX(0);
      transition: transform 0.2s;
    }
  }

  &&:hover,
  &&:active {
    span {
      transform: translateX(-1rem);
    }
  }
`

export const Tagline = styled.p`
  display: inline-block;
  font-size: 1.6rem;
  line-height: 2.1rem;
  margin-bottom: 2rem;
`

export const Text = styled.div`
  font-size: 3.6rem;
  line-height: 4.8rem;
  max-width: 59rem;

  ${media.lessThan("sm")`
    font-size: 2.6rem;
    line-height: 3.6rem;
  `};
`
