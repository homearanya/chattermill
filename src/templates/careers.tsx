import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Link as ScrollTo } from "react-scroll"
import Layout from "../components/layout"
import CareersBanner from "../components/careers-banner"
// import SegmentSection, {
//   SegmentSectionData
// } from "../components/segment-section";
import TextBlockImageSection, {
  TextBlockImageSectionData,
} from "../components/textblock-image-section"
import CareersMidSection from "../components/careers-mid-section"
import ExperienceOverview from "../components/careers-experience-overview"
import BenefitsOverview from "../components/careers-benefits"
import JobOpenings from "../components/careers-job-openings"
import { buttonStyles, buttonStylesHover } from "../styles/mixins"

interface CareerPageProps {
  readonly data: PageQueryData
}

const Careers = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        growthAndProgress,
        obssessedWithExperience,
        responsibleOwners,
        trustAndOpeness,
        ambitionAndHumble,
        teamIsKey,
      },
    },
  },
}: CareerPageProps) => (
  <>
    <Layout>
      <SEO title={title} description={description} />
      <CareersBanner>
        <StyledButton
          to={"jobs-openings"}
          smooth={true}
          duration={500}
          spy={true}
        >
          View Job Openings 🚀
        </StyledButton>
        <StyledButton
          to={"benefits-overview"}
          smooth={true}
          duration={500}
          spy={true}
        >
          View Benefits ❤️
        </StyledButton>
        <StyledButton to={"first"} smooth={true} duration={500} spy={true}>
          View Values 🤝
        </StyledButton>
      </CareersBanner>
      <ExperienceOverview />
      <TextBlockImageSection data={growthAndProgress} className="first" />
      <TextBlockImageSection
        data={obssessedWithExperience}
        className="second"
      />
      <TextBlockImageSection data={responsibleOwners} className="third" />
      <TextBlockImageSection data={trustAndOpeness} className="fourth" />
      <TextBlockImageSection data={ambitionAndHumble} className="fifth" />
      <TextBlockImageSection data={teamIsKey} className="sixth" />
      <BenefitsOverview />
      <CareersMidSection />
      <JobOpenings />
    </Layout>
  </>
)

export const query = graphql`
  query CareersPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        growthAndProgress {
          textPosition
          image {
            childImageSharp {
              gatsbyImageData(
                width: 337
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            publicURL
          }
          alt
          textBlock {
            subHeading
            text
          }
        }
        obssessedWithExperience {
          textPosition
          image {
            childImageSharp {
              gatsbyImageData(
                width: 337
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            publicURL
          }
          alt
          textBlock {
            subHeading
            text
          }
        }
        responsibleOwners {
          textPosition
          image {
            childImageSharp {
              gatsbyImageData(
                width: 337
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            publicURL
          }
          alt
          textBlock {
            subHeading
            text
          }
        }
        trustAndOpeness {
          textPosition
          image {
            childImageSharp {
              gatsbyImageData(
                width: 337
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            publicURL
          }
          alt
          textBlock {
            subHeading
            text
          }
        }
        ambitionAndHumble {
          textPosition
          image {
            childImageSharp {
              gatsbyImageData(
                width: 337
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            publicURL
          }
          alt
          textBlock {
            subHeading
            text
          }
        }
        teamIsKey {
          textPosition
          image {
            childImageSharp {
              gatsbyImageData(
                width: 337
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            publicURL
          }
          alt
          textBlock {
            subHeading
            text
          }
        }
      }
    }
  }
`

export default Careers

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      growthAndProgress: TextBlockImageSectionData
      obssessedWithExperience: TextBlockImageSectionData
      responsibleOwners: TextBlockImageSectionData
      trustAndOpeness: TextBlockImageSectionData
      ambitionAndHumble: TextBlockImageSectionData
      teamIsKey: TextBlockImageSectionData
    }
  }
}

interface ButtonProps {
  readonly inverted?: boolean
  readonly wide?: boolean
  readonly secondary?: boolean
}

const StyledButton = styled(ScrollTo)<ButtonProps>`
  &&,
  &&:link,
  &&:visited {
    ${({ inverted, wide, secondary }) =>
      buttonStyles(inverted, wide, secondary)}

    padding-left: 25px;
    padding-right: 25px;
    border-radius: 3px;
    margin: 20px;
    height: 45px;
    width: 220px;
    line-height: 27px;
  }

  &&:hover,
  &&:active {
    ${({ inverted, secondary }) => buttonStylesHover(inverted, secondary)}
  }

  @media (max-width: 320px) {
    font-size: 11px !important;
  }
`
