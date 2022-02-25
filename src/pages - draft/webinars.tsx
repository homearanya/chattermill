import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { Row, Col, Container } from "react-awesome-styled-grid"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA2Blog from "../components/cta2-blog"
import WebinarCard, { WistiaVideo } from "../components/webinar-card"
import "../styles/scss/styles.scss"

const ctaData = {
  shapeColor: "#10C2ED",
  text: "Power your CX with Chattermill",
}

interface WebinarsPageProps {
  readonly data: PageQueryData
}

const WebinarsPage = ({ data }: WebinarsPageProps) => {
  const edges =
    data && data.allWistiaVideos && data.allWistiaVideos.edges
      ? data.allWistiaVideos.edges
      : []
  return (
    <Layout className="webinar-page">
      <Helmet>
        <script
          src="https://fast.wistia.com/assets/external/E-v1.js"
          async
        ></script>
      </Helmet>
      <SEO
        title={"Chattermill Webinar Series"}
        description={
          "Chattermill Webinars. All of Chattermill's webinar content, in one place. We cover a range of customer experience related topics in depth, such as CX analytics, Customer Insight and Voice of the Customer."
        }
      />
      <StyledSection>
        <StyledContainer>
          <StyledHeader>Chattermill Webinars</StyledHeader>
          <StyledText>Where Customer Experience Experts Meet</StyledText>
          <Row
            style={{
              padding: "4rem",
            }}
          >
            {edges.map(edge => (
              <StyledCol
                key={edge.node.id__normalized}
                xs={8}
                sm={8}
                md={6}
                xl={6}
              >
                <WebinarCard video={edge.node} />
              </StyledCol>
            ))}
          </Row>
        </StyledContainer>
      </StyledSection>
      <CTA2Blog data={ctaData} />
    </Layout>
  )
}

export default WebinarsPage

interface PageQueryData {
  allWistiaVideos: {
    edges: {
      node: WistiaVideo
    }[]
  }
}

const query = graphql`
  query WebinarsPage {
    allWistiaVideos(sort: { fields: [updated], order: DESC }) {
      edges {
        node {
          id__normalized
          hashed_id
          name
          description
          created
          updated
          duration
          thumbnail {
            url
          }
        }
      }
    }
  }
`
const StyledSection = styled.section`
  padding: 5rem;
`
const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledHeader = styled.h1`
  font-size: 4rem;
  color: #291c45;
  text-align: center;
  padding-top: 3rem;
`

const StyledText = styled.p`
  font-size: 2rem;
  color: #291c45;
  text-align: center;
`

const StyledCol = styled(Col)``
