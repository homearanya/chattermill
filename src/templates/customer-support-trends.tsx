import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Benefits from "../components/benefits"
import Discover, { DiscoverData } from "../components/discover"
import GetStarted from "../components/get-started"
import CustomerSupportTrendsHero from "../components/customer-support-trends-hero"
import styled from "styled-components"
import media from "../styles/media"
import ContactForm from "../components/forms/contact-form"

export interface CustomerSupportTrendsProps {
  data: GatsbyTypes.CustomerSupportTrendsQuery
}

const CustomerSupportTrends: React.FC<CustomerSupportTrendsProps> = ({
  data,
}) => {
  const {
    site: {
      siteMetadata: { hubspotConfig },
    },
    CustomerSupportTrends: {
      frontmatter: {
        title,
        description,
        pdfUrl,
        formId,
        seoImage,
        hero,
        discover,
        buttonLabel,
        gettingStarted,
      },
    },
  } = data
  const { portalId, newsletter_formId: newsletterFormId } = hubspotConfig
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        featuredImage={seoImage.publicURL}
      />
      <CustomerSupportTrendsHero hero={hero} />
      <Discover data={discover as DiscoverData} />
      <Wrapper>
        <ContactFormWrapper>
          <ContactForm
            oneColumn={false}
            analyticsOptions={{
              category: "Download",
              label: buttonLabel,
            }}
            hubspotOptions={{
              portalId,
              newsletterFormId,
              formId: hubspotConfig[formId],
            }}
            buttonText={"Download Report"}
            buttonPosition="left"
            sendSolutionDemoForm={false}
            actionOnSuccess={() => {
              window.location.href = pdfUrl
              window.dataLayer = window.dataLayer || []
              window.dataLayer.push({
                event: "Whitepaper Download",
              })
            }}
          />
        </ContactFormWrapper>
        {/* <Carousel data={carousel as CarouselData} /> */}
        {/* <Benefits /> Removed Temporary */}
        <GetStarted data={gettingStarted} />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  section:nth-child(1) {
    margin-bottom: 0;
  }
  section:nth-child(2) {
    margin-top: -6%;
    ${media.lessThan("sm")`
      margin-top: -12%;  
    `}
  }
`

const ContactFormWrapper = styled.div`
  max-width: 76rem;
  margin: 0 auto;
  padding: 2rem 3rem 10%;
`

export default CustomerSupportTrends

export const page = graphql`
  query CustomerSupportTrends($id: String!) {
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
          customer_support_trends_formId
        }
      }
    }
    CustomerSupportTrends: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        buttonLabel
        pdfUrl
        formId
        seoImage {
          publicURL
        }
        hero {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 600
                # layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        discover {
          title
          reports {
            icon {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                  formats: [AUTO, WEBP]
                )
              }
            }
            label
            description
          }
        }
        gettingStarted {
          title
          description
          button {
            text
            link
          }
          smallText
        }
      }
    }
  }
`
