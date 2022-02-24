const path = require("path")

module.exports = async (actions, graphql) => {
  const { createPage } = actions
  try {
    const { errors, data } = await graphql(`
      {
        site {
          siteMetadata {
            integrations {
              pathPrefix
            }
          }
        }

        allContentfulIntegration {
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
      throw new Error("error on graphql for contentful nodes - integrations")
    }
    const {
      integrations: { pathPrefix },
    } = data.site.siteMetadata

    const { edges } = data.allContentfulIntegration
    edges.forEach(({ node: integration }) => {
      const { id, slug } = integration
      const integrationPath = `${pathPrefix}${slug ? `${slug}/` : ""}`
      createPage({
        path: integrationPath,
        component: path.resolve(`src/templates/integration-page.tsx`),
        context: {
          slug: slug ? slug : "",
          id,
        },
      })
    })
  } catch (error) {
    console.log(error)
  }
}
