module.exports = [
  {
    resolve: "wistia-videos-source-plugin",
    options: {
      accessToken: process.env.WISTIA_ACCESS_TOKEN,
      projectId: process.env.WISTIA_PROJECT_ID,
    },
  },
]
