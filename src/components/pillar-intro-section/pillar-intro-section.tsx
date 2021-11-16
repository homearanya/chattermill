import React from "react"
import { useState } from "react"
import { Container } from "react-awesome-styled-grid"
import ContentfulRichtext from "../../components/contentful-richtext"
import ContentfulRichtextTOC from "../../components/contentful-richtext-toc"
import Burger from "../burger"
import { Background } from "../navigation/navigation.styled"
import {
  StyledSection,
  StyledRow,
  ContentWrapper,
  BurgerWrapper,
  ContentfulRichtextTOCWrapper,
  MobileContentfulRichtextTOCWrapper,
} from "./pillar-intro-section.styled"

interface PillarIntroSectionProps {
  data: {
    body: {
      raw: string
    }
  }
}

export const PillarIntroSection = ({ data }: PillarIntroSectionProps) => {
  const [open, setOpen] = useState(false)
  return (
    <React.Fragment>
      <StyledSection>
        <Container>
          <StyledRow justify="center" align="center">
            <ContentWrapper>
              <ContentfulRichtextTOCWrapper>
                <ContentfulRichtextTOC body={data.body} />
              </ContentfulRichtextTOCWrapper>
              <ContentfulRichtext content={data.body} />
            </ContentWrapper>
          </StyledRow>
        </Container>
        <BurgerWrapper open={open}>
          <Burger open={open} setOpen={setOpen} />
        </BurgerWrapper>
        <MobileContentfulRichtextTOCWrapper open={open}>
          <ContentfulRichtextTOC body={data.body} setOpen={setOpen} />
        </MobileContentfulRichtextTOCWrapper>
      </StyledSection>
      <Background open={open} />
    </React.Fragment>
  )
}

export default PillarIntroSection
