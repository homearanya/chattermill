import React from "react"
import { Row, Col } from "react-awesome-styled-grid"
import { useInView } from "react-intersection-observer"

import { TextBlockData } from "../../types"

import {
  StyledSection,
  StyledHeading,
  StyledTextBlock,
  StyledContainer,
} from "./case-studies-section.styled"

export interface CaseStudiesSectionData {
  heading: string
  caseStudies: TextBlockData[]
}

interface CaseStudiesSectionProps {
  readonly data: CaseStudiesSectionData
}

export const CaseStudiesSection = ({ data }: CaseStudiesSectionProps) => {
  const { heading, caseStudies } = data
  const [headingRef, headingInView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  })
  return (
    <StyledSection>
      <Row>
        <Col>
          <StyledHeading
            dangerouslySetInnerHTML={{ __html: heading }}
            ref={headingRef}
            inView={headingInView}
          />
        </Col>
      </Row>

      <StyledContainer>
        <Row justify={{ sm: "center", md: "space-between" }}>
          {caseStudies.map((textBlock, index) => {
            const [texbBlockRef, texbBlockInView] = useInView({
              threshold: 0,
              triggerOnce: true,
              rootMargin: "-150px",
            })
            return (
              <Col key={index} sm={4} md={4} justify={{ md: "space-between" }}>
                <div ref={texbBlockRef}>
                  <StyledTextBlock
                    textBlock={textBlock}
                    inView={texbBlockInView}
                    withObserver
                  />
                </div>
              </Col>
            )
          })}
        </Row>
      </StyledContainer>
    </StyledSection>
  )
}

export default CaseStudiesSection
