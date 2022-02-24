import React from "react"

import ContactForm, { OptionalField } from "../forms/contact-form"
import {
  StyledContainer,
  StyledWrapper,
  Item,
  StyledImage,
} from "./whitepaper.styled"

export interface WhitePaperProps {
  path: string
  featuredImage: SubFile
  buttonLabel: string
  pdfUrl: string
  formId: string
  newsletterFormId: string
  portalId: string
  optionalField: OptionalField
}

const WhitePaper = ({
  featuredImage,
  buttonLabel,
  pdfUrl,
  formId,
  newsletterFormId,
  portalId,
  optionalField,
}: WhitePaperProps) => (
  <StyledContainer>
    <Item>
      <StyledWrapper>
        <StyledImage image={featuredImage} alt="alt text" />
      </StyledWrapper>
    </Item>
    <Item>
      <ContactForm
        oneColumn={true}
        analyticsOptions={{
          category: "Download",
          label: buttonLabel,
        }}
        hubspotOptions={{
          portalId,
          newsletterFormId,
          formId,
        }}
        buttonText={"Read Now"}
        buttonPosition="left"
        sendSolutionDemoForm={false}
        actionOnSuccess={() => {
          window.location.href = pdfUrl
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            event: "Whitepaper Download",
          })
        }}
        optionalField={optionalField}
      />
    </Item>
  </StyledContainer>
)

export default WhitePaper
