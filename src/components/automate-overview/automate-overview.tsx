import React from "react"
import { useInView } from "react-intersection-observer"

import { Container, Row, Col } from "react-awesome-styled-grid"

import { TextBlockData } from "../../types"

import {
  StyledSection,
  StyledTextHeaderBlock,
  StyledRow,
  ArrowsWrapper,
  StyledArrow,
  StyledTextBlock,
} from "./automate-overview.styled"

import longArrowImage from "../../images/long-arrow.png"

export interface AutomateOverviewData {
  textBlock: TextBlockData
  steps: { textBlock: TextBlockData }[]
}

interface AutomateOverviewnProps {
  readonly data: AutomateOverviewData
}

const AutomateOverviewn = ({
  data: { textBlock, steps },
}: AutomateOverviewnProps) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-250px",
  })
  return (
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <StyledTextHeaderBlock textBlock={textBlock} withObserver />
          </Col>
        </Row>
        <StyledRow justify={{ sm: "center" }}>
          <ArrowsWrapper ref={ref} inView={inView}>
            <StyledArrow src={longArrowImage} alt="long arrow" />
            <StyledArrow src={longArrowImage} alt="long arrow" />
          </ArrowsWrapper>
          {steps.map((step, index) => {
            const { textBlock } = step
            return (
              <Col key={index} xs={4} sm={4} md={4}>
                <StyledTextBlock textBlock={textBlock} withObserver />
              </Col>
            )
          })}
        </StyledRow>
      </Container>
    </StyledSection>
  )
}

export default AutomateOverviewn
