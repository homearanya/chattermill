import React from "react"

import { TextBlockData } from "../../types"
import { contentfulImageMap } from "../../utils/helpers"

import { StyledTextBlock } from "./partner-tile.styled"

interface PartnerTileProps {
  partner: GatsbyTypes.ContentfulPartner
  pathPrefix: string
  withBoxShadow: boolean
}

const PartnerTile = ({
  partner,
  pathPrefix,
  withBoxShadow,
}: PartnerTileProps) => {
  const { logo, title, slug, featured, description, landingUrl } = partner
  const textBlock: TextBlockData = {
    image: logo ? contentfulImageMap(logo) : undefined,
    tagline: featured ? "featured" : undefined,
    smallHeading: title,
    text: [description],
    moreDetails: {
      button: {
        text: "Learn more",
        link: landingUrl ? landingUrl : `${pathPrefix}${slug}`,
        arrow: false,
      },
    },
  }
  return (
    <StyledTextBlock
      textBlock={textBlock}
      withBoxShadow={withBoxShadow}
      withObserver
    />
  )
}

export default PartnerTile
