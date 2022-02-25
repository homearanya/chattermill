import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-awesome-styled-grid"
import WhitePaper, { WhitePaperProps } from "../components/whitepaper"
import styled from "styled-components"
import media from "../styles/media"

interface WhitepaperPageProps {
  readonly path: string
  readonly data: GatsbyTypes.WhitePaperQuery
}

const WhitepaperPage = ({
  path,
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        featuredImage,
        buttonLabel,
        pdfUrl,
        formId,
        optionalField,
      },
      html,
    },
    site: {
      siteMetadata: { hubspotConfig },
    },
  },
}: WhitepaperPageProps) => {
  const { portalId, newsletter_formId } = hubspotConfig
  const whitePaperProps: WhitePaperProps = {
    path,
    featuredImage: featuredImage as GatsbyTypes.File,
    buttonLabel,
    pdfUrl,
    formId: hubspotConfig[formId],
    newsletterFormId: newsletter_formId,
    portalId,
    optionalField,
  }
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        featuredImage={featuredImage.publicURL}
      />
      <StyledHeader>{title}</StyledHeader>
      <WhitePaper {...whitePaperProps} />
      {html && (
        <Container>
          <Text dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      )}
    </Layout>
  )
}

export default WhitepaperPage

const query = graphql`
  query WhitePaper($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        featuredImage {
          id
          childImageSharp {
            gatsbyImageData(
              width: 375
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
          publicURL
        }
        buttonLabel
        pdfUrl
        formId
        optionalField {
          label
          placeHolder
          name
        }
      }
      html
    }
    site {
      siteMetadata {
        hubspotConfig {
          portalId
          newsletter_formId
          churnGuide_formId
          customerFeedbackGuide_formId
          scalingCX_formId
          csatGuide_formId
          surveyGuide_formId
          freeBook_formId
          cxFashion_formId
          cxFashion_retail_formId
          cxFintech_formId
          eCXpectations_formId
        }
      }
    }
  }
`

const StyledHeader = styled.h1`
  font-family: "Raisonne", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding-top: 10rem;
  padding-bottom: 0;
  font-size: 5rem;
  font-weight: 500;
  text-align: center;
  max-width: 100rem;
  margin: 0 auto;

  ${media.lessThan("sm")`
    font-size: 3rem;
  `}
`

const Text = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  h2 {
    text-align: left;
    font-size: 4rem;
    line-height: 1.16;
    margin: 3rem 0;
    font-weight: 600;
    text-align: center;

    ${media.lessThan("sm")`
      align-items: center;
      font-size: 3rem;
      margin: 2rem 0;
  `}
  }

  h3 {
    text-align: left;
    font-size: 2.6rem;
    line-height: 1.16;
    margin: 2rem 0;
    font-weight: 600;

    ${media.lessThan("sm")`
      font-size: 2rem;
      margin: 1.5rem 0;
  `}
  }

  p {
    text-align: left;
    font-size: 1.8rem;
    line-height: 1.5;
    margin: 1.5rem 0;

    ${media.lessThan("sm")`
    font-size: 1.6rem;
    margin: 1rem 0;
  `}
  }

  li {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 1rem;
    padding: 0 0 0 10px;

    ${media.lessThan("sm")`
    font-size: 1.6rem;
  `}
  }
`
