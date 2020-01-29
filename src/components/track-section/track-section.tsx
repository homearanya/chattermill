import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"
import { useInView } from "react-intersection-observer"

import { TextBlockData, ImageObject } from "../../types"

import {
  StyledSection,
  ImageWrapper,
  StyledImage,
  StyledTextBlock,
} from "./track-section.styled"

export interface TrackSectionData {
  image: {
    src: ImageObject
    alt: string
  }
  textBlock: TextBlockData
}

interface TrackSectionProps {
  readonly data: TrackSectionData[]
}

const TrackSection = ({ data }: TrackSectionProps) => {
  return (
    <StyledSection className="track-section">
      <>
        {data.map((trackSection, index) => {
          const {
            image: { src, alt },
            textBlock,
          } = trackSection
          const textPosition = index % 2 === 0 ? "left" : "right"
          const [ref, inView] = useInView({
            threshold: 0,
            triggerOnce: true,
            rootMargin: "-100px",
          })

          return (
            <Container key={index}>
              <Row
                reverse={
                  textPosition === "left" ? ["sm", "md", "lg", "xl"] : false
                }
              >
                <Col
                  xs={4}
                  sm={4}
                  md={7}
                  lg={7}
                  offset={{ lg: textPosition === "left" ? undefined : 1 }}
                >
                  <ImageWrapper ref={ref}>
                    <StyledImage
                      className="image-block"
                      image={src}
                      alt={alt}
                      withObserver
                      inView={inView}
                      textPosition={textPosition}
                    />
                  </ImageWrapper>
                </Col>
                <Col
                  xs={4}
                  sm={4}
                  md={5}
                  lg={4}
                  offset={{
                    lg: textPosition === "left" ? 1 : undefined,
                  }}
                >
                  <StyledTextBlock textBlock={textBlock} withObserver />
                </Col>
              </Row>
            </Container>
          )
        })}
      </>
    </StyledSection>
  )
}

export default TrackSection
