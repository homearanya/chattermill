import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PillarHeader from "../components/pillar-header"
import PillarIntroSection from "../components/pillar-intro-section"
import PillarCards from "../components/pillar-cards"

interface PillarPageProps {
  data: GatsbyTypes.PillarPageQuery
}

const PillarPage = ({
  data: {
    contentfulPillar: {
      heroImage,
      header,
      articleCard,
      description,
      seoImage: {
        file: { url },
      },
      body: body,
    },
  },
}: PillarPageProps) => {
  const headerSection = {
    heroImage,
    header,
    description,
  }

  return (
    <Layout className="ppc-page">
      <SEO title={header} description={description} featuredImage={url} />
      <PillarHeader data={headerSection} />
      <PillarIntroSection data={body} />
      <PillarCards data={articleCard} />
    </Layout>
  )
}

export default PillarPage

export const query = graphql`
  query PillarPage($slug: String!) {
    contentfulPillar(slug: { eq: $slug }) {
      id
      heroImage {
        fluid(maxWidth: 1440) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      header
      description
      body {
        body {
          raw
        }
      }
      seoImage {
        file {
          url
        }
      }
      articleCard {
        smallTitle
        largeTitle
        description
        tags
        url
        featuredImage {
          fluid(maxWidth: 400) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`
