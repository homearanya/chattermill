import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"

import {
  StyledSection,
  StyledTextBlock,
  ImageWrapper,
  StyledImage,
  StyledImageSmall,
} from "./integrate-overview.styled"

import { ImageObject, TextBlockData } from "../../types"

export interface IntegrateOverviewData {
  textBlock: TextBlockData
  image: ImageObject
  imageSmall: ImageObject
}

interface IntegrateOverviewProps {
  readonly data: IntegrateOverviewData
}

export const IntegrateOverview = ({ data }: IntegrateOverviewProps) => {
  const { textBlock, image, imageSmall } = data

  return (
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <StyledTextBlock
              textBlock={textBlock}
              classNames={Object.keys(textBlock)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImageWrapper>
              <StyledImage
                className="image-integrate-overview"
                image={image}
                alt="Integrations diagram"
              />
              <StyledImageSmall image={imageSmall} alt="Integrations diagram" />
            </ImageWrapper>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  )
}

export default IntegrateOverview
