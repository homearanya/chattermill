import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  StyledSection,
  StyledContainer,
  StyledRow,
  FormCol,
  FormWrapper,
  ImageCol,
  ImageWrapper,
  StyledImage,
  Article,
  Title,
  Subtitle,
  Body,
} from "./template-view.styled"

import ContactForm from "../forms/contact-form"
import CTA2Blog from "../cta2-blog"
import { contentfulImageMap } from "../../utils/helpers"

const data = {
  shapeColor: "#10C2ED",
  text: "Power your CX with Chattermill",
}

// import TemplateHeading from "../template-heading";

export interface TemplateViewData {
  title: { title: string }
  subtitle: { subtitle: string }
  slug: string
  tags: string[]
  featuredImage: GatsbyTypes.ContentfulAsset
  templateFile: {
    file: {
      fileName: string
      url: string
    }
  }
  body: {
    childMarkdownRemark: {
      html: string
      excerpt: string
    }
  }
}

interface TemplateViewProps {
  readonly path: string
  readonly data: TemplateViewData
}

export const TemplateView = ({ data: post, path }: TemplateViewProps) => {
  const {
    site: {
      siteMetadata: {
        hubspotConfig: { portalId, newsletter_formId, templates_formId },
      },
    },
  } = useStaticQuery<GatsbyTypes.TemplateViewQuery>(
    graphql`
      query TemplateView {
        site {
          siteMetadata {
            domainsExcluded
            hubspotConfig {
              portalId
              newsletter_formId
              templates_formId
            }
          }
        }
      }
    `
  )
  const {
    title: { title },
    subtitle: { subtitle },
    featuredImage,
    templateFile,
    body: {
      childMarkdownRemark: { html },
    },
  } = post

  return (
    <StyledSection>
      <StyledContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <StyledRow>
          <FormCol md={6}>
            <Article>
              <Body dangerouslySetInnerHTML={{ __html: html }} />
              <FormWrapper>
                {/* <TemplateForm slug={slug} templateFile={file} /> */}
                <ContactForm
                  oneColumn={false}
                  analyticsOptions={{
                    category: "All",
                    label: "Template Page Form Submitted",
                  }}
                  hubspotOptions={{
                    portalId,
                    newsletterFormId: newsletter_formId,
                    formId: templates_formId,
                  }}
                  buttonText={"Get Template"}
                  buttonPosition="left"
                  downloadFile={templateFile}
                  downloadGaDataLayerEventName="Template Download"
                />
              </FormWrapper>
            </Article>
          </FormCol>
          <ImageCol md={6}>
            <ImageWrapper>
              <StyledImage
                image={contentfulImageMap(featuredImage)}
                alt={featuredImage.title}
              />
            </ImageWrapper>
          </ImageCol>
        </StyledRow>
      </StyledContainer>
      <CTA2Blog data={data} />
    </StyledSection>
  )
}

export default TemplateView
