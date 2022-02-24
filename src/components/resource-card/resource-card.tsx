import React, { useRef, useEffect } from "react"

import { TextBlockData } from "../../types"
import { StyledCard, StyledTextBlock } from "./resource-card.styled"

export interface ResourceCardData {
  textBlock: TextBlockData
}

interface ResourceCardProps {
  data: ResourceCardData
  handle?: () => void
  imageCircle?: boolean
  index?: number
  setImageSizes?: React.Dispatch<React.SetStateAction<{}>>
  height?: number
}

export const ResourceCard = ({
  data: { textBlock },
  handle,
  imageCircle = false,
}: ResourceCardProps) => {
  return (
    <StyledCard onClick={handle}>
      <StyledTextBlock className="text-block" textBlock={textBlock} />
    </StyledCard>
  )
}

export default ResourceCard
