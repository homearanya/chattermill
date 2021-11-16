import React from "react"
import { useInView } from "react-intersection-observer"

import {
  StyledShapeLeft,
  StyledShapeRight,
  StyledContainer,
  StyledWideContainer,
  Heading,
  Text,
  StyledLink,
  ButtonWrapper,
  StyledLink2,
} from "./cta2-blog.styled"

export interface CTA2BlogData {
  shapeColor: string
  text: string
  subText?: string
}

interface CTA2BlogProps {
  readonly data: CTA2BlogData
  readonly marginTop?: boolean
}

export const CTA2Blog = ({ data }: CTA2BlogProps) => {
  const { shapeColor, text, subText } = data
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  })
  return (
    <section>
      <StyledWideContainer>
        <StyledShapeLeft color={shapeColor} />
        <StyledShapeRight color={shapeColor} />
        <StyledContainer>
          <Heading
            ref={ref}
            inView={inView}
            dangerouslySetInnerHTML={{ __html: text }}
            className="heading"
          />
          {subText && (
            <Text
              ref={ref}
              inView={inView}
              dangerouslySetInnerHTML={{ __html: subText }}
              className="heading"
            />
          )}
          <ButtonWrapper>
            <StyledLink href="https://app.chattermill.com/signup">
              Try For Free
            </StyledLink>
            <StyledLink2 href="/book-demo/">Request Demo</StyledLink2>
          </ButtonWrapper>
          <Text ref={ref} inView={inView} className="heading">
            Free 14-day Trial
          </Text>
        </StyledContainer>
      </StyledWideContainer>
    </section>
  )
}

export default CTA2Blog
