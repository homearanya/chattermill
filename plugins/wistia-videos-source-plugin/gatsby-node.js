//       url: `https://api.wistia.com/v1/medias.json?access_token=${process.env.WISTIA_ACCESS_TOKEN};project_id=${process.env.WISTIA_PROJECT_ID}`,
const fetch = require("node-fetch")

const fetchVideos = async (accessToken, projectId) => {
  BASE_ENDPOINT = "https://api.wistia.com/v1/medias.json"
  const listEndpoint = new URL(BASE_ENDPOINT)
  listEndpoint.searchParams.append("access_token", accessToken)
  listEndpoint.searchParams.append("project_id", projectId)
  const videosResult = await (await fetch(listEndpoint.toString())).json()
  return videosResult
}

exports.sourceNodes = async (
  { actions, createContentDigest, createNodeId },
  pluginOptions
) => {
  const { accessToken, projectId } = pluginOptions
  // // Arbitrary node type constant
  const NODE_TYPE = "WistiaVideos"

  // Get books
  const videos = await fetchVideos(accessToken, projectId)
  for (const video of videos) {
    actions.createNode({
      ...video,
      id__normalized: video.id,
      id: createNodeId(`${NODE_TYPE}-${video.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        contentDigest: createContentDigest(video),
      },
    })
  }
}
