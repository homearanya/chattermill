import React from "react"
import { Row, Col } from "react-awesome-styled-grid"
import { useInView } from "react-intersection-observer"

import { ImageObject, TextBlockData } from "../../types"

import { WideContainer } from "../../styles/common.styled"

import {
  StyledSection,
  BackgroundImageWrapper,
  BackgroundImage,
  StyledContainer,
  StyledTextBlock,
  CardWrapper,
  Card,
} from "./case-study-section.styled"

export interface CaseStudySectionData {
  backgroundImage: ImageObject
  textBlock: TextBlockData
  image: ImageObject
}

interface CaseStudySectionProps {
  readonly data: CaseStudySectionData
}

export const CaseStudySection = ({ data }: CaseStudySectionProps) => {
  const { backgroundImage, textBlock, image } = data
  // observer for the image
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  })
  return (
    <StyledSection>
      <WideContainer>
        <StyledContainer>
          <Row>
            <Col xs={4} sm={4} md={5}>
              <StyledTextBlock textBlock={textBlock} withObserver />
            </Col>
            <Col xs={4} sm={4} md={6}>
              <CardWrapper ref={ref}>
                <Card image={image} alt="feedback card" inView={inView} />
              </CardWrapper>
            </Col>
          </Row>
        </StyledContainer>
        <BackgroundImageWrapper>
          <BackgroundImage
            image={backgroundImage}
            alt="People working at their office"
            style={{ position: "absolute" }}
          />
        </BackgroundImageWrapper>
      </WideContainer>
    </StyledSection>
  )
}

export default CaseStudySection
