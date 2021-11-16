import React from "react"

import { contentfulImageMap } from "../../utils/helpers"

import {
  StyledSection,
  StyledContainer,
  Wrapper,
  CompanyWrapper,
  LogoWrapper,
  Logo,
  TextWrapper,
  Text,
  Website,
  SpecsWrapper,
  SpecsContainer,
  SpecWrapper,
  Spec,
} from "./case-study-company-section.styled"

export interface CaseStudyCompanySectionData {
  logo: GatsbyTypes.ContentfulAsset
  name: string
  description: string
  websiteName: string
  websiteUrl: string
  industryType: string
  region: string
  companySize: string
  businessType: string
}

interface CaseStudyCompanySectionProps {
  readonly data: CaseStudyCompanySectionData
  readonly className?: string
}

const CaseStudyCompanySection = ({
  data,
  className,
}: CaseStudyCompanySectionProps) => {
  const {
    logo,
    name,
    description,
    websiteName,
    websiteUrl,
    industryType,
    region,
    companySize,
    businessType,
  } = data

  return (
    <StyledSection
      className={`case-study-company-section ${className ? className : ""}`}
    >
      <StyledContainer>
        <Wrapper>
          <CompanyWrapper>
            <LogoWrapper>
              <Logo image={contentfulImageMap(logo)} alt={name} />
            </LogoWrapper>
            <TextWrapper>
              <Text dangerouslySetInnerHTML={{ __html: description }} />
            </TextWrapper>
            <Website href={websiteUrl} newTab>
              {websiteName}
              <span>&gt;</span>
            </Website>
          </CompanyWrapper>
          <SpecsWrapper>
            <SpecsContainer>
              <SpecWrapper>
                <Spec>
                  <strong>Industry</strong>
                </Spec>
                <Spec>{industryType}</Spec>
              </SpecWrapper>
              <SpecWrapper>
                <Spec>
                  <strong>Region</strong>
                </Spec>
                <Spec>{region}</Spec>
              </SpecWrapper>
              <SpecWrapper>
                <Spec>
                  <strong>Company Size</strong>
                </Spec>
                <Spec>{companySize}</Spec>
              </SpecWrapper>
              <SpecWrapper>
                <Spec>
                  <strong>Business Type</strong>
                </Spec>
                <Spec>{businessType}</Spec>
              </SpecWrapper>
            </SpecsContainer>
          </SpecsWrapper>
        </Wrapper>
      </StyledContainer>
    </StyledSection>
  )
}

export default CaseStudyCompanySection
