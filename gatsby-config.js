/* eslint @typescript-eslint/camelcase: 0 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
};
const { spaceId, accessToken } = contentfulConfig;
if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: `Chattermill`,
    description: `New generation tool helping companies analyse open-ended feedback at scale.`,
    author: `@chattermillAI`,
    // blog configuration
    postsPerPage: 18,
    siteUrl: "https://chattermill.com", // for gatsby plugin sitemap
    hubspotConfig: {
      portalId: process.env.HUBSPOT_PORTAL_ID,
      formId: process.env.HUBSPOT_FORM_ID,
      domainsExcluded: [
        "gmail",
        "outlook",
        "yahoo",
        "hotmail",
        "aol",
        "zoho",
        "yandex",
        "protonmail",
        "gmx",
        "icloud",
        "me"
      ]
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#10C2ED`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://chattermill.com",
        sitemap: "https://chattermill.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: process.env.HUBSPOT_PORTAL_ID,
        respectDNT: false,
        productionOnly: false
      }
    },
    {
      resolve: "gatsby-source-greenhouse-job-board",
      options: {
        boardToken: "chattermill"
      }
    },
    {
      resolve: "gatsby-plugin-intercom-spa",
      options: {
        app_id: "a92hnx5c",
        include_in_development: true,
        delay_timeout: 2000
      }
    },
    {
      resolve: `gatsby-plugin-linkedin-insight`,
      options: {
        partnerId: `1080492`,

        // Include LinkedIn Insight in development.
        // Defaults to false meaning LinkedIn Insight will only be loaded in production.
        includeInDevelopment: false
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `menu`,
        path: `${__dirname}/src/components/navigation/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `footer`,
        path: `${__dirname}/src/components/footer/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1440,
              quality: 90,
              withWebp: true
            }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chatermill`,
        short_name: `Chatermill`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#10C2ED`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/styles.scss"]
      }
    }, // must be after other CSS plugins
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // `gatsby-plugin-remove-serviceworker`, // removes service worker installed by gatsby-plugin-offline
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-53236810-2", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID" // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"]
        }
      }
    }
  ]
};
