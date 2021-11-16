import React from "react"
import ReactPlayer from "react-player"
import { Container } from "react-awesome-styled-grid"

import {
  StyledSection,
  StyledCol,
  StyledRow,
  StyledHeader,
  StyledParagraph,
  VideoWrapper,
} from "./product-page-section.styled"

import blueCircle from "./Rectangle.svg"
import yellowCircle from "./yellow-circle.svg"
import redCircle from "./red-circle.svg"
import IntegrationsCarousel from "../carousel-integrations-slider"

export const ProductPageSection = ({
  data: {
    sectionTitle,
    sectionDescription: { sectionDescription },
    sectionImage: {
      file: { url: url1 },
    },
    sectionTitle2,
    sectionDescription2,
    sectionImage2: {
      file: { url: url2 },
    },
    sectionTitle3,
    sectionDecription3,
    sectionImage3: {
      file: { url: url3 },
    },
    sectionTitle4,
    sectionDescription4,
  },
}) => {
  // const [ref, inView] = useInView({
  //   threshold: 0,
  //   triggerOnce: true,
  //   rootMargin: "-100px",
  // })

  const features = [
    {
      title: sectionTitle,
      description: sectionDescription,
      url: url1,
      imgSrc: blueCircle,
    },
    {
      title: sectionTitle2,
      description: sectionDescription2,
      url: url2,
      imgSrc: redCircle,
    },
    {
      title: sectionTitle3,
      description: sectionDecription3,
      url: url3,
      imgSrc: yellowCircle,
    },
    { title: sectionTitle4, description: sectionDescription4 },
  ]
  return (
    <StyledSection>
      <Container>
        {features.map(({ title, description, url, imgSrc }, index) => {
          const reverse = index % 2 === 0
          return (
            <StyledRow reverse={reverse} key={index}>
              <StyledCol
                xs={4}
                sm={4}
                md={6}
                lg={7}
                offset={{ lg: reverse ? 1 : 0 }}
              >
                {url ? (
                  <VideoWrapper
                  // ref={ref}
                  >
                    <ReactPlayer
                      url={url}
                      playing={true}
                      loop
                      width="100%"
                      height="100%"
                      muted={true}
                    />
                  </VideoWrapper>
                ) : (
                  <IntegrationsCarousel />
                )}
              </StyledCol>
              <StyledCol
                xs={4}
                sm={4}
                md={6}
                lg={4}
                offset={{ lg: reverse ? 0 : 1 }}
              >
                {imgSrc && <img src={imgSrc} />}
                {title && <StyledHeader>{title}</StyledHeader>}
                {description && (
                  <StyledParagraph>{description}</StyledParagraph>
                )}
              </StyledCol>
            </StyledRow>
          )
        })}
      </Container>
    </StyledSection>
  )
}

export default ProductPageSection
