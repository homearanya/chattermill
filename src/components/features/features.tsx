import React from "react"
import { Container, IGridBreakpoints } from "react-awesome-styled-grid"
import { useInView } from "react-intersection-observer"
import ReactPlayer from "react-player"

import { TextBlockData } from "../../types"
import IntegrationsCarouselSlider from "../carousel-integrations-slider/IntegrationsCarouselSlider"

import {
  StyledWideContainer,
  StyledCol,
  StyledTextBlock,
  VideoWrapper,
  StyledRow,
  OuterVideoWrapper,
  ImageWrapper,
  StyledImage,
} from "./features.styled"

export type FeaturesArray = {
  shapeColor: string
  video?: {
    src: GatsbyTypes.File
  }
  image?: {
    src: SubFile
    alt: string
  }
  textBlock: TextBlockData
}[]

interface FeaturesProps {
  features: FeaturesArray
  firstTextPosition?: 0 | 1 // 0: start on left, 1: start on right
}

export const Features = ({ features, firstTextPosition }: FeaturesProps) => (
  <>
    {features.map((feature, index) => {
      const { video, image, textBlock } = feature
      const src = image?.src
      const alt = image?.alt
      const url = video?.src?.publicURL
      const textPosition =
        index % 2 ===
        (firstTextPosition || firstTextPosition === 0 ? firstTextPosition : 1)
          ? "left"
          : "right"
      const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
        rootMargin: "-100px",
      })

      return (
        <StyledWideContainer key={index}>
          <Container>
            <StyledRow
              reverse={
                textPosition === "left"
                  ? (["sm", "md", "lg", "xl"] as IGridBreakpoints[])
                  : false
              }
            >
              <StyledCol
                xs={4}
                sm={5}
                md={7}
                offset={{ md: textPosition === "left" ? 1 : undefined }}
              >
                <>
                  {url ? (
                    <OuterVideoWrapper ref={ref}>
                      <VideoWrapper justifyRight withObserver inView={inView}>
                        <ReactPlayer
                          url={url}
                          playing={true}
                          loop
                          width="100%"
                          height="100%"
                          muted={true}
                          className="content"
                        />
                      </VideoWrapper>
                    </OuterVideoWrapper>
                  ) : src ? (
                    <ImageWrapper ref={ref}>
                      <StyledImage
                        image={src}
                        alt={alt}
                        justifyRight={true}
                        withObserver
                        inView={inView}
                      />
                    </ImageWrapper>
                  ) : (
                    <IntegrationsCarouselSlider />
                  )}
                </>
              </StyledCol>
              <StyledCol
                xs={4}
                sm={3}
                md={4}
                offset={{ md: textPosition === "right" ? 1 : undefined }}
              >
                <StyledTextBlock
                  textPosition={textPosition}
                  textBlock={textBlock}
                  withObserver
                />
              </StyledCol>
            </StyledRow>
          </Container>
        </StyledWideContainer>
      )
    })}
  </>
)
export default Features
