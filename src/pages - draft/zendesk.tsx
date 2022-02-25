import React from "react"
import styled from "styled-components"
import { graphql, navigate } from "gatsby"
import { Container } from "react-awesome-styled-grid"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/forms/contact-form"
import media from "../styles/media"
import { boxShadow } from "../styles/mixins"
import { $colorHeading, $white, $colorPrimary } from "../styles/variables"
import { Link } from "gatsby"
import { Row } from "react-awesome-styled-grid"

// LOGOS

import TrainlineColorIcon from "../images/trainline-color.svg"
import HellofreshColorIcon from "../images/hello-fresh-color.svg"
import GetyourguideColorIcon from "../images/getyourguide-color.svg"
import UberColorIcon from "../images/uber-color.svg"
import TransferwiseColorIcon from "../images/transferwise-color.svg"
import DeliverooColorIcon from "../images/deliveroo-color.svg"

interface ContactProps {
  location: {
    state?: any
  }
  path: string
  data: PageQueryData
}

const Zendesk = ({ location, path, data }: ContactProps) => {
  const {
    site: {
      siteMetadata: {
        hubspotConfig: { zendesk_portalId, zendesk_Id, newsletter_formId },
      },
    },
  } = data
  return (
    <Layout className="contact-page">
      <SEO
        title="Chattermill Demo"
        description="Start analysing your Zendesk data today"
      />
      <StyledSection>
        <LargeHeading>Get Started</LargeHeading>
        <StyledContainer>
          <Wrapper>
            <FormWrapper>
              <ContactForm
                oneColumn={true}
                email={location.state && location.state.email}
                analyticsOptions={{
                  category: "All",
                  label: "Free Trial Button Click",
                }}
                hubspotOptions={{
                  portalId: zendesk_portalId,
                  newsletterFormId: newsletter_formId,
                  formId: zendesk_Id,
                }}
                buttonText={"Complete trial signup"}
                actionOnSuccess={() => navigate("/thank-you-zendesk/")}
                optionalField={{
                  name: "zendesk_subdomain",
                  label: "Zendesk Subdomain",
                  placeHolder: "Optional",
                }}
              />
            </FormWrapper>
            <div
              style={{
                padding: "10px",
              }}
            ></div>
          </Wrapper>
          <Wrapper>
            <Heading>
              <StyledSpan>Schedule a trial</StyledSpan> to start analysing your
              Zendesk data
            </Heading>
            <List>
              Surface and prioritise emerging trends within conversations.
            </List>
            <List>
              Get a single customer view, wherever you and your customers are.
            </List>
            <List>
              Put your CX on autopilot and automate standardised actions.
            </List>
          </Wrapper>
        </StyledContainer>
      </StyledSection>
      <StyledSection>
        <StyledContainer>
          <Box>
            <SubHeading>
              <em>
                {" "}
                "The Chattermill-Zendesk Integration solved a problem we
                encounter every holiday season with incorrectly submitted
                customer support tickets. We’ve been able to improve operational
                processes and increase agent productivity, which translates to
                real cost savings for our support team”
              </em>
            </SubHeading>
            <Heading>
              Davide Zanutta, Senior Customer Experience Manager, Redbubble
            </Heading>
            <StyledRow>
              <Image src={HellofreshColorIcon} />
              <Image src={TrainlineColorIcon} />
              <Image src={UberColorIcon} />
              <Image src={TransferwiseColorIcon} />
              <Image src={DeliverooColorIcon} />
              <Image src={GetyourguideColorIcon} />
            </StyledRow>
            <StyledLink to="/customers/">
              Meet more customer centric organizations &gt;
            </StyledLink>
          </Box>
        </StyledContainer>
      </StyledSection>
    </Layout>
  )
}

export default Zendesk

interface PageQueryData {
  site: {
    siteMetadata: {
      hubspotConfig: {
        zendesk_portalId: string
        zendesk_Id: string
        newsletter_formId: string
      }
    }
  }
}

