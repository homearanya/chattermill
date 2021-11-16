import React, { useEffect, useRef } from "react"
import { Settings } from "react-slick"

import CarouselArrow from "../carousel-arrow"
import { $breakpoints } from "../../styles/media"

import {
  StyledSection,
  StyledWrapper,
  StyledRow,
  Box,
  StyledParagraph,
  StyledLabel,
  StyledImage,
  StyledSlider,
  StyledContainer,
} from "./product-page-quotes.styled"
import { contentfulImageMap } from "../../utils/helpers"

export const ProductPageQuotes = ({ data }) => {
  const { caseStudies } = data
  const sliderRef = useRef(null)
  const slide = (e) => {
    if ((e.deltaX >= -5 && e.deltaX <= 5) || e.deltaX > 105 || e.deltaX < -105)
      return
    const horizontal = e.deltaX
    horizontal > 0
      ? sliderRef.current?.slickNext()
      : sliderRef.current?.slickPrev()
  }
  useEffect(() => {
    window.addEventListener("wheel", slide)

    return () => {
      window.removeEventListener("wheel", slide)
    }
  })
  const settings: Settings = {
    infinite: true,
    slidesToShow: caseStudies.length < 7 ? caseStudies.length : 7,
    slidesToScroll: 1,
    prevArrow: <CarouselArrow right={false} />,
    nextArrow: <CarouselArrow />,
    responsive: [
      {
        breakpoint: $breakpoints.lg * 16,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: $breakpoints.md * 16,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: $breakpoints.sm * 16,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <StyledSection>
      <StyledContainer>
        <StyledRow>
          <StyledSlider ref={sliderRef} {...settings}>
            {caseStudies &&
              caseStudies.map((card, index) => {
                return (
                  <Box key={index}>
                    <StyledWrapper>
                      <StyledImage
                        image={contentfulImageMap(card.photoImage)}
                        alt={card.photoImage.title}
                      />
                      <StyledParagraph>{card.quote}</StyledParagraph>
                      <StyledLabel>{card.name}</StyledLabel>
                      <StyledParagraph>{card.title}</StyledParagraph>
                    </StyledWrapper>
                  </Box>
                )
              })}
          </StyledSlider>
        </StyledRow>
      </StyledContainer>
    </StyledSection>
  )
}

export default ProductPageQuotes
