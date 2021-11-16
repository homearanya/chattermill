const path = require("path");

module.exports = async (actions, graphql) => {
  const { createPage } = actions;
  try {
    const { errors, data } = await graphql(`
      {
        site {
          siteMetadata {
            productPage {
              pathPrefix
            }
          }
        }

        allContentfulProductPage {
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
      throw new Error("error on graphql for contentful nodes - product page");
    }
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      productPage: { pathPrefix }
    } = data.site.siteMetadata;

    const { edges } = data.allContentfulProductPage;
    edges.forEach(({ node: productPage }) => {
      const { id, slug } = productPage;
      const productPagePath = `product/${slug}`;
      createPage({
        path: productPagePath,
        component: path.resolve(`src/templates/product-page.tsx`),
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
