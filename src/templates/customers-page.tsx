import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { $white } from "../styles/variables"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CarouselCustomers from "../components/carousel-customers"
import CaseStudiesSection, {
  CaseStudiesSectionData,
} from "../components/case-studies-section"
import TextBlockImageSection, {
  TextBlockImageSectionData,
} from "../components/textblock-image-section"
import BrandsSection2 from "../components/brands-section-2"
import CTA2 from "../components/cta2"

interface PageContext {
  id: string
  industryTypes: string[]
}

interface CustomersPageProps {
  readonly data: GatsbyTypes.CustomersPageQuery
  readonly pageContext: PageContext
}

const CustomersPage = ({ data, pageContext }: CustomersPageProps) => {
  const { contentfulCustomersPage, allContentfulCaseStudy, helpImage } = data
  const helpSection: TextBlockImageSectionData = {
    textPosition: "left",
    image: helpImage as GatsbyTypes.File,
    alt: "Chattermil helps customer focused companies build better products",
    textBlock: {
      subHeading:
        "Chattermil helps customer focused companies build better products",
      text: [
        "We'll partner with you on how best to leverage Chattermill as it relates to your customer experience goals. Learn how we'll help you drive customer experience best practices at your organization.",
      ],
      moreDetails: {
        button: {
          text: "Learn more",
          link: "/platform/",
          arrow: true,
        },
      },
    },
  }
  const caseStudiesSectionData: CaseStudiesSectionData = {
    heading: contentfulCustomersPage.caseStudyListingHeadline,
    caseStudies: allContentfulCaseStudy.edges.map(
      ({ node }) => node
    ) as GatsbyTypes.ContentfulCaseStudy[],
    industryTypes: pageContext.industryTypes,
  }
  return (
    <Layout className="customers-page">
      <SEO
        title={contentfulCustomersPage.metaTitle}
        description={contentfulCustomersPage.metaDescription}
      />
      <CarouselCustomers
        items={
          contentfulCustomersPage.carousel as GatsbyTypes.ContentfulCaseStudy[]
        }
        image={contentfulCustomersPage.heroImage as GatsbyTypes.ContentfulAsset}
      />
      <CaseStudiesSection data={caseStudiesSectionData} />
      <StyledTextBlockImageSection data={helpSection} />
      <StyledCTA2
        data={{
          shapeColor: "#DEF200",
          text: "Power your CX with Chattermill",
          subText:
            "Try chattermill today and learn why 1000s businesses use Chattermill as their customer understanding platform.",
        }}
      />
      <StyledBrandsSection2 withObserver />
    </Layout>
  )
}

export default CustomersPage

export const query = graphql`
  query CustomersPage($id: String!) {
    contentfulCustomersPage(id: { eq: $id }) {
      metaTitle
      metaDescription
      heroImage {
        fluid(maxWidth: 1920) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      carousel {
        id
        slug
        name
        carouselTitle
        carouselSubtitle
      }
      caseStudyListingHeadline
    }
    allContentfulCaseStudy {
      edges {
        node {
          id
          name
          slug
          thumbnailImage {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          thumbnailText {
            childMarkdownRemark {
              html
            }
          }
          company {
            industryType
          }
        }
      }
    }
    helpImage: file(relativePath: { eq: "chattermill-helps-customer.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 559
          quality: 80
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`

const StyledTextBlockImageSection = styled(TextBlockImageSection)`
  background: ${$white};
`
const StyledCTA2 = styled(CTA2)`
  background: ${$white};
`
const StyledBrandsSection2 = styled(BrandsSection2)`
  background: ${$white};
`
