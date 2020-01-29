import React from "react";
import { Link } from "gatsby";
import { FluidObject } from "gatsby-image";
import { Row } from "react-awesome-styled-grid";

import Pagination, { PaginationData } from "../pagination";

import {
  StyledSection,
  StyledContainer,
  TagHeading,
  StyledCol,
  ImageWrapper,
  StyledLink,
  StyledImg,
  Article,
  Heading,
  Author,
  Text,
  ReadMore
} from "./blog-list.styled";

import BlogHeading from "../blog-heading";

export interface BlogListData {
  node: {
    title: { title: string };
    id: string;
    slug: string;
    createdAt: string;
    tags?: string[];
    featuredImage: {
      title: string;
      fluid: FluidObject | undefined;
    };
    body: {
      childMarkdownRemark: {
        excerpt: string;
      };
    };
    author: {
      name: string;
    };
  };
}

interface BlogListProps {
  readonly data: BlogListData[];
  readonly totalCount?: number;
  readonly pageContext: PaginationData;
}

export const BlogList = ({
  data: edges,
  totalCount,
  pageContext
}: BlogListProps) => {
  const { tag } = pageContext;
  let tagName;
  if (tag) {
    tagName = tag.replace("-", " ").toUpperCase();
  }
  const classNames = tagName
    ? [
        "blog-heading",
        "tag-heading",
        ...edges.map(edge => `post-${edge.node.id}`)
      ]
    : ["blog-heading", ...edges.map(edge => `post-${edge.node.id}`)];

  const classNamesUsed = tagName ? 2 : 1;
  return (
    <StyledSection>
      <StyledContainer classNames={classNames}>
        <BlogHeading
          heading="Chattermill Insights"
          to="/resources/insights/"
          className={classNames[0]}
        />
        {tagName && (
          <TagHeading
            className={classNames[1]}
          >{`${tagName} (${totalCount})`}</TagHeading>
        )}
        <Row justify="center">
          {edges.map((edge, i) => {
            const {
              node: {
                id,
                slug,
                title: { title },
                featuredImage,
                author: { name },
                body: {
                  childMarkdownRemark: { excerpt }
                }
              }
            } = edge;
            const { fluid, title: imageTitle } = featuredImage;
            const path = `/resources/insights/${slug}/`;
            return (
              <StyledCol justify="center" key={id} xs={4} sm={4} md={6} lg={4}>
                <Article className={classNames[i + classNamesUsed]}>
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
                </Article>
              </StyledCol>
            );
          })}
        </Row>
        <Pagination context={pageContext} />
      </StyledContainer>
    </StyledSection>
  );
};

export default BlogList;
