import React from "react";
import { navigate } from "gatsby";

import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import { Container } from "react-awesome-styled-grid";
import { Section, MediumHeading } from "../styles/common.styled";
import { Link } from "gatsby";
import { buttonStylesHover } from "../styles/mixins";
import media from "../styles/media";

let myVar;

export default class ThankYouFreeTrial extends React.Component {
  componentDidMount() {
    myVar = setTimeout(function() {
      navigate("/");
    }, 2500);
  }

  componentWillUnmount() {
    clearTimeout(myVar);
  }

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
              Your form submission was successful. You are now being redirected
              to the homepage.
            </StyledMediumHeading>
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
  ${media.lessThan("sm")`
    text-align: center;
 `}
`;

export const StyledSection = styled(Section)`
  padding: 15rem 10rem 15rem 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

interface ButtonProps {
  readonly inverted?: boolean;
  readonly wide?: boolean;
  readonly secondary?: boolean;
}

export const StyledLink = styled(Link)<ButtonProps>`
  /* Adapt the colors based on primary prop */
  background: #332e5e;
  color: #fff;
  font-size: 2em;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  padding: 0.5rem;
  height: 45px;
  width: 200px;

  &&:hover,
  &&:active {
    ${({ inverted, secondary }) => buttonStylesHover(inverted, secondary)}
  }
`;
