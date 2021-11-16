/* eslint-disable @typescript-eslint/camelcase */
const { siteUrl } = require("./constants");

const domainsExcluded = require("../src/utils/domain");

module.exports = {
  title: `Chattermill`,
  description: `New generation tool helping companies analyse open-ended feedback at scale.`,
  author: `@chattermillAI`,
  // blog configuration
  blog: {
    pathPrefix: "/blog/",
    postsPerPage: 18,
    postsPerGrid: [0, 2, 3, 3] // first entry ignored
  },
  templates: {
    pathPrefix: "/templates/",
    templatesPerPage: 18
  },
  partners: {
    pathPrefix: "/partners/"
  },
  roles: {
    pathPrefix: "/roles/"
  },
  ppc: {
    pathPrefix: "/ppc/"
  },
  pillar: {
    pathPrefix: "/pillar/"
  },
  integrations: {
    pathPrefix: "/integrations/"
  },
  industries: {
    pathPrefix: "/industries/"
  },
  investor: {
    pathPrefix: "/investor/"
  },
  customers: {
    pathPrefix: "/customers/"
  },
  productPage: {
    pathPrefix: "/product/"
  },
  siteUrl, // for gatsby plugin sitemap
  domainsExcluded,
  hubspotConfig: {
    formId: process.env.HUBSPOT_FORM_ID,
    chattermill_classic_formId: process.env.HUBSPOT_FORM_TRIAL_ID,
    zendesk_portalId: process.env.HUBSPOT_FORM_ZENDESK_PORTAL_ID,
    zendesk_Id: process.env.HUBSPOT_FORM_ZENDESK_ID,
    portalId: process.env.HUBSPOT_FORM_PORTAL_ID,
    surveyGuide_formId: process.env.HUBSPOT_FORM_WHITEPAPER_SURVEYGUIDE,
    freeBook_formId: process.env.HUBSPOT_FORM_WHITEPAPER_BOOKCHAPTER,
    pricingPage_formId: process.env.HUBSPOT_FORM_PRICING,
    csatGuide_formId: process.env.HUBSPOT_FORM_WHITEPAPER_CSAT,
    customerFeedbackGuide_formId:
      process.env.HUBSPOT_FORM_WHITEPAPER_FEEDBACKANALYSIS,
    cmLite_formId: process.env.HUBSPOT_FORM_CMLITE,
    churnGuide_formId: process.env.HUBSPOT_FORM_WHITEPAPER_CHURN,
    chattermill_teams_formId: process.env.HUBSPOT_FORM_CMLITE_WAITING_LIST,
    chattermill_conversations_formId: process.env.HUBSPOT_FORM_CONVERSATIONS,
    templates_formId: process.env.HUBSPOT_FORM_TEMPLATES,
    newsletter_formId: process.env.HUBSPOT_NEWSLETTER,
    cxExcellence_formId: process.env.HUBSPOT_FORM_WHITEPAPER_EXCELLENCE,
    cxFashion_formId: process.env.HUBSPOT_FORM_WHITEPAPER_CX_FASHION,
    cxFashion_retail_formId:
      process.env.HUBSPOT_FORM_WHITEPAPER_CX_FASHION_RETAIL,
    scalingCX_formId: process.env.HUBSPOT_FORM_WHITEPAPER_SCALING_CX,
    chattermillFree_formId: process.env.HUBSPOT_FORM_CHATTERMILL_FREE,
    product_demo_formId: process.env.HUBSPOT_FORM_PRODUCT_DEMO,
    solution_demo_formId: process.env.HUBSPOT_FORM_SOLUTION_DEMO,
    partnership_request_formId: process.env.HUBSPOT_FORM_PARTNERSHIP_REQUEST,
    total_economic_impact_formId:
      process.env.HUBSPOT_FORM_TOTAL_ECONOMIC_IMPACT,
    datasheet_overview_report_formId: process.env.HUBSPOT_FORM_OVERVIEW_REPORT,
    datasheet_growth_report_formId: process.env.HUBSPOT_FORM_GROWTH_REPORT,
    datasheet_enterprise_report_formId:
      process.env.HUBSPOT_FORM_ENTERPRISE_REPORT
  }
};
