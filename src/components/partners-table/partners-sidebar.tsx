import React from "react";

import {
  Wrapper,
  MenuItem,
  PartnerType,
  PartnerTypeCount,
  IntegrationBlock,
  IntegrationText,
  StyledUnivButtonLink
} from "./partners-sidebar.styled";

export interface PartnerTypes {
  [key: string]: number;
}

interface PartnersSidebarProps {
  partnerTypes: PartnerTypes;
  partnerTypeSelected: string;
  selectPartnerType: (partnerType: string) => void;
}

const PartnersSidebar = ({
  partnerTypes,
  partnerTypeSelected,
  selectPartnerType
}: PartnersSidebarProps) => {
  return (
    <Wrapper>
      {Object.keys(partnerTypes).map(partnerType => {
        return (
          <MenuItem
            onClick={() => selectPartnerType(partnerType)}
            active={partnerType === partnerTypeSelected}
          >
            <PartnerType>
              {partnerType === "All"
                ? `${partnerType} Partners`
                : `${partnerType} Partner`}
            </PartnerType>
            <PartnerTypeCount>{partnerTypes[partnerType]}</PartnerTypeCount>
          </MenuItem>
        );
      })}
      <IntegrationBlock>
        <IntegrationText>Looking for Integrations?</IntegrationText>
        <StyledUnivButtonLink
          button={{
            text: "integrations",
            link: "/integrations/trustpilot/",
            inverted: true
          }}
        />
      </IntegrationBlock>
    </Wrapper>
  );
};

export default PartnersSidebar;
