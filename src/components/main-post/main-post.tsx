import React from "react"
import { Container } from "react-awesome-styled-grid"
import useMedia from "use-media"

import { $breakpoints } from "../../styles/media"
import PostCard from "../post-card"

import { StyledSection, StyledRow, StyledCol } from "./main-post.styled"

interface MainPostProps {
  readonly post: GatsbyTypes.ContentfulPost
  readonly pathPrefix: string
}

const MainPost = ({ post, pathPrefix }: MainPostProps) => {
  const isMobile = useMedia({ maxWidth: $breakpoints.sm * 16 - 1 })
  const isTablet = useMedia({ maxWidth: $breakpoints.md * 16 - 1 })
  const isDesktop = useMedia({ maxWidth: $breakpoints.lg * 16 - 1 })

  return (
    <StyledSection>
      <Container>
        <StyledRow>
          <StyledCol xs={8}>
            {isMobile ? (
              <PostCard
                pathPrefix={pathPrefix}
                post={post}
                headingFontSize={22}
                excerptFontSize={14}
                imageWidth={30}
                vertical
                imageFirst={false}
              />
            ) : isTablet ? (
              <PostCard
                pathPrefix={pathPrefix}
                post={post}
                headingFontSize={24}
                excerptFontSize={14}
                imageWidth={50}
              />
            ) : isDesktop ? (
              <PostCard
                pathPrefix={pathPrefix}
                post={post}
                headingFontSize={26}
                excerptFontSize={15}
              />
            ) : (
              <PostCard
                pathPrefix={pathPrefix}
                post={post}
                headingFontSize={28}
                excerptFontSize={16}
              />
            )}
          </StyledCol>
        </StyledRow>
      </Container>
    </StyledSection>
  )
}

export default MainPost
