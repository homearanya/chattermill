import React from "react"
import { useMediaQuery } from "react-responsive"

import { $breakpoints } from "../../styles/media"
import PostCard from "../post-card"

import {
  StyledRow,
  StyledRowLeft,
  StyledColLeft,
  StyledColRight,
} from "./cat-grid-2.styled"

interface CatGrid2Props {
  readonly posts: GatsbyTypes.ContentfulPost[]
  readonly pathPrefix: string
}

const CatGrid2 = ({ posts, pathPrefix }: CatGrid2Props) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${$breakpoints.sm * 16 - 1}px)`,
  })
  const isTablet = useMediaQuery({
    query: `(max-width: ${$breakpoints.md * 16 - 1}px)`,
  })
  const isDesktop = useMediaQuery({
    query: `(max-width: ${$breakpoints.lg * 16 - 1}px)`,
  })

  return (
    <StyledRow>
      <StyledColLeft xs={8} sm={8} md={6} lg={6}>
        {posts[0] ? (
          <StyledRowLeft>
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
                headingFontSize={24}
                excerptFontSize={15}
                vertical={false}
                imageFirst={false}
                imageWidth={50}
              />
            ) : (
              <PostCard
                post={posts[0]}
                pathPrefix={pathPrefix}
                headingFontSize={22}
                excerptFontSize={16}
                vertical={false}
                imageFirst={false}
                imageWidth={50}
                limit={100}
              />
            )}
          </StyledRowLeft>
        ) : null}
        {posts[1] ? (
          <StyledRowLeft>
            {isMobile ? (
              <PostCard
                post={posts[1]}
                pathPrefix={pathPrefix}
                headingFontSize={22}
                excerptFontSize={14}
                vertical={true}
                imageFirst={false}
                imageWidth={50}
              />
            ) : isTablet ? (
              <PostCard
                post={posts[1]}
                pathPrefix={pathPrefix}
                headingFontSize={24}
                excerptFontSize={14}
                vertical={false}
                imageFirst={false}
                imageWidth={50}
              />
            ) : isDesktop ? (
              <PostCard
                post={posts[1]}
                pathPrefix={pathPrefix}
                headingFontSize={24}
                excerptFontSize={15}
                vertical={false}
                imageFirst={false}
                imageWidth={50}
              />
            ) : (
              <PostCard
                post={posts[1]}
                pathPrefix={pathPrefix}
                excerptFontSize={16}
                headingFontSize={22}
                vertical={false}
                imageFirst={false}
                imageWidth={50}
                limit={100}
              />
            )}
          </StyledRowLeft>
        ) : null}
      </StyledColLeft>
      {posts[2] ? (
        <StyledColRight xs={8} sm={8} md={6} lg={6}>
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
              vertical={false}
              imageFirst={false}
              imageWidth={50}
              excerptFontSize={15}
              headingFontSize={26}
            />
          ) : (
            <PostCard
              post={posts[2]}
              pathPrefix={pathPrefix}
              vertical={true}
              imageFirst={false}
              imageWidth={50}
              excerptFontSize={16}
              headingFontSize={26}
            />
          )}
        </StyledColRight>
      ) : null}
    </StyledRow>
  )
}

export default CatGrid2
