import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Container } from "react-awesome-styled-grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntegrationCard from "../components/integration-card"
import IntegrationsTable from "../components/integrations-table"
import CTA2, { CTA2Data } from "../components/cta2"

import { $colorSecondary } from "../styles/variables"
import media from "../styles/media"

interface IntegrationPageProps {
  readonly data: GatsbyTypes.IntegrationPageQuery
}

const IntegrationPage = ({
  data: { contentfulIntegration },
}: IntegrationPageProps) => {
  const { title, metaDescription, cta, id } = contentfulIntegration
  const ctaData: CTA2Data = {
    shapeColor: cta.shapeColor,
    text: cta.heading,
    button1: {
      text: cta.button1.displayText || cta.button1.name,
      link: cta.button1.path || cta.button1.externalUrl,
    },
    button2: {
      text: cta.button2.displayText || cta.button2.name,
      link: cta.button2.path || cta.button2.externalUrl,
    },
  }
  return (
    <Layout className="integration-page">
      <SEO title={`${title} Integration`} description={metaDescription} />
      <StyledSection>
        <Container>
          <IntegrationCard data={contentfulIntegration} />
          <StyledHeading>Additional Integrations</StyledHeading>
          <StyledIntegrationTable currentIntegration={id} />
          <CTA2 data={ctaData} />
        </Container>
      </StyledSection>
    </Layout>
  )
}

export default IntegrationPage

export const query = graphql`
  query IntegrationPage($id: String!) {
    contentfulIntegration(id: { eq: $id }) {
      id
      contentful_id
      title
      metaDescription
      logo {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
        file {
          url
        }
      }
      description {
        raw
      }
      link {
        name
        displayText
        path
        externalUrl
      }
      links {
        name
        displayText
        path
        externalUrl
      }
      sections {
        ... on Node {
          id
          ... on ContentfulContent {
            title
            content {
              raw
            }
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
          ... on ContentfulGallery {
            title
            images {
              id
              thumbnail: fluid(maxWidth: 400) {
                ...GatsbyContentfulFluid_withWebp
              }
              fullSize: fluid(maxWidth: 1200) {
                ...GatsbyContentfulFluid_withWebp
              }
              title
              file {
                url
              }
            }
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
        }
      }
      cta {
        shapeColor
        heading
        button1 {
          name
          displayText
          path
          externalUrl
        }
        button2 {
          name
          displayText
          path
          externalUrl
        }
      }
    }
  }
`

export const StyledSection = styled.section`
  padding: 5rem 0;
  overflow: hidden;
  ${media.lessThan("sm")`
      padding: 5rem 0rem;
  `}
`
export const StyledHeading = styled.h2`
  color: ${$colorSecondary};
  font-weight: 400;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  margin: 8rem 0 3rem;
`

export const StyledIntegrationTable = styled(IntegrationsTable)`
  margin-bottom: 10rem;
`
