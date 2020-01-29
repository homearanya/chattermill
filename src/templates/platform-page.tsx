import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderPlatform, {
  HeaderPlatformData,
} from "../components/platform-header"
import PlatformOverview, {
  PlatformOverviewData,
} from "../components/platform-overview"
import BenefitsSection, {
  BenefitsSectionData,
} from "../components/benefits-section"
import TextBlockImageSection, {
  TextBlockImageSectionData,
} from "../components/textblock-image-section"
import CTA2, { CTA2Data } from "../components/cta2"
import BrandsSection from "../components/brands-section"
import BrandsSection2 from "../components/brands-section-2"

import "../styles/scss/styles.scss"

interface PlatformPageProps {
  readonly data: PageQueryData
}

const PlatformPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        overview,
        benefitsSection,
        integrations,
        improve,
        nochances,
        CTASection,
      },
    },
  },
}: PlatformPageProps) => {
  return (
    <Layout className="platform-page">
      <SEO title={title} description={description} />
      <HeaderPlatform data={header} />
      <BrandsSection />
      <PlatformOverview data={overview} />
      <BenefitsSection data={benefitsSection} withBorder />
      <TextBlockImageSection data={integrations} />
      <TextBlockImageSection data={improve} />
      <TextBlockImageSection data={nochances} />
      <CTA2 data={CTASection} marginTop />
      <BrandsSection2 borderBottom withObserver />
    </Layout>
  )
}

export default PlatformPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: HeaderPlatformData
      overview: PlatformOverviewData
      benefitsSection: BenefitsSectionData
      integrations: TextBlockImageSectionData
      improve: TextBlockImageSectionData
      nochances: TextBlockImageSectionData
      CTASection: CTA2Data
    }
  }
}

export const query = graphql`
  query PlatformPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          backgroundImage {
            src {
              childImageSharp {
                fluid(maxWidth: 680) {
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
            button {
              text
              link
            }
          }
        }
        overview {
          image {
            childImageSharp {
              fluid(maxWidth: 308) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          textBlock {
            heading
            features {
              imageName
              smallHeading
              text
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
        integrations {
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
            button {
              text
              link
            }
          }
        }
        improve {
          textPosition
          image {
            childImageSharp {
              fluid(maxWidth: 561) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          textBlock {
            subHeading
            text
            button {
              text
              link
            }
          }
        }
        nochances {
          textPosition
          image {
            childImageSharp {
              fluid(maxWidth: 562) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          textBlock {
            subHeading
            text
            moreDetails {
              text
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
