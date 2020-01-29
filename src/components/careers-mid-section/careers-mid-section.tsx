import React from "react";
import Iframe from "react-iframe";
import {
  StyledSection,
  IframeBlock,
  StyledMediumHeading,
  Underline
} from "./careers-mid-section.styled";
import { Row, Container } from "react-awesome-styled-grid";

const CareersMidSection = () => {
  return (
    <StyledSection>
      <Row>
        <Container>
          <StyledMediumHeading>
            Our <Underline>bright</Underline> and <Underline>diverse</Underline>{" "}
            team is growing quickly across London and Berlin!
          </StyledMediumHeading>
        </Container>
      </Row>
      <Row>
        <IframeBlock>
          <Iframe
            url="https://maps.google.com/maps?q=68%20hanbury%20street&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="400px"
            height="400px"
            id="myId"
            position="relative"
          />
        </IframeBlock>
        <IframeBlock>
          <Iframe
            url="https://maps.google.com/maps?q=Rudi-Dutschke-Stra%C3%9Fe%2023&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="400px"
            height="400px"
            id="myId"
            position="relative"
            styles={{ margin: "25px" }}
          />
        </IframeBlock>
      </Row>
    </StyledSection>
  );
};

export default CareersMidSection;
