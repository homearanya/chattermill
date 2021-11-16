import React from "react"
import { Container } from "react-awesome-styled-grid"

import { contentfulImageMap } from "../../utils/helpers"
import {
  StyledSection,
  StyledBox,
  StyledRow,
  StyledHeading,
  StyledSpan,
  StyledExternalLink,
  StyledButton,
  ButtonWrapper,
  StyledShapeLeft,
  StyledShapeRight,
  StyledImage,
  ImageWrapper,
} from "./standard-header-centered.styled"

export const StandardHeaderCentered = ({ data }) => {
  const { header, description, heroImage } = data
  return (
    <StyledSection>
      <Container fluid>
        <StyledRow justify="center" align="center">
          <StyledShapeLeft />
          <StyledShapeRight />
          <StyledBox>
            <StyledHeading>{header}</StyledHeading>
            <StyledSpan>{description}</StyledSpan>
            <StyledExternalLink
              href="https://app.chattermill.com/signup/"
              target="_blank"
            >
              <ButtonWrapper>
                <StyledButton type="submit">Try Chattermill</StyledButton>
              </ButtonWrapper>
            </StyledExternalLink>
          </StyledBox>
        </StyledRow>
        {heroImage && (
          <ImageWrapper>
            <StyledImage
              image={contentfulImageMap(heroImage)}
              alt="header"
              loading="eager"
            />
          </ImageWrapper>
        )}
      </Container>
    </StyledSection>
  )
}

export default StandardHeaderCentered
