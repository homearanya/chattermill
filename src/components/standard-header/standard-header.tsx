import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"

import { ImageObject, TextBlockData } from "../../types"

import {
  StyledSection,
  StyledCol,
  StyledTextBlock,
  StyledImage,
} from "./standard-header.styled"

export interface StandardHeaderData {
  readonly backgroundImage: {
    src: ImageObject
    alt: string
  }
  readonly textBlock: TextBlockData
}

interface StandardHeaderProps {
  readonly data: StandardHeaderData
}

export const StandardHeader = ({ data }: StandardHeaderProps) => {
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
            <StyledImage className="image-header" image={src} alt={alt} />
          </StyledCol>
        </Row>
      </Container>
    </StyledSection>
  )
}

export default StandardHeader
