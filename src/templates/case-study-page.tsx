import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CaseStudyHeader, {
  CaseStudyHeaderData,
} from "../components/case-study-header"

import AchievementsSection, {
  AchievementsSectionData,
} from "../components/achievements-section"
import CaseStudyOverviewSection, {
  CaseStudyOverviewSectionData,
} from "../components/case-study-overview-section"
import CaseStudyContentSection, {
  CaseStudyContentSectionData,
} from "../components/case-study-content-section"
import CaseStudyPersonSection, {
  CaseStudyPersonSectionData,
} from "../components/case-study-person-section"
import CaseStudyCompanySection, {
  CaseStudyCompanySectionData,
} from "../components/case-study-company-section"
import BrandsSection2 from "../components/brands-section-2"
import CTA2 from "../components/cta2"

import { contentfulImageMap } from "../utils/helpers"
import { getSrc } from "gatsby-plugin-image"

interface CaseStudyPageProps {
  data: GatsbyTypes.CaseStudyPageQuery
}

const CaseStudyPage = ({ data }: CaseStudyPageProps) => {
  const { contentfulCaseStudy } = data
  const {
    metaTitle,
    metaDescription,
    headerImage,
    headerText,
    achievements,
    company,
    overview,
    caseStudyContentTitle,
    caseStudyContent,
    companyPersonQuoteTitle,
  } = contentfulCaseStudy

  const {
    logo,
    description,
    websiteName,
    websiteUrl,
    industryType,
    region,
    companySize,
    businessType,
    personName,
    personRole,
    personPhoto,
    personQuote,
  } = company

  const caseStudyHeaderData: CaseStudyHeaderData = {
    companyName: company.name,
    image: headerImage as GatsbyTypes.ContentfulAsset,
    text: headerText.childMarkdownRemark.html,
  }
  const achievementsSectionData: AchievementsSectionData = {
    companyName: company.name,
    achievements: achievements,
  }
  const caseStudyOverviewSectionData: CaseStudyOverviewSectionData = {
    image: contentfulImageMap(company.logo as GatsbyTypes.ContentfulAsset),
    alt: company.name,
    textBlock: {
      subHeading: "<span class='underline'>Overview</span>",
      html: overview.childMarkdownRemark.html,
    },
  }
  const caseStudyContentSectionData: CaseStudyContentSectionData = {
    heading: caseStudyContentTitle,
    caseStudyItems: caseStudyContent,
  }

  const caseStudyPersonSectionData: CaseStudyPersonSectionData = {
    heading: companyPersonQuoteTitle,
    personPhoto,
    personName,
    personRole,
    personQuote: personQuote.childMarkdownRemark.html,
  }

  const caseStudyCompanySectionData: CaseStudyCompanySectionData = {
    name: company.name,
    logo: logo as GatsbyTypes.ContentfulAsset,
    description: description.childMarkdownRemark.html,
    websiteName,
    websiteUrl,
    industryType,
    region,
    companySize,
    businessType,
  }
  return (
    <Layout className="customers-page">
      <SEO
        title={metaTitle}
        description={metaDescription}
        featuredImage={getSrc(headerImage.gatsbyImageData)}
      />
      <CaseStudyHeader data={caseStudyHeaderData} />
      <AchievementsSection data={achievementsSectionData} />
      <CaseStudyOverviewSection data={caseStudyOverviewSectionData} />
      <CaseStudyContentSection data={caseStudyContentSectionData} />
      <CaseStudyPersonSection data={caseStudyPersonSectionData} />
      <CaseStudyCompanySection data={caseStudyCompanySectionData} />
      <CTA2
        data={{
          shapeColor: "#DEF200",
          text: "Power your CX with Chattermill",
          subText:
            "Try chattermill today and learn why 1000s businesses use Chattermill as their customer understanding platform.",
        }}
      />
      <BrandsSection2 withObserver />
    </Layout>
  )
}

export default CaseStudyPage

const query = graphql`
  query CaseStudyPage($id: String!) {
    contentfulCaseStudy(id: { eq: $id }) {
      metaTitle
      metaDescription
      headerImage {
        title
        gatsbyImageData(
          width: 1920
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
        file {
          url
        }
      }
      headerText {
        childMarkdownRemark {
          html
        }
      }
      achievements {
        id
        text
        icon {
          file {
            url
          }
        }
      }
      overview {
        childMarkdownRemark {
          html
        }
      }
      caseStudyContentTitle
      caseStudyContent {
        id
        headline
        description {
          childMarkdownRemark {
            html
          }
        }
      }
      companyPersonQuoteTitle
      company {
        name
        logo {
          title
          gatsbyImageData(
            width: 550
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
          file {
            url
          }
        }
        description {
          childMarkdownRemark {
            html
          }
        }
        websiteName
        websiteUrl
        industryType
        region
        companySize
        businessType
        personPhoto {
          gatsbyImageData(
            width: 220
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
        personName
        personRole
        personQuote {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
