const path = require("path");

module.exports = async (actions, graphql) => {
  const { createPage } = actions;
  try {
    const { errors, data } = await graphql(`
      {
        site {
          siteMetadata {
            ppc {
              pathPrefix
            }
          }
        }
        allContentfulPpc {
          edges {
            node {
              id
              slug
              ppcPage
            }
          }
        }
      }
    `);
    if (errors) {
      errors.forEach(e => console.error(e.toString()));
      throw new Error("error on graphql for contentful nodes - ppc");
    }
    const {
      ppc: { pathPrefix }
    } = data.site.siteMetadata;

    const { edges } = data.allContentfulPpc;
    edges.forEach(({ node: ppc }) => {
      const { id, slug, ppcPage } = ppc;
      const ppcPath = ppcPage ? `campaign/${slug}` : slug;
      createPage({
        path: ppcPath,
        component: ppcPage
          ? path.resolve(`src/templates/ppc-page.tsx`)
          : path.resolve(`src/templates/non-ppc-page.tsx`),

        context: {
          slug,
          id
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};
