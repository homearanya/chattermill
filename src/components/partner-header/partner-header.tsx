import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"

import { TextBlockData } from "../../types"

import {
  StyledSection,
  StyledCol,
  StyledTextBlock,
  StyledImage,
} from "./partner-header.styled"

export interface PartnerHeaderData {
  readonly backgroundImage: {
    src: SubFile
    alt: string
  }
  readonly textBlock: TextBlockData
}

interface PartnerHeaderProps {
  readonly data: PartnerHeaderData
}

export const PartnerHeader = ({ data }: PartnerHeaderProps) => {
  const {
    backgroundImage: { src, alt },
    textBlock,
  } = data

  return (
    <StyledSection>
      <Container>
        <Row>
          <Col xs={4} sm={4} md={5} lg={5}>
            <StyledTextBlock
              className="text-block-header"
              textBlock={textBlock}
              classNames={Object.keys(textBlock)}
            />
          </Col>
          <StyledCol xs={4} sm={4} md={7} lg={6} offset={{ lg: 1 }}>
            <StyledImage
              className="image-header"
              image={src}
              alt={alt}
              loading="eager"
            />
          </StyledCol>
        </Row>
      </Container>
    </StyledSection>
  )
}

export default PartnerHeader
