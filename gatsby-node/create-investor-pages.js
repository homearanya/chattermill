const path = require("path")

module.exports = async (actions, graphql) => {
  const { createPage } = actions
  try {
    const { errors, data } = await graphql(`
      {
        site {
          siteMetadata {
            investor {
              pathPrefix
            }
          }
        }

        allContentfulInvestor {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)
    if (errors) {
      errors.forEach(e => console.error(e.toString()))
      throw new Error("error on graphql for contentful nodes - investors")
    }
    const {
      investor: { pathPrefix },
    } = data.site.siteMetadata

    const { edges } = data.allContentfulInvestor
    edges.forEach(({ node: investor }) => {
      const { id, slug } = investor
      const investorPath = `${pathPrefix}${slug}/`
      createPage({
        path: investorPath,
        component: path.resolve(`src/templates/investor-page.tsx`),
        context: {
          slug,
          id,
        },
      })
    })
  } catch (error) {
    console.log(error)
  }
}