const query = graphql`
  query ZendeskPageQuery {
    site {
      siteMetadata {
        hubspotConfig {
          zendesk_portalId
          zendesk_Id
          newsletter_formId
        }
      }
    }
  }
`

export const Image = styled.img`
  padding: 1rem 3rem 1rem 3rem;

  ${media.lessThan("sm")`
    padding: 3rem 3rem 3rem 3rem;
  `}
`

export const StyledRow = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 3rem 0rem 5rem 0rem;

  ${media.lessThan("sm")`
    flex-direction: column;
    justify-content: center;
    padding: 3rem 3rem 3rem 3rem;
  `}
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0rem 5rem 0rem;

  ${media.lessThan("md")`
    flex-direction: column;

  `}

  ${media.lessThan("sm")`
    flex-direction: column;
    justify-content: center;
  `}
`

export const StyledSpan = styled.span`
  border-bottom: 4px solid #10c2ed;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.5rem;

  ${media.lessThan("md")`
    padding: 0rrem;
  `}

  ${media.lessThan("sm")`
    padding: 0rrem;
  `}
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  ${media.lessThan("md")`
    padding: 0rem;
  `}

  ${media.lessThan("sm")`
    padding: 0em;
  `}
`

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0 5rem;

  ${media.lessThan("md")`
    padding: 5rem 0;
  `}

  ${media.lessThan("sm")`
    padding: 2rem 0 5rem;
    flex-direction: column;
  `}
`

export const LargeHeading = styled.h1`
  color: ${$colorHeading};
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 5rem;
  font-weight: 600;
  line-height: 4.5rem;
  padding: 2rem 0rem 0rem 0rem;
  margin-bottom: 0rem;
  text-align: center;

  ${media.lessThan("lg")`
    font-size: 3rem;
    line-height: 3.5rem;
    padding: 20px;
    text-align: center;
  `}
`

export const Heading = styled.h2`
  color: ${$colorHeading};
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 3rem;
  font-weight: 500;
  line-height: 4.5rem;
  margin-bottom: 2rem;
  text-align: center;

  ${media.lessThan("lg")`
    font-size: 3rem;
    line-height: 3.5rem;
    padding: 20px;
    text-align: center;
  `}
`

export const SubHeading = styled.h3`
  color: ${$colorHeading};
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 2rem;
  font-weight: 350;
  line-height: 4.5rem;
  margin-bottom: 1rem;
  text-align: center;
  padding: 2rem;

  ${media.lessThan("lg")`
    font-size: 2rem;
    line-height: 3.5rem;
    padding: 20px;
    text-align: center;
  `}
`

export const BlockQuote = styled.blockquote`
  position: relative;
  font-size: 1.6rem;
  font-style: italic;
  padding: 0 0 0 0.5em;
  margin: 2em 0 2em 0;
  top: 25%;
`

export const Item = styled.div`
  text-align: left;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  background-color: white;
  border-radius: 1rem;
`

export const List = styled.li`
  font-size: 1.8rem;
  margin-top: 10px;

  list-style-type: circle;
  margin-right: auto;

  ${media.lessThan("sm")`
    text-align: left;
    font-size: 1.5rem;
    padding-top: 1rem;
    font-size: 1.5rem;
    list-style-position: inside;
    text-indent: -1.4em;
    padding-left: 1em;

  `}
`

export const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  color: #10c2ed;
  margin: 2rem 0;

  :hover {
    color: #bdd9ff;
  }
  ${media.lessThan("sm")`
    font-size: 2rem;
    padding: 10px;
  `}
`
const FormWrapper = styled.div`
  margin: 0 auto;
  width: 44rem;

  background-color: ${$white};
  border-color: ${$colorPrimary};
  border-radius: 10px;
  ${boxShadow};
  padding: 3.2rem 3.2rem 3.2rem;

  display: flex;
  flex-direction: column;

  ${media.lessThan("sm")`
    width: 31rem !important;
    width: 100%;
  `}
`
