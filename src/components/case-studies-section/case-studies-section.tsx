import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useInView } from "react-intersection-observer"

import { contentfulImageMap } from "../../utils/helpers"
import { TextBlockData } from "../../types"

import Filter from "./filter"

import {
  StyledSection,
  StyledHeading,
  StyledTextBlock,
  StyledContainer,
  Grid,
} from "./case-studies-section.styled"

interface StaticQueryData {
  site: {
    siteMetadata: {
      customers: {
        pathPrefix: string
      }
    }
  }
}

export interface CaseStudiesSectionData {
  heading: string
  caseStudies: GatsbyTypes.ContentfulCaseStudy[]
  industryTypes: string[]
}

interface CaseStudiesSectionProps {
  readonly data: CaseStudiesSectionData
}

export const CaseStudiesSection = ({ data }: CaseStudiesSectionProps) => {
  const { heading, caseStudies, industryTypes } = data
  const [filter, setFilter] = useState("All Industries")
  const [items, setItems] = useState(caseStudies)
  const {
    site: {
      siteMetadata: {
        customers: { pathPrefix },
      },
    },
  }: StaticQueryData = useStaticQuery(
    graphql`
      query {
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
  const [headingRef, headingInView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  })

  useEffect(() => {
    setItems(
      caseStudies.filter((caseStudy) => {
        return (
          filter === "All Industries" ||
          caseStudy.company.industryType === filter
        )
      })
    )
  }, [filter])
  return (
    <StyledSection id="target">
      <StyledContainer>
        <StyledHeading
          dangerouslySetInnerHTML={{ __html: heading }}
          ref={headingRef}
          inView={headingInView}
          className="case-studies"
        />
        <Filter
          setFilter={setFilter}
          industryTypes={["All Industries", ...industryTypes]}
        />
        <Grid>
          {items.map((caseStudy) => {
            const {
              id,
              name,
              slug,
              thumbnailImage,
              thumbnailText,
              company,
            } = caseStudy
            const textBlock: TextBlockData = {
              image: contentfulImageMap(thumbnailImage),
              alt: name,
              tagline: company.industryType,
              html: thumbnailText.childMarkdownRemark.html,
              moreDetails: {
                button: {
                  text: "Learn more",
                  link: `${pathPrefix}${slug}`,
                },
              },
            }
            return (
              // <div key={id} ref={texbBlockRef}>
              <div key={id}>
                <StyledTextBlock
                  textBlock={textBlock}
                  inView={true}
                  withObserver
                />
              </div>
            )
          })}
        </Grid>
      </StyledContainer>
    </StyledSection>
  )
}

export default CaseStudiesSection
