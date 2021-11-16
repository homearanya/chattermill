import React from "react"
import { Row, Col } from "react-awesome-styled-grid"
import { TextBlockData } from "../../types"
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
  StyledContainer,
} from "./home-header.styled"

import card1Mp4 from "../../images/card1.mp4"
import card1Webm from "../../images/card1.webm"
import card2Image from "../../images/card2.svg"

export interface HomeHeaderData {
  readonly backgroundImage: {
    src: GatsbyTypes.File
    alt: string
  }
  readonly textBlock: TextBlockData
  readonly card1: GatsbyTypes.File
  readonly card2: GatsbyTypes.File
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
        <StyledContainer>
          <Row>
            <Col xs={4} sm={4} md={5} lg={5}>
              <StyledTextBlock
                textBlock={textBlock}
                classNames={Object.keys(textBlock)}
              ></StyledTextBlock>
            </Col>
            <Col xs={4} sm={4} md={7} lg={6} offset={{ lg: 1 }}>
              <CardsWrapper>
                <Card
                  dangerouslySetInnerHTML={{
                    __html: `
                <video autoplay loop muted playsinline>
                <source src="${card1Webm}" type="video/webm">
                <source src="${card1Mp4}" type="video/mp4">
                </video>
              `,
                  }}
                />
                <Card2 src={card2Image} alt="card 2" />
                <Card3 src={card2Image} alt="card 3" />
              </CardsWrapper>
            </Col>
          </Row>
        </StyledContainer>
        <HeroImageWrapper>
          <StyledHeroImage
            image={src}
            alt={alt}
            imgStyle={{ objectPosition: "50% 35%" }}
            loading="eager"
          />
        </HeroImageWrapper>
      </WideContainer>
    </StyledSection>
  )
}

export default HomeHeader
