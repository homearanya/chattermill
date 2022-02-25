import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import StandardHeaderCentered from "../components/standard-header-centered"
import FeatureSectionProduct from "../components/features-section-product"
import ProductPageSection from "../components/product-page-section"
import ProductPageG2Section from "../components/product-page-g2-section"
import ProductPageQuotes from "../components/product-page-quotes"
import ProductPageCTA from "../components/product-page-cta"
import SEO from "../components/seo"
import ProductDashboard from "../components/product-dashboard"
// import StandardHeaderCentered from '../components/standard-header-centered'

const ProductPage = ({
  data: {
    contentfulProductPage: {
      caseStudies,
      seoImage: {
        file: { url },
      },
      caseStudyHeading,
      description,
      features,
      g2Heading,
      g2features,
      header,
      sectionTitle,
      sectionDescription: { sectionDescription },
      sectionImage,
      sectionTitle2,
      sectionDescription2,
      sectionImage2,
      sectionTitle3,
      sectionDecription3,
      sectionImage3,
      sectionTitle4,
      sectionDescription4,
      sectionImage4,
      ctaHeading,
    },
  },
}) => {
  const headerSection = {
    header,
    description,
  }

  const productSectionData = {
    sectionTitle,
    sectionDescription: {
      sectionDescription,
    },
    sectionImage,
    sectionTitle2,
    sectionDescription2,
    sectionImage2,
    sectionTitle3,
    sectionDecription3,
    sectionImage3,
    sectionTitle4,
    sectionDescription4,
    sectionImage4,
  }

  const g2SectionData = {
    g2Heading,
    g2features,
  }

  const caseStudyData = {
    caseStudies,
    caseStudyHeading,
  }

  return (
    <Layout>
      <SEO
        title={header}
        description={description}
        featuredImage={`https:${url}`}
      />
      <StandardHeaderCentered data={headerSection} />
      <FeatureSectionProduct data={features} />
      <ProductPageSection data={productSectionData} />
      <ProductPageG2Section data={g2SectionData} />
      <ProductPageQuotes data={caseStudyData} />
      <ProductPageCTA data={ctaHeading} />
      <ProductDashboard />
    </Layout>
  )
}

export default ProductPage

const query = graphql`
  query($slug: String!) {
    contentfulProductPage(slug: { eq: $slug }) {
      seoImage {
        file {
          url
        }
      }
      header
      description
      features {
        icon {
          file {
            url
          }
        }
        description
        label
      }
      sectionTitle
      sectionDescription {
        sectionDescription
      }
      sectionImage {
        file {
          url
        }
      }
      sectionTitle2
      sectionDescription2
      sectionImage2 {
        file {
          url
        }
      }
      sectionTitle3
      sectionDecription3
      sectionImage3 {
        file {
          url
        }
      }
      sectionTitle4
      sectionDescription4
      sectionImage4 {
        file {
          url
        }
      }
      g2Heading
      g2features {
        description
        label
        icon {
          file {
            url
          }
        }
      }
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
      ctaHeading
    }
  }
`
