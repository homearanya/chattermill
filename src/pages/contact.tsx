import React from "react";
import styled from "styled-components";
import { Container } from "react-awesome-styled-grid";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BrandsSection from "../components/brands-section";
import ContactForm from "../components/contact-form";
import { BigHeading } from "../styles/common.styled";
import media from "../styles/media";

import "../styles/scss/styles.scss";

interface ContactProps {
  location: {
    state?: any;
  };
}

const Contact = ({ location }: ContactProps) => (
  <Layout className="contact-page">
    <SEO
      title="Contact"
      description="Next Generation Customer Experience Analytics"
    />
    <StyledSection>
      <Container>
        <Heading>Request a demo</Heading>
        <ContactForm
          email={location.state && location.state.email}
        ></ContactForm>
      </Container>
    </StyledSection>
    <BrandsSection />
  </Layout>
);

export default Contact;

export const StyledSection = styled.section`
  padding: 3rem 0 9rem;

  ${media.lessThan("md")`
    padding: 5rem 0;
  `}

  ${media.lessThan("sm")`
    padding: 2rem 0 5rem;
  `}
`;

export const Heading = styled(BigHeading)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 500;
  text-align: center;
  margin-bottom: 6.4rem;
  font-size: 7.2rem !important;
  line-height: 8rem !important;
  text-transform: none;

  ${media.lessThan("sm")`
    margin-bottom: 3rem;
    font-size: 4rem !important;
    line-height: 4.5rem !important;
  `}
`;
