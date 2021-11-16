const path = require("path");

module.exports = async (actions, graphql) => {
  const { createPage } = actions;
  try {
    const { errors, data } = await graphql(`
      {
        site {
          siteMetadata {
            templates {
              pathPrefix
              templatesPerPage
            }
          }
        }

        allContentfulTemplate {
          edges {
            node {
              id
              slug
              title {
                title
              }
              subtitle {
                subtitle
              }
              category {
                id
                title
              }
            }
          }
        }
      }
    `);
    if (errors) {
      errors.forEach(e => console.error(e.toString()));
      throw new Error("error on graphql for contentful nodes - templates");
    }
    const {
      templates: { templatesPerPage, pathPrefix }
    } = data.site.siteMetadata;

    const { edges } = data.allContentfulTemplate;
    edges.forEach(({ node: template }) => {
      const { id, slug } = template;
      const templatePath = `${pathPrefix}${slug}`;
      createPage({
        path: templatePath,
        component: path.resolve(`src/templates/template-page.tsx`),
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
