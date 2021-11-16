module.exports = [
  {
    resolve: "gatsby-plugin-hubspot",
    options: {
      trackingCode: process.env.HUBSPOT_FORM_PORTAL_ID,
      respectDNT: false,
      productionOnly: true
    }
  }
];
