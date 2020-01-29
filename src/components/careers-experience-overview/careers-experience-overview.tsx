import React from "react";
import {
  StyledSection,
  StyledMediumHeading,
  Underline,
  ImageBlock
} from "./careers-experience-overview.styled";
import { Container } from "react-awesome-styled-grid";

import Image5 from "./chattermill_team.png";

const ExperienceOverview = () => {
  return (
    <StyledSection>
      <StyledMediumHeading>
        We're all about positive <Underline>EXPERIENCES.</Underline>That starts
        with our <Underline>employees!</Underline>
      </StyledMediumHeading>
      <Container>
        <ImageBlock>
          <img
            src={Image5}
            alt="chattermill-team"
            style={{
              width: "auto",
              maxWidth: "100%",
              height: "auto"
            }}
          ></img>
        </ImageBlock>
      </Container>
    </StyledSection>
  );
};

export default ExperienceOverview;
