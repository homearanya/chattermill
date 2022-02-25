import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Container } from "react-awesome-styled-grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BrandsSection2 from "../components/brands-section-2"
import ContentfulRichtext from "../components/contentful-richtext"

interface TermsPageTemplateProps {
  readonly data: PageQueryData
}

const TermsPageTemplate = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title: seoTitle,
        description: seoDescription,
        layoutClassname,
      },
    },
    contentfulPages: { title: pageTitle, content: pageContent },
  },
}: TermsPageTemplateProps) => {
  return (
    <Layout className={layoutClassname}>
      <SEO title={seoTitle} description={seoDescription} />
      <StyledSection>
        <StyledContainer>
          <StyledH1>{pageTitle}</StyledH1>
          {pageContent && pageContent.raw ? (
            <ContentfulRichtext content={pageContent} />
          ) : null}
        </StyledContainer>
      </StyledSection>
      <BrandsSection2 borderBottom withObserver />
    </Layout>
  )
}

export default TermsPageTemplate

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      layoutClassname?: string
    }
  }
  contentfulPages: GatsbyTypes.ContentfulPages
}

export const query = graphql`
  query TermsPageQuery($id: String!, $contentfulID: Int!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        layoutClassname
      }
    }
    contentfulPages(contentfulid: { eq: $contentfulID }) {
      title
      content {
        raw
        references {
          ... on ContentfulTables {
            contentful_id
            table {
              tableData
            }
          }
        }
      }
    }
  }
`

export const StyledContainer = styled(Container)`
  padding: 8rem;
`

export const StyledSection = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  h1,
  h2,
  h3,
  h4 {
    margin: 2rem 0;
  }
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }
  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }
  p,
  li {
    font-size: 1.6rem;
  }

  ul {
    padding-inline-start: 4rem;
  }
`
export const StyledH1 = styled.h1`
  &&& {
    text-align: center;
    margin-bottom: 4rem;
  }
`
