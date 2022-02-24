import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  StyledLink,
  StyledImg,
  StyledHeading,
  StyledCard,
  RadientStroke,
  StyledParagraph,
} from "./template-card.styled"
import { contentfulImageMap } from "../../utils/helpers"

interface TemplateCardProps {
  template: GatsbyTypes.ContentfulTemplate
  index?: number
  setTemplateTitleHeights?: React.Dispatch<React.SetStateAction<{}>>
  height?: number
}

export const TemplateCard = ({
  template: { title, subtitle, featuredImage, slug, tags, category },
  index = 0,
  setTemplateTitleHeights,
  height,
}: TemplateCardProps) => {
  const {
    site: {
      siteMetadata: {
        templates: { pathPrefix },
      },
    },
  } = useStaticQuery<GatsbyTypes.TemplatesCardQueryQuery>(graphql`
    query TemplatesCardQuery {
      site {
        siteMetadata {
          siteUrl
          templates {
            pathPrefix
          }
        }
      }
    }
  `)
  const headingRef = useRef(null)
  useEffect(() => {
    if (headingRef.current && setTemplateTitleHeights) {
      setTemplateTitleHeights(titles => {
        titles[`title${index}`] = headingRef.current.clientHeight
        return titles
      })
    }
  }, [headingRef.current && headingRef.current.clientHeight])
  return (
    <StyledLink to={`${pathPrefix}${slug}/`}>
      <StyledCard>
        <StyledImg
          image={contentfulImageMap(featuredImage)}
          alt={featuredImage.title}
          objectFit="contain"
        />
        <StyledHeading
          ref={headingRef}
          textHeight={height}
          style={{
            textAlign: "left",
          }}
        >
          {title.title}
        </StyledHeading>
        <RadientStroke />
        <StyledParagraph
          dangerouslySetInnerHTML={{ __html: subtitle.subtitle }}
        />
      </StyledCard>
    </StyledLink>
  )
}

export default TemplateCard
