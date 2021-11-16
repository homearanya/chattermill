module.exports = [
  {
    resolve: "gatsby-plugin-preconnect",
    options: {
      domains: [
        "https://api.segment.io",
        "https://api-v2.mutinyhq.io",
        "https://analytics.twitter.com"
      ]
    }
  }
];
