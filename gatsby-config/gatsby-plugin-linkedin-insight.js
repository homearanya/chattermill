module.exports = [
  {
    resolve: `@tmttn/gatsby-plugin-linkedin-insight`,
    options: {
      partnerId: `1080492`,

      // Include LinkedIn Insight in development.
      // Defaults to false meaning LinkedIn Insight will only be loaded in production.
      includeInDevelopment: false,
    },
  },
]
