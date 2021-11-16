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
  index = 0,
  setImageSizes = undefined,
  height,
}: ResourceCardProps) => {
  const imageRef = useRef(null)

  useEffect(() => {
    if (imageRef.current && setImageSizes) {
      setImageSizes(images => {
        images[`image${index}`] = imageRef.current.clientHeight
        return images
      })
    }
  }, [imageRef.current])
  let imageWidth
  if (
    height &&
    textBlock.image &&
    textBlock.image.childImageSharp &&
    textBlock.image.childImageSharp.fluid
  ) {
    imageWidth = textBlock.image.childImageSharp.fluid.aspectRatio
  }
  return (
    <StyledCard onClick={handle}>
      <StyledTextBlock
        className="text-block"
        textBlock={textBlock}
        imageCircle={imageCircle}
        imageRef={imageRef}
        imageHeight={height}
        imageWidth={imageWidth}
      />
    </StyledCard>
  )
}

export default ResourceCard
