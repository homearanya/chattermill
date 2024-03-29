module.exports = [
  {
    resolve: `gatsby-plugin-segment-js`,
    options: {
      // your segment write key for your production environment
      // when process.env.NODE_ENV === 'production'
      // required; non-empty string
      prodKey: process.env.GATSBY_SEGMENT_WRITE_KEY,
      // boolean (defaults to false) on whether you want
      // to include analytics.page() automatically
      // if false, see below on how to track pageviews manually
      trackPage: false,

      // devKey: process.env.GATSBY_SEGMENT_WRITE_KEY,
    },

    //     // if you have a development env for your segment account, paste that key here
    //     // when process.env.NODE_ENV === 'development'
    //     // optional; non-empty string
    //     devKey: `SEGMENT_DEV_WRITE_KEY`,

    //     // boolean (defaults to false) on whether you want
    //     // to include analytics.page() automatically
    //     // if false, see below on how to track pageviews manually
    //     trackPage: false,

    //     // boolean (defaults to false); whether to delay load Segment
    //     // ADVANCED FEATURE: only use if you leverage client-side routing (ie, Gatsby <Link>)
    //     // This feature will force Segment to load _after_ either a page routing change
    //     // or user scroll, whichever comes first. This delay time is controlled by
    //     // `delayLoadTime` setting. This feature is used to help improve your website's
    //     // TTI (for SEO, UX, etc).  See links below for more info.
    //     // NOTE: But if you are using server-side routing and enable this feature,
    //     // Segment will never load (because although client-side routing does not do
    //     // a full page refresh, server-side routing does, thereby preventing Segment
    //     // from ever loading).
    //     // See here for more context:
    //     // GIF: https://github.com/benjaminhoffman/gatsby-plugin-segment-js/pull/19#issuecomment-559569483
    //     // TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
    //     // Problem/solution: https://marketingexamples.com/seo/performance
    //     delayLoad: true,

    //     // number (default to 1000); time to wait after scroll or route change
    //     // To be used when `delayLoad` is set to `true`
    //     delayLoadTime: 1000
    //   }
  },
]
