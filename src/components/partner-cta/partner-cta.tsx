import React from "react"
import { Row } from "react-awesome-styled-grid"
import styled from "styled-components"
import media from "../../styles/media"
import { BigHeading, MediumHeading } from "../../styles/common.styled"
import UnivButtonLink from "../universal-button-link"
import { StyledSection, Container } from "./partner-cta.styled"

const handleDemoClick = () => {
  window.analytics &&
    window.analytics.track("Clicked Button", {
      email: "dummy@dummy.com",
      label: "Clicked  Partner Demo Button",
    })
}

export interface PartnerCTAData {
  integrationCtaHeading: string
  integrationCtaSubHeading: string
  integrationCtaButtonText: string
}
interface PartnerCTAProps {
  data: PartnerCTAData
}
export const PartnerCTA = ({
  data: {
    integrationCtaHeading,
    integrationCtaSubHeading,
    integrationCtaButtonText,
  },
}: PartnerCTAProps) => {
  return (
    <Container>
      <StyledSection>
        <StyledRow>
          <StyledHeader>{integrationCtaHeading}</StyledHeader>
          <StyledMediumHeading>{integrationCtaSubHeading}</StyledMediumHeading>
          <StyledUnivButtonLink
            button={{
              text: integrationCtaButtonText,
              link: "/book-demo/",
              onClick: handleDemoClick,
            }}
          />
        </StyledRow>
      </StyledSection>
    </Container>
  )
}

export default PartnerCTA

export const StyledHeader = styled(BigHeading)`
  color: #ffff;
  text-align: center;

  ${media.lessThan("sm")`
  color: #ffff !important;

  `}
`

export const StyledUnivButtonLink = styled(UnivButtonLink)`
  padding: 30px;
  width: 200px;
  border-radius: 8px !important;
`

export const StyledMediumHeading = styled(MediumHeading)`
  color: #ffff;
  text-align: center;
  padding: 2rem;

  ${media.lessThan("sm")`
  color: #ffff !important;
  `}
`

export const StyledRow = styled(Row)`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lessThan("sm")`
    padding: 2rem 0;
  `}
`
