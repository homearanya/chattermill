const path = require("path");
const { uniq } = require("lodash");

module.exports = async (actions, graphql) => {
  const { createPage } = actions;
  try {
    const { errors, data } = await graphql(`
      {
        site {
          siteMetadata {
            customers {
              pathPrefix
            }
          }
        }

        contentfulCustomersPage {
          id
        }

        allContentfulCaseStudy {
          edges {
            node {
              id
              slug
              company {
                industryType
              }
            }
          }
        }
      }
    `);
    if (errors) {
      errors.forEach(e => console.error(e.toString()));
      throw new Error("error on graphql for contentful nodes - customers");
    }
    const {
      customers: { pathPrefix }
    } = data.site.siteMetadata;

    // Case study Pages
    let industryTypes = [];
    const { edges } = data.allContentfulCaseStudy;
    edges.forEach(({ node: caseStudy }) => {
      const { id, slug, company } = caseStudy;
      industryTypes.push(company.industryType);
      const caseStudyPath = `${pathPrefix}${slug}/`;
      createPage({
        path: caseStudyPath,
        component: path.resolve(`src/templates/case-study-page.tsx`),
        context: {
          slug,
          id
        }
      });
    });

    // customers Page
    industryTypes = uniq(industryTypes).sort((a, b) => a - b);
    createPage({
      path: pathPrefix,
      component: path.resolve(`src/templates/customers-page.tsx`),
      context: {
        id: data.contentfulCustomersPage.id,
        industryTypes
      }
    });
  } catch (error) {
    console.log(error);
  }
};
