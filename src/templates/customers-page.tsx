import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CustomersHeader, {
  CustomersHeaderData,
} from "../components/customers-header"
import CustomersQuotesSection, {
  CustomersQuotesSectionData,
} from "../components/customers-quotes-section"
import BrandsSection from "../components/brands-section"
import CaseStudiesSection, {
  CaseStudiesSectionData,
} from "../components/case-studies-section"
import TextBlockImageSection, {
  TextBlockImageSectionData,
} from "../components/textblock-image-section"
import BrandsSection2 from "../components/brands-section-2"
import CTA2, { CTA2Data } from "../components/cta2"

import "../styles/scss/styles.scss"

interface CustomersPageProps {
  readonly data: PageQueryData
}

const CustomersPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        customersQuotesSection,
        caseStudiesSection,
        helpsSection,
        CTASection,
      },
    },
  },
}: CustomersPageProps) => (
  <Layout className="customers-page">
    <SEO title={title} description={description} />
    <CustomersHeader data={header} />
    <CustomersQuotesSection data={customersQuotesSection} />
    <BrandsSection withObserver />
    <CaseStudiesSection data={caseStudiesSection} />
    <TextBlockImageSection data={helpsSection} />
    <BrandsSection2 withObserver />
    <CTA2 data={CTASection} />
  </Layout>
)

export default CustomersPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: CustomersHeaderData
      customersQuotesSection: CustomersQuotesSectionData
      caseStudiesSection: CaseStudiesSectionData
      helpsSection: TextBlockImageSectionData
      CTASection: CTA2Data
    }
  }
}

export const query = graphql`
  query CustomersPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          backgroundImage {
            src {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            alt
          }
        }
        customersQuotesSection {
          heading
          customersQuotes {
            customerHeader {
              src {
                childImageSharp {
                  fluid(maxWidth: 380) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
              }
              alt
            }
            customerLogo
            text
            person {
              image
              name
              role
            }
          }
        }
        caseStudiesSection {
          heading
          caseStudies {
            imageName
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
        helpsSection {
          textPosition
          image {
            childImageSharp {
              fluid(maxWidth: 559) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          textBlock {
            subHeading
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
          textPlaceholder
          buttonText
        }
      }
    }
  }
`
