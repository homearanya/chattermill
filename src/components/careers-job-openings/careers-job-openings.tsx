import React from "react";
import {
  StyledSection,
  StyledBigHeading,
  StyledMediumHeading,
  StyledContainer
} from "./careers-job-opening.styled";

import JobsBoard from "../careers-job-board";

const JobOpenings = () => (
  <StyledSection id="jobs-openings">
    <StyledBigHeading>Ready to come on board?</StyledBigHeading>
    <StyledContainer>
      <StyledMediumHeading>View our current vacancies...</StyledMediumHeading>
    </StyledContainer>
    <JobsBoard />
  </StyledSection>
);

export default JobOpenings;
