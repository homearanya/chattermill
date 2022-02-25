import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UnivButtonLink from "../components/universal-button-link"
import media from "../styles/media"
import { greenHouseDepartmentsList } from "../utils/helpers"
import {
  StyledSection,
  StyledContainer,
  Article,
  Heading,
  Author,
  Body,
} from "../components/blog-view/blog-view.styled"

interface JobPageProps {
  readonly data: PageQueryData
  readonly pageContext: {
    html_content: string
  }
  location: {
    href: string
  }
}

const JobPage = ({
  pageContext: { html_content },
  data: { greenhouseJob, featuredImage },
  location: { href },
}: JobPageProps) => {
  const { title, departments, location, absolute_url } = greenhouseJob
  const departmentsList = greenHouseDepartmentsList(departments)
  return (
    <Layout className="job-page">
      <SEO
        title={`${title} - ${departmentsList}`}
        postUrl={href}
        featuredImage={featuredImage.publicURL}
        description="Chattermill - Unified Customer Experience Analytics"
      />
      <StyledSection>
        <StyledContainer2>
          <Article>
            <Heading>{title}</Heading>
            <StyledAuthorHeader>
              <Author>{`${departmentsList} - ${location.name}`}</Author>
              <UnivButtonLink
                button={{ text: "Apply now", link: absolute_url }}
              />
            </StyledAuthorHeader>
            <Body dangerouslySetInnerHTML={{ __html: html_content }} />
          </Article>
          <ApplyNowButton>
            <UnivButtonLink
              button={{ text: "Apply now", link: absolute_url }}
            />
          </ApplyNowButton>
        </StyledContainer2>
      </StyledSection>
    </Layout>
  )
}

export default JobPage

interface PageQueryData {
  greenhouseJob: {
    title: string
    internal_job_id: number
    location: {
      name: string
    }
    departments: {
      name: string
    }[]
    absolute_url: string
  }
  featuredImage: {
    publicURL: string
  }
}

const query = graphql`
  query($job_id: Float!) {
    greenhouseJob(internal_job_id: { eq: $job_id }) {
      title
      internal_job_id
      location {
        name
      }
      departments {
        name
      }
      absolute_url
    }
    featuredImage: file(relativePath: { eq: "team.jpg" }) {
      publicURL
    }
  }
`
const StyledAuthorHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h4 {
    margin-bottom: 0;
  }
  margin-bottom: 2rem;

  ${media.lessThan("sm")`
    flex-direction: column;
    align-items: center;
    h4 {
      margin-bottom: 1rem;
    }
  `}
`
const StyledContainer2 = styled(StyledContainer)`
  ${media.lessThan("sm")`
    padding: 0 3rem !important;

  `}
`
const ApplyNowButton = styled.div`
  text-align: center;
`
