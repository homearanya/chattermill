import React from "react"
import { Row } from "react-awesome-styled-grid"
import { useInView } from "react-intersection-observer"

import { TextBlockData } from "../../types"

import {
  StyledSection,
  StyledContainer,
  StyledHeading,
  StyledCol,
  StyledTextBlock,
} from "./benefits-section.styled"

export interface BenefitsSectionData {
  heading?: string
  benefits: TextBlockData[]
}

interface BenefitsSectionProps {
  readonly data: BenefitsSectionData
  readonly withBoxShadow?: boolean
  readonly withBorder?: boolean
  readonly inverted?: boolean
}

const BenefitsSection = ({
  data: { heading, benefits },
  withBoxShadow,
  withBorder,
  inverted,
}: BenefitsSectionProps) => {
  const [headingRef, headingInView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  })
  return (
    <StyledSection className="benefits-section" withBorder={withBorder}>
      <StyledContainer inverted={inverted}>
        {heading && (
          <StyledHeading
            dangerouslySetInnerHTML={{ __html: heading }}
            ref={headingRef}
            inView={headingInView}
          />
        )}
        <Row justify={{ sm: "center", md: "space-between" }}>
          {benefits.map((textBlock, index) => {
            return (
              <StyledCol key={index} xs={4} sm={4} md={4}>
                <StyledTextBlock
                  textBlock={textBlock}
                  withBoxShadow={withBoxShadow}
                  withObserver
                  inverted={inverted}
                />
              </StyledCol>
            )
          })}
        </Row>
      </StyledContainer>
    </StyledSection>
  )
}

export default BenefitsSection
