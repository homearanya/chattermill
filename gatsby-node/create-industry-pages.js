const path = require("path");

module.exports = async (actions, graphql) => {
  const { createPage } = actions;
  try {
    const { errors, data } = await graphql(`
      {
        site {
          siteMetadata {
            industries {
              pathPrefix
            }
          }
        }

        allContentfulIndustry {
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
      throw new Error("error on graphql for contentful nodes - industries");
    }
    const {
      industries: { pathPrefix }
    } = data.site.siteMetadata;

    const { edges } = data.allContentfulIndustry;
    edges.forEach(({ node: industry }) => {
      const { id, slug } = industry;
      const industryPath = `${pathPrefix}${slug}`;
      createPage({
        path: industryPath,
        component: path.resolve(`src/templates/industry-page.tsx`),
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
