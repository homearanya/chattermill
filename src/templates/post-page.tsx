import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogView from "../components/blog-view"

interface PostPageProps {
  readonly data: PageQueryData
}

const PostPage = ({
  data: {
    site: {
      siteMetadata: {
        blog: { pathPrefix },
        siteUrl,
      },
    },
    contentfulPost,
  },
}: PostPageProps) => {
  const { title, slug, body, featuredImage, author } = contentfulPost
  return (
    <Layout blog className="post-page">
      <SEO
        title={title?.title}
        description={body?.childMarkdownRemark?.excerpt}
        featuredImage={
          featuredImage && featuredImage.file
            ? `https:${featuredImage.file.url}`
            : undefined
        }
        authorName={author?.name}
        postUrl={`${siteUrl}${pathPrefix}${slug}`}
      />
      <BlogView data={contentfulPost} />
    </Layout>
  )
}

export default PostPage

interface PageQueryData {
  site: {
    siteMetadata: {
      siteUrl: string
      blog: {
        pathPrefix: string
      }
    }
  }
  contentfulPost: GatsbyTypes.ContentfulPost
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        blog {
          pathPrefix
        }
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      ...ContentfulPostFragment
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      featuredImage {
        title
        gatsbyImageData(
          width: 780
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
`
