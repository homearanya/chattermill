import React from "react"

import useMedia from "use-media"

import { $breakpoints } from "../../styles/media"
import PostCard from "../post-card"

import { StyledRow, StyledCol } from "./cat-grid-1.styled"

interface CatGrid1Props {
  readonly posts: GatsbyTypes.ContentfulPost[]
  readonly pathPrefix: string
}

const CatGrid1 = ({ posts, pathPrefix }: CatGrid1Props) => {
  const isMobile = useMedia({ maxWidth: $breakpoints.sm * 16 - 1 })
  const isTablet = useMedia({ maxWidth: $breakpoints.md * 16 - 1 })
  const isDesktop = useMedia({ maxWidth: $breakpoints.lg * 16 - 1 })
  return (
    <StyledRow>
      {posts.map((post) => (
        <StyledCol xs={8} sm={4} md={6} lg={6}>
          {isMobile ? (
            <PostCard
              post={post}
              pathPrefix={pathPrefix}
              headingFontSize={22}
              excerptFontSize={14}
              vertical={true}
              imageFirst={false}
              imageWidth={50}
            />
          ) : isTablet ? (
            <PostCard
              post={post}
              pathPrefix={pathPrefix}
              headingFontSize={24}
              excerptFontSize={14}
              vertical={true}
              imageFirst={false}
              imageWidth={30}
            />
          ) : isDesktop ? (
            <PostCard
              post={post}
              pathPrefix={pathPrefix}
              headingFontSize={24}
              excerptFontSize={15}
              vertical={true}
              imageFirst={false}
              imageWidth={50}
            />
          ) : (
            <PostCard
              post={post}
              pathPrefix={pathPrefix}
              vertical={true}
              imageFirst={false}
              headingFontSize={28}
              excerptFontSize={16}
              imageWidth={50}
            />
          )}
        </StyledCol>
      ))}
    </StyledRow>
  )
}

export default CatGrid1
