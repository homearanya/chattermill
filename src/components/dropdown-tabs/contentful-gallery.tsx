import React from "react"
import GridGallery, { ExtendedContentfulAsset } from "../gallery"

interface ContentfulGalleryProps {
  content: GatsbyTypes.ContentfulGallery & {
    images?: ExtendedContentfulAsset[]
  }
}

const ContentfulGallery = ({ content, ...props }: ContentfulGalleryProps) => (
  <GridGallery images={content.images} {...props} />
)

export default ContentfulGallery
