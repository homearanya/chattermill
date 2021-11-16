import React, { useMemo } from "react"
import { graphql } from "gatsby"
import { Container } from "react-awesome-styled-grid"
import styled from "styled-components"
import useMedia from "use-media"

import Layout from "../components/layout"
import WhitePaper, { WhitePaperProps } from "../components/whitepaper"
import media, { $breakpoints } from "../styles/media"
import SEO from "../components/seo"
import backgroundImageDesktop from "../images/scaling-cx.png"
import BenefitsSection, {
  BenefitsSectionData,
} from "../components/benefits-section"
import Image from "../components/image"

interface ScalingCXPageProps {
  readonly path: string
  readonly data: GatsbyTypes.ScalingCxQuery
}

const ScalingCX = ({
  path,
  data: {
    scalingCx,
    scalingCxIpad,
    scalingCxMobile,
    markdownRemark: {
      frontmatter: {
        title,
        subTitle,
        benefitsSection,
        featuredImage,
        buttonLabel,
        pdfUrl,
        formId,
      },
    },
    site: {
      siteMetadata: { hubspotConfig },
    },
  },
}: ScalingCXPageProps) => {
  const isMobile = useMedia({ maxWidth: $breakpoints.sm * 16 - 1 })
  const isTablet = useMedia({ maxWidth: $breakpoints.md * 16 - 1 })
  const isDesktop = useMedia({ maxWidth: $breakpoints.lg * 16 - 1 })

  const backgroundImage: SubFile = useMemo(() => {
    if (isMobile) return scalingCxMobile
    if (isTablet) return scalingCxIpad
    return scalingCx
  }, [isMobile, isTablet, isDesktop, scalingCx, scalingCxIpad, scalingCxMobile])

  const { portalId, newsletter_formId } = hubspotConfig
  const whitePaperProps: WhitePaperProps = {
    path,
    featuredImage,
    buttonLabel,
    pdfUrl,
    formId: hubspotConfig[formId],
    newsletterFormId: newsletter_formId,
    portalId,
  }
  return (
    <Layout>
      <SEO
        title={"Scaling CX Playbook"}
        description={"Learn how to scale CX the right way"}
        featuredImage={backgroundImageDesktop}
      />
      <StyledSection>
        <StyledImage image={backgroundImage} alt="hero image" />
      </StyledSection>
      <StyledContainer>
        <StyledHeader
          style={{
            paddingTop: "6rem",
          }}
        >
          {title}
        </StyledHeader>
      </StyledContainer>
      <BenefitsSection data={benefitsSection as BenefitsSectionData} />
      <StyledHeader>{subTitle}</StyledHeader>
      <WhitePaper {...whitePaperProps} />
    </Layout>
  )
}

export default ScalingCX

export const query = graphql`
  query ScalingCx($id: String!) {
    scalingCxMobile: file(relativePath: { eq: "scaling-cx-mobile.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 397
          quality: 100
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      publicURL
    }
    scalingCxIpad: file(relativePath: { eq: "scaling-cx-ipad.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 720
          quality: 100
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      publicURL
    }
    scalingCx: file(relativePath: { eq: "scaling-cx.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH, formats: [AUTO, WEBP])
      }
      publicURL
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subTitle
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 375
              quality: 100
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
          publicURL
        }
        buttonLabel
        pdfUrl
        formId
        benefitsSection {
          benefits {
            imageName
            alt
            smallHeading
            text
            moreDetails {
              button {
                arrow
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        hubspotConfig {
          portalId
          newsletter_formId
          churnGuide_formId
          customerFeedbackGuide_formId
          scalingCX_formId
          csatGuide_formId
          surveyGuide_formId
          freeBook_formId
        }
      }
    }
  }
`

const StyledSection = styled.section`
  position: relative;
  height: 100vh;
`

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
`

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${media.lessThan("md")`
  flex-direction: column;
  `}
`

const StyledHeader = styled.h1`
  font-size: 5rem;
  color: #291c45;
  text-align: center;
`
