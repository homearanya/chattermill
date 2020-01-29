import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList, { BlogListData } from "../components/blog-list"
import { PaginationData } from "../components/pagination"

import "../styles/scss/styles.scss"

interface BlogPageProps {
  readonly data: PageQueryData
  readonly pageContext: PaginationData
}

const BlogPage = ({
  data: {
    site: {
      siteMetadata: { title, description },
    },
    allContentfulPost: { edges },
  },
  pageContext,
}: BlogPageProps) => (
  <Layout className="blog-page">
    <SEO title={title} description={description} />
    <BlogList data={edges} pageContext={pageContext} />
  </Layout>
)

export default BlogPage

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
  allContentfulPost: {
    edges: BlogListData[]
  }
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulPost(
      sort: { fields: [createdAt], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title {
            title
          }
          id
          slug
          createdAt(formatString: "DD MMM YYYY")
          featuredImage {
            title
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 220)
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`
