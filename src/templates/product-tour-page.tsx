import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import media from "../styles/media"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StandardHeader, {
  StandardHeaderData,
} from "../components/standard-header"
import TextBlockImageSection, {
  TextBlockImageSectionData,
} from "../components/textblock-image-section"
import SignUpSection, { SignUpSectionData } from "../components/sign-up-section"
import LoomVideosTable from "../components/loom-videos-table"
import BrandsSection2 from "../components/brands-section-2"
import CTA2, { CTA2Data } from "../components/cta2"
import { TextBlockData } from "../types"

import "../styles/scss/styles.scss"

interface ProductDemoPageProps {
  readonly data: PageQueryData
}

const ProductDemoPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        tableSection,
        exploreOurPlatform,
        signUpForm,
        CTASection,
      },
    },
  },
}: ProductDemoPageProps) => (
  <Layout className="product-tour-page">
    <SEO title={title} description={description} />
    <StyledHeader data={header} />
    <LoomVideosTable data={tableSection} />
    <TextBlockImageSection data={exploreOurPlatform} />
    <SignUpSection data={signUpForm} />
    <BrandsSection2 withObserver />
    <CTA2 data={CTASection} />
  </Layout>
)

export default ProductDemoPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: StandardHeaderData
      tableSection: TextBlockData
      exploreOurPlatform: TextBlockImageSectionData
      signUpForm: SignUpSectionData
      CTASection: CTA2Data
    }
  }
}

export const query = graphql`
  query ProductDemoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          backgroundImage {
            src {
              childImageSharp {
                gatsbyImageData(
                  width: 563
                  quality: 100
                  placeholder: NONE
                  layout: CONSTRAINED
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
            }
          }
        }
        tableSection {
          subHeading
          text
        }
        exploreOurPlatform {
          textPosition
          alt
          image {
            childImageSharp {
              gatsbyImageData(
                width: 500
                quality: 100
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
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
        signUpForm {
          title
          subTitle
          imageCaption
          imageFile {
            childImageSharp {
              gatsbyImageData(
                width: 500
                quality: 100
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            publicURL
          }
          documentFile {
            url
            fileName
            contentType
          }
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
const StyledHeader = styled(StandardHeader)`
  margin-top: 3rem;
  ${media.lessThan("md")`
    margin-top: 0;
  `};
  .text-block {
    ${media.lessThan("md")`
      padding: 11rem 0 5rem;
    `};
    ${media.lessThan("sm")`
      padding: 5rem 0;
    `};
  }
`
