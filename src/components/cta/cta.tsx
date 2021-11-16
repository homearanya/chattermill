import React from "react";

import { TextBlockData } from "../../types";

import {
  StyledShapeLeft,
  StyledShapeRight,
  StyledSection,
  StyledWideContainer,
  StyledTextBlock
} from "./cta.styled";

export interface CTAData {
  shapeColor: string;
  backgroundColor?: string;
  textBlock: TextBlockData;
}

interface CTAProps {
  readonly data: CTAData;
}

export const CTA = ({ data }: CTAProps) => {
  const { shapeColor, textBlock, backgroundColor = "#10C2ED" } = data;
  return (
    <StyledSection>
      <StyledWideContainer backgroundColor={backgroundColor}>
        <StyledShapeLeft color={shapeColor} />
        <StyledShapeRight color={shapeColor} />
        <StyledTextBlock textBlock={textBlock} withObserver />
      </StyledWideContainer>
    </StyledSection>
  );
};

export default CTA;
