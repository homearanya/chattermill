import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"
import ReactPlayer from "react-player"
import { TextBlockData } from "../../types"

import {
  StyledSection,
  StyledCol,
  StyledTextBlock,
  StyledImage,
} from "./standard-header.styled"

export interface StandardHeaderData {
  readonly backgroundImage: {
    src: SubFile
    alt: string
  }
  readonly textBlock: TextBlockData
}

interface StandardHeaderProps {
  readonly data: StandardHeaderData
}

export const StandardHeader = ({ data, ...rest }: StandardHeaderProps) => {
  const {
    backgroundImage: { src, alt },
    textBlock,
  } = data

  return (
    <StyledSection {...rest}>
      <Container>
        <Row>
          <Col xs={4} sm={4} md={5} lg={4}>
            <StyledTextBlock
              className="text-block-header"
              textBlock={textBlock}
              classNames={Object.keys(textBlock)}
            />
          </Col>
          {/* <StyledCol xs={4} sm={4} md={7} lg={6} offset={{ lg: 1 }}>
						<StyledImage className="image-header" image={src} alt={alt} />
					</StyledCol> */}
          <StyledCol xs={4} sm={4} md={7} lg={7} offset={{ lg: 1 }}>
            {src.publicURL.includes("//videos") ? (
              <div
                style={{
                  paddingTop: "10rem",
                }}
              >
                <ReactPlayer
                  url={src.publicURL}
                  playing={true}
                  loop
                  width="90%"
                  height="100%"
                  muted={true}
                />
              </div>
            ) : (
              <StyledImage
                className="image-header"
                image={src}
                alt={alt}
                loading="eager"
                objectFit="contain"
              />
            )}
          </StyledCol>
        </Row>
      </Container>
    </StyledSection>
  )
}

export default StandardHeader
