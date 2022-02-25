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

interface UncoverInsightsPageProps {
  readonly data: PageQueryData
}

const UncoverInsightsPage = ({
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
}: UncoverInsightsPageProps) => (
  <Layout className="uncover-insights-page">
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

export default UncoverInsightsPage

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
  query UncoverInsightsPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          backgroundImage {
            src {
              childImageSharp {
                gatsbyImageData(
                  width: 548
                  quality: 100
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
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
            alt
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
              gatsbyImageData(
                width: 574
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            publicURL
          }
          alt
          textBlock {
            subHeading
            text
          }
        }
        textImageSection2 {
          textPosition
          image {
            childImageSharp {
              gatsbyImageData(
                width: 646
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            publicURL
          }
          alt
          textBlock {
            subHeading
            text
          }
        }
        textImageSection3 {
          textPosition
          image {
            childImageSharp {
              gatsbyImageData(
                width: 486
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            publicURL
          }
          alt
          textBlock {
            subHeading
            text
          }
        }
        caseStudySection {
          backgroundImage {
            childImageSharp {
              gatsbyImageData(width: 575, layout: FIXED, formats: [AUTO, WEBP])
            }
          }
          alt
          textBlock {
            tagline
            subHeading
            text
          }
          image {
            childImageSharp {
              gatsbyImageData(
                width: 528
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
          imageAlt
        }
        CTASection {
          shapeColor
          text
          subText
        }
      }
    }
  }
`
