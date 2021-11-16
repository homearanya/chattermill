import React from "react"

import {
  StyledSection,
  StyledContainer,
  Wrapper,
  HeadingWrapper,
  ContentWrapper,
  Heading,
  Headline,
  Text,
} from "./case-study-content-section.styled"

export interface CaseStudyContentSectionData {
  heading: string
  caseStudyItems: GatsbyTypes.CaseStudyPageQuery["contentfulCaseStudy"]["caseStudyContent"]
}

interface CaseStudyContentSectionProps {
  readonly data: CaseStudyContentSectionData
  readonly className?: string
}

const CaseStudyContentSection = ({
  data,
  className,
}: CaseStudyContentSectionProps) => {
  const { heading, caseStudyItems } = data
  // observer for the image

  return (
    <StyledSection
      className={`case-study-content-section ${className ? className : ""}`}
    >
      <StyledContainer>
        <HeadingWrapper>
          <Heading>{heading}</Heading>
        </HeadingWrapper>
        <ContentWrapper>
          {caseStudyItems.map((caseStudyItem) => {
            const { id, headline, description } = caseStudyItem
            return (
              <Wrapper key={id}>
                <Headline>{headline}</Headline>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: description.childMarkdownRemark.html,
                  }}
                />
              </Wrapper>
            )
          })}
        </ContentWrapper>
      </StyledContainer>
    </StyledSection>
  )
}

export default CaseStudyContentSection
