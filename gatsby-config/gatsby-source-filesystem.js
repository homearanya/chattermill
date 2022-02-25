const path = require("path")
module.exports = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `../src/images/`),
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `menu`,
      path: path.join(__dirname, `../src/components/navigation/`),
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `footer`,
      path: path.join(__dirname, `../src/components/footer/`),
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: path.join(__dirname, `../src/pages/`),
    },
  },
]
