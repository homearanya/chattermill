import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import styled from "styled-components"
import { Container } from "react-awesome-styled-grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/forms/contact-form"

import media from "../styles/media"
import newsletterFeaturedImage from "../images/newsletter-feature.png"

import "../styles/scss/styles.scss"

interface NewsletterSignupProps {
  path: string
}

const NewsletterSignup = ({ path }: NewsletterSignupProps) => {
  const {
    site: {
      siteMetadata: {
        hubspotConfig: { portalId, newsletter_formId },
      },
    },
  } = useStaticQuery<GatsbyTypes.NewsletterSignupQuery>(
    graphql`
      query NewsletterSignup {
        site {
          siteMetadata {
            hubspotConfig {
              portalId
              newsletter_formId
              formId
            }
          }
        }
      }
    `
  )
  return (
    <Layout className="watch-tour-page">
      <SEO
        title="Subscribe to Chattermill's Newsletter"
        description="Subscribe to Chattermill's newsletter to get a convinient round up of Chattermill's concise, ultra
        actionable articles and interviews"
        featuredImage={newsletterFeaturedImage}
      />
      <Section>
        <StyledContainer>
          <StyledHeader>Learn about CX</StyledHeader>
          <Wrapper>
            <TextBlockWrapper>
              <StyledParagraph>
                Subscribe to get a convenient round-up of Chattermill's concise,
                ultra actionable articles and interviews about the latest in the
                world of CX.
              </StyledParagraph>
              <StyledList>
                <StyledListItem>
                  <StyledSpan
                    role="img"
                    aria-label="Backhand Index Pointing Right"
                  >
                    👉
                  </StyledSpan>{" "}
                  Join thousands of email subscribers
                </StyledListItem>
                <StyledListItem>
                  <StyledSpan
                    role="img"
                    aria-label="Backhand Index Pointing Right"
                  >
                    👉
                  </StyledSpan>{" "}
                  Never miss a CX article or Interview
                </StyledListItem>
                <StyledListItem>
                  <StyledSpan
                    role="img"
                    aria-label="Backhand Index Pointing Right"
                  >
                    👉
                  </StyledSpan>{" "}
                  Be first in line to get access to the latest content
                </StyledListItem>
                <StyledListItem>
                  <StyledSpan
                    role="img"
                    aria-label="Backhand Index Pointing Right"
                  >
                    👉
                  </StyledSpan>{" "}
                  Less than 0.5% of readers unsubscribe
                </StyledListItem>
              </StyledList>
            </TextBlockWrapper>
            <FormWrapper>
              <ContactForm
                oneColumn={false}
                sendForm={false}
                sendSolutionDemoForm={false}
                analyticsOptions={{
                  category: "Subscribe",
                  label: "Newsletter Subscription",
                }}
                hubspotOptions={{
                  portalId,
                  newsletterFormId: newsletter_formId,
                }}
                buttonText={"Subscribe"}
                buttonPosition="left"
                actionOnSuccess={() => navigate("/thank-you/")}
              />
            </FormWrapper>
          </Wrapper>
        </StyledContainer>
      </Section>
    </Layout>
  )
}

export default NewsletterSignup

const Section = styled.section`
  padding: 5rem 0;
  ${media.lessThan("md")`
  padding: 5rem 0 0;
`}
`
const StyledContainer = styled(Container)`
  max-width: 120rem;
  padding: 0 3rem;
`
const Wrapper = styled.div`
  display: flex;

  ${media.lessThan("md")`
    flex-direction: column;
`}
`
const TextBlockWrapper = styled.div`
  flex: 1 0 50%;
  padding-right: 8rem;
  ${media.lessThan("md")`
    padding-right: 0;
    text-align: center;
    margin-bottom: 4rem;
`}
`
const StyledHeader = styled.h1`
  font-size: 34px;
  text-align: center;
  margin-bottom: 5rem;
`

const StyledParagraph = styled.p`
  font-size: 18px;
  margin-bottom: 3rem;

  ${media.lessThan("sm")`
  font-size: 14px;
  `}
`

const StyledList = styled.ul`
  list-style-position: outside;

  ${media.lessThan("sm")`
    font-size: 14px;
  `}
`

const StyledListItem = styled.li`
  list-style: none;
  font-size: 18px;
  list-style-position: outside;
  margin: 2px;
  padding: 5px;

  ${media.lessThan("md")`
    max-width: 50rem;
    margin: 0 auto;
    text-align: left;
  `}

  ${media.lessThan("sm")`
  font-size: 14px;
  `}
`

const StyledSpan = styled.span`
  margin-right: 10px;
  font-size: 18px;
`
const FormWrapper = styled.div`
  flex: 1 0 45%;
  max-width: 50rem;
  ${media.lessThan("md")`
    margin: 0 auto;
  `}
`
