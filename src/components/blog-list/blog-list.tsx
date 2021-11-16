import React from "react";
import { Row } from "react-awesome-styled-grid";
import useMedia from "use-media";

import { $breakpoints } from "../../styles/media";
import PostCard from "../post-card";

import { BlogPageContext } from "../../types";
import Pagination from "../pagination";
import {
  StyledSection,
  StyledContainer,
  TagHeading,
  StyledCol
} from "./blog-list.styled";

// import BlogHeading from "../blog-heading";

interface BlogListProps {
  readonly pageContext: BlogPageContext;
  readonly pathPrefix: string;
}

export const BlogList = ({ pageContext, pathPrefix }: BlogListProps) => {
  const isMobile = useMedia({ maxWidth: $breakpoints.sm * 16 - 1 });
  const isTablet = useMedia({ maxWidth: $breakpoints.md * 16 - 1 });
  const isDesktop = useMedia({ maxWidth: $breakpoints.lg * 16 - 1 });

  const {
    posts,
    category,
    tag,
    numPages,
    currentPage,
    arrayOfPageNumbers
    // totalCount
  } = pageContext;

  let tagName;
  if (tag) {
    tagName = tag.replace("-", " ").toUpperCase();
  }
  const classNames = tagName
    ? ["blog-heading", "tag-heading", ...posts.map(post => `post-${post.id}`)]
    : ["blog-heading", ...posts.map(post => `post-${post.id}`)];

  return (
    <StyledSection>
      <StyledContainer classNames={classNames}>
        {/* <BlogHeading
          heading="Chattermill Insights"
          to="/resources/insights/"
          className={classNames[0]}
        /> */}
        {tagName && (
          // <TagHeading
          //   className={classNames[1]}
          // >{`${tagName} (${totalCount})`}</TagHeading>
          <TagHeading className={classNames[0]}>{tagName}</TagHeading>
        )}
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
                {/* <Article className={classNames[i + classNamesUsed]}>
                  <ImageWrapper>
                    <StyledLink to={path}>
                      <StyledImg
                        fluid={fluid}
                        alt={imageTitle}
                        title={imageTitle}
                        imgStyle={{ objectFit: "fill" }}
                      />
                    </StyledLink>
                  </ImageWrapper>
                  <Heading>
                    <Link to={path}>{title}</Link>
                  </Heading>
                  <Author>{`By ${name}`}</Author>
                  <Text>{excerpt}</Text>
                  <ReadMore to={path}>Read more...</ReadMore>
                </Article> */}
                {isMobile ? (
                  <PostCard
                    post={post}
                    pathPrefix={pathPrefix}
                    headingFontSize={22}
                    excerptFontSize={14}
                    vertical={true}
                    imageFirst={true}
                    imageWidth={50}
                    // imageHeightAuto
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
                    // imageHeightAuto
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
                    // imageHeightAuto
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
                    // imageHeightAuto
                  />
                )}
              </StyledCol>
            );
          })}
        </Row>
        <Pagination
          context={{ category, tag, numPages, currentPage, arrayOfPageNumbers }}
        />
      </StyledContainer>
    </StyledSection>
  );
};

export default BlogList;
