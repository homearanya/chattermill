import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StandardHeader, {
  StandardHeaderData,
} from "../components/standard-header"
import { Brand } from "../components/brands"
import BrandsSection from "../components/brands-section"
import BenefitsSection, {
  BenefitsSectionData,
} from "../components/benefits-section"
import TextBlockImageSection, {
  TextBlockImageSectionData,
} from "../components/textblock-image-section"
import CaseStudySection, {
  CaseStudySectionData,
} from "../components/case-study-section"
import BrandsSection2 from "../components/brands-section-2"
import CTA2, { CTA2Data } from "../components/cta2"

import "../styles/scss/styles.scss"
import { contentfulImageMap } from "../utils/helpers"

interface InvestorPageProps {
  readonly data: GatsbyTypes.InvestorPageQuery
}

const InvestorPage = ({
  data: {
    contentfulInvestor: {
      title,
      headerHeading,
      headerSubheading,
      headerText: { headerText },
      headerButtonText,
      headerButtonLink,
      headerImage,
      brands: brandsContentful,
      feature1Image,
      feature1Title,
      feature1Text: { feature1Text },
      feature2Image,
      feature2Title,
      feature2Text: { feature2Text },
      feature3Image,
      feature3Title,
      feature3Text: { feature3Text },
      section1Image,
      section1Heading,
      section1Text: { section1Text },
      section2Image,
      section2Heading,
      section2Text: { section2Text },
      section3Image,
      section3Heading,
      section3Text: { section3Text },
      brands2: brandsContentful2,
      caseStudyHeading,
      caseStudyText: { caseStudyText },
      caseStudyCardImage,
      caseStudyBackgroundImage,
      caseStudyDownloadLink,
      ctaHeading,
      ctaColor = "10C2ED",
    },
  },
}: InvestorPageProps) => {
  const header: StandardHeaderData = {
    backgroundImage: {
      src: contentfulImageMap(headerImage),
      alt: headerImage.title,
    },
    textBlock: {
      tagline: headerHeading,
      subHeading: headerSubheading,
      text: [headerText],
      button: {
        text: headerButtonText,
        link: headerButtonLink,
        secondary: true,
      },
    },
  }
  const benefitsSection: BenefitsSectionData = {
    benefits: [
      {
        image: contentfulImageMap(feature1Image),
        smallHeading: `<span class="underline">${feature1Title}</span>`,
        text: [feature1Text],
      },
      {
        image: contentfulImageMap(feature2Image),
        smallHeading: `<span class="underline">${feature2Title}</span>`,
        text: [feature2Text],
      },
      {
        image: contentfulImageMap(feature3Image),
        smallHeading: `<span class="underline">${feature3Title}</span>`,
        text: [feature3Text],
      },
    ],
  }
  const understand: TextBlockImageSectionData = {
    textPosition: "right",
    image: contentfulImageMap(section1Image),
    alt: section1Image.title,
    textBlock: {
      subHeading: section1Heading,
      text: [section1Text],
    },
  }
  const measure: TextBlockImageSectionData = {
    textPosition: "left",
    image: contentfulImageMap(section2Image),
    alt: section2Image.title,
    textBlock: {
      subHeading: section2Heading,
      text: [section2Text],
    },
  }
  const prioritise: TextBlockImageSectionData = {
    textPosition: "right",
    image: contentfulImageMap(section3Image),
    alt: section3Image.title,
    textBlock: {
      subHeading: section3Heading,
      text: [section3Text],
    },
  }
  const caseStudySection: CaseStudySectionData = {
    backgroundImage: contentfulImageMap(caseStudyBackgroundImage),
    image: contentfulImageMap(caseStudyCardImage),
    textBlock: {
      tagline: "Case Study",
      subHeading: caseStudyHeading,
      text: [caseStudyText],
      button: caseStudyDownloadLink
        ? {
            text: "Download",
            link: caseStudyDownloadLink,
            secondary: true,
          }
        : undefined,
    },
  }
  const ctaSection: CTA2Data = {
    shapeColor: `#${ctaColor}`,
    text: ctaHeading,
  }

  const brands: Brand[] = brandsContentful.map(
    ({ title, website, logo, logoHover }) => ({
      name: title,
      link: website,
      whiteIcon: logo.file.url,
      colorIcon: logoHover.file.url,
    })
  )
  const brands2: Brand[] = brandsContentful2.map(
    ({ title, website, logo, logoHover }) => ({
      name: title,
      link: website,
      whiteIcon: logo.file.url,
      colorIcon: logoHover.file.url,
    })
  )
  return (
    <Layout className="investor-page">
      <SEO title={title} description={headerSubheading} />
      <StandardHeader data={header} />
      <BrandsSection brands={brands} withObserver />
      <BenefitsSection data={benefitsSection} />
      <TextBlockImageSection data={understand} className="first" />
      <TextBlockImageSection data={measure} className="second" />
      <TextBlockImageSection data={prioritise} className="third" />
      <BrandsSection2 brands={brands2} withObserver />
      <CaseStudySection data={caseStudySection} />
      <CTA2 data={ctaSection} />
    </Layout>
  )
}

export default InvestorPage

const query = graphql`
  query InvestorPage($slug: String!) {
    contentfulInvestor(slug: { eq: $slug }) {
      title
      headerHeading
      headerSubheading
      headerText {
        headerText
      }
      headerButtonText
      headerButtonLink
      headerImage {
        file {
          url
        }
        title
        gatsbyImageData(
          width: 683
          layout: CONSTRAINED
          placeholder: NONE
          formats: [AUTO, WEBP]
        )
      }
      brands {
        id
        title
        website
        logo {
          file {
            url
          }
        }
        logoHover {
          file {
            url
          }
        }
      }
      feature1Image {
        file {
          url
        }
        title
        gatsbyImageData(
          width: 80
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      feature1Title
      feature1Text {
        feature1Text
      }
      feature2Image {
        file {
          url
        }
        title
        gatsbyImageData(
          width: 80
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      feature2Title
      feature2Text {
        feature2Text
      }
      feature3Image {
        file {
          url
        }
        title
        gatsbyImageData(
          width: 80
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      feature3Title
      feature3Text {
        feature3Text
      }
      section1Image {
        file {
          url
        }
        title
        gatsbyImageData(
          width: 550
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      section1Heading
      section1Text {
        section1Text
      }
      section2Image {
        file {
          url
        }
        title
        gatsbyImageData(
          width: 550
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      section2Heading
      section2Text {
        section2Text
      }
      section3Image {
        file {
          url
        }
        title
        gatsbyImageData(
          width: 550
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      section3Heading
      section3Text {
        section3Text
      }
      brands2 {
        id
        title
        website
        logo {
          file {
            url
          }
        }
        logoHover {
          file {
            url
          }
        }
      }
      caseStudyHeading
      caseStudyText {
        caseStudyText
      }
      caseStudyCardImage {
        file {
          url
        }
        title
        gatsbyImageData(
          width: 528
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      caseStudyBackgroundImage {
        file {
          url
        }
        title
        gatsbyImageData(
          width: 575
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      caseStudyDownloadLink
      ctaHeading
      ctaColor
    }
  }
`
