import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import media from "../styles/media"
import Carousel, { CarouselData } from "../components/carousel"
import DatasheetsHero from "../components/datsheets-hero/datasheets-hero"
import Discover, { DiscoverData } from "../components/discover"
import GetStarted from "../components/get-started"
import Layout from "../components/layout"
import SEO from "../components/seo"

export interface DatasheetsProps {
  data: GatsbyTypes.DataSheetsPageQuery
}

const DatasheetsPage: React.FC<DatasheetsProps> = ({ data }) => {
  const {
    Datasheets: {
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
      <DatasheetsHero hero={hero} />
      <Discover
        boldLabel={false}
        fullHeight={false}
        data={discover as DiscoverData}
      />
      <Wrapper>
        <Carousel data={carousel as CarouselData} />
        <GetStarted data={gettingStarted} />
      </Wrapper>
    </Layout>
  )
}

export default DatasheetsPage

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

export const DataSheetsPageQuery = graphql`
  query DataSheetsPage($id: String!) {
    Datasheets: markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        hero {
          title
          description
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
            image {
              publicURL
            }
            label
            description
            button {
              text
              link
            }
          }
        }
        carousel {
          testimonials {
            heading
            content
            background {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
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
