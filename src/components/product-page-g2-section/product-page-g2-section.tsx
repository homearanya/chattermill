import React from "react"
import { Container } from "react-awesome-styled-grid"

import {
  StyledSection,
  StyledWrapper,
  StyledRow,
  StyledHeader,
  StyledParagraph,
  StyledLabel,
  StyledImage,
} from "./product-page-g2-section.styled"

export const ProductPageG2Section = ({ data }) => {
  const { g2Heading, g2features } = data

  return (
    <StyledSection>
      <Container>
        <StyledHeader dangerouslySetInnerHTML={{ __html: g2Heading }} />
        <StyledRow>
          {data &&
            g2features.map((card) => {
              return (
                <StyledWrapper>
                  <StyledImage src={card.icon.file.url} />
                  <StyledLabel>{card.label}</StyledLabel>
                  <StyledParagraph>{card.description}</StyledParagraph>
                </StyledWrapper>
              )
            })}
        </StyledRow>
      </Container>
    </StyledSection>
  )
}

export default ProductPageG2Section
