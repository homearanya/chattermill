import React from "react";
import { FluidObject } from "gatsby-image";
import kebabCase from "lodash.kebabcase";

import {
  StyledSection,
  StyledContainer,
  ImageWrapper,
  StyledImg,
  Article,
  Heading,
  Author,
  Tags,
  Tag,
  StyledButtonLink,
  Body
} from "./blog-view.styled";

import BlogHeading from "../blog-heading";

export interface BlogViewData {
  title: { title: string };
  slug: string;
  tags: string[];
  featuredImage: {
    title: string;
    fluid: FluidObject | undefined;
  };
  body: {
    childMarkdownRemark: {
      html: string;
      excerpt: string;
    };
  };
  author: {
    name: string;
  };
}

interface BlogViewProps {
  readonly data: BlogViewData;
}

export const BlogView = ({ data: post }: BlogViewProps) => {
  const {
    title: { title },
    tags,
    featuredImage,
    author: { name },
    body: {
      childMarkdownRemark: { html }
    }
  } = post;
  const { fluid, title: imageTitle } = featuredImage;
  const classNames = [
    "blog-heading",
    "post-heading",
    "author",
    "tags",
    "image",
    "body"
  ];

  return (
    <StyledSection>
      <StyledContainer classNames={classNames}>
        <BlogHeading
          heading="Chattermill Insights"
          to="/resources/insights/"
          className={classNames[0]}
        />
        <Article>
          <Heading className={classNames[1]}>{title}</Heading>
          <Author className={classNames[2]}>{`By ${name}`}</Author>
          <Tags className={classNames[3]}>
            {tags.map((tag, i) => (
              <Tag key={i}>
                <StyledButtonLink
                  to={`/resources/insights/tags/${kebabCase(tag)}/`}
                  secondary
                >
                  {tag}
                </StyledButtonLink>
              </Tag>
            ))}
          </Tags>
          <ImageWrapper className={classNames[4]}>
            <StyledImg fluid={fluid} alt={imageTitle} title={imageTitle} />
          </ImageWrapper>
          <Body
            dangerouslySetInnerHTML={{ __html: html }}
            className={classNames[5]}
          />
        </Article>
      </StyledContainer>
    </StyledSection>
  );
};

export default BlogView;
