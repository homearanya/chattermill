const path = require("path");

module.exports = async (actions, graphql) => {
  const { createPage } = actions;
  try {
    const { errors, data } = await graphql(`
      {
        site {
          siteMetadata {
            partners {
              pathPrefix
            }
          }
        }

        contentfulPartnersPage {
          id
        }

        allContentfulPartner(filter: { landingUrl: { in: [null, ""] } }) {
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
      throw new Error("error on graphql for contentful nodes - partners");
    }
    const {
      partners: { pathPrefix }
    } = data.site.siteMetadata;

    // Partners Page
    createPage({
      path: pathPrefix,
      component: path.resolve(`src/templates/partners-page.tsx`),
      context: {
        id: data.contentfulPartnersPage.id
      }
    });

    // Partner Pages
    const { edges } = data.allContentfulPartner;
    edges.forEach(({ node: partner }) => {
      const { id, slug } = partner;
      const partnerPath = `${pathPrefix}${slug}`;
      createPage({
        path: partnerPath,
        component: path.resolve(`src/templates/partner-page.tsx`),
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
