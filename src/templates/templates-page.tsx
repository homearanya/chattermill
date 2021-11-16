import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Container, Row, Col } from "react-awesome-styled-grid"
import { Flipper, Flipped } from "react-flip-toolkit"
import { BigHeading } from "../styles/common.styled"
import { $colorHeading } from "../styles/variables"
import media from "../styles/media"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TemplateCard from "../components/template-card"
import TemplatesSidebar from "../components/templates-sidebar"
import Sidebar from "../components/sidebar"
import "../styles/scss/styles.scss"
import templatesHubFeaturedImage from "../images/templates-hub.png"
import CTA2Blog from "../components/cta2-blog"

interface CustomersPageProps {
  readonly data: GatsbyTypes.TemplatesPageQuery
}

const data = {
  shapeColor: "#10C2ED",
  text: "Power your CX with Chattermill",
}

const CustomersPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, description, heading, intro },
    },
    allContentfulTemplate: { edges },
  },
}: CustomersPageProps) => {
  const [categorySelected, setCategorySelected] = useState("")

  const selectCategory = (category) => setCategorySelected(category)
  const filteredTemplates = edges.filter(({ node }) =>
    !categorySelected ? true : node.category.title === categorySelected
  )
  return (
    // Add image for SEO
    <Layout templates className="customers-page">
      <SEO
        title={title}
        description={description}
        featuredImage={templatesHubFeaturedImage}
      />
      <StyledSection>
        <Heading>{heading}</Heading>
        <StyledText>{intro}</StyledText>

        <StyledContainer>
          <Flipper
            flipKey={filteredTemplates.map(({ node }) => node.id).join("")}
          >
            <StyledRow>
              <SidebarCol>
                <Sidebar>
                  <TemplatesSidebar selectCategory={selectCategory} />
                </Sidebar>
              </SidebarCol>
              <TemplatesGrid>
                <TemplatesRow>
                  {filteredTemplates.map(({ node }) => (
                    <Flipped key={node.id} flipId={node.id}>
                      <Col xs={4} sm={4} md={6} lg={4}>
                        <TemplateCard
                          template={node as GatsbyTypes.ContentfulTemplate}
                        />
                      </Col>
                    </Flipped>
                  ))}
                </TemplatesRow>
              </TemplatesGrid>
            </StyledRow>
          </Flipper>
        </StyledContainer>
      </StyledSection>
      <CTA2Blog data={data} />
    </Layout>
  )
}

export default CustomersPage

export const query = graphql`
  query TemplatesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        heading
        intro
      }
    }
    allContentfulTemplate {
      edges {
        node {
          id
          slug
          title {
            title
          }
          subtitle {
            subtitle
          }
          category {
            id
            title
          }
          tags
          featuredImage {
            file {
              url
            }
            title
            fluid(maxWidth: 640) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
export const StyledSection = styled.section`
  padding: 5rem;
  ${media.lessThan("md")`
    padding: 2rem 0 4rem;
  `}
`
export const StyledContainer = styled(Container)``
export const StyledRow = styled(Row)`
  position: relative;
  padding: 4rem 0;
  ${media.lessThan("md")`
    padding: 6rem 0 4rem;
  `}
`
export const Heading = styled(BigHeading)`
  font-size: 4rem;
  text-align: center;
  color: ${$colorHeading};
  padding-top: 3rem;
  ${media.lessThan("md")`
    padding-top: 0;
    padding: 1rem;
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 1rem;
  `}
`
const StyledText = styled.p`
  font-size: 2rem;
  color: ${$colorHeading};
  text-align: center;
  ${media.lessThan("md")`
    font-size: 1.5rem;
    padding: 2rem;
  `}
`
const TemplatesGrid = styled(Col)`
  flex: 1 0 calc(70% - 3rem);
  flex-direction: row;

  ${media.lessThan("md")`
    flex: 1 0 100%;
  `}
`
const TemplatesRow = styled(Row)``

const SidebarCol = styled(Col)`
  flex: 1 0 30%;
  max-width: 22rem;
  margin-right: 3rem;

  height: min-content;
  max-height: calc(100vh - 10rem);
  overflow: auto;
  z-index: 1;
  ${media.lessThan("md")`
    position: absolute;
    top:0;
    left:0;
    overflow: visible;
  `}
`
