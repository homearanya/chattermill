import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogView, { BlogViewData } from "../components/blog-view"

import "../styles/scss/styles.scss"

interface PostPageProps {
  readonly data: PageQueryData
}

const PostPage = ({ data: { contentfulPost } }: PostPageProps) => {
  const {
    title: { title },
    body: {
      childMarkdownRemark: { excerpt },
    },
  } = contentfulPost
  return (
    <Layout className="post-page">
      <SEO title={title} description={excerpt} />
      <BlogView data={contentfulPost} />
    </Layout>
  )
}

export default PostPage

interface PageQueryData {
  contentfulPost: BlogViewData
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title {
        title
      }
      slug
      tags
      featuredImage {
        title
        fluid(maxWidth: 640) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 80)
        }
      }
      author {
        name
      }
    }
  }
`
