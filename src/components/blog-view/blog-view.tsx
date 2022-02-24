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
    title,
    tags,
    date,
    featuredImage,
    author,
    body,
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
            {title?.title && (
              <Heading as="h1" className={classNames[1]}>
                {title.title}
              </Heading>
            )}
            <p
              className={classNames[3]}
              style={{
                fontSize: "16px",
                padding: "0.25rem 0rem",
              }}
            >
              {date}
            </p>
            {author?.name && (
              <Author className={classNames[2]}>{`By ${author.name}`}</Author>
            )}
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
            {featuredImage ? (
              <ImageWrapper className={classNames[4]}>
                <StyledImg
                  image={contentfulImageMap(featuredImage)}
                  alt={featuredImage.title}
                  loading="eager"
                />
              </ImageWrapper>
            ) : null}
            {body?.childMarkdownRemark?.html && (
              <Body
                dangerouslySetInnerHTML={{
                  __html: body.childMarkdownRemark.html,
                }}
                className={classNames[5]}
              />
            )}
          </Article>
        </StyledContainer>
      </StyledSection>
      <CTA2Blog data={data} />
    </div>
  )
}

export default BlogView
