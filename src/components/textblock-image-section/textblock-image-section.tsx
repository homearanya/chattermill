import React from "react"
import { Container, Col, Row } from "react-awesome-styled-grid"
import { useInView } from "react-intersection-observer"

import { ImageObject, TextBlockData } from "../../types"

import {
  StyledSection,
  ImageWrapper,
  StyledImage,
  StyledTextBlock,
} from "./textblock-image-section.styled"

export interface TextBlockImageSectionData {
  textPosition: TextPosition
  image: ImageObject
  alt?: string
  textBlock: TextBlockData
}

interface TextBlockImageSectionProps {
  readonly data: TextBlockImageSectionData
  readonly className?: string
}

const TextBlockImageSection = ({
  data,
  className,
}: TextBlockImageSectionProps) => {
  const { textPosition, image, alt, textBlock } = data
  // observer for the image
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  })
  return (
    <StyledSection
      className={`texblock-image-section ${className ? className : ""}`}
    >
      <Container>
        <Row
          reverse={textPosition === "left" ? ["sm", "md", "lg", "xl"] : false}
        >
          <Col xs={4} sm={5} md={7} lg={7} justify="center">
            <ImageWrapper ref={ref}>
              <StyledImage
                image={image}
                alt={alt}
                withObserver
                inView={inView}
                className="image-block"
              />
            </ImageWrapper>
          </Col>
          <Col
            xs={4}
            sm={3}
            md={5}
            lg={4}
            offset={{ lg: textPosition === "left" ? 1 : undefined }}
          >
            <StyledTextBlock textBlock={textBlock} withObserver />
          </Col>
        </Row>
      </Container>
    </StyledSection>
  )
}

export default TextBlockImageSection
