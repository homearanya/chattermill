import React from "react"
import { Container, Col } from "react-awesome-styled-grid"

import UnivButtonLink from "../universal-button-link"

import {
  StyledSection,
  StyledRow,
  StyledHeading,
} from "./platform-section.styled"

import Features, { FeaturesArray } from "../features"

export interface PlatformSectionData {
  heading: string
  button: ButtonData
  features: FeaturesArray
}

interface PlatformSectionProps {
  readonly data: PlatformSectionData
}

const PlatformSection = ({ data }: PlatformSectionProps) => {
  const { heading, button, features } = data
  return (
    <StyledSection>
      <Container>
        <StyledRow justify={{ xs: "space-between" }} align={{ xs: "center" }}>
          <Col
            noGutter
            xs={4}
            sm={6}
            md={9}
            justify={{ xs: "center", sm: "flex-start" }}
          >
            <StyledHeading dangerouslySetInnerHTML={{ __html: heading }} />
          </Col>
          <Col
            noGutter
            xs={4}
            sm={2}
            md={3}
            justify={{ xs: "center", sm: "flex-end" }}
          >
            <UnivButtonLink button={button} />
          </Col>
        </StyledRow>
      </Container>
      <Features features={features} />
    </StyledSection>
  )
}

export default PlatformSection
