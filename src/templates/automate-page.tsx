import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StandardHeader, {
  StandardHeaderData,
} from "../components/standard-header"
import BrandsSection from "../components/brands-section"
import AutomateOverview, {
  AutomateOverviewData,
} from "../components/automate-overview"
import TextBlockImageSection, {
  TextBlockImageSectionData,
} from "../components/textblock-image-section"
import BrandsSection2 from "../components/brands-section-2"
import CaseStudySection, {
  CaseStudySectionData,
} from "../components/case-study-section"
import CTA2, { CTA2Data } from "../components/cta2"

import "../styles/scss/styles.scss"

interface AutomatePageProps {
  readonly data: PageQueryData
}

const AutomatePage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        overview,
        integrate,
        neverMiss,
        eliminate,
        caseStudySection,
        CTASection,
      },
    },
  },
}: AutomatePageProps) => (
  <Layout className="automate-page">
    <SEO title={title} description={description} />
    <StandardHeader data={header} />
    <BrandsSection />
    <AutomateOverview data={overview} />
    <TextBlockImageSection data={integrate} className="first" />
    <TextBlockImageSection data={neverMiss} className="second" />
    <TextBlockImageSection data={eliminate} className="third" />
    <BrandsSection2 withObserver />
    <CTA2 data={CTASection} />
    <CaseStudySection data={caseStudySection} />
  </Layout>
)

export default AutomatePage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: StandardHeaderData
      overview: AutomateOverviewData
      integrate: TextBlockImageSectionData
      neverMiss: TextBlockImageSectionData
      eliminate: TextBlockImageSectionData
      caseStudySection: CaseStudySectionData
      CTASection: CTA2Data
    }
  }
}

export const query = graphql`
  query AutomatePageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          backgroundImage {
            src {
              childImageSharp {
                fluid(maxWidth: 601) {
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
        overview {
          textBlock {
            subHeading
            text
          }
          steps {
            textBlock {
              imageName
              smallHeading
              text
            }
          }
        }
        integrate {
          textPosition
          image {
            childImageSharp {
              fluid(maxWidth: 482) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          textBlock {
            subHeading
            text
          }
        }
        neverMiss {
          textPosition
          image {
            childImageSharp {
              fluid(maxWidth: 482) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          textBlock {
            subHeading
            text
          }
        }
        eliminate {
          textPosition
          image {
            childImageSharp {
              fluid(maxWidth: 482) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          textBlock {
            subHeading
            text
          }
        }
        CTASection {
          shapeColor
          text
          textPlaceholder
          buttonText
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
      }
    }
  }
`
