import * as React from "react"
import { WideContainer } from "../../styles/common.styled"
import { StyledSection, Title, Description } from "./datasheets-hero.styled"

export interface HeaderProps {
  hero: {
    title: string
    description: string
  }
}

const DatasheetsHero: React.FC<HeaderProps> = ({ hero }) => {
  const { title, description } = hero
  return (
    <StyledSection>
      <WideContainer>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </WideContainer>
    </StyledSection>
  )
}

export default DatasheetsHero
