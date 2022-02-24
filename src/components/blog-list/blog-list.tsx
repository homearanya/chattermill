import React from "react"
import { Row } from "react-awesome-styled-grid"
import { useMediaQuery } from "react-responsive"

import { $breakpoints } from "../../styles/media"
import PostCard from "../post-card"

import { BlogPageContext } from "../../types"
import Pagination from "../pagination"
import {
  StyledSection,
  StyledContainer,
  TagHeading,
  StyledCol,
} from "./blog-list.styled"

interface BlogListProps {
  readonly pageContext: BlogPageContext
  readonly pathPrefix: string
}

export const BlogList = ({ pageContext, pathPrefix }: BlogListProps) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${$breakpoints.sm * 16 - 1}px)`,
  })
  const isTablet = useMediaQuery({
    query: `(max-width: ${$breakpoints.md * 16 - 1}px)`,
  })
  const isDesktop = useMediaQuery({
    query: `(max-width: ${$breakpoints.lg * 16 - 1}px)`,
  })

  const {
    posts,
    category,
    tag,
    numPages,
    currentPage,
    arrayOfPageNumbers,
  } = pageContext

  const classNames = tag
    ? ["blog-heading", "tag-heading", ...posts.map(post => `post-${post.id}`)]
    : ["blog-heading", ...posts.map(post => `post-${post.id}`)]

  return (
    <StyledSection>
      <StyledContainer classNames={classNames}>
        {tag && <TagHeading className={classNames[0]}>{tag}</TagHeading>}
        <Row justify="center">
          {posts.map((post, i) => {
            return (
              <StyledCol
                align="center"
                key={post.id}
                xs={4}
                sm={4}
                md={6}
                lg={4}
              >
                {isMobile ? (
                  <PostCard
                    post={post}
                    pathPrefix={pathPrefix}
                    headingFontSize={22}
                    excerptFontSize={14}
                    vertical={true}
                    imageFirst={true}
                    imageWidth={50}
                  />
                ) : isTablet ? (
                  <PostCard
                    post={post}
                    pathPrefix={pathPrefix}
                    headingFontSize={24}
                    excerptFontSize={14}
                    vertical={true}
                    imageFirst={true}
                    imageWidth={30}
                  />
                ) : isDesktop ? (
                  <PostCard
                    post={post}
                    pathPrefix={pathPrefix}
                    headingFontSize={26}
                    excerptFontSize={15}
                    vertical={true}
                    imageFirst={true}
                    imageWidth={30}
                  />
                ) : (
                  <PostCard
                    post={post}
                    pathPrefix={pathPrefix}
                    headingFontSize={26}
                    excerptFontSize={16}
                    vertical={true}
                    imageFirst={true}
                    imageWidth={30}
                  />
                )}
              </StyledCol>
            )
          })}
        </Row>
        <Pagination
          context={{ category, tag, numPages, currentPage, arrayOfPageNumbers }}
        />
      </StyledContainer>
    </StyledSection>
  )
}

export default BlogList
