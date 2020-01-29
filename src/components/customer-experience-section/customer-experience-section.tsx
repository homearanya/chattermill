import React from "react"
import { Container, Col } from "react-awesome-styled-grid"
import { useInView } from "react-intersection-observer"

import { ImageObject, TextBlockData } from "../../types"

import {
  StyledSection,
  StyledHeading,
  StyledRow,
  ImageWrapper,
  StyledImage,
  StyledTextBlock,
} from "./customer-experience-section.styled"

export interface CustomerExperienceSectionData {
  heading?: string
  experiences: {
    image: {
      src: ImageObject
      alt: string
    }
    textBlock: TextBlockData
  }[]
}

interface CustomerExperienceSectionProps {
  readonly data: CustomerExperienceSectionData
  verticalPadding?: boolean
}

export const CustomerExperienceSection = ({
  data,
  verticalPadding,
}: CustomerExperienceSectionProps) => {
  const { heading, experiences } = data
  const [headingRef, headingInView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  })
  return (
    <StyledSection verticalPadding={verticalPadding}>
      {heading ? (
        <Container>
          <StyledHeading
            dangerouslySetInnerHTML={{ __html: heading }}
            ref={headingRef}
            inView={headingInView}
          />
        </Container>
      ) : null}
      {experiences.map((experience, index) => {
        const {
          image: { src, alt },
          textBlock,
        } = experience
        const textPosition: TextPosition = index % 2 === 1 ? "left" : "right"
        // observer for the image
        const [ref, inView] = useInView({
          threshold: 0,
          triggerOnce: true,
          rootMargin: "-100px",
        })
        return (
          <Container key={index}>
            <StyledRow
              reverse={
                textPosition === "left" ? ["sm", "md", "lg", "xl"] : false
              }
            >
              <Col xs={4} sm={4} md={6}>
                <ImageWrapper ref={ref}>
                  <StyledImage
                    image={src}
                    alt={alt}
                    withObserver
                    inView={inView}
                  />
                </ImageWrapper>
              </Col>
              <Col xs={4} sm={4} md={6}>
                <StyledTextBlock textBlock={textBlock} withObserver />
              </Col>
            </StyledRow>
          </Container>
        )
      })}
    </StyledSection>
  )
}

export default CustomerExperienceSection
