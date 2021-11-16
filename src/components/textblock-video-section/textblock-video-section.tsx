import React from "react"
import ReactPlayer from "react-player"
import {
  Container,
  Col,
  Row,
  IGridBreakpoints,
} from "react-awesome-styled-grid"

import { TextBlockData } from "../../types"

import {
  StyledSection,
  VideoWrapper,
  StyledTextBlock,
} from "./textblock-video-section.styled"

export interface TextBlockVideoSectionData {
  textPosition: TextPosition
  image: SubFile
  alt?: string
  textBlock: TextBlockData
}

interface TextBlockVideoSectionProps {
  readonly data: TextBlockVideoSectionData
  readonly className?: string
}

const TextBlockVideoSection = ({
  data,
  className,
}: TextBlockVideoSectionProps) => {
  const {
    textPosition,
    image: { publicURL },
    textBlock,
  } = data

  return (
    <StyledSection
      className={`texblock-image-section ${className ? className : ""}`}
    >
      <Container>
        <Row
          reverse={
            textPosition === "left"
              ? (["sm", "md", "lg", "xl"] as IGridBreakpoints[])
              : false
          }
        >
          <Col xs={4} sm={5} md={7} lg={6} align="center">
            <VideoWrapper>
              <ReactPlayer
                url={publicURL}
                playing={true}
                loop
                width="100%"
                height="100%"
                muted={true}
              />
            </VideoWrapper>
          </Col>
          <Col xs={4} sm={3} md={5} lg={5} offset={{ lg: 1 }}>
            <StyledTextBlock textBlock={textBlock} withObserver />
          </Col>
        </Row>
      </Container>
    </StyledSection>
  )
}

export default TextBlockVideoSection
