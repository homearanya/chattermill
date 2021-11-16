import React from "react"

import {
  StyledSection,
  StyledContainer,
  CompanyBlock,
  Separator,
  Achievements,
  Achievement,
  IconWrapper,
  Icon,
  Text,
} from "./achievements-section.styled"

import { contentfulImageMap } from "../../utils/helpers"

export interface AchievementsSectionData {
  companyName: string
  achievements: GatsbyTypes.CaseStudyPageQuery["contentfulCaseStudy"]["achievements"]
}

interface AchievementsSectionProps {
  readonly data: AchievementsSectionData
}

const AchievementsSection = ({
  data: { companyName, achievements },
}: AchievementsSectionProps) => {
  return (
    <StyledSection>
      <StyledContainer>
        <CompanyBlock>{`${companyName} achieved`}</CompanyBlock>
        <Separator />
        <Achievements>
          {achievements.map((achievement) => {
            const { id, icon, text } = achievement
            return (
              <Achievement key={id}>
                <IconWrapper>
                  <Icon
                    image={contentfulImageMap(
                      icon as GatsbyTypes.ContentfulAsset
                    )}
                    alt={text}
                  />
                </IconWrapper>
                <Text>{text}</Text>
              </Achievement>
            )
          })}
        </Achievements>
      </StyledContainer>
    </StyledSection>
  )
}

export default AchievementsSection
