import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader, { HomeHeaderData } from "../components/home-header"
import BrandsSection from "../components/brands-section"
import BrandsSection2 from "../components/brands-section-2"
import PlatformSection, {
  PlatformSectionData,
} from "../components/platform-section"
import { CaseStudySectionData } from "../components/case-study-section"
import CTA2, { CTA2Data } from "../components/cta2"
import ProductPageQuotes from "../components/product-page-quotes"

import "../styles/scss/styles.scss"

interface HomePageProps {
  readonly data: PageQueryData
}

const HomePage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, description, header, platformSection, CTASection },
    },
    contentfulProductPage: { caseStudies, caseStudyHeading },
  },
}: HomePageProps) => {
  const caseStudyData = {
    caseStudies,
    caseStudyHeading,
  }
  return (
    <Layout className="home-page">
      <SEO title={title} description={description} />
      <HomeHeader data={header} />
      <BrandsSection />
      <PlatformSection data={platformSection} />
      <ProductPageQuotes data={caseStudyData} />
      <CTA2 data={CTASection} />
      {/* <BrandsSection2 borderBottom withObserver /> */}
    </Layout>
  )
}

export default HomePage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: HomeHeaderData
      platformSection: PlatformSectionData
      caseStudySection: CaseStudySectionData
      CTASection: CTA2Data
    }
  }
  contentfulProductPage: {
    caseStudyHeading: string
    caseStudies: {
      title: string
      quote: string
      name: string
      photoImage: {
        file: {
          url: string
        }
      }
    }
  }
}

const query = graphql`
  query HomePageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          backgroundImage {
            src {
              childImageSharp {
                gatsbyImageData(
                  width: 767
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
            heading
            subHeading
            text
            emailForm {
              textPlaceholder
              buttonText
            }
          }
        }
        platformSection {
          heading
          button {
            text
            link
          }
          features {
            video {
              src {
                id
                publicURL
              }
            }
            textBlock {
              imageName
              subHeading
              text
              button {
                text
                link
              }
            }
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
    contentfulProductPage {
      caseStudyHeading
      caseStudies {
        photoImage {
          gatsbyImageData(
            width: 100
            quality: 92
            layout: CONSTRAINED
            placeholder: NONE
            formats: [AUTO, WEBP]
          )
        }
        title
        quote
        name
      }
    }
  }
`
