import React from "react"
import { Container, Row } from "react-awesome-styled-grid"
import { useInView } from "react-intersection-observer"

import { TextBlockData, ImageObject } from "../../types"

import {
  StyledWideContainer,
  StyledCol,
  StyledShapeLeft,
  StyledShapeRight,
  ImageWrapper,
  StyledImage,
  StyledTextBlock,
} from "./features.styled"

export type FeaturesArray = {
  shapeColor: string
  image: {
    src: ImageObject
    alt: string
  }
  textBlock: TextBlockData
}[]

interface FeaturesProps {
  features: FeaturesArray
  firstTextPosition?: 0 | 1 // 0: start on left, 1: start on right
}

export const Features = ({ features, firstTextPosition }: FeaturesProps) => (
  <>
    {features.map((feature, index) => {
      const {
        shapeColor,
        image: { src, alt },
        textBlock,
      } = feature
      const textPosition =
        index % 2 ===
        (firstTextPosition || firstTextPosition === 0 ? firstTextPosition : 1)
          ? "left"
          : "right"
      const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
        rootMargin: "-100px",
      })

      return (
        <StyledWideContainer key={index}>
          <Container>
            <Row
              reverse={
                textPosition === "left" ? ["sm", "md", "lg", "xl"] : false
              }
            >
              <StyledCol
                xs={4}
                sm={5}
                md={7}
                offset={{ md: textPosition ? 1 : undefined }}
              >
                <>
                  {textPosition === "left" ? (
                    <StyledShapeRight color={shapeColor} />
                  ) : (
                    <StyledShapeLeft color={shapeColor} />
                  )}
                  <ImageWrapper ref={ref}>
                    <StyledImage
                      image={src}
                      alt={alt}
                      justifyRight={true}
                      withObserver
                      inView={inView}
                    />
                  </ImageWrapper>
                </>
              </StyledCol>
              <StyledCol xs={4} sm={3} md={3} offset={{ md: 1 }}>
                <StyledTextBlock
                  textPosition={textPosition}
                  textBlock={textBlock}
                  withObserver
                />
              </StyledCol>
            </Row>
          </Container>
        </StyledWideContainer>
      )
    })}
  </>
)
export default Features
