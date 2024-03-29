import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/blog-list"
import { BlogPageContext } from "../types"

interface BlogPaginationPageProps {
  readonly data: GatsbyTypes.BlogPaginationQuery
  readonly pageContext: BlogPageContext
  readonly location: Location
}

const BlogPaginationPage = ({
  data: {
    site: {
      siteMetadata: {
        title,
        description,
        blog: { pathPrefix },
      },
    },
    allContentfulPost: { edges: postEdges },
  },
  pageContext,
  location,
}: BlogPaginationPageProps) => {
  pageContext.posts = postEdges.map(
    ({ node }) => node
  ) as GatsbyTypes.ContentfulPost[]
  return (
    <Layout blog className="blog-pagination-page" path={location.pathname}>
      <SEO title={title} description={description} />
      <BlogList pageContext={pageContext} pathPrefix={pathPrefix} />
    </Layout>
  )
}

export default BlogPaginationPage

export const query = graphql`
  query BlogPagination($skip: Int!, $limit: Int!, $mainPostsIds: [String!]!) {
    site {
      siteMetadata {
        title
        description
        blog {
          pathPrefix
        }
      }
    }
    allContentfulPost(
      sort: { fields: [createdAt], order: DESC }
      filter: { id: { nin: $mainPostsIds } }
      skip: $skip
      limit: $limit
    ) {
      totalCount
      edges {
        node {
          ...ContentfulPostFragment
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          featuredImage {
            title
            gatsbyImageData(
              width: 400
              layout: CONSTRAINED
              placeholder: NONE
              formats: [AUTO, WEBP]
            )
            file {
              url
            }
          }
        }
      }
    }
  }
`
