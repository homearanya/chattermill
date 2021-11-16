import React from "react"
import { graphql } from "gatsby"

import { contentfulImageMap } from "../utils/helpers"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BrandsSection from "../components/brands-section"
import PartnerFeatures, {
  PartnerFeaturesData,
} from "../components/partner-features"
import CaseStudySection, {
  CaseStudySectionData,
} from "../components/case-study-section"
import BrandsSection2 from "../components/brands-section-2"
import CTA2, { CTA2Data } from "../components/cta2"
interface PartnerPageProps {
  readonly data: GatsbyTypes.PartnerPageQuery
}
import PartnerCTA, { PartnerCTAData } from "../components/partner-cta"
import PartnerHeader, { PartnerHeaderData } from "../components/partner-header"

const PartnerPage = ({
  data: {
    contentfulPartner: {
      title,
      metaDescription,
      headerTagline,
      headerHeading,
      headerImage,
      section1ShapeColor,
      section1Image,
      section1Heading,
      section1Description,
      section2ShapeColor,
      section2Image,
      section2Heading,
      section2Description,
      section3ShapeColor,
      section3Image,
      section3Heading,
      section3Description,
      integrationCtaHeading,
      integrationCtaSubHeading,
      integrationCtaButtonText,
      caseStudyBackgroundImange,
      caseStudyCardImage,
      caseStudyTagline,
      caseStudyHeading,
      caseStudyDescription,
      ctaSectionShapeColor,
      ctaSectionText,
      //   ctaSectionPlaceholderText,
      //   ctaSectionButtonText,
    },
  },
}: PartnerPageProps) => {
  const header: PartnerHeaderData = {
    backgroundImage: headerImage
      ? {
          src: contentfulImageMap(headerImage),
          alt: headerImage.description || headerImage.title,
        }
      : undefined,
    textBlock: {
      tagline: headerTagline,
      subHeading: headerHeading,
    },
  }
  const partnerFeatures: PartnerFeaturesData = {
    features: [
      {
        shapeColor: section1ShapeColor,
        image: section1Image
          ? {
              src: contentfulImageMap(section1Image),
              alt: section1Image.description || section1Image.title,
            }
          : undefined,
        textBlock: {
          smallHeading: section1Heading,
          text: [section1Description.section1Description],
        },
      },
      {
        shapeColor: section2ShapeColor,
        image: section2Image
          ? {
              src: contentfulImageMap(section2Image),
              alt: section2Image.description || section2Image.title,
            }
          : undefined,
        textBlock: {
          smallHeading: section2Heading,
          text: [section2Description.section2Description],
        },
      },
      {
        shapeColor: section3ShapeColor,
        image: section3Image
          ? {
              src: contentfulImageMap(section3Image),
              alt: section3Image.description || section3Image.title,
            }
          : undefined,
        textBlock: {
          smallHeading: section3Heading,
          text: [section3Description.section3Description],
        },
      },
    ],
  }

  const partnerCTAData: PartnerCTAData = {
    integrationCtaHeading,
    integrationCtaSubHeading,
    integrationCtaButtonText,
  }
  const caseStudySection: CaseStudySectionData = {
    backgroundImage: caseStudyBackgroundImange
      ? contentfulImageMap(caseStudyBackgroundImange)
      : undefined,
    textBlock: {
      tagline: caseStudyTagline,
      subHeading: caseStudyHeading,
      text: [caseStudyDescription.childMarkdownRemark?.html],
    },
    image: caseStudyCardImage
      ? contentfulImageMap(caseStudyCardImage)
      : undefined,
  }

  const ctaSection: CTA2Data = {
    shapeColor: ctaSectionShapeColor,
    text: ctaSectionText,
    // textPlaceholder: ctaSectionPlaceholderText,
    // buttonText: ctaSectionButtonText,
  }

  return (
    <Layout className="partner-page">
      <SEO title={`${title} Partnership`} description={metaDescription} />
      <PartnerHeader data={header} />
      <BrandsSection />
      <PartnerFeatures data={partnerFeatures} />
      <PartnerCTA data={partnerCTAData} />
      <CaseStudySection data={caseStudySection} />
      <BrandsSection2 withObserver />
      <CTA2 data={ctaSection} />
    </Layout>
  )
}

export default PartnerPage

export const query = graphql`
  query PartnerPage($id: String!) {
    contentfulPartner(id: { eq: $id }) {
      title
      metaDescription
      headerTagline
      headerHeading
      headerImage {
        title
        description
        file {
          url
        }
        fluid(maxWidth: 250) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      section1ShapeColor
      section1Image {
        title
        description
        file {
          url
        }
        fluid(maxWidth: 640) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      section1Heading
      section1Description {
        section1Description
      }
      section2ShapeColor
      section2Image {
        title
        description
        file {
          url
        }
        fluid(maxWidth: 640) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      section2Heading
      section2Description {
        section2Description
      }
      section3ShapeColor
      section3Image {
        title
        description
        file {
          url
        }
        fluid(maxWidth: 640) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      section3Heading
      section3Description {
        section3Description
      }
      integrationCtaHeading
      integrationCtaSubHeading
      integrationCtaButtonText
      caseStudyBackgroundImange {
        title
        description
        file {
          url
        }
        fluid(maxWidth: 575) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      caseStudyCardImage {
        file {
          url
        }
        fluid(maxWidth: 528) {
          ...GatsbyContentfulFluid_withWebp
        }
        title
      }
      caseStudyTagline
      caseStudyHeading
      caseStudyDescription {
        childMarkdownRemark {
          html
        }
      }
      ctaSectionShapeColor
      ctaSectionText
      ctaSectionPlaceholderText
      ctaSectionButtonText
    }
  }
`
