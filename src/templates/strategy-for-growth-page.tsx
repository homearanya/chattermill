import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StandardHeader, {
  StandardHeaderData,
} from "../components/standard-header"
import BrandsSection from "../components/brands-section"
import BenefitsSection, {
  BenefitsSectionData,
} from "../components/benefits-section"
import TextBlockImageSection, {
  TextBlockImageSectionData,
} from "../components/textblock-image-section"
import CaseStudySection, {
  CaseStudySectionData,
} from "../components/case-study-section"
import BrandsSection2 from "../components/brands-section-2"
import CTA2, { CTA2Data } from "../components/cta2"

import "../styles/scss/styles.scss"

interface StrategyForGrowthPageProps {
  readonly data: PageQueryData
}

const StrategyForGrowthPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        benefitsSection,
        understand,
        measure,
        prioritise,
        caseStudySection,
        CTASection,
      },
    },
  },
}: StrategyForGrowthPageProps) => (
  <Layout className="strategy-for-growth-page">
    <SEO title={title} description={description} />
    <StandardHeader data={header} />
    <BrandsSection />
    <BenefitsSection data={benefitsSection} />
    <TextBlockImageSection data={understand} className="first" />
    <TextBlockImageSection data={measure} className="second" />
    <TextBlockImageSection data={prioritise} className="third" />
    <BrandsSection2 withObserver />
    <CaseStudySection data={caseStudySection} />
    <CTA2 data={CTASection} />
  </Layout>
)

export default StrategyForGrowthPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: StandardHeaderData
      benefitsSection: BenefitsSectionData
      understand: TextBlockImageSectionData
      measure: TextBlockImageSectionData
      prioritise: TextBlockImageSectionData
      caseStudySection: CaseStudySectionData
      CTASection: CTA2Data
    }
  }
}

export const query = graphql`
  query StrategyForGrowthPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          backgroundImage {
            src {
              childImageSharp {
                fluid(maxWidth: 683) {
                  ...GatsbyImageSharpFluid_noBase64
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
            button {
              secondary
              text
            }
          }
        }
        benefitsSection {
          benefits {
            imageName
            smallHeading
            text
            moreDetails {
              button {
                arrow
              }
            }
          }
        }
        understand {
          textPosition
          image {
            childImageSharp {
              fluid(maxWidth: 491) {
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
        measure {
          textPosition
          image {
            childImageSharp {
              fluid(maxWidth: 618) {
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
        prioritise {
          textPosition
          image {
            childImageSharp {
              fluid(maxWidth: 530) {
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
