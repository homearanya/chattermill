import React, { useRef } from "react"
import { scroller } from "react-scroll"
import { graphql } from "gatsby"

import { contentfulImageMap } from "../utils/helpers"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PartnersHeader, {
  PartnersHeaderData,
} from "../components/partners-header"
import BenefitsSection, {
  BenefitsSectionData,
} from "../components/benefits-section"
import CTA, { CTAData } from "../components/cta"
import BrandsSection2 from "../components/brands-section-2"
import CaseStudySection, {
  CaseStudySectionData,
} from "../components/case-study-section"
import PartnersTable, { PartnersTableData } from "../components/partners-table"

import "../styles/scss/styles.scss"

interface PartnersPageProps {
  readonly path: string
  readonly data: GatsbyTypes.PartnersPageQuery
}

const PartnersPage = ({
  path,
  data: {
    contentfulPartnersPage: {
      metaTitle,
      metaDescription,
      headerHeading,
      headerDescription,
      headerImage,
      benefitIcon1,
      benefitHeading1,
      benefitDescription1,
      benefitIcon2,
      benefitHeading2,
      benefitDescription2,
      benefitIcon3,
      benefitHeading3,
      benefitDescription3,
      partnersTableHeading,
      cta,
      caseStudyTagline,
      caseStudyHeading,
      caseStudyDescription,
      caseStudyButton,
      caseStudyImage,
    },
  },
}: PartnersPageProps) => {
  const firstNameRef = useRef<HTMLInputElement | null>(null)
  const getStarted = () => {
    scroller.scrollTo("partners-form", {
      duration: 1000,
      smooth: "easeInOut",
    })
    firstNameRef.current.focus()
  }
  const partnersDirectory: PartnersTableData = {
    heading: partnersTableHeading,
  }
  const header: PartnersHeaderData = {
    backgroundImage: headerImage
      ? {
          src: contentfulImageMap(headerImage),
          alt: headerImage.description || headerImage.title,
        }
      : undefined,
    textBlock: {
      subHeading: headerHeading,
      text: [headerDescription.headerDescription],
    },
  }
  const benefitsSection: BenefitsSectionData = {
    benefits: [
      {
        image: benefitIcon1 ? contentfulImageMap(benefitIcon1) : undefined,
        smallHeading: benefitHeading1,
        text: [benefitDescription1.benefitDescription1],
      },
      {
        image: benefitIcon2 ? contentfulImageMap(benefitIcon2) : undefined,
        smallHeading: benefitHeading2,
        text: [benefitDescription2.benefitDescription2],
      },
      {
        image: benefitIcon3 ? contentfulImageMap(benefitIcon3) : undefined,
        smallHeading: benefitHeading3,
        text: [benefitDescription3.benefitDescription3],
      },
    ],
  }
  const CTASection: CTAData = {
    shapeColor: cta.shapeColor,
    backgroundColor: cta.backgroundColor,
    textBlock: {
      subHeading: cta.heading,
      button: {
        text: cta.button1.displayText,
        onClick: getStarted,
      },
      button2: {
        text: cta.button2.displayText,
        link: cta.button2.path,
      },
    },
  }

  const caseStudySection: CaseStudySectionData = {
    image: caseStudyImage ? contentfulImageMap(caseStudyImage) : undefined,
    textBlock: {
      tagline: caseStudyTagline,
      subHeading: caseStudyHeading,
      text: [caseStudyDescription.caseStudyDescription],
      button: {
        text: caseStudyButton.displayText,
        link: caseStudyButton.path || caseStudyButton.externalUrl,
      },
    },
  }
  return (
    <Layout className="partners-page">
      <SEO title={metaTitle} description={metaDescription} />
      <PartnersHeader data={header} path={path} />
      <BenefitsSection data={benefitsSection} inverted />
      <PartnersTable data={partnersDirectory} withBoxShadow />
      <BrandsSection2 withObserver />
      <CTA data={CTASection} />
      <CaseStudySection data={caseStudySection} />
    </Layout>
  )
}

export default PartnersPage

export const query = graphql`
  query PartnersPage($id: String!) {
    contentfulPartnersPage(id: { eq: $id }) {
      metaTitle
      metaDescription
      headerHeading
      headerDescription {
        headerDescription
      }
      headerImage {
        gatsbyImageData(
          width: 400
          quality: 100
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
        title
        description
        file {
          url
        }
      }
      benefitIcon1 {
        gatsbyImageData(
          width: 55
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
        title
        description
        file {
          url
        }
      }
      benefitHeading1
      benefitDescription1 {
        benefitDescription1
      }
      benefitIcon2 {
        gatsbyImageData(
          width: 55
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
        title
        description
        file {
          url
        }
      }
      benefitHeading2
      benefitDescription2 {
        benefitDescription2
      }
      benefitIcon3 {
        gatsbyImageData(
          width: 55
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
        title
        description
        file {
          url
        }
      }
      benefitHeading3
      benefitDescription3 {
        benefitDescription3
      }
      partnersTableHeading
      cta {
        heading
        button1 {
          displayText
        }
        button2 {
          displayText
          path
        }
        shapeColor
        backgroundColor
      }
      caseStudyTagline
      caseStudyHeading
      caseStudyDescription {
        caseStudyDescription
      }
      caseStudyButton {
        displayText
        path
        externalUrl
      }
      caseStudyImage {
        gatsbyImageData(
          width: 528
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
        title
        description
        file {
          url
        }
      }
    }
  }
`
