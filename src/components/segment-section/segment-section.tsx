import React from "react"

import { StyledSection } from "./segment-section.styled"

import Features, { FeaturesArray } from "../features"

export interface SegmentSectionData {
  features: FeaturesArray
}

interface SegmentSectionProps {
  readonly data: SegmentSectionData
}
const SegmentSection = ({ data }: SegmentSectionProps) => {
  const { features } = data
  return (
    <StyledSection>
      <Features features={features} firstTextPosition={0} />
    </StyledSection>
  )
}

export default SegmentSection
