import React from "react"
import { Container, Col } from "react-awesome-styled-grid"
import { useInView } from "react-intersection-observer"

import {
  StyledShapeLeft,
  StyledShapeRight,
  StyledSection,
  StyledWideContainer,
  StyledRow,
  Heading,
  FormWrapper,
  StyledEmailForm,
} from "./cta2.styled"

import { EmailFormData } from "../email-form"

export interface CTA2Data {
  shapeColor: string
  text: string
  textPlaceholder: string
  buttonText: string
}

interface CTA2Props {
  readonly data: CTA2Data
  readonly marginTop?: boolean
}

export const CTA2 = ({ data, marginTop }: CTA2Props) => {
  const { shapeColor, text, textPlaceholder, buttonText } = data
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  })
  const emailFormData: EmailFormData = { textPlaceholder, buttonText }
  return (
    <StyledSection className="cta2" marginTop={marginTop}>
      <StyledWideContainer>
        <StyledShapeLeft color={shapeColor} />
        <StyledShapeRight color={shapeColor} />
        <Container>
          <StyledRow>
            <Col
              justify={{
                xs: "center",
                md: "flex-start",
              }}
              xs={4}
              sm={3}
              md={5}
              lg={5}
              offset={{ md: 1 }}
            >
              <Heading
                ref={ref}
                inView={inView}
                dangerouslySetInnerHTML={{ __html: text }}
                className="heading"
              />
            </Col>
            <Col
              justify={{
                xs: "center",
                sm: "flex-end",
              }}
              sm={5}
              xs={4}
              md={6}
              lg={5}
            >
              <FormWrapper inView={inView}>
                <StyledEmailForm data={emailFormData} />
              </FormWrapper>
            </Col>
          </StyledRow>
        </Container>
      </StyledWideContainer>
    </StyledSection>
  )
}

export default CTA2
