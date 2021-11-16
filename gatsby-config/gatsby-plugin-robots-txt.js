const { siteUrl } = require("./constants");

module.exports = [
  {
    resolve: "gatsby-plugin-robots-txt",
    options: {
      host: siteUrl,
      sitemap: `${siteUrl}/sitemap.xml`,
      policy: [{ userAgent: "*", allow: "/" }]
    }
  }
];
