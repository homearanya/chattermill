import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StandardHeader, {
  StandardHeaderData,
} from "../components/standard-header"
import BenefitsSection, {
  BenefitsSectionData,
} from "../components/benefits-section"
import TextBlockImageSection, {
  TextBlockImageSectionData,
} from "../components/textblock-image-section"
import BrandsSection from "../components/brands-section"
import CTA2, { CTA2Data } from "../components/cta2"
import BrandsSection2 from "../components/brands-section-2"
import CaseStudySection, {
  CaseStudySectionData,
} from "../components/case-study-section"
import UnlockTable, { UnlockTableData } from "../components/unlock-table"

import "../styles/scss/styles.scss"

interface UnlockPageProps {
  readonly data: PageQueryData
}

const UnlockPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        benefitsSection,
        one,
        two,
        three,
        unlockTable,
        CTASection,
        caseStudySection,
      },
    },
  },
}: UnlockPageProps) => {
  return (
    <Layout className="unlock-page">
      <SEO title={title} description={description} />
      <StandardHeader data={header} />
      <BrandsSection />
      <BenefitsSection data={benefitsSection} />
      <TextBlockImageSection data={one} className="first" />
      <TextBlockImageSection data={two} className="second" />
      <TextBlockImageSection data={three} className="third" />
      <UnlockTable data={unlockTable} withBoxShadow />
      <BrandsSection2 withObserver />
      <CTA2 data={CTASection} />
      <CaseStudySection data={caseStudySection} />
    </Layout>
  )
}

export default UnlockPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: StandardHeaderData
      benefitsSection: BenefitsSectionData
      one: TextBlockImageSectionData
      two: TextBlockImageSectionData
      three: TextBlockImageSectionData
      unlockTable: UnlockTableData
      CTASection: CTA2Data
      caseStudySection: CaseStudySectionData
    }
  }
}

const query = graphql`
  query UnlockPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          backgroundImage {
            src {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  quality: 90
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
              text
              link
              inverted
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
        one {
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
        two {
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
        three {
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
        unlockTable {
          heading
          textBlock {
            subHeading
          }
          benefits {
            imageName
            alt
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
        CTASection {
          shapeColor
          text
          subText
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
      }
    }
  }
`
