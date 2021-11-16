// Blog
const contentfulBlogConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.NODE_ENV === "development"
      ? process.env.CONTENTFUL_PREVIEW_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN,
  host:
    process.env.NODE_ENV === "development"
      ? `preview.contentful.com`
      : `cdn.contentful.com`,
}

if (!contentfulBlogConfig.spaceId || !contentfulBlogConfig.accessToken) {
  throw new Error(
    "Contentful - blog - spaceId and the access token need to be provided."
  )
}
// Legal pages
const contentfulLegalConfig = {
  spaceId: process.env.CONTENTFUL_SITE_SPACE_ID,
  accessToken: process.env.CONTENTFUL_SITE_ACCESS_TOKEN,
}

if (!contentfulLegalConfig.spaceId || !contentfulLegalConfig.accessToken) {
  throw new Error(
    "Contentful - legal - spaceId and the access token need to be provided."
  )
}

// Roles
const contentfulPersonasConfig = {
  spaceId: process.env.CONTENTFUL_PERSONAS_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PERSONAS_ACCESS_TOKEN,
}

if (
  !contentfulPersonasConfig.spaceId ||
  !contentfulPersonasConfig.accessToken
) {
  throw new Error(
    "Contentful - persona - spaceId and the access token need to be provided."
  )
}

// Templates
const contentfulTemplatesConfig = {
  spaceId: process.env.CONTENTFUL_TEMPLATES_SPACE_ID,
  accessToken: process.env.CONTENTFUL_TEMPLATES_ACCESS_TOKEN,
}

if (
  !contentfulTemplatesConfig.spaceId ||
  !contentfulTemplatesConfig.accessToken
) {
  throw new Error(
    "Contentful - templates - spaceId and the access token need to be provided."
  )
}
// Integrations
const contentfulIntegrationsConfig = {
  spaceId: process.env.CONTENTFUL_INTEGRATIONS_SPACE_ID,
  accessToken: process.env.CONTENTFUL_INTEGRATIONS_ACCESS_TOKEN,
}

if (
  !contentfulIntegrationsConfig.spaceId ||
  !contentfulIntegrationsConfig.accessToken
) {
  throw new Error(
    "Contentful - integrations & partnership - spaceId and the access token need to be provided."
  )
}
// Industries
const contentfulIndustriesConfig = {
  spaceId: process.env.CONTENTFUL_INDUSTRIES_SPACE_ID,
  accessToken: process.env.CONTENTFUL_INDUSTRIES_ACCESS_TOKEN,
}
if (
  !contentfulIndustriesConfig.spaceId ||
  !contentfulIndustriesConfig.accessToken
) {
  throw new Error(
    "Contentful - industries - spaceId and the access token need to be provided."
  )
}
// Loom Videos
const contentfulLoomVideosConfig = {
  spaceId: process.env.CONTENTFUL_LOOM_VIDEOS_SPACE_ID,
  accessToken: process.env.CONTENTFUL_LOOM_VIDEOS_ACCESS_TOKEN,
}
if (
  !contentfulLoomVideosConfig.spaceId ||
  !contentfulLoomVideosConfig.accessToken
) {
  throw new Error(
    "Contentful - Loom Videos - spaceId and the access token need to be provided."
  )
}
// Investors
const contentfulInvestorPageConfig = {
  spaceId: process.env.CONTENTFUL_INVESTOR_PAGES_SPACE_ID,
  accessToken: process.env.CONTENTFUL_INVESTOR_PAGES_ACCESS_TOKEN,
}
if (
  !contentfulInvestorPageConfig.spaceId ||
  !contentfulInvestorPageConfig.accessToken
) {
  throw new Error(
    "Contentful - Investor Pages - spaceId and the access token need to be provided."
  )
}
// Case Studies
const contentfulCaseStudiesPageConfig = {
  spaceId: process.env.CONTENTFUL_CASE_STUDIES_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CASE_STUDIES_ACCESS_TOKEN,
}

if (
  !contentfulCaseStudiesPageConfig.spaceId ||
  !contentfulCaseStudiesPageConfig.accessToken
) {
  throw new Error(
    "Contentful - CaseStudies Pages - spaceId and the access token need to be provided."
  )
}

// PPC Pages
const contentfulPpcPageConfig = {
  spaceId: process.env.CONTENTFUL_PPC_PAGES_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PPC_PAGES_ACCESS_TOKEN,
}
if (!contentfulPpcPageConfig.spaceId || !contentfulPpcPageConfig.accessToken) {
  throw new Error(
    "Contentful - PPC Pages - spaceId and the access token need to be provided."
  )
}

// Pillar Pages
const contentfulPillarPageConfig = {
  spaceId: process.env.CONTENTFUL_PILLAR_PAGES,
  accessToken:
    process.env.NODE_ENV === "development"
      ? process.env.CONTENTFUL_PILLAR_PREVIEW_TOKEN
      : process.env.CONTENTFUL_PILLAR_ACCESS_TOKEN,
  host:
    process.env.NODE_ENV === "development"
      ? `preview.contentful.com`
      : `cdn.contentful.com`,
}
if (
  !contentfulPillarPageConfig.spaceId ||
  !contentfulPillarPageConfig.accessToken
) {
  throw new Error(
    "Contentful - Pillar Pages - spaceId and the access token need to be provided."
  )
}

// Pillar Pages
const contentfulProductPageConfig = {
  spaceId: process.env.CONTENTFUL_PRODUCT_PAGES,
  accessToken: process.env.CONTENTFUL_PRODUCT_ACCESS_TOKEN,
}
if (
  !contentfulProductPageConfig.spaceId ||
  !contentfulProductPageConfig.accessToken
) {
  throw new Error(
    "Contentful - Product Pages - spaceId and the access token need to be provided."
  )
}

module.exports = [
  {
    resolve: "gatsby-source-contentful",
    options: contentfulBlogConfig,
  },
  {
    resolve: "gatsby-source-contentful",
    options: contentfulLegalConfig,
  },
  {
    resolve: "gatsby-source-contentful",
    options: contentfulTemplatesConfig,
  },
  {
    resolve: "gatsby-source-contentful",
    options: contentfulIntegrationsConfig,
  },
  {
    resolve: "gatsby-source-contentful",
    options: contentfulIndustriesConfig,
  },
  {
    resolve: "gatsby-source-contentful",
    options: contentfulInvestorPageConfig,
  },
  {
    resolve: "gatsby-source-contentful",
    options: contentfulPersonasConfig,
  },
  {
    resolve: "gatsby-source-contentful",
    options: contentfulLoomVideosConfig,
  },
  {
    resolve: "gatsby-source-contentful",
    options: contentfulCaseStudiesPageConfig,
  },
  {
    resolve: "gatsby-source-contentful",
    options: contentfulPpcPageConfig,
  },
  {
    resolve: "gatsby-source-contentful",
    options: contentfulPillarPageConfig,
  },
  {
    resolve: "gatsby-source-contentful",
    options: contentfulProductPageConfig,
  },
]
