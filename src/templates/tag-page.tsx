import React from "react"
import { graphql } from "gatsby"
import kebabCase from "lodash.kebabcase"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList, { BlogListData } from "../components/blog-list"
import { PaginationData } from "../components/pagination"

import "../styles/scss/styles.scss"

interface TagPageProps {
  readonly data: PageQueryData
  readonly pageContext: PaginationData
}

const TagPage = ({
  data: {
    site: {
      siteMetadata: { title, description },
    },
    allContentfulPost: { edges },
  },
  pageContext,
}: TagPageProps) => {
  const { skip, limit, tag } = pageContext
  const filterEdges = edges.filter(edge => {
    const { node } = edge
    return node.tags && node.tags.some(nodeTag => kebabCase(nodeTag) === tag)
  })

  return (
    <Layout className="tag-page">
      <SEO title={title} description={description} />
      <BlogList
        data={filterEdges.slice(skip, skip + limit)}
        totalCount={filterEdges.length}
        pageContext={pageContext}
      />
    </Layout>
  )
}

export default TagPage

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
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title {
            title
          }
          id
          slug
          tags
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
