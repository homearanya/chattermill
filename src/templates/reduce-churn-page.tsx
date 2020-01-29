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

interface ReduceChurnPageProps {
  readonly data: PageQueryData
}

const ReduceChurnPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        benefitsSection,
        textImageSection1,
        textImageSection2,
        textImageSection3,
        caseStudySection,
        CTASection,
      },
    },
  },
}: ReduceChurnPageProps) => (
  <Layout className="reduce-churn-page">
    <SEO title={title} description={description} />
    <StandardHeader data={header} />
    <BrandsSection />
    <BenefitsSection data={benefitsSection} />
    <TextBlockImageSection data={textImageSection1} className="first" />
    <TextBlockImageSection data={textImageSection2} className="second" />
    <TextBlockImageSection data={textImageSection3} className="third" />
    <BrandsSection2 withObserver />
    <CaseStudySection data={caseStudySection} />
    <CTA2 data={CTASection} />
  </Layout>
)

export default ReduceChurnPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: StandardHeaderData
      benefitsSection: BenefitsSectionData
      textImageSection1: TextBlockImageSectionData
      textImageSection2: TextBlockImageSectionData
      textImageSection3: TextBlockImageSectionData
      caseStudySection: CaseStudySectionData
      CTASection: CTA2Data
    }
  }
}

export const query = graphql`
  query ReduceChurnPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          backgroundImage {
            src {
              childImageSharp {
                fluid(maxWidth: 779) {
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
            button {
              text
              link
              secondary
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
        textImageSection1 {
          textPosition
          image {
            childImageSharp {
              fluid(maxWidth: 674) {
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
        textImageSection2 {
          textPosition
          image {
            childImageSharp {
              fluid(maxWidth: 442) {
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
        textImageSection3 {
          textPosition
          image {
            childImageSharp {
              fluid(maxWidth: 549) {
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
