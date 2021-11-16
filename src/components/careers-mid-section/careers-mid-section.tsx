import React from "react";
import Iframe from "react-iframe";
import {
  StyledSection,
  IframeBlock,
  StyledMediumHeading,
  Underline,
  StyledText
} from "./careers-mid-section.styled";
import { Row, Container } from "react-awesome-styled-grid";
import "./careers.css";

const CareersMidSection = () => {
  return (
    <StyledSection>
      <Row>
        <Container>
          <StyledMediumHeading>
            Our <Underline>bright</Underline> and <Underline>diverse</Underline>{" "}
            team is growing quickly across <Underline>London</Underline> and{" "}
            <Underline>Berlin!</Underline>
          </StyledMediumHeading>
        </Container>
      </Row>
      <Row>
        <IframeBlock>
          <div>
            <Iframe
              url="https://maps.google.com/maps?q=68%20hanbury%20street&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              height="300px"
              width="300px"
            />
          </div>
        </IframeBlock>

        <IframeBlock>
          <div>
            <Iframe
              url="https://maps.google.com/maps?q=Rudi-Dutschke-Stra%C3%9Fe%2023&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              height="300px"
              width="300px"
            />
          </div>
        </IframeBlock>
      </Row>
      <Row>
        <Container>
          <StyledText>
            While most of our team are based in London and Berlin, a few of our
            team are based remotely depending on their role. At present, we are
            all working remotely to ensure the health and safety of our team.
          </StyledText>
          <StyledText>
            Because we love to collaborate, we're all within a few hours of GMT.
            🌍
          </StyledText>
        </Container>
      </Row>
    </StyledSection>
  );
};

export default CareersMidSection;
