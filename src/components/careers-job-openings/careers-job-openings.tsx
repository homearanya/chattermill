import React from "react"
import {
  StyledSection,
  StyledBigHeading,
  StyledMediumHeading,
  StyledCol,
  StyledContainer,
  StyledLink,
} from "./careers-job-opening.styled"

import JobsBoard from "../careers-job-board"

const JobOpenings = () => (
  <StyledSection>
    <StyledBigHeading>Ready to come on board?</StyledBigHeading>
    <StyledContainer>
      <StyledMediumHeading>View our current vacancies...</StyledMediumHeading>
    </StyledContainer>
    {/* <StyledCol>
      <StyledLink href="https://boards.greenhouse.io/chattermill">
        View Job Openings 🚀
      </StyledLink>
    </StyledCol> */}
    <JobsBoard />
  </StyledSection>
)

export default JobOpenings
