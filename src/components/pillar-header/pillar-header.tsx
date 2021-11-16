import React from "react"

import { contentfulImageMap } from "../../utils/helpers"
import {
  StyledSection,
  StyledContainer,
  StyledBox,
  StyledHeading,
  StyledSpan,
  StyledExternalLink,
  StyledButton,
  ButtonWrapper,
  StyledImage,
  ImageWrapper,
  TextBlock,
} from "./pillar-header.styled"

export const PillarHeaderCentered = ({ data }) => {
  const { header, description, heroImage } = data
  return (
    <StyledSection>
      <StyledContainer fluid>
        {heroImage && (
          <ImageWrapper>
            <StyledImage
              image={contentfulImageMap(heroImage)}
              alt="header"
              loading="eager"
            />
          </ImageWrapper>
        )}
        <StyledBox>
          <TextBlock>
            <StyledHeading>{header}</StyledHeading>
            <StyledSpan>{description}</StyledSpan>
            <StyledExternalLink
              href="https://app.chattermill.com/signup"
              target="_blank"
            >
              <ButtonWrapper>
                <StyledButton type="submit">Try Chattermill</StyledButton>
              </ButtonWrapper>
            </StyledExternalLink>
          </TextBlock>
        </StyledBox>
      </StyledContainer>
    </StyledSection>
  )
}

export default PillarHeaderCentered
