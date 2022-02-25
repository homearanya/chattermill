const createSitePages = require("./gatsby-node/create-site-pages")
const createBlogPages = require("./gatsby-node/create-blog-pages")
const createJobPages = require("./gatsby-node/create-job-pages")
const createTemplatePages = require("./gatsby-node/create-template-pages")
const createIndustryPages = require("./gatsby-node/create-industry-pages")
const createRolePages = require("./gatsby-node/create-role-pages")
const createPartnerPages = require("./gatsby-node/create-partner-pages")
const createIntegrationPages = require("./gatsby-node/create-integration-pages")
const createInvestorPages = require("./gatsby-node/create-investor-pages")
const createCustomerPages = require("./gatsby-node/create-customer-pages")
const createPpcPages = require("./gatsby-node/create-ppc-pages")
const createPillarPages = require("./gatsby-node/create-pillar-pages")
const createProductPages = require("./gatsby-node/create-product-pages")

const onCreateNode = require("./gatsby-node/on-create-node")
const { customGraphqlSchema } = require("./gatsby-node/custom-graphql-schema")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  // create site pages (from md files on pages folder)
  await createSitePages(actions, graphql)
  // create blog-related pages
  await createBlogPages(actions, graphql)
  // create job-related's pages
  await createJobPages(actions, graphql)
  // create template-related pages
  await createTemplatePages(actions, graphql)
  // create industries-related pages
  await createIndustryPages(actions, graphql)
  // create roles-related pages
  await createRolePages(actions, graphql)
  // create partners-related pages
  await createPartnerPages(actions, graphql)
  // create integrations-related pages
  await createIntegrationPages(actions, graphql)
  // create investor pages
  await createInvestorPages(actions, graphql)
  // create customer pages
  await createCustomerPages(actions, graphql)
  // create ppc pages
  await createPpcPages(actions, graphql)
  // create pillar pages
  await createPillarPages(actions, graphql)
  // create product pages
  await createProductPages(actions, graphql)
}

exports.onCreateNode = onCreateNode
exports.createSchemaCustomization = customGraphqlSchema
