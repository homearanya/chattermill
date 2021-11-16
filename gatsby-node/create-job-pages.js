const { kebabCase } = require("lodash")
const path = require("path")
const entities = require("entities")

module.exports = async (actions, graphql) => {
  const { createPage } = actions
  try {
    const { errors, data } = await graphql(`
      {
        allJobs {
          edges {
            node {
              title
              internal_job_id
              content
            }
          }
        }
      }
    `)
    if (errors) {
      errors.forEach(e => console.error(e.toString()))
      throw new Error("error on graphql for GreenhouseJob nodes")
    }

    data?.allJobs?.edges.forEach(({ node: job }) => {
      const { title, internal_job_id, content } = job
      const jobSlug = kebabCase(`${title} ${internal_job_id}`)
      const tagPath = `/careers/${jobSlug}/`
      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/job-page.tsx`),
        context: {
          slug: jobSlug,
          job_id: internal_job_id,
          html_content: entities.decodeHTML(content),
        },
      })
    })
  } catch (error) {
    console.log(error)
  }
}
