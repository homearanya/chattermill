import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  StyledSection,
  StyledMediumHeading,
  Underline,
  Wrapper,
  StyledImage,
  StyledContainer,
} from "./careers-experience-overview.styled"

const ExperienceOverview = () => {
  const {
    anishaImage,
    balconyImage,
    browniesImage,
    christmasPartyImage,
    tshirtsImage,
  } = useStaticQuery<GatsbyTypes.ExperienceOverviewQuery>(graphql`
    query ExperienceOverview {
      anishaImage: file(relativePath: { eq: "careers-anisha.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 212
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
        publicURL
      }
      balconyImage: file(relativePath: { eq: "careers-balcony.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 373
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
        publicURL
      }
      browniesImage: file(relativePath: { eq: "careers-cm-brownies.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 318
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
        publicURL
      }
      christmasPartyImage: file(
        relativePath: { eq: "careers-company-christmas-party.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 393
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
        publicURL
      }
      tshirtsImage: file(relativePath: { eq: "chattermill-t-shirts.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 420
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
        publicURL
      }
    }
  `)
  return (
    <StyledSection>
      <StyledMediumHeading>
        We're all about <Underline>positive experience</Underline> that starts
        with our <Underline>employees!</Underline>
      </StyledMediumHeading>
      <StyledContainer>
        <Wrapper>
          <StyledImage image={anishaImage as GatsbyTypes.File} alt="text alt" />
          <StyledImage
            image={balconyImage as GatsbyTypes.File}
            alt="text alt"
          />
          <StyledImage
            image={browniesImage as GatsbyTypes.File}
            alt="text alt"
          />
          {/* <StyledImage image={climbingImage} alt="text alt" /> */}
          <StyledImage
            image={christmasPartyImage as GatsbyTypes.File}
            alt="text alt"
          />
          <StyledImage
            image={tshirtsImage as GatsbyTypes.File}
            alt="text alt"
          />
        </Wrapper>
      </StyledContainer>
    </StyledSection>
  )
}

export default ExperienceOverview
