import React from "react";

import { StyledSection } from "./integration-feature.styled";

import Features, { FeaturesArray } from "../features";

export interface IntegrationFeatureData {
  features: FeaturesArray;
}

interface IntegrationFeatureProps {
  readonly data: IntegrationFeatureData;
}
const IntegrationFeature = ({ data }: IntegrationFeatureProps) => {
  const { features } = data;
  return (
    <StyledSection>
      <Features features={features} firstTextPosition={0} />
    </StyledSection>
  );
};

export default IntegrationFeature;
