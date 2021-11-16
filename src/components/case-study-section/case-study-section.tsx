import React from "react"
import { Row, Col } from "react-awesome-styled-grid"
import { useInView } from "react-intersection-observer"

import { TextBlockData } from "../../types"

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
  backgroundImage?: SubFile
  alt?: string
  textBlock: TextBlockData
  image: SubFile
  imageAlt?: string
}

interface CaseStudySectionProps {
  readonly data: CaseStudySectionData
}
export const CaseStudySection = ({ data }: CaseStudySectionProps) => {
  const { backgroundImage, textBlock, image, alt } = data
  // observer for the image
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  })
  return (
    <StyledSection className="case-study-section">
      <WideContainer>
        <StyledContainer>
          <Row>
            <Col xs={4} sm={4} md={5}>
              <StyledTextBlock textBlock={textBlock} withObserver />
            </Col>
            <Col xs={4} sm={4} md={6}>
              <CardWrapper ref={ref}>
                <Card image={image} alt={alt} inView={inView} />
              </CardWrapper>
            </Col>
          </Row>
        </StyledContainer>
        {backgroundImage && (
          <BackgroundImageWrapper>
            <BackgroundImage
              image={backgroundImage}
              alt="People working at their office"
              style={{ position: "absolute" }}
            />
          </BackgroundImageWrapper>
        )}
      </WideContainer>
    </StyledSection>
  )
}

export default CaseStudySection
