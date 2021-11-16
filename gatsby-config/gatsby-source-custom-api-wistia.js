module.exports = [
  {
    resolve: "gatsby-source-custom-api",
    options: {
      url: `https://api.wistia.com/v1/medias.json?access_token=${process.env.WISTIA_ACCESS_TOKEN};project_id=${process.env.WISTIA_PROJECT_ID}`,
      rootKey: "WistiaVideos",
      schemas: {
        video: `
                id: ID
                name: String
                type: String
                created: Date
                updated: Date
                duration: Float
                hashed_id: String
                description: String
                progress: Float
                status: String
                thumbnail: thumbnail
                project: project
                assets: [asset]
                embedCode: String
              `,
        thumbnail: `
              url: String
              width: Int
              height: Int
              `,
        project: `
            id: ID
            name: String
            hashed_id: String
            `,
        asset: `
            url: String
            width: Int
            height: Int
            fileSize: Int
            contentType: String
            type: String
            `,
      },
    },
  },
]
