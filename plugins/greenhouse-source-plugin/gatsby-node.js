const fetch = require("node-fetch")

const fetchJobs = async () => {
  BASE_ENDPOINT = "https://boards-api.greenhouse.io/v1/boards/chattermill/jobs"
  const listEndpoint = new URL(BASE_ENDPOINT)
  listEndpoint.searchParams.append("content", "true")
  const jobsResult = await (await fetch(listEndpoint.toString())).json()
  return jobsResult.jobs
}

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  // // Arbitrary node type constant
  const NODE_TYPE = "GreenhouseJob"

  // Get books
  const jobs = await fetchJobs()
  for (const job of jobs) {
    actions.createNode({
      ...job,
      id: createNodeId(`${NODE_TYPE}-${job.internal_job_id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        contentDigest: createContentDigest(job),
      },
    })
  }
}
