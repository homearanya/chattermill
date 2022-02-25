const path = require("path")
module.exports = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `menu`,
      path: `${__dirname}/src/components/navigation/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `footer`,
      path: `${__dirname}/src/components/footer/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages/`,
    },
  },
]
