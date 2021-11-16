import { Link } from "gatsby"
import Slider from "react-slick"
import styled from "styled-components"
import media from "../../styles/media"
import Image from "../image"

export const StyledSection = styled.section`
  padding: 50px;
  padding-top: 200px;
  padding-bottom: 300px;
  color: #ffffff;
  background-color: #291e45;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
  margin: 90px 0;
  text-align: center;
  position: relative;
  transition: background-image 2s ease-in-out;
  z-index: 2;

  ${media.lessThan("lg")`
    padding: 150px 15px;
  `}
  ${media.lessThan("md")`
    padding: 100px 15px;
  `}
`
export const Title = styled.h1`
  max-width: 800px;
  font-style: normal;
  font-weight: 500;
  font-size: 45px;
  line-height: 60px;
  margin: 0 auto;
  z-index: 1;

  ${media.lessThan("lg")`
    max-width: 50%;
    font-size: 2.8rem;
    line-height: 3.2rem;
    margin-bottom: 1.5rem;
  `}
  ${media.lessThan("sm")`
    max-width: 75%;
  `}
`
export const Button = styled(Link)`
  width: max-content;
  font-size: 2rem;
  padding: 1.5rem 2rem;
  color: #291e45;
  background-color: #dff500;
  border-radius: 21px;
  border: none;
  margin: 0 auto;
  margin-bottom: 50px;
  cursor: pointer;
  font-weight: 300;
  text-decoration: none;
  z-index: 1;
  position: relative;

  ${media.lessThan("lg")`
    font-size: 1.8rem;
  `}
  ${media.lessThan("sm")`
    font-size: 1.6rem;
  `}
`

export const StyledSlider = styled(Slider)`
  max-width: 1200px;
  display: flex;
  height: 100%;
  margin: 0 auto;
  align-items: center;
`

export const Testimonial = styled.p`
  max-width: 80%;
  font-style: italic;
  font-size: 2.6rem;
  line-height: 2.9rem;
  text-align: center;
  font-weight: 300;
  margin: 50px auto;

  ${media.lessThan("lg")`
    font-size: 2rem;
    line-height: 3rem;
  `}
  ${media.lessThan("sm")`
    font-size: 1.8rem;
    line-height: 2rem;
  `}
`
export const StyledImage = styled(Image)`
  position: absolute !important;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  &:after {
    content: "";
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    opacity: 0.7;
  }
`
