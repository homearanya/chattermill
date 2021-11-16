import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogPageContext } from "../types"
import Pagination from "../components/pagination"
import MainPost from "../components/main-post"
import CategoryPosts from "../components/category-posts"
import CTA2Blog from "../components/cta2-blog"
import { TagHeading } from "../components/blog-list/blog-list.styled"

const data = {
  shapeColor: "#10C2ED",
  text: "Power your CX with Chattermill",
}

import "../styles/scss/styles.scss"

interface BlogPageProps {
  readonly data: PageQueryData
  readonly pageContext: BlogPageContext
  readonly location: Location
}

const BlogPage = ({
  data: {
    site: {
      siteMetadata: {
        title,
        description,
        blog: { pathPrefix },
      },
    },
    sitePage: {
      context: { mainPost2: mainPost, frontPosts2: frontPosts },
    },
  },
  pageContext,
  location,
}: BlogPageProps) => {
  const { numPages, currentPage, arrayOfPageNumbers } = pageContext

  return (
    <Layout blog className="blog-page" path={location.pathname}>
      <SEO title={`Chattermill Blog`} description={description} />
      <TagHeading className="tag-heading">BLOG</TagHeading>
      {mainPost ? <MainPost pathPrefix={pathPrefix} post={mainPost} /> : null}
      {frontPosts
        ? frontPosts.map(({ cat }) => (
            <CategoryPosts category={cat} pathPrefix={pathPrefix} />
          ))
        : null}

      <Pagination context={{ numPages, currentPage, arrayOfPageNumbers }} />
      <CTA2Blog data={data} />
    </Layout>
  )
}

export default BlogPage

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
      description: string
      blog: {
        pathPrefix: string
      }
    }
  }
  sitePage: GatsbyTypes.SitePage
}

export const query = graphql`
  fragment ContentfulPostFragment on ContentfulPost {
    id
    title {
      title
    }
    createdAt
    category {
      title
    }
    slug
    tags
    date
    author {
      name
    }
  }
  query {
    site {
      siteMetadata {
        title
        description
        blog {
          pathPrefix
        }
      }
    }
    sitePage(context: { mainPost2: { id: { ne: null } } }) {
      context {
        mainPost2 {
          ...ContentfulPostFragment
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          featuredImage {
            title
            fluid(maxWidth: 860) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            file {
              url
            }
          }
        }
        frontPosts2 {
          cat {
            title
            grid
            posts {
              ...ContentfulPostFragment
              body {
                childMarkdownRemark {
                  excerpt
                }
              }
              featuredImage {
                title
                fluid(maxWidth: 660) {
                  ...GatsbyContentfulFluid_withWebp
                }
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
