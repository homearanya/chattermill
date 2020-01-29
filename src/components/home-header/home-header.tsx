import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"

import { ImageObject, TextBlockData } from "../../types"

import { WideContainer } from "../../styles/common.styled"

import {
  StyledSection,
  HeroImageWrapper,
  StyledHeroImage,
  StyledTextBlock,
  CardsWrapper,
  Card,
  Card2,
  Card3,
} from "./home-header.styled"

import card1Image from "../../images/card1_updates.svg"
import card2Image from "../../images/card2.svg"

export interface HomeHeaderData {
  readonly backgroundImage: {
    src: ImageObject
    alt: string
  }
  readonly textBlock: TextBlockData
  readonly card1: ImageObject
  readonly card2: ImageObject
}

interface HomeHeaderProps {
  readonly data: HomeHeaderData
}

export const HomeHeader = ({ data }: HomeHeaderProps) => {
  const {
    backgroundImage: { src, alt },
    textBlock,
  } = data

  return (
    <StyledSection>
      <WideContainer>
        <Container>
          <Row>
            <Col xs={4} sm={4} md={5} lg={4}>
              <StyledTextBlock
                textBlock={textBlock}
                classNames={Object.keys(textBlock)}
              />
            </Col>
            <Col xs={4} sm={4} md={7} lg={7} offset={{ lg: 1 }}>
              <CardsWrapper>
                <Card src={card1Image} alt="card 1" />
                <Card2 src={card2Image} alt="card 2" />
                <Card3 src={card2Image} alt="card 3" />
              </CardsWrapper>
            </Col>
          </Row>
        </Container>
        <HeroImageWrapper>
          <StyledHeroImage
            image={src}
            alt={alt}
            imgStyle={{ objectPosition: "50% 35%" }}
          />
        </HeroImageWrapper>
      </WideContainer>
    </StyledSection>
  )
}

export default HomeHeader
