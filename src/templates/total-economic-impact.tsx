import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Benefits from "../components/benefits"
import Carousel, { CarouselData } from "../components/carousel"
import Discover, { DiscoverData } from "../components/discover"
import GetStarted from "../components/get-started"
import TEIHero from "../components/TEI-hero"
import styled from "styled-components"
import media from "../styles/media"

export interface TEIPageProps {
  data: GatsbyTypes.TEIPageQuery
}

const TEIPage: React.FC<TEIPageProps> = ({ data }) => {
  const {
    TEI: {
      frontmatter: {
        title,
        description,
        hero,
        discover,
        carousel,
        gettingStarted,
      },
    },
  } = data

  return (
    <Layout>
      <SEO title={title} description={description} />
      <TEIHero hero={hero} />
      <Discover data={discover as DiscoverData} />
      <Wrapper>
        <Carousel data={carousel as CarouselData} />
        {/* <Benefits /> Removed Temporary */}
        <GetStarted data={gettingStarted} />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  section:nth-child(1) {
    margin-bottom: 0;
  }
  section:nth-child(2) {
    margin-top: -6%;
    ${media.lessThan("sm")`
      margin-top: -12%;  
    `}
  }
`

export default TEIPage

const query = graphql`
  query TEIPage($id: String!) {
    TEI: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        hero {
          title
          description
          videoURL
          button {
            text
            link
          }
        }
        discover {
          title
          reports {
            icon {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                  formats: [AUTO, WEBP]
                )
              }
            }
            label
            description
          }
          button {
            text
            link
          }
        }
        carousel {
          testimonials {
            heading
            content
            background {
              childImageSharp {
                gatsbyImageData(
                  quality: 95
                  layout: FULL_WIDTH
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
          button {
            text
            link
          }
        }
        gettingStarted {
          title
          description
          button {
            text
            link
          }
          smallText
        }
      }
    }
  }
`
