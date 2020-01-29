import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"

import { ImageObject, TextBlockData } from "../../types"

import {
  StyledSection,
  StyledRow,
  StyledImage,
  TextBlockWrapper,
  StyledHeading,
  FeatureWrapper,
  StyledFeatureImage,
  StyledFeatureText,
} from "./platform-overview.styled"

import captureImage from "../../images/capture-small.png"
import analyseImage from "../../images/analyse-small.png"
import understandImage from "../../images/understand-small.png"
import progressImage from "../../images/progress-small.png"

const importedImages = {
  "capture-small.png": captureImage,
  "analyse-small.png": analyseImage,
  "understand-small.png": understandImage,
  "progress-small.png": progressImage,
}

type ImageName =
  | "capture-small.png"
  | "analyse-small.png"
  | "understand-small.png"
  | "progress-small.png"

export interface PlatformOverviewData {
  image: ImageObject
  textBlock: {
    heading: string
    features: TextBlockData[]
  }
}

interface PlatformOverviewProps {
  readonly data: PlatformOverviewData
}

export const PlatformOverview = ({ data }: PlatformOverviewProps) => {
  const {
    image,
    textBlock: { heading, features },
  } = data
  return (
    <StyledSection>
      <Container>
        <Row>
          <Col xs={4} sm={4} md={4}>
            <StyledImage image={image} alt="Platform Overview" />
          </Col>
          <Col xs={4} sm={4} md={8}>
            <TextBlockWrapper>
              <StyledRow>
                <Col>
                  <StyledHeading
                    dangerouslySetInnerHTML={{ __html: heading }}
                  />
                </Col>
              </StyledRow>
              <StyledRow>
                {features.map((feature, index) => {
                  const { imageName, smallHeading, text } = feature
                  const textBlock = { smallHeading: smallHeading, text: text }
                  return (
                    <Col key={index} xs={4} sm={8} md={6}>
                      <FeatureWrapper>
                        {imageName ? (
                          <StyledFeatureImage
                            src={importedImages[imageName as ImageName]}
                            alt={smallHeading}
                          />
                        ) : null}
                        <StyledFeatureText
                          textBlock={textBlock}
                          classNames={Object.keys(textBlock)}
                        />
                      </FeatureWrapper>
                    </Col>
                  )
                })}
              </StyledRow>
            </TextBlockWrapper>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  )
}

export default PlatformOverview
