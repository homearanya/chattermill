import React from "react"
import { Container, Row } from "react-awesome-styled-grid"
import { useStaticQuery, graphql } from "gatsby"
import { jobSlug, greenHouseDepartmentsList } from "../../utils/helpers"

import {
  StyledCol,
  Card,
  Heading,
  Departments,
  Location,
} from "./careers-job-board.styled"

const JobsBoard = () => {
  const { allGreenhouseJob } = useStaticQuery(
    graphql`
      query {
        allGreenhouseJob {
          edges {
            node {
              internal_job_id
              title
              location {
                name
              }
              departments {
                name
              }
            }
          }
        }
      }
    `
  )

  return (
    <Container>
      <Row>
        {allGreenhouseJob?.edges?.map(({ node: job }) => {
          const { id, title, location, departments, internal_job_id } = job
          const departmentsList = greenHouseDepartmentsList(departments)
          const relativePath = jobSlug(title, internal_job_id)[0]
          return (
            <StyledCol key={id} xs={4} sm={4} md={4}>
              <a href={relativePath}>
                <Card>
                  <Heading>{title}</Heading>
                  <Departments>{departmentsList}</Departments>
                  <Location>{location.name}</Location>
                </Card>
              </a>
            </StyledCol>
          )
        })}
      </Row>
    </Container>
  )
}
export default JobsBoard
