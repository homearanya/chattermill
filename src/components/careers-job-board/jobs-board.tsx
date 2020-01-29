import React from "react"
import { Container, Row } from "react-awesome-styled-grid"
import { useStaticQuery, graphql } from "gatsby"

import {
  StyledCol,
  Card,
  Heading,
  Departments,
  Location,
} from "./careers-job-board.styled"

const JobsBoard = () => {
  const {
    allGreenhouseJob: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allGreenhouseJob {
          edges {
            node {
              title
              absolute_url
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
        {edges.map(({ node }) => {
          const { title, location, departments, absolute_url } = node
          const departmentsList = departments.reduce(
            (output, department, i) => {
              if (i === 0) {
                return department.name
              }
              return `${output}, ${department.name}`
            },
            ""
          )
          return (
            <StyledCol xs={4} sm={4} md={4}>
              <a href={absolute_url} target="_blank">
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
