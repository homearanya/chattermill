import React from "react"
import { graphql, navigate } from "gatsby"

import styled from "styled-components"
import { Container } from "react-awesome-styled-grid"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BrandsSection from "../components/brands-section"
import ContactForm from "../components/forms/contact-form"
import { BigHeading } from "../styles/common.styled"
import { $white, $colorPrimary } from "../styles/variables"
import { boxShadow } from "../styles/mixins"
import media from "../styles/media"

interface ContactProps {
  location: {
    state?: any
  }
  path: string
  data: PageQueryData
}

const Contact = ({ location, path, data }: ContactProps) => {
  const {
    site: {
      siteMetadata: {
        hubspotConfig: { portalId, formId, newsletter_formId },
      },
    },
  } = data
  return (
    <Layout className="contact-page">
      <SEO
        title="Contact"
        description="Get in touch with the right people at Chattermill. We’re here to help!"
      />
      <StyledSection>
        <Container>
          <Heading>Get in Touch</Heading>
          <StyledText>
            Get in touch with the right people at Chattermill. We’re here to
            help!
          </StyledText>
          <FormContainer>
            <ContactForm
              email={location.state && location.state.email}
              analyticsOptions={{
                category: "All",
                label: "Contact Page Form Submitted",
              }}
              hubspotOptions={{
                portalId,
                newsletterFormId: newsletter_formId,
                formId,
              }}
              buttonText={"Get in Touch"}
              actionOnSuccess={() => navigate("/thank-you/")}
            />
          </FormContainer>
        </Container>
      </StyledSection>
      <BrandsSection />
    </Layout>
  )
}

export default Contact

interface PageQueryData {
  site: {
    siteMetadata: {
      hubspotConfig: {
        portalId: string
        formId: string
        newsletter_formId: string
      }
    }
  }
}

export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        hubspotConfig {
          portalId
          formId
          newsletter_formId
        }
      }
    }
  }
`

export const StyledSection = styled.section`
  padding: 3rem 0 9rem;

  ${media.lessThan("md")`
    padding: 5rem 0;
  `}

  ${media.lessThan("sm")`
    padding: 2rem 0 5rem;
  `}
`

export const StyledText = styled.p`
  text-align: center;
  font-weight: 400;
  padding-bottom: 2rem;
  font-size: 2.5rem;
`

export const Heading = styled(BigHeading)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 500;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 7.2rem !important;
  line-height: 8rem !important;
  text-transform: none;

  ${media.lessThan("sm")`
    margin-bottom: 3rem;
    font-size: 4rem !important;
    line-height: 4.5rem !important;
  `}
`

const FormContainer = styled.div`
  margin: 0 auto;
  width: 44rem;

  background-color: ${$white};
  border-color: ${$colorPrimary};
  border-radius: 2px;
  ${boxShadow};
  padding: 3.2rem 3.2rem 4.4rem;

  display: flex;
  flex-direction: column;

  ${media.lessThan("sm")`
  padding: 3.2rem 1.6rem 4.4rem;
  max-width: 41rem;
  width: 100%;
`}
`
