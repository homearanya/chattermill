import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogPageContext } from "../types"
import BlogList from "../components/blog-list"

interface TagPageProps {
  readonly data: GatsbyTypes.TagPageQuery
  readonly pageContext: BlogPageContext
  readonly location: Location
}

const TagPage = ({
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
}: TagPageProps) => {
  pageContext.posts = postEdges.map(
    ({ node }) => node
  ) as GatsbyTypes.ContentfulPost[]
  return (
    <Layout blog className="tag-page" path={location.pathname}>
      <SEO title={title} description={description} />
      <BlogList pageContext={pageContext} pathPrefix={pathPrefix} />
    </Layout>
  )
}

export default TagPage

const query = graphql`
  query TagPage(
    $skip: Int!
    $limit: Int!
    $filter: ContentfulPostFilterInput!
  ) {
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
      filter: $filter
      skip: $skip
      limit: $limit
    ) {
      totalCount
      edges {
        node {
          ...ContentfulPostFragment
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
