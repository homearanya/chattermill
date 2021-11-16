/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface LocationInterface {
  host: string
  protocol: string
  href: string
}

interface SEOProps {
  readonly title: string
  readonly description?: string
  readonly lang?: string
  readonly postUrl?: string
  readonly featuredImage?: string
  readonly authorName?: string
}

function SEO({
  title,
  description = "",
  postUrl = "",
  lang = "en",
  featuredImage = "",
  authorName = "",
}: SEOProps) {
  const { site, card } = useStaticQuery<GatsbyTypes.SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        card: file(relativePath: { regex: "/chattermill-logo/" }) {
          publicURL
        }
      }
    `
  )

  const location: LocationInterface | null =
    typeof window !== "undefined" ? window.location : null

  const metaDescription = description || site.siteMetadata.description
  const image =
    featuredImage || `${location?.protocol}//${location?.host}${card.publicURL}`
  const url = postUrl ? postUrl : location?.href
  // strip HTML tags from metaDescription:
  const cleanMetaDescription = metaDescription.replace(/<\/?[^>]+(>|$)/g, "")

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `og:title`,
          property: `og:title`,
          content: title,
        },
        {
          name: `og:description`,
          property: "og:description",
          content: cleanMetaDescription,
        },
        {
          name: `og:image`,
          property: "og:image",
          content: image,
        },
        {
          name: "og:author",
          property: "og:author",
          content: authorName,
        },
        {
          name: "og:url",
          property: "og:url",
          content: url,
        },
        {
          name: `og:type`,
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: "twitter:image",
          content: image,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: cleanMetaDescription,
        },
        {
          name: "twitter:url",
          content: url,
        },
      ]}
    />
  )
}

export default SEO
