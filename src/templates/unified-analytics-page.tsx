import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StandardHeader from "../components/standard-header"
import BrandsSection from "../components/brands-section"
import BenefitsSection from "../components/benefits-section"
import TextBlockImageSection from "../components/textblock-image-section"
import CaseStudySection from "../components/case-study-section"
import BrandsSection2 from "../components/brands-section-2"
import CTA2 from "../components/cta2"

interface UnifiedAnalyticsProps {
  readonly data: GatsbyTypes.UnifiedAnalyticsPageQuery
}

const UnifiedAnalyticsPage = ({
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
}: UnifiedAnalyticsProps) => (
  <Layout className="unified-analytics-page">
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

export default UnifiedAnalyticsPage

export const query = graphql`
  query UnifiedAnalyticsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          backgroundImage {
            src {
              childImageSharp {
                gatsbyImageData(
                  width: 683
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
            text
            button {
              secondary
              text
              link
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
        understand {
          textPosition
          image {
            childImageSharp {
              gatsbyImageData(
                width: 491
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
        measure {
          textPosition
          image {
            childImageSharp {
              gatsbyImageData(
                width: 618
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
        prioritise {
          textPosition
          image {
            childImageSharp {
              gatsbyImageData(
                width: 530
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
              gatsbyImageData(
                width: 575
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
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
