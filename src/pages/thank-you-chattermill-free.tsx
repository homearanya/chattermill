import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import UnivButtonLink from "../components/universal-button-link";
import { Section } from "../styles/common.styled";
import media from "../styles/media";

const ChattermillFreeThankYou = () => {
  return (
    <Layout>
      <SEO
        title="thank-you"
        description="Thank you for signing up to Chattermill "
      />
      <StyledSection>
        <StyledHeader>Thank You!</StyledHeader>
        <Wrapper>
          <StyledText>
            Check your inbox for a confirmation email which will provide
            information on how you can start analysing feedback in no time 🎉.
          </StyledText>
          <StyledLink
            button={{
              text: "Back to Homepage",
              link: "/",
              inverted: true
            }}
          />
        </Wrapper>
      </StyledSection>
    </Layout>
  );
};

export default ChattermillFreeThankYou;

export const StyledLink = styled(UnivButtonLink)`
  padding-top: 2rem;
`;

export const StyledSpan = styled.span`
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 20px;
  text-decoration: underline;
`;

export const StyledText = styled.p`
  font-size: 18px;
  margin: 1em;
  text-align: left;

  ${media.lessThan("sm")`
    text-align: center;
 `};
`;

export const StyledHeader = styled.h1`
  font-size: 4rem;
  padding: 2rem;
`;

export const Wrapper = styled.div`
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  max-width: 600px;
  border-radius: 10px;
`;

export const StyledSection = styled(Section)`
  padding: 5rem 10rem 0rem 10rem;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;
