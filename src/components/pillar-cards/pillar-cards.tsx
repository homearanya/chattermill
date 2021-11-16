import React from "react"
import { Row } from "react-awesome-styled-grid"

import { contentfulImageMap } from "../../utils/helpers"
import {
  StyledSection,
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledImage,
  StyledSpan,
  StyledCardTitle,
  StyledCardParagraph,
  StyledLink,
  StyledTag,
  StyledTagLabel,
  StyledTagWrapper,
  ImageWrapper,
  TextWrapper,
} from "./pillar-cards.styled"

export const PillarCards = ({ data }) => {
  return (
    <StyledSection>
      <StyledContainer fluid>
        <Row justify="center">
          {data &&
            data.map((item, index) => {
              const {
                id,
                smallTitle,
                largeTitle,
                description,
                featuredImage,
                tags,
                url: weblink,
              } = item
              const arr = tags.split(",")
              return (
                <StyledCol align="center" key={id} xs={4} sm={4} md={6} lg={4}>
                  <StyledRow key={index}>
                    <StyledLink target="_blank" href={weblink}>
                      <ImageWrapper>
                        <StyledImage
                          image={contentfulImageMap(featuredImage)}
                          alt="card image"
                        />
                      </ImageWrapper>
                      <TextWrapper>
                        <StyledSpan>{smallTitle}</StyledSpan>
                        <StyledCardTitle>{largeTitle}</StyledCardTitle>
                        <StyledTagWrapper>
                          {arr.map((item) => {
                            return (
                              <StyledTag>
                                <StyledTagLabel>{item}</StyledTagLabel>
                              </StyledTag>
                            )
                          })}
                        </StyledTagWrapper>
                        <StyledCardParagraph>{description}</StyledCardParagraph>
                      </TextWrapper>
                    </StyledLink>
                  </StyledRow>
                </StyledCol>
              )
            })}
        </Row>
      </StyledContainer>
    </StyledSection>
  )
}

export default PillarCards
