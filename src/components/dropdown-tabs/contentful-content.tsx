import React from "react"
import ContentfulRichtext from "../contentful-richtext"

interface ContentProps {
  content: GatsbyTypes.ContentfulContent
}

const Content = ({ content }: ContentProps) => (
  <ContentfulRichtext content={content.content} />
)

export default Content
