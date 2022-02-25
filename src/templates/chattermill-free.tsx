import React from "react"
import { graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/forms/contact-form"
import styled from "styled-components"
import media from "../styles/media"
import { Row, Col } from "react-awesome-styled-grid"
import GlobalStyles from "../styles/global.styled"

interface ChattermillFreePageProps {
  readonly path: string
  readonly data: PageQueryData
}

const ChattermillFreePage = ({
  path,
  data: {
    markdownRemark: {
      frontmatter: { title, description, message, point4 },
    },
    site: {
      siteMetadata: {
        hubspotConfig: { portalId, chattermillFree_formId, newsletter_formId },
      },
    },
  },
}: ChattermillFreePageProps) => (
  <>
    <Layout>
      <GlobalStyles />
      <SEO title={title} description={description} />
      <StyledContainer>
        <StyledRow justify="center" align="center">
          <Col
            xs={4}
            sm={3}
            md={4}
            lg={4}
            justify="center"
            style={{
              marginRight: "4rem",
            }}
          >
            <StyledHeader>{message}</StyledHeader>
            <StyledText>{point4}</StyledText>
            <ContactForm
              analyticsOptions={{
                category: "Sign Up",
                label: "Chattermill Free Plan Signup",
              }}
              hubspotOptions={{
                portalId,
                newsletterFormId: newsletter_formId,
                formId: chattermillFree_formId,
              }}
              buttonText={"Sign Up"}
              actionOnSuccess={() => navigate("/thank-you-chattermill-free/")}
            />{" "}
          </Col>
        </StyledRow>
      </StyledContainer>
    </Layout>
  </>
)

export default ChattermillFreePage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      message: string
      point4: string
    }
  }
  site: {
    siteMetadata: {
      hubspotConfig: {
        portalId: string
        newsletter_formId: string
        chattermillFree_formId: string
      }
    }
  }
}

const query = graphql`
  query ChattermillFreeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        message
        content
        point4
      }
    }
    site {
      siteMetadata {
        hubspotConfig {
          portalId
          newsletter_formId
          chattermillFree_formId
        }
      }
    }
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 6rem;

  ${media.lessThan("md")`
    padding: 4rem;
  `};

  ${media.lessThan("sm")`
    padding: 2rem;
  `};
`

const StyledRow = styled(Row)`
  display: flex;
  flex-direction: row;

  ${media.lessThan("md")`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding; 1rem;

  `}

  ${media.lessThan("sm")`
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    
  `};
`

const StyledHeader = styled.h1`
  font-size: 32px;
  font-family: "Raisonne", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  text-align: center;
  margin-bottom: 1rem;

  ${media.lessThan("sm")`
    text-align: center;
    
  `};
`

const StyledText = styled.p`
  font-size: 18px;
  line-height: 5px;
  text-align: center;
  margin-bottom: 3rem;

  ${media.lessThan("sm")`
    text-align: center;
    font-size: 14px;
    
  `};
`
