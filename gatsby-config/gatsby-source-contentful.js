// Blog

const commonOptions = {
  // assetDownloadWorkers: 25,
  // pageLimit: 50,
}
const contentfulBlogConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.NODE_ENV === "development"
      ? process.env.CONTENTFUL_ACCESS_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN,
  host:
    process.env.NODE_ENV === "development"
      ? `cdn.contentful.com`
      : `cdn.contentful.com`,
  // accessToken:
  //   process.env.NODE_ENV === "development"
  //     ? process.env.CONTENTFUL_PREVIEW_TOKEN
  //     : process.env.CONTENTFUL_ACCESS_TOKEN,
  // host:
  //   process.env.NODE_ENV === "development"
  //     ? `preview.contentful.com`
  //     : `cdn.contentful.com`,
  ...commonOptions,
}

if (!contentfulBlogConfig.spaceId || !contentfulBlogConfig.accessToken) {
  throw new Error(
    "Contentful - blog - spaceId and the access token need to be provided."
  )
}

module.exports = [
  {
    resolve: "gatsby-source-contentful",
    options: contentfulBlogConfig,
  },
]
