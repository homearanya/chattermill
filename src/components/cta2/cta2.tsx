import React from "react"
import { useInView } from "react-intersection-observer"
import EmailForm from "../email-form"

import {
  StyledSection,
  StyledContainer,
  StyledWideContainer,
  StyledShapeLeft,
  StyledShapeRight,
  Heading,
  Text,
} from "./cta2.styled"

export interface CTA2Data {
  shapeColor: string
  text: string
  subText?: string
  button1?: ButtonData
  button2?: ButtonData
}

interface CTA2Props {
  readonly data: CTA2Data
}

export const CTA2 = ({ data, ...rest }: CTA2Props) => {
  const { shapeColor, text, subText } = data
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  })

  return (
    <StyledSection {...rest}>
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
          {subText ? (
            <Text
              ref={ref}
              inView={inView}
              dangerouslySetInnerHTML={{ __html: subText }}
              className="heading"
            />
          ) : null}
          <EmailForm />
          <Text ref={ref} inView={inView} className="heading">
            Free 30-day Trial
          </Text>
        </StyledContainer>
      </StyledWideContainer>
    </StyledSection>
  )
}

export default CTA2
