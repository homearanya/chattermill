import styled from "styled-components"
import { Container } from "react-awesome-styled-grid"

import media from "../../styles/media"
import Slider from "react-slick"
import Image from "../image"

export const StyledSection = styled.section`
  padding: 9rem 0;
  ${media.lessThan("sm")`
    padding: 5rem 0;
  `};
`

export const StyledContainer = styled(Container)`
  padding: 0 3rem !important;
  width: 100% !important;
`

export const StyledHeader = styled.h2`
  font-size: 34px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 5rem;
  ${media.lessThan("sm")`
    margin-bottom: 0rem;
  `};
`

export const StyledRow = styled.div`
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 25%;
    height: 100%;
    top: 0;
    z-index: 10;
  }
  &::before {
    left: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }
  &::after {
    right: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }
  .slick-track {
    ::before,
    ::after {
      content: none;
    }
    display: flex;
  }

  .slick-slide {
    height: unset;
    float: unset;
    margin: 4rem 0;
    > div {
      height: 100%;
      > div {
        height: 100%;
        > div {
          height: 100%;
        }
      }
    }
  }
`

export const StyledSlider = styled(Slider)`
  ${media.lessThan("sm")`
    max-width: 40rem;
    margin: 0 auto;
  `};
`

export const Box = styled.div``

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  padding: 3rem 2rem;

  ${media.lessThan("sm")`
    margin: 0 1rem;
  `};
`

export const StyledImage = styled(Image)`
  margin-bottom: 2rem;
  height: 8rem;
  width: 8rem;
  position: relative;
`

export const StyledLabel = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin: 1rem 0;
  text-align: center;
`

export const StyledParagraph = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`
