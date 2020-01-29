import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import Layout from "../components/layout"
import media from "../styles/media"
import CareersBanner from "../components/careers-banner"
import CareersMidSection from "../components/careers-mid-section"
import ExperienceOverview from "../components/careers-experience-overview"
import BenefitsOverview from "../components/careers-benefits"
import JobOpenings from "../components/careers-job-openings"

const Careers = () => {
  return (
    <Layout>
      <SEO
        title="Careers"
        description="Next Generation Customer Experience Analytics"
      />
      <CareersBanner />
      <CareersMidSection />
      <ExperienceOverview />
      <BenefitsOverview />
      <JobOpenings />
    </Layout>
  )
}

export const StyledSection = styled.section`
  padding: 3rem 0 9rem;

  ${media.lessThan("md")`
    padding: 5rem 0;
  `}

  ${media.lessThan("sm")`
    padding: 2rem 0 5rem;
  `}
`

export default Careers
