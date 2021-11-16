module.exports = [
  {
    resolve: "gatsby-source-custom-api",
    options: {
      url: `https://boards-api.greenhouse.io/v1/boards/chattermill/jobs?content=true`,
      rootKey: "GreenhouseJobs",
      schemas: {
        jobs: `
          jobs:[GreenhouseJob]
        `,
        GreenhouseJob: `
              internal_job_id: ID
              location: GreenHouseJobLocation
              title: String
              content: String
              updated_at: Date
              absolute_url: String
              departments:[GreenhouseDepartment]
        `,
        GreenHouseJobLocation: `
              name: String
        `,
        GreenhouseDepartment: `
              name: String
        `,
      },
    },
  },
]
