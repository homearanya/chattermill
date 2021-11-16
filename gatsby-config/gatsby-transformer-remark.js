module.exports = [
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
        {
          resolve: `gatsby-remark-images-contentful`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 700,
            withWebp: true,
            linkImagesToOriginal: false
          }
        },
        `gatsby-remark-copy-linked-files`
      ]
    }
  }
];
