import React from "react"
import { Container, Row } from "react-awesome-styled-grid"
import { useInView } from "react-intersection-observer"

import {
  StyledSection,
  StyledCol,
  StyledText,
  StyledPerson,
  PersonPicture,
  StyledPersonText,
} from "./customers-quotes-pricing-plans.styled"

import { useStaticQuery, graphql } from "gatsby"

export interface CustomersQuotesPricingData {
  customersQuotes: {
    text: string
    person: {
      image:
        | "zappos-person.png"
        | "tesco-person.png"
        | "transferwise-person.png"
      name: string
      role: string
    }
  }[]
}

interface CustomersQuotesPricingProps {
  readonly data: CustomersQuotesPricingData
}

export const CustomersQuotesPricing = ({
  data,
}: CustomersQuotesPricingProps) => {
  const { customersQuotes } = data

  const { alexGenov, elyssaFigueria, nilanPeiris } = useStaticQuery(graphql`
    {
      alexGenov: file(relativePath: { eq: "zappos-person.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 90
            quality: 100
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      elyssaFigueria: file(relativePath: { eq: "transferwise-person.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 90
            quality: 100
            layout: CONSTRAINED
            formats: [AUTO, WEBP]
          )
        }
      }
      nilanPeiris: file(relativePath: { eq: "tesco-person.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 90
            quality: 100
            layout: CONSTRAINED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)

  const people = {
    "zappos-person.png": { src: alexGenov, alt: "Alex Genov" },
    "tesco-person.png": { src: elyssaFigueria, alt: "Elyssa Figueria" },
    "transferwise-person.png": { src: nilanPeiris, alt: "Nilan Peiris" },
  }

  return (
    <StyledSection>
      <Container>
        <Row justify={{ sm: "center" }}>
          {customersQuotes.map((customerQuotes, index) => {
            const { text, person } = customerQuotes
            const { image, name, role } = person
            const { src: personSrc, alt: personAlt } = people[image]

            const [textRef, textInView] = useInView({
              threshold: 0,
              triggerOnce: true,
              rootMargin: "-150px",
            })
            const [personRef, personInView] = useInView({
              threshold: 0,
              triggerOnce: true,
              rootMargin: "-150px",
            })
            return (
              <StyledCol key={index} xs={4} sm={4} md={4}>
                <div ref={textRef}>
                  <StyledText
                    dangerouslySetInnerHTML={{ __html: text }}
                    inView={textInView}
                  />
                </div>
                <div ref={personRef}>
                  <StyledPerson inView={personInView}>
                    <PersonPicture image={personSrc} alt={personAlt} />
                    <div>
                      <StyledPersonText
                        dangerouslySetInnerHTML={{ __html: name }}
                      />
                      <StyledPersonText
                        dangerouslySetInnerHTML={{ __html: role }}
                      />
                    </div>
                  </StyledPerson>
                </div>
              </StyledCol>
            )
          })}
        </Row>
      </Container>
    </StyledSection>
  )
}

export default CustomersQuotesPricing
