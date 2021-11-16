import React from "react";

import { StyledSection } from "./partner-features.styled";

import Features, { FeaturesArray } from "../features";

export interface PartnerFeaturesData {
  features: FeaturesArray;
}

interface PartnerFeaturesProps {
  readonly data: PartnerFeaturesData;
}
const PartnerFeatures = ({ data }: PartnerFeaturesProps) => {
  const { features } = data;
  return (
    <StyledSection>
      <Features features={features} firstTextPosition={0} />
    </StyledSection>
  );
};

export default PartnerFeatures;
