import React from "react"
import { useInView } from "react-intersection-observer"

import { TextBlockData } from "../../types"

import {
  StyledSection,
  StyledContainer,
  Wrapper,
  ImageWrapper,
  StyledImage,
  StyledTextBlock,
} from "./case-study-overview-section.styled"

export interface CaseStudyOverviewSectionData {
  image: SubFile
  alt?: string
  textBlock: TextBlockData
}

interface CaseStudyOverviewSectionProps {
  readonly data: CaseStudyOverviewSectionData
  readonly className?: string
}

const CaseStudyOverviewSection = ({
  data,
  className,
}: CaseStudyOverviewSectionProps) => {
  const { image, alt, textBlock } = data
  // observer for the image
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  })
  return (
    <StyledSection
      className={`case-study-oveview-section ${className ? className : ""}`}
    >
      <StyledContainer>
        <Wrapper>
          <StyledTextBlock textBlock={textBlock} withObserver />
          <ImageWrapper ref={ref}>
            <StyledImage
              image={image}
              alt={alt}
              withObserver
              inView={inView}
              className="image-block"
            />
          </ImageWrapper>
        </Wrapper>
      </StyledContainer>
    </StyledSection>
  )
}

export default CaseStudyOverviewSection
