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
} from "./customers-quotes.styled"

// import zapposLogo from "../../images/zappos-logo-small.svg"
// import bloomwildLogo from "../../images/bloom-wild-logo-small.svg"
// import transferwiseLogo from "../../images/transferwise-logo-small.svg"
import alexGenov from "../../images/alex-genov.jpg"
import kirstyMacdonald from "../../images/kirsty-macdonald.jpg"
import nilanPeiris from "../../images/nilan-peiris.jpg"
// import mooLogo from "../../images/moo-logo-small.svg"

const people = {
  "alex-genov.jpg": { src: alexGenov, alt: "Alex Genov" },
  "kirsty-macdonald.jpg": { src: kirstyMacdonald, alt: "Kirsty Macdonald" },
  "nilan-peiris.jpg": { src: nilanPeiris, alt: "Nilan Peiris" },
}

// const customersLogos = {
//   "zappos-logo-small.svg": { src: zapposLogo, alt: "zappos logo" },
//   "bloom-wild-logo-small.svg": {
//     src: bloomwildLogo,
//     alt: "Bloom and Wild logo",
//   },
//   "transferwise-logo-small.svg": {
//     src: transferwiseLogo,
//     alt: "Transferwise logo",
//   },
//   "moo-logo-small.svg": {
//     src: mooLogo,
//     alt: "Moo logo",
//   },
// }

export interface CustomersQuotesData {
  customersQuotes: {
    customerLogo:
      | "zappos-logo-small.svg"
      | "bloom-wild-logo-small.svg"
      | "transferwise-logo-small.svg"
    alt: String
    text: string
    person: {
      image: "alex-genov.jpg" | "kirsty-macdonald.jpg" | "nilan-peiris.jpg"
      name: string
      role: string
    }
  }[]
}

interface CustomersQuotesProps {
  readonly data: CustomersQuotesData
}

export const CustomersQuotes = ({ data }: CustomersQuotesProps) => {
  const { customersQuotes } = data

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
                    <PersonPicture src={personSrc} alt={personAlt} />
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

export default CustomersQuotes
