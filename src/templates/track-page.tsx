import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StandardHeader, {
  StandardHeaderData,
} from "../components/standard-header"
import BrandsSection from "../components/brands-section"
import BrandsSection2 from "../components/brands-section-2"
import TrackSection, { TrackSectionData } from "../components/track-section"
import CaseStudySection, {
  CaseStudySectionData,
} from "../components/case-study-section"
import CTA2, { CTA2Data } from "../components/cta2"

import "../styles/scss/styles.scss"

interface TrackPageProps {
  readonly data: PageQueryData
}

const TrackPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        trackSection,
        caseStudySection,
        CTASection,
      },
    },
  },
}: TrackPageProps) => (
  <Layout className="track-page">
    <SEO title={title} description={description} />
    <StandardHeader data={header} />
    <BrandsSection />
    <TrackSection data={trackSection} />
    <BrandsSection2 withObserver borderTop />
    <CaseStudySection data={caseStudySection} />
    <CTA2 data={CTASection} />
  </Layout>
)

export default TrackPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: StandardHeaderData
      trackSection: TrackSectionData[]
      caseStudySection: CaseStudySectionData
      CTASection: CTA2Data
    }
  }
}

export const query = graphql`
  query TrackPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          backgroundImage {
            src {
              childImageSharp {
                fluid(maxWidth: 707) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            alt
          }
          textBlock {
            tagline
            subHeading
            text
            emailForm {
              textPlaceholder
              buttonText
            }
          }
        }
        trackSection {
          image {
            src {
              childImageSharp {
                fluid(maxWidth: 769) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            alt
          }
          textBlock {
            smallHeading
            text
          }
        }
        caseStudySection {
          backgroundImage {
            childImageSharp {
              fixed(width: 575) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          textBlock {
            tagline
            subHeading
            text
          }
          image {
            childImageSharp {
              fluid(maxWidth: 528) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        CTASection {
          shapeColor
          text
          textPlaceholder
          buttonText
        }
      }
    }
  }
`
