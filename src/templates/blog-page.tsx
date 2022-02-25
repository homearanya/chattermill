import React, { useMemo } from "react"
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
        description,
        blog: { pathPrefix },
      },
    },
    mainPost,
    frontPosts,
  },
  pageContext,
  location,
}: BlogPageProps) => {
  const { numPages, currentPage, arrayOfPageNumbers } = pageContext
  const frontPostsByCat = useMemo(() => {
    const catObject = frontPosts.edges.reduce((output, { node: post }) => {
      const { category } = post
      if (!output[category.title]) {
        output[category.title] = {
          ...category,
          posts: [post],
        }
      } else {
        output[category.title] = {
          ...category,
          posts: [...output[category.title].posts, post],
        }
      }
      return output
    }, {})
    return Object.keys(catObject)
      .sort((a, b) => catObject[a].order - catObject[b].order)
      .map(category => ({ cat: catObject[category] }))
  }, [frontPosts])
  return (
    <Layout blog className="blog-page" path={location.pathname}>
      <SEO title={`Chattermill Blog`} description={description} />
      <TagHeading className="tag-heading">BLOG</TagHeading>
      {mainPost && <MainPost pathPrefix={pathPrefix} post={mainPost} />}
      {frontPostsByCat
        ? frontPostsByCat.map(({ cat }) => (
            <CategoryPosts
              key={cat.id}
              category={cat}
              pathPrefix={pathPrefix}
            />
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
  mainPost: GatsbyTypes.ContentfulPost
  frontPosts: GatsbyTypes.ContentfulPostConnection
}

export const query = graphql`
  fragment ContentfulPostFragment on ContentfulPost {
    id
    title {
      title
    }
    createdAt
    category {
      id
      title
      grid
    }
    slug
    tags
    date
    author {
      name
    }
  }
  query BlogPage($mainPostId: String!, $mainPostsIds: [String!]!) {
    site {
      siteMetadata {
        title
        description
        blog {
          pathPrefix
        }
      }
    }
    mainPost: contentfulPost(id: { eq: $mainPostId }) {
      ...ContentfulPostFragment
      body {
        childMarkdownRemark {
          excerpt
        }
      }
      featuredImage {
        title
        gatsbyImageData(
          width: 860
          layout: CONSTRAINED
          placeholder: NONE
          formats: [AUTO, WEBP]
        )
        file {
          url
        }
      }
    }

    frontPosts: allContentfulPost(
      sort: { fields: [createdAt], order: DESC }
      filter: { id: { in: $mainPostsIds } }
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
              width: 660
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
