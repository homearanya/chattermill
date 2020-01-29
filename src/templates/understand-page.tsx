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
import SegmentSection, {
  SegmentSectionData,
} from "../components/segment-section"
import CaseStudySection, {
  CaseStudySectionData,
} from "../components/case-study-section"
import CustomerExperienceSection, {
  CustomerExperienceSectionData,
} from "../components/customer-experience-section"
import BrandsSection2 from "../components/brands-section-2"
import CTA2, { CTA2Data } from "../components/cta2"

import "../styles/scss/styles.scss"

interface UnderstandPageProps {
  readonly data: PageQueryData
}

const UnderstandPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        benefitsSection,
        segmentSection,
        caseStudySection,
        customerExperienceSection,
        CTASection,
      },
    },
  },
}: UnderstandPageProps) => (
  <Layout className="understand-page">
    <SEO title={title} description={description} />
    <StandardHeader data={header} />
    <BrandsSection />
    <BenefitsSection data={benefitsSection} />
    <CustomerExperienceSection data={customerExperienceSection} />
    <SegmentSection data={segmentSection} />
    <CaseStudySection data={caseStudySection} />
    <BrandsSection2 withObserver />
    <CTA2 data={CTASection} />
  </Layout>
)

export default UnderstandPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: StandardHeaderData
      benefitsSection: BenefitsSectionData
      customerExperienceSection: CustomerExperienceSectionData
      segmentSection: SegmentSectionData
      caseStudySection: CaseStudySectionData
      CTASection: CTA2Data
    }
  }
}

export const query = graphql`
  query UnderstandPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          backgroundImage {
            src {
              childImageSharp {
                fluid(maxWidth: 563) {
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
            }
          }
        }
        benefitsSection {
          benefits {
            imageName
            smallHeading
            text
          }
        }
        customerExperienceSection {
          experiences {
            image {
              src {
                childImageSharp {
                  fluid(maxWidth: 500) {
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
        segmentSection {
          features {
            shapeColor
            image {
              src {
                childImageSharp {
                  fluid(maxWidth: 640) {
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
