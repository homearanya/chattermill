import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { graphql, navigate } from "gatsby"
import { Row, Col, Container } from "react-awesome-styled-grid"
import styled from "styled-components"
import { scroller } from "react-scroll"
import media from "../../styles/media"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ResourceCard, { ResourceCardData } from "../../components/resource-card"
import WebinarCard from "../../components/webinar-card"
import TemplateCard from "../../components/template-card"
import WhitepaperTable, {
  WhitepaperTableData,
} from "../../components/whitepaper-table"
import { contentfulImageMap } from "../../utils/helpers"
import { TextBlockData } from "../../types"

interface ResourcesPageProps {
  readonly data: GatsbyTypes.ResourcesPageQuery
}

const ResourcesPage = ({
  data: {
    allWistiaVideos,
    allContentfulPost: { edges: postEdges },
    allContentfulTemplate: { edges: templateEdges },
    site: {
      siteMetadata: {
        blog: { pathPrefix: blogPathPrefix },
      },
    },
    whitepapers,
    imageBlog,
    imageWebinars,
    imageTemplates,
    imageWhitepapers,
  },
}: ResourcesPageProps) => {
  const wistiaVideosEdges =
    allWistiaVideos && allWistiaVideos.edges ? allWistiaVideos.edges : []
  const [templateTitleHeights, setTemplateTitleHeights] = useState({})
  const [webinarTitleHeights, setWebinarTitleHeights] = useState({})
  const [imageSizes, setImageSizes] = useState({})
  const [resourceCardImageminHeight, setResourceCardImageMinHeight] = useState(
    null
  )
  const [webinarTitleMaxHeight, setWebinarTitleMaxHeight] = useState(null)
  const [templateTitleMaxHeight, setTemplateTitleMaxHeight] = useState(null)
  const resources: { textBlock: TextBlockData; scrollTo: string }[] = [
    {
      textBlock: {
        image: imageBlog as GatsbyTypes.File,
        heading: "Blog",
        text: [
          "The most actionable content you'll find on customer experience management strategy.",
        ],
      },
      scrollTo: "blog-section",
    },
    {
      textBlock: {
        image: imageWebinars as GatsbyTypes.File,
        heading: "Webinars",
        text: [
          "Our webinars are perfect for those who like to see how it’s done, rather than read the manual.",
        ],
      },
      scrollTo: "webinars-section",
    },
    {
      textBlock: {
        image: imageTemplates as GatsbyTypes.File,
        heading: "Templates",
        text: [
          "Don’t have time to write a survey? Don’t know where to begin? Don’t worry – we’ve got templates for most topics to help you get started!",
        ],
      },
      scrollTo: "templates-section",
    },
    {
      textBlock: {
        image: imageWhitepapers as GatsbyTypes.File,
        heading: "Whitepapers",
        text: [
          "Resources to learn about CX analytics, customer feedback surveys, user retention and more.",
        ],
      },
      scrollTo: "whitepapers-section",
    },
  ]

  const whitePaperTabledata: WhitepaperTableData = {
    subHeading: whitepapers.frontmatter.whitepaperTable.textBlock.subHeading,
    benefits: whitepapers.frontmatter.whitepaperTable
      .benefits as TextBlockData[],
  }

  useEffect(() => {
    setResourceCardImageMinHeight(
      Math.min(...(Object.values(imageSizes) as number[]))
    )
  }, [imageSizes])
  useEffect(() => {
    setWebinarTitleMaxHeight(
      Math.max(...(Object.values(webinarTitleHeights) as number[]))
    )
  }, [webinarTitleHeights])
  useEffect(() => {
    setTemplateTitleMaxHeight(
      Math.max(...(Object.values(templateTitleHeights) as number[]))
    )
  }, [templateTitleHeights])
  return (
    <Layout className="webinar-page">
      <Helmet>
        <script
          src="https://fast.wistia.com/assets/external/E-v1.js"
          async
        ></script>
      </Helmet>
      <SEO
        title={"Resources Hub"}
        description={
          "Visit our resource library for the latest e-books, training, webinars and more. Discover how Chattermill works to suit your specific role and organisation."
        }
      />
      <StyledSection>
        <StyledContainer>
          <StyledMainHeader>Resources Library</StyledMainHeader>
          <StyledRow>
            {resources.map(({ textBlock, scrollTo }, index) => (
              <StyledCol key={index} xs={8} sm={4} md={3} xl={3} align="center">
                <ResourceCard
                  data={{ textBlock }}
                  handle={() =>
                    scroller.scrollTo(scrollTo, {
                      duration: 1500,
                      smooth: "easeInOut",
                    })
                  }
                  index={index}
                  setImageSizes={setImageSizes}
                  height={resourceCardImageminHeight}
                  // imageCircle
                />
              </StyledCol>
            ))}
          </StyledRow>
        </StyledContainer>
      </StyledSection>
      <StyledSection id="blog-section">
        <StyledContainer>
          <StyledHeader to="/blog/">Blog</StyledHeader>
          <StyledRow>
            {postEdges.map(({ node }) => {
              const {
                id,
                title,
                slug,
                author,
                category,
                featuredImage,
                body,
              } = node
              const resource: ResourceCardData = {
                textBlock: {
                  image: contentfulImageMap(featuredImage),
                  tagline: category ? category.title : "",
                  subHeading: title.title,
                  text: [
                    `By ${author ? author.name : ""}`,
                    body?.childMarkdownRemark?.excerpt ?? "",
                  ],
                },
              }
              return (
                <StyledCol key={id} xs={8} sm={4} md={4} xl={4} align="center">
                  <ResourceCard
                    data={resource}
                    handle={() => navigate(`${blogPathPrefix}${slug}`)}
                  />
                </StyledCol>
              )
            })}
          </StyledRow>
        </StyledContainer>
      </StyledSection>
      <StyledSection id="webinars-section">
        <StyledContainer>
          <StyledHeader to="/webinars/">Webinars</StyledHeader>
          <StyledRow>
            {wistiaVideosEdges.map(({ node }, index) => (
              <StyledCol
                key={node.id__normalized}
                xs={8}
                sm={4}
                md={4}
                xl={4}
                align="center"
              >
                <WebinarCard
                  video={node}
                  index={index}
                  setWebinarTitleHeights={setWebinarTitleHeights}
                  height={webinarTitleMaxHeight}
                />
              </StyledCol>
            ))}
          </StyledRow>
        </StyledContainer>
      </StyledSection>
      <StyledSection id="templates-section">
        <StyledContainer>
          <StyledHeader to="/templates/">
            Customer Exeprience & Survey Templates
          </StyledHeader>
          <StyledRow>
            {templateEdges.map(({ node }, index) => (
              <StyledCol
                key={node.id}
                xs={8}
                sm={4}
                md={3}
                xl={3}
                align="center"
              >
                <TemplateCard
                  template={node as GatsbyTypes.ContentfulTemplate}
                  index={index}
                  setTemplateTitleHeights={setTemplateTitleHeights}
                  height={templateTitleMaxHeight}
                />
              </StyledCol>
            ))}
          </StyledRow>
        </StyledContainer>
      </StyledSection>
      <StyledSection id="whitepapers-section">
        <StyledContainer>
          <StyledHeader to="/whitepapers/">
            {whitepapers.frontmatter.title}
          </StyledHeader>
          <StyledText>{whitepapers.frontmatter.description}</StyledText>
        </StyledContainer>
        <WhitepaperTable data={whitePaperTabledata} />
      </StyledSection>
    </Layout>
  )
}

