import React, { useState } from "react"

import { contentfulImageMap } from "../../utils/helpers"

import { Wrapper, ImageWrapper, Thumbnail, StyledModal } from "./gallery.styled"
import Image from "../image"

export type ExtendedContentfulAsset = GatsbyTypes.ContentfulAsset & {
  fullSize?: GatsbyTypes.ContentfulAsset["gatsbyImageData"]
  thumbnail?: GatsbyTypes.ContentfulAsset["gatsbyImageData"]
}

interface GalleryProps {
  images?: ExtendedContentfulAsset[]
}

const Gallery = ({ images }: GalleryProps) => {
  const [active, setActive] = useState<ExtendedContentfulAsset | null>(null)
  return (
    <Wrapper>
      {active && active.fullSize && (
        <StyledModal
          open={!!active}
          closeHandler={() => setActive(null)}
          backgroundColor="transparent"
        >
          <Image
            image={contentfulImageMap({
              ...active,
              gatsbyImageData: active.fullSize,
            } as GatsbyTypes.ContentfulAsset & { fullSize: GatsbyTypes.ContentfulAsset["gatsbyImageData"] })}
            alt={active.title}
          />
        </StyledModal>
      )}
      {images.map(item => {
        return (
          <ImageWrapper key={item.id} onClick={() => setActive(item)}>
            <Thumbnail
              image={contentfulImageMap({
                ...item,
                gatsbyImageData: item.thumbnail,
              })}
              alt={item.title}
            />
          </ImageWrapper>
        )
      })}
    </Wrapper>
  )
}

export default Gallery
