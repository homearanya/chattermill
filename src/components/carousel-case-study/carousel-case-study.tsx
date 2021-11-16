import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Carousel from "react-bootstrap/Carousel"
import { Container } from "react-awesome-styled-grid"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Image from "../image"
import {
  StyledSection,
  LargeHeading,
  StyledLogoButton,
  StyledSpan,
  StyledLink,
  StyledRow,
  StyledLogo,
  Wrapper,
} from "./carousel-case-study.styles"
// import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"

import CleoColorLogo from "../../images/cleo-logo.inline.svg"
import MooColorLogo from "../../images/moo-logo-small.inline.svg"
import BloomWildLogo from "../../images/bloom-wild-logo-small.inline.svg"

function Slider() {
  const { mooImage, cleoImage, bloomWildImage } = useStaticQuery<
    GatsbyTypes.SliderQuery
  >(graphql`
    fragment HomeCarouselFragment on File {
      childImageSharp {
        gatsbyImageData(
          width: 900
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      publicURL
    }

    query Slider {
      mooImage: file(relativePath: { eq: "moo-case-study.png" }) {
        ...HomeCarouselFragment
      }
      cleoImage: file(relativePath: { eq: "cleo-case-study-wide.png" }) {
        ...HomeCarouselFragment
      }
      bloomWildImage: file(
        relativePath: { eq: "bloom-wild-case-study-wide.png" }
      ) {
        ...HomeCarouselFragment
      }
    }
  `)
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  function Icon() {
    return (
      <div
        style={{
          display: "none",
        }}
      ></div>
    )
  }

  return (
    <div>
      <StyledSection>
        <Container>
          <LargeHeading>
            Trusted by the world's{" "}
            <StyledSpan>fastest growing companies</StyledSpan>
          </LargeHeading>
          <Wrapper>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              controls={true}
              interval={3000}
              prevIcon={Icon}
              nextIcon={Icon}
              style={{
                paddingTop: "2rem",
              }}
            >
              <Carousel.Item>
                <AnchorLink to="/customers#target" title="case-studies">
                  <Image
                    className="d-block w-100"
                    image={mooImage as GatsbyTypes.File}
                    alt="First slide"
                  />
                </AnchorLink>
              </Carousel.Item>
              <Carousel.Item>
                <StyledLink to="/customers#target">
                  <Image
                    className="d-block w-100"
                    image={cleoImage as GatsbyTypes.File}
                    alt="Second slide"
                  />
                </StyledLink>
              </Carousel.Item>
              <Carousel.Item id="overide-bootstrap">
                <StyledLink to="/customers#target">
                  <Image
                    className="d-block w-100"
                    image={bloomWildImage as GatsbyTypes.File}
                    alt="Third slide"
                  />
                </StyledLink>
              </Carousel.Item>
            </Carousel>
          </Wrapper>
        </Container>
      </StyledSection>
      <StyledRow>
        <StyledLogoButton onClick={() => setIndex(0)}>
          <StyledLogo className="d-block w-100">
            <MooColorLogo />
          </StyledLogo>
        </StyledLogoButton>
        <StyledLogoButton onClick={() => setIndex(1)}>
          <StyledLogo className="d-block w-100" id="hover">
            <CleoColorLogo />
          </StyledLogo>
        </StyledLogoButton>
        <StyledLogoButton onClick={() => setIndex(2)}>
          <StyledLogo className="d-block w-100">
            <BloomWildLogo />
          </StyledLogo>
        </StyledLogoButton>
      </StyledRow>
    </div>
  )
}

export default Slider
