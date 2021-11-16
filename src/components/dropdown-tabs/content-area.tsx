import React from "react"
import Content from "./contentful-content"
import Gallery from "./contentful-gallery"

const ComponentList = {
  content: Content,
  gallery: Gallery,
}

export type ContentAreaType = Readonly<
  Partial<GatsbyTypes.ContentfulContent | GatsbyTypes.ContentfulGallery>
>
interface ContentAreaProps {
  content: GatsbyTypes.IntegrationPageQuery["contentfulIntegration"]["sections"][number]
}

const ContentArea = ({ content }: ContentAreaProps) => {
  if (content !== null) {
    const DynamicComponent = ComponentList[content.sys.contentType.sys.id]
    if (DynamicComponent !== undefined) {
      return <DynamicComponent content={content} />
    } else {
      return null
    }
  } else {
    return null
  }
}

export default ContentArea
