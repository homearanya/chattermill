import React from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"
import { Container, Row, Col } from "react-awesome-styled-grid"

import { TextBlockData } from "../../types"

import {
  StyledSection,
  StyledCol,
  StyledTextBlock,
  FormWrapper,
  StyledImage,
} from "./partners-header.styled"

import ContactForm from "../forms/contact-form"

export interface PartnersHeaderData {
  readonly backgroundImage: {
    src: SubFile
    alt: string
  }
  readonly textBlock: TextBlockData
}

interface PartnersHeaderProps {
  readonly path: string
  readonly data: PartnersHeaderData
}

export const PartnersHeader = ({
  data,
  path,
  ...rest
}: PartnersHeaderProps) => {
  const {
    backgroundImage: { src, alt },
    textBlock,
  } = data

  const {
    site: {
      siteMetadata: {
        hubspotConfig: {
          portalId,
          newsletter_formId,
          partnership_request_formId,
        },
      },
    },
  } = useStaticQuery<GatsbyTypes.PartnersHeaderQuery>(
    graphql`
      query PartnersHeader {
        site {
          siteMetadata {
            domainsExcluded
            hubspotConfig {
              portalId
              newsletter_formId
              partnership_request_formId
            }
          }
        }
      }
    `
  )
  return (
    <StyledSection {...rest}>
      <Container>
        <Row>
          <Col xs={4} sm={8} md={6}>
            <StyledTextBlock
              id="partners-form"
              className="text-block-header"
              textBlock={textBlock}
              classNames={Object.keys(textBlock)}
            />
            {/* <PartnersForm /> */}
            <FormWrapper>
              <ContactForm
                oneColumn={false}
                analyticsOptions={{
                  category: "All",
                  label: "Demo Button Click (book-demo)",
                }}
                hubspotOptions={{
                  portalId,
                  newsletterFormId: newsletter_formId,
                  formId: partnership_request_formId,
                }}
                buttonText={"Send"}
                buttonPosition="left"
                actionOnSuccess={() => {
                  navigate("/thank-you-partners/")
                }}
              />
            </FormWrapper>
          </Col>
          <StyledCol xs={4} sm={8} md={6}>
            <StyledImage image={src} alt={alt} loading="eager" />
          </StyledCol>
        </Row>
      </Container>
    </StyledSection>
  )
}

export default PartnersHeader
