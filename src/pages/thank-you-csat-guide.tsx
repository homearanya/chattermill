import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import { Container } from "react-awesome-styled-grid";
import { Section, MediumHeading } from "../styles/common.styled";

import media from "../styles/media";

export default class ThankYouCSATGuide extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="thank-you"
          description="Next Generation Customer Experience Analytics"
        />
        <StyledSection>
          <Container>
            <StyledMediumHeading>Thank You!</StyledMediumHeading>
            <StyledMediumHeading>
              Your form submission was successful.
            </StyledMediumHeading>
            <StyledMediumHeading>
              We hope you enjoy the guide!
            </StyledMediumHeading>
            <StyledLink href="https://cdn2.hubspot.net/hubfs/613982/Chattermill%20-%20CSAT%20Manual.pdf">
              Download
            </StyledLink>
          </Container>
        </StyledSection>
      </Layout>
    );
  }
}

export const StyledContainer = styled(Container)`
  align-items: center;
  max-width: "80rem";
`;

export const StyledMediumHeading = styled(MediumHeading)`
  font-size: 32px;
  ${media.lessThan("sm")`
    text-align: center;
 `}
`;

export const StyledSection = styled(Section)`
  padding: 10rem 10rem 10rem 10rem;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const StyledLink = styled.a`
  /* Adapt the colors based on primary prop */
  background: #332e5e;
  color: #fff;
  font-size: 2em;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  padding: 1rem;
  height: 45px;
  width: 200px;

  &&:hover,
  &&:active {
    background-color: #bdd9ff;
    color: #332e5e;
  }
`;
