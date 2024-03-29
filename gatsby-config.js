require("dotenv").config({
  path: `.env`,
})
const siteMetadata = require("./gatsby-config/site-metadata")
// plugins
const gatsbySourceContentful = require("./gatsby-config/gatsby-source-contentful")
const gatsbyPluginSegmentJs = require("./gatsby-config/gatsby-plugin-segment-js")
const wistiaVideosSourcePlugin = require("./gatsby-config/wistia-videos-source-plugin")
const gatsbyPluginNprogress = require("./gatsby-config/gatsby-plugin-nprogress")
const gatsbyPluginRobotsTxt = require("./gatsby-config/gatsby-plugin-robots-txt")
const gatsbyPluginAnchorLinks = require("./gatsby-config/gatsby-plugin-anchor-links")
const gatsbyPluginHubspot = require("./gatsby-config/gatsby-plugin-hubspot")
const gatsbyPluginLinkedinInsight = require("./gatsby-config/gatsby-plugin-linkedin-insight")
const gatsbyPluginReactSvg = require("./gatsby-config/gatsby-plugin-react-svg")
const gatsbySourceFilesystem = require("./gatsby-config/gatsby-source-filesystem")
const gatsbyTransformerRemark = require("./gatsby-config/gatsby-transformer-remark")
const gatsbyPluginManifest = require("./gatsby-config/gatsby-plugin-manifest")
const gatsbyPluginGoogleTagmanager = require("./gatsby-config/gatsby-plugin-google-tagmanager")
const gatsbyPluginPreconnect = require("./gatsby-config/gatsby-plugin-preconnect")
const gatsbyPluginTypegen = require("./gatsby-config/gatsby-plugin-typegen")
const gatsbyPluginIntercomSpa = require("./gatsby-config/gatsby-plugin-intercom-spa")

module.exports = {
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  siteMetadata,
  plugins: [
    // `gatsby-plugin-perf-budgets`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-image`,
    "greenhouse-source-plugin",
    ...gatsbyPluginPreconnect,
    ...gatsbyPluginGoogleTagmanager,
    ...gatsbyPluginSegmentJs,
    ...gatsbyPluginNprogress,
    `gatsby-plugin-sitemap`,
    ...gatsbyPluginRobotsTxt,
    ...gatsbyPluginAnchorLinks,
    ...gatsbyPluginHubspot,
    ...gatsbyPluginIntercomSpa,
    ...gatsbyPluginLinkedinInsight,
    ...wistiaVideosSourcePlugin,
    ...gatsbyPluginReactSvg,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    ...gatsbySourceFilesystem,
    ...gatsbyTransformerRemark,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    ...gatsbyPluginManifest,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // `gatsby-plugin-remove-serviceworker`, // removes service worker installed by gatsby-plugin-offline
    //
    // Contentful Plugins
    ...gatsbySourceContentful,
    `gatsby-plugin-force-trailing-slashes`,
    ...gatsbyPluginTypegen,
    `gatsby-plugin-netlify`,
  ],
}
