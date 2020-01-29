import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"

import { ImageObject, TextBlockData } from "../../types"

import {
  StyledSection,
  StyledWideContainer,
  BorderWrapperOut,
  BorderWrapperIn,
  HeroImageWrapper,
  HeroImage,
  StyledTextBlock,
  CardsWrapper,
  Card,
} from "./platform-header.styled"

import brandsCardImage from "../../images/brands-card.png"

export interface HeaderPlatformData {
  readonly backgroundImage: {
    src: ImageObject
    alt: string
  }
  readonly textBlock: TextBlockData
  readonly card: ImageObject
}

interface HeaderPlatformProps {
  readonly data: HeaderPlatformData
}

export const HeaderPlatform = ({ data }: HeaderPlatformProps) => {
  const {
    backgroundImage: { src, alt },
    textBlock,
  } = data
  return (
    <StyledSection>
      <StyledWideContainer>
        <Container>
          <Row>
            <Col xs={4} sm={4} md={5}>
              <StyledTextBlock
                textBlock={textBlock}
                classNames={Object.keys(textBlock)}
              />
            </Col>
            <Col xs={4} sm={4} md={7}>
              <CardsWrapper>
                <Card
                  src={brandsCardImage}
                  alt="brands that work with Chattermill"
                />
              </CardsWrapper>
            </Col>
          </Row>
        </Container>
        <BorderWrapperOut>
          <BorderWrapperIn>
            <HeroImageWrapper>
              <HeroImage
                image={src}
                alt={alt}
                style={{ position: "absolute" }}
              />
            </HeroImageWrapper>
          </BorderWrapperIn>
        </BorderWrapperOut>
      </StyledWideContainer>
    </StyledSection>
  )
}

export default HeaderPlatform
