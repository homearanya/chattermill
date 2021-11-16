import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { contentfulImageMap } from "../../utils/helpers"

import {
  Wrapper,
  ImageWrapper,
  StyledImage,
  StyledSection,
  StyledContainer,
  StyledLink,
  Tagline,
  Text,
} from "./case-study-header.styled"

export interface CaseStudyHeaderData {
  companyName: string
  image: GatsbyTypes.ContentfulAsset
  text: string
}

interface CaseStudyHeaderProps {
  readonly data: CaseStudyHeaderData
}

export const CaseStudyHeader = ({ data }: CaseStudyHeaderProps) => {
  const {
    site: {
      siteMetadata: {
        customers: { pathPrefix },
      },
    },
  } = useStaticQuery<GatsbyTypes.CaseStudyHeaderQuery>(
    graphql`
      query CaseStudyHeader {
        site {
          siteMetadata {
            customers {
              pathPrefix
            }
          }
        }
      }
    `
  )

  const { companyName, image, text } = data

  return (
    <Wrapper>
      <ImageWrapper>
        <StyledImage
          image={contentfulImageMap(image)}
          alt={companyName}
          loading="eager"
        />
      </ImageWrapper>
      <StyledSection>
        <StyledContainer>
          <StyledLink to={pathPrefix}>
            <span>&lt;</span>
            Back to all customer stories
          </StyledLink>
          <Tagline>{`${companyName} + Chattermill`}</Tagline>
          <Text dangerouslySetInnerHTML={{ __html: text }} />
        </StyledContainer>
      </StyledSection>
    </Wrapper>
  )
}

export default CaseStudyHeader
