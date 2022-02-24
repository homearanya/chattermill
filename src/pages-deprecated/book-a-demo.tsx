import React from "react"
import { graphql, navigate } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/forms/contact-form"
import ClassicSection from "../components/classic-section"
import media from "../styles/media"
import { $colorPrimary, $colorHeading } from "../styles/variables"

interface ContactProps {
  location: {
    state?: any
  }
  path: string
  data: PageQueryData
}

const ClassicSignUpPage = ({ location, path, data }: ContactProps) => {
  const {
    site: {
      siteMetadata: {
        hubspotConfig: {
          portalId,
          chattermill_classic_formId,
          newsletter_formId,
        },
      },
    },
  } = data

  const onSuccess = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "Request Demo Click",
    })
    navigate("/thank-you-get-a-demo/")
  }
  return (
    <Layout className="contact-page">
      <Helmet>
        <script
          src="https://js.chilipiper.com/marketing.js"
          type="text/javascript"
          async
        />
        <script>
          {`
          function q(a){return function(){ChiliPiper[a].q = (ChiliPiper[a].q || []).concat([arguments])}}window.ChiliPiper=window.ChiliPiper||"submit scheduling showCalendar submit widget bookMeeting".split(" ").reduce(function(a,b){a[b] = q(b);return a},{ });
          ChiliPiper.scheduling("chattermill", "request-demo-router", {title: "Thanks! What time works best for a quick call?"})`}
        </script>
      </Helmet>
      <SEO
        title="Get a Demo"
        description="Book a Demo with Chattermill Today"
      />
      <StyledSection>
        <Wrapper>
          <FormWrapper>
            <FormHeading>Get a Demo</FormHeading>
            <ListWrapper>
              <StyledRadioList>
                <List>Topic and sentiment analysis on customer feedback.</List>
              </StyledRadioList>
              <StyledRadioList>
                <List>Access to platform and dashboards.</List>
              </StyledRadioList>
              <StyledRadioList>
                <List>Secure and GDPR-Compliant.</List>
              </StyledRadioList>
            </ListWrapper>
            <ContactForm
              oneColumn={false}
              email={location.state && location.state.email}
              analyticsOptions={{
                category: "All",
                label: "Demo Button Click (book-demo)",
              }}
              hubspotOptions={{
                portalId,
                newsletterFormId: newsletter_formId,
                formId: chattermill_classic_formId,
              }}
              buttonText={"Get a demo"}
              buttonPosition="left"
              actionOnSuccess={onSuccess}
            />
          </FormWrapper>
        </Wrapper>
        <Wrapper>
          <ClassicSection />
        </Wrapper>
      </StyledSection>
    </Layout>
  )
}

export default ClassicSignUpPage

interface PageQueryData {
  site: {
    siteMetadata: {
      hubspotConfig: {
        portalId: string
        chattermill_classic_formId: string
        newsletter_formId: string
      }
    }
  }
}

// temporarily disabled
// export const query = graphql`
const query = graphql`
  query BookDemoPageQuery {
    site {
      siteMetadata {
        hubspotConfig {
          portalId
          newsletter_formId
          chattermill_classic_formId
        }
      }
    }
  }
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  ${media.lessThan("md")`
    flex-direction: column;
  `}

  ${media.lessThan("sm")`
    flex-direction: column;
  `}
`

export const StyledSpan = styled.span`
  border-bottom: 4px solid #10c2ed;
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  margin: 0 5rem 0 5rem;

  ${media.lessThan("md")`
    max-width: 100%;
    padding-top: 6rem;
    
  `}

  ${media.lessThan("sm")`
    padding: 0rem;
  `}
`

export const StyledSection = styled.section`
  display: flex;
  flex-shrink: 1;
  justify-content: center;
  flex-direction: row;
  padding: 10rem 10rem 10rem 10rem;
  margin: 0;

  ${media.lessThan("md")`
    padding: 5rem 0;
  `}

  ${media.lessThan("sm")`
    padding: 2rem 0 5rem;
    flex-direction: column;
  `}
`

export const LargeHeading = styled.h2`
  color: ${$colorHeading};
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 5rem;
  font-weight: 600;
  line-height: 4.5rem;
  padding: 3rem 0rem 3rem 0rem;
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
const FormWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  border-color: ${$colorPrimary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 50rem;

  ${media.lessThan("sm")`
    width: 31rem !important;
    width: 100%;
    align-items: center;
  `}
`

const FormHeading = styled.h1`
  color: ${$colorHeading};
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 4rem;
  font-weight: 600;
  line-height: 4.5rem;
  padding-bottom: 1rem;
  text-align: left;

  ${media.lessThan("lg")`
    font-size: 3rem;
    line-height: 3.5rem;
    padding: 20px;
    text-align: center !important;
  `}
`
// Offer Li's

export const ListWrapper = styled.div`
  padding-bottom: 2rem;

  ${media.lessThan("sm")`
    padding-left: 2rem;
  `}
`

export const StyledRadioList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

export const List = styled.li`
  font-size: 1.8rem;
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
