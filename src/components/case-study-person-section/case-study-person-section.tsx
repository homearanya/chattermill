import React from "react"

import { contentfulImageMap } from "../../utils/helpers"

import {
  StyledSection,
  StyledContainer,
  Heading,
  Wrapper,
  PersonWrapper,
  ImageWrapper,
  StyledImage,
  PersonName,
  PersonRole,
  TextWrapper,
  Quote,
  Text,
} from "./case-study-person-section.styled"

export interface CaseStudyPersonSectionData {
  heading: string
  personPhoto: GatsbyTypes.CaseStudyPageQuery["contentfulCaseStudy"]["company"]["personPhoto"]
  personName: string
  personRole: string
  personQuote: string
}

interface CaseStudyPersonSectionProps {
  readonly data: CaseStudyPersonSectionData
  readonly className?: string
}

const CaseStudyPersonSection = ({
  data,
  className,
}: CaseStudyPersonSectionProps) => {
  const { heading, personPhoto, personName, personRole, personQuote } = data
  return (
    <StyledSection
      className={`case-study-content-section ${className ? className : ""}`}
    >
      <StyledContainer>
        <Heading>{heading}</Heading>

        <Wrapper>
          <PersonWrapper>
            <ImageWrapper>
              <StyledImage
                image={contentfulImageMap(
                  personPhoto as GatsbyTypes.ContentfulAsset
                )}
                alt={personName}
              />
            </ImageWrapper>
            <PersonName>{personName}</PersonName>
            <PersonRole>{personRole}</PersonRole>
          </PersonWrapper>
          <TextWrapper>
            <Quote>&ldquo;</Quote>
            <Text dangerouslySetInnerHTML={{ __html: personQuote }} />
          </TextWrapper>
        </Wrapper>
      </StyledContainer>
    </StyledSection>
  )
}

export default CaseStudyPersonSection
