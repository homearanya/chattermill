import React from "react"

import { TextBlockData } from "../../types"

import { contentfulImageMap } from "../../utils/helpers"

import {
  Card,
  StyledHeader,
  StyledImageContainer,
  StyledImageWrapper,
  Background,
  StyledImage,
  StyledTextBlock,
} from "./integration-card.styled"

import DropdownTabs from "../dropdown-tabs"

interface IntegrationCardProps {
  readonly data: GatsbyTypes.IntegrationPageQuery["contentfulIntegration"]
}

export const IntegrationCard = ({ data }: IntegrationCardProps) => {
  const { title, logo, description, link, sections, links } = data

  const buttonLinks: ButtonData[] = links
    ? links.map((link) => {
        return {
          text: link.displayText || link.name,
          link: link.path || link.externalUrl,
        }
      })
    : []

  const textBlock: TextBlockData = {
    tagline: "integrations",
    heading: title,
    richText: description as GatsbyTypes.ContentfulBodyBody,
    button:
      buttonLinks[0] ||
      ({
        text: link.displayText || link.name,
        link: link.path || link.externalUrl,
      } as ButtonData),
  }
  return (
    <Card>
      <StyledHeader>
        <StyledImageContainer>
          <StyledImageWrapper>
            <Background />
            <StyledImage
              className="image-header"
              image={contentfulImageMap(logo as GatsbyTypes.ContentfulAsset)}
              alt={`${title} logo`}
            />
          </StyledImageWrapper>
        </StyledImageContainer>
        <StyledTextBlock
          textBlock={textBlock}
          classNames={Object.keys(textBlock)}
        />
      </StyledHeader>
      <DropdownTabs sections={sections} />
    </Card>
  )
}

export default IntegrationCard
