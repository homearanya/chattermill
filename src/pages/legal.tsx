import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import Layout from "../components/layout"
import media from "../styles/media"
import { Link } from "gatsby"
import { Container } from "react-awesome-styled-grid"
import { $colorHeading } from "../styles/variables"

interface LegalProps {}

const LegalHub = ({}: LegalProps) => {
  return (
    <Layout>
      <SEO
        title="Chattermill Legal Resources"
        description="General legal terms at Chattermill"
      />
      <StyledSection>
        <LargeHeading>Legal</LargeHeading>
        <StyledContainer>
          <StyledLink to="/terms/">Website Terms</StyledLink>
          <StyledLink to="/privacy-policy/">Privacy Policy</StyledLink>
          <StyledLink to="/security/">Security Policy</StyledLink>
          <StyledLink to="/vulnerability-disclosure-policy/">
            Vulnerability Disclosure Policy
          </StyledLink>
          <StyledLink to="/data-processing-agreement/">
            Data Processing Agreement
          </StyledLink>
          <StyledLink to="/chattermill-teams-terms/">
            SaaS Agreement (Chattermill Teams)
          </StyledLink>
          <StyledLink to="/standard-contractual-clauses/">
            Standard Contractual Clauses UK (Processors)
          </StyledLink>
          <StyledLink to="/standard-contractual-clauses-eea/">
            Standard Contractual Clauses EEA (Processors)
          </StyledLink>
        </StyledContainer>
      </StyledSection>
    </Layout>
  )
}

export default LegalHub

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 3px;
  align-items: center;
  max-width: 100%;
  padding: 4rem;
  flex-wrap: wrap;

  ${media.lessThan("md")`
    flex-direction: column;
  `}

  ${media.lessThan("sm")`
    flex-direction: column;
  `}
`

export const StyledLink = styled(Link)`
  display: flex;
  flex: 0 0 220px;
  justify-content: center;
  height: 200px;
  text-align: center;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 9px 25px -2px rgba(11, 26, 56, 0.12);
  background-color: #291c45;
  border-radius: 10px;
  text-decoration: none;
  font-size: 24px;
  color: #ffff;
  margin: 20px;

  ${media.lessThan("md")`
    width: 200px;
  `}
`

export const StyledSection = styled.section`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  flex-direction: column;
  padding: 10rem 10rem 10rem 10rem;
  margin: 0;

  ${media.lessThan("md")`
    padding: 5rem 0;
  `}

  ${media.lessThan("sm")`
    padding: 2rem 0 5rem;
    flex-direction: column;
  `}
`

export const LargeHeading = styled.h1`
  color: ${$colorHeading};
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 5rem;
  font-weight: 600;
  line-height: 4.5rem;
  padding: 3rem 0rem 3rem 0rem;
  margin-bottom: 0rem;
  text-align: center;

  ${media.lessThan("lg")`
    font-size: 3rem;
    line-height: 3.5rem;
    padding: 20px;
    text-align: center;
  `}
`