export default ResourcesPage

const query = graphql`
  query ResourcesPage {
    allWistiaVideos(sort: { fields: [updated], order: DESC }, limit: 8) {
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
    site {
      siteMetadata {
        blog {
          pathPrefix
        }
      }
    }
    allContentfulPost(sort: { order: DESC, fields: [createdAt] }, limit: 6) {
      edges {
        node {
          id
          createdAt
          title {
            title
          }
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          featuredImage {
            title
            gatsbyImageData(
              width: 600
              height: 400
              layout: CONSTRAINED
              placeholder: NONE
              formats: [AUTO, WEBP]
            )
            file {
              url
            }
          }
          category {
            title
          }
          author {
            name
          }
        }
      }
    }
    allContentfulTemplate(limit: 4) {
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

            gatsbyImageData(
              width: 640
              layout: CONSTRAINED
              placeholder: NONE
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
    whitepapers: markdownRemark(
      frontmatter: { templateKey: { eq: "whitepapers" } }
    ) {
      frontmatter {
        title
        description
        whitepaperTable {
          textBlock {
            subHeading
          }
          benefits {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 375
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
            smallHeading
            text
            moreDetails {
              button {
                text
                link
                arrow
              }
            }
          }
        }
      }
    }
    imageBlog: file(relativePath: { eq: "blog.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 150
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      publicURL
    }
    imageWebinars: file(relativePath: { eq: "webinars.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 150
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      publicURL
    }
    imageTemplates: file(relativePath: { eq: "templates.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 150
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      publicURL
    }
    imageWhitepapers: file(relativePath: { eq: "whitepapers.png" }) {
      childImageSharp {
        gatsbyImageData(height: 150, layout: CONSTRAINED, placeholder: BLURRED)
      }
      publicURL
    }
  }
`
const StyledSection = styled.section`
  padding: 3rem 0;

  &#blog-section {
    .text-block {
      .tagline {
        text-align: left;
      }
      .subHeading {
        margin-bottom: 1rem;
        text-align: left;
      }
      .text {
        text-align: left;
        &.first {
          font-size: 1.4rem;
        }
      }
    }
  }
`
const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const StyledRow = styled(Row)``

const StyledMainHeader = styled.h1`
  font-size: 6rem;
  /* font-weight: 500; */
  color: #291c45;
  text-align: center;
  padding: 6rem;

  ${media.lessThan("lg")`
    font-size: 5rem;
    padding-top: 5rem;
  `}
  ${media.lessThan("md")`
    font-size: 4rem;
    padding-top: 4rem;
  `}
  ${media.lessThan("sm")`
    font-size: 3.4rem;
    padding-top: 3rem;
  `}
`
const StyledHeader = styled(Link)`
  font-size: 4rem;
  font-weight: 400;
  text-decoration: none;
  line-height: 1.3;
  margin-bottom: 4rem;
  color: #291c45;
  text-align: center;
  padding: 3rem;
  &:hover {
    text-decoration: underline;
  }

  ${media.lessThan("sm")`
    font-size: 2.8rem;
    padding-top: 2rem;
  `}
`

const StyledText = styled.p`
  font-size: 2rem;
  color: #291c45;
  text-align: center;
  padding-bottom: 4rem;
  ${media.lessThan("sm")`
    font-size: 1.8rem;
  `}
`

const StyledCol = styled(Col)``
