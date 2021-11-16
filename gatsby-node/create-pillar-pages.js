const path = require("path");

module.exports = async (actions, graphql) => {
  const { createPage } = actions;
  try {
    const { errors, data } = await graphql(`
      {
        site {
          siteMetadata {
            pillar {
              pathPrefix
            }
          }
        }

        allContentfulPillar {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `);
    if (errors) {
      errors.forEach(e => console.error(e.toString()));
      throw new Error("error on graphql for contentful nodes - pillar");
    }
    const {
      pillar: { pathPrefix }
    } = data.site.siteMetadata;

    const { edges } = data.allContentfulPillar;
    edges.forEach(({ node: pillar }) => {
      const { id, slug } = pillar;
      const pillarPath = `${slug}`;
      createPage({
        path: pillarPath,
        component: path.resolve(`src/templates/pillar-page.tsx`),
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
