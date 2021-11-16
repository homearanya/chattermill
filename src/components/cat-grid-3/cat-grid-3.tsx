import React from "react"
import useMedia from "use-media"

import { $breakpoints } from "../../styles/media"
import PostCard from "../post-card"

import { StyledRow, StyledColTop, StyledCol } from "./cat-grid-3.styled"

interface CatGrid3Props {
  readonly posts: GatsbyTypes.ContentfulPost[]
  readonly pathPrefix: string
}

const CatGrid3 = ({ posts, pathPrefix }: CatGrid3Props) => {
  const isMobile = useMedia({ maxWidth: $breakpoints.sm * 16 - 1 })
  const isTablet = useMedia({ maxWidth: $breakpoints.md * 16 - 1 })
  const isDesktop = useMedia({ maxWidth: $breakpoints.lg * 16 - 1 })
  return (
    <>
      {posts[0] && (
        <StyledRow>
          <StyledColTop align={{ xs: "center" }}>
            {isMobile ? (
              <PostCard
                post={posts[0]}
                pathPrefix={pathPrefix}
                headingFontSize={22}
                excerptFontSize={14}
                vertical={true}
                imageFirst={false}
                imageWidth={50}
              />
            ) : isTablet ? (
              <PostCard
                post={posts[0]}
                pathPrefix={pathPrefix}
                headingFontSize={24}
                excerptFontSize={14}
                vertical={false}
                imageFirst={false}
                imageWidth={50}
              />
            ) : isDesktop ? (
              <PostCard
                post={posts[0]}
                pathPrefix={pathPrefix}
                headingFontSize={26}
                excerptFontSize={15}
                vertical={false}
                imageFirst={false}
                imageWidth={50}
              />
            ) : (
              <PostCard
                post={posts[0]}
                pathPrefix={pathPrefix}
                headingFontSize={26}
                excerptFontSize={16}
                vertical={false}
                imageFirst={false}
                imageWidth={50}
                imageHeight={100}
                imageSize="cover"
                limit={600}
              />
            )}
          </StyledColTop>
        </StyledRow>
      )}
      {posts[1] && (
        <StyledRow>
          <StyledCol xs={8} sm={8} md={6} lg={6}>
            {isMobile ? (
              <PostCard
                post={posts[1]}
                pathPrefix={pathPrefix}
                vertical={true}
                imageFirst={false}
                imageWidth={50}
                excerptFontSize={14}
                headingFontSize={22}
              />
            ) : isTablet ? (
              <PostCard
                post={posts[1]}
                pathPrefix={pathPrefix}
                vertical={false}
                imageFirst={false}
                imageWidth={50}
                excerptFontSize={14}
                headingFontSize={24}
              />
            ) : isDesktop ? (
              <PostCard
                post={posts[1]}
                pathPrefix={pathPrefix}
                vertical={true}
                imageFirst={false}
                imageWidth={50}
                excerptFontSize={15}
                headingFontSize={26}
              />
            ) : (
              <PostCard
                post={posts[1]}
                pathPrefix={pathPrefix}
                vertical={false}
                imageFirst={false}
                imageWidth={50}
                excerptFontSize={16}
                headingFontSize={22}
                limit={100}
              />
            )}
          </StyledCol>
          {posts[2] ? (
            <StyledCol xs={8} sm={8} md={6} lg={6}>
              {isMobile ? (
                <PostCard
                  post={posts[2]}
                  pathPrefix={pathPrefix}
                  vertical={true}
                  imageFirst={false}
                  imageWidth={50}
                  excerptFontSize={14}
                  headingFontSize={22}
                />
              ) : isTablet ? (
                <PostCard
                  post={posts[2]}
                  pathPrefix={pathPrefix}
                  vertical={false}
                  imageFirst={false}
                  imageWidth={50}
                  excerptFontSize={14}
                  headingFontSize={24}
                />
              ) : isDesktop ? (
                <PostCard
                  post={posts[2]}
                  pathPrefix={pathPrefix}
                  vertical={true}
                  imageFirst={false}
                  imageWidth={50}
                  excerptFontSize={15}
                  headingFontSize={26}
                />
              ) : (
                <PostCard
                  post={posts[2]}
                  pathPrefix={pathPrefix}
                  vertical={false}
                  imageFirst={false}
                  imageWidth={50}
                  excerptFontSize={16}
                  headingFontSize={22}
                  limit={100}
                />
              )}
            </StyledCol>
          ) : null}
        </StyledRow>
      )}
    </>
  )
}

export default CatGrid3
