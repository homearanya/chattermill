const path = require("path");

module.exports = async (actions, graphql) => {
  const { createPage } = actions;
  try {
    const { errors, data } = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/src/pages/" } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                contentfulID
              }
            }
          }
        }
      }
    `);
    if (errors) {
      errors.forEach(e => console.error(e.toString()));
      throw new Error("error on graphql for filesystem nodes");
    }

    const { edges: pages } = data.allMarkdownRemark;

    pages.forEach(({ node }) => {
      const { id, frontmatter, fields } = node;
      // to allow client-only pages under "/watch-demo/"
      const matchPath =
        fields.slug === "/watch-demo/" ? "/watch-demo/*" : undefined;
      createPage({
        path: fields.slug,
        matchPath: matchPath,
        component: path.resolve(
          `./src/templates/${frontmatter.templateKey}.tsx`
        ),
        // additional data can be passed via context
        context: {
          id,
          contentfulID: frontmatter.contentfulID
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};
