import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  StyledSection,
  StyledContainer,
  Wrapper,
  FormArea,
  Heading,
  SubHeading,
  ImageArea,
  StyledImage,
  Caption,
} from "./sign-up-section.styled"

import ContactForm from "../forms/contact-form"

export interface SignUpSectionData {
  title: string
  subTitle: string
  terms: string
  imageCaption: string
  imageFile: GatsbyTypes.File
  alt?: string
  documentFile?: GatsbyTypes.ContentfulAssetFile
}

interface SignUpSectionProps {
  readonly data: SignUpSectionData
  readonly className?: string
}
const SignUpSection = ({ data }: SignUpSectionProps) => {
  const {
    site: {
      siteMetadata: {
        hubspotConfig: { portalId, newsletter_formId },
      },
    },
  } = useStaticQuery<GatsbyTypes.SignUpSectionQuery>(
    graphql`
      query SignUpSection {
        site {
          siteMetadata {
            domainsExcluded
            hubspotConfig {
              portalId
              newsletter_formId
            }
          }
        }
      }
    `
  )
  const { title, subTitle, imageCaption, imageFile, documentFile } = data

  return (
    <StyledSection>
      <StyledContainer>
        <Wrapper>
          <ImageArea>
            <Heading>{title}</Heading>
            <SubHeading>{subTitle}</SubHeading>
            <StyledImage image={imageFile} />
            <Caption>{imageCaption}</Caption>
          </ImageArea>
          <FormArea>
            <ContactForm
              sendForm={false}
              sendNewsletterForm={true}
              sendSolutionDemoForm={false}
              downloadFile={documentFile}
              analyticsOptions={{
                category: "Subscribe",
                label: "Newsletter Subscription",
              }}
              hubspotOptions={{
                portalId,
                formId: newsletter_formId,
              }}
              buttonText={"Subscribe"}
              buttonPosition="left"
            />
          </FormArea>
        </Wrapper>
      </StyledContainer>
    </StyledSection>
  )
}

export default SignUpSection
