import React from "react"

import { TextBlockData } from "../../types"

import {
  StyledShapeLeft,
  StyledShapeRight,
  StyledSection,
  StyledWideContainer,
  StyledTextBlock,
} from "./cta.styled"

export interface CTAData {
  shapeColor: string
  textBlock: TextBlockData
}

interface CTAProps {
  readonly data: CTAData
}

export const CTA = ({ data }: CTAProps) => {
  const { shapeColor, textBlock } = data
  return (
    <StyledSection>
      <StyledWideContainer>
        <StyledShapeLeft color={shapeColor} />
        <StyledShapeRight color={shapeColor} />
        <StyledTextBlock textBlock={textBlock} withObserver />
      </StyledWideContainer>
    </StyledSection>
  )
}

export default CTA
