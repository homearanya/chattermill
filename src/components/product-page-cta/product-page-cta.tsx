import React from "react"
import { Container } from "react-awesome-styled-grid"

import {
  StyledSection,
  StyledRow,
  StyledHeader,
  StyledExternalLink,
  StyledButton,
  ButtonWrapper,
  StyledHeaderWrapper,
  StyledContentWrapper,
} from "./product-page-cta.styled"

export const ProductPageCTA = ({ data }) => {
  const ctaHeading = data

  return (
    <StyledSection>
      <Container fluid>
        <StyledRow justify="center" align="space-between">
          <StyledContentWrapper>
            <StyledHeaderWrapper>
              <StyledHeader>{ctaHeading}</StyledHeader>
            </StyledHeaderWrapper>
            <StyledExternalLink
              href="https://app.chattermill.com/signup/"
              target="_blank"
            >
              <ButtonWrapper>
                <StyledButton type="submit">Try Chattermill</StyledButton>
              </ButtonWrapper>
            </StyledExternalLink>
          </StyledContentWrapper>
        </StyledRow>
      </Container>
    </StyledSection>
  )
}

export default ProductPageCTA
