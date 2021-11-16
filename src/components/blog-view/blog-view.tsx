import React from "react"
import { kebabCase } from "lodash"

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
  Body,
} from "./blog-view.styled"
import CTA2Blog from "../cta2-blog"

import { contentfulImageMap } from "../../utils/helpers"

const data = {
  shapeColor: "#10C2ED",
  text: "Power your CX with Chattermill",
}

// import BlogHeading from "../blog-heading";

interface BlogViewProps {
  readonly data: GatsbyTypes.ContentfulPost
}

export const BlogView = ({ data: post }: BlogViewProps) => {
  const {
    title: { title },
    tags,
    date,
    featuredImage,
    author: { name },
    body: {
      childMarkdownRemark: { html },
    },
  }: GatsbyTypes.ContentfulPost = post
  const classNames = [
    "blog-heading",
    "post-heading",
    "author",
    "date",
    "tags",
    "image",
    "body",
  ]

  return (
    <div>
      <StyledSection>
        <StyledContainer classNames={classNames}>
          <Article>
            <Heading as="h1" className={classNames[1]}>
              {title}
            </Heading>
            <p
              className={classNames[3]}
              style={{
                fontSize: "16px",
                padding: "0.25rem 0rem",
              }}
            >
              {date}
            </p>
            <Author className={classNames[2]}>{`By ${name}`}</Author>
            <Tags className={classNames[4]}>
              {tags
                ? tags.map((tag, i) => (
                    <Tag key={i}>
                      <StyledButtonLink
                        to={`/blog/tags/${kebabCase(tag)}/`}
                        secondary
                      >
                        {tag}
                      </StyledButtonLink>
                    </Tag>
                  ))
                : null}
            </Tags>
            {featuredImage && featuredImage.fluid ? (
              <ImageWrapper className={classNames[4]}>
                <StyledImg
                  image={contentfulImageMap(featuredImage)}
                  alt={featuredImage.title}
                  loading="eager"
                />
              </ImageWrapper>
            ) : null}
            <Body
              dangerouslySetInnerHTML={{ __html: html }}
              className={classNames[5]}
            />
          </Article>
        </StyledContainer>
      </StyledSection>
      <CTA2Blog data={data} />
    </div>
  )
}

export default BlogView
