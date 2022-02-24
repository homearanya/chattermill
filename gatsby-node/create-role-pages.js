const path = require("path")

module.exports = async (actions, graphql) => {
  const { createPage } = actions
  try {
    const { errors, data } = await graphql(`
      {
        site {
          siteMetadata {
            roles {
              pathPrefix
            }
          }
        }

        allContentfulRoles {
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
      throw new Error("error on graphql for contentful nodes - roles")
    }
    const {
      roles: { pathPrefix },
    } = data.site.siteMetadata

    const { edges } = data.allContentfulRoles
    edges.forEach(({ node: roles }) => {
      const { id, slug } = roles
      const rolesPath = `${pathPrefix}${slug}/`
      createPage({
        path: rolesPath,
        component: path.resolve(`src/templates/roles-page.tsx`),
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
