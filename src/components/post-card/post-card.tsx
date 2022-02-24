import React from "react"

import { contentfulImageMap, textTruncate } from "../../utils/helpers"
// import htmlTruncate from "truncate-html";

import {
  StyledLink,
  Article,
  StyledImage,
  TextBlockWrapper,
  StyledCategory,
  StyledHeading,
  StyledAuthor,
  StyledIntro,
} from "./post-card.styled"
import { CssObjectFit } from "../../types"

interface PostCardProps {
  readonly post: GatsbyTypes.ContentfulPost
  readonly pathPrefix: string
  readonly imageFirst?: boolean
  readonly imageWidth?: number
  readonly imageHeight?: number
  readonly imageHeightAuto?: boolean
  readonly imageSize?: CssObjectFit
  readonly vertical?: boolean
  readonly headingFontSize?: number
  readonly excerptFontSize?: number
  readonly limit?: number
}

export const PostCard = ({
  post,
  pathPrefix,
  imageFirst = true,
  imageWidth = 65,
  imageHeight = 100,
  imageHeightAuto = false,
  imageSize = "contain",
  vertical = false,
  headingFontSize = 28,
  excerptFontSize = 16,
  limit = 200,
}: PostCardProps) => {
  const { title, category, slug, featuredImage, body, author } = post

  let text = body?.childMarkdownRemark?.excerpt ?? ""
  if (limit && text) {
    // text = htmlTruncate(html, limit);
    text = textTruncate(text, limit)
  }

  return (
    <StyledLink to={`${pathPrefix}${slug}`}>
      <Article imageFirst={imageFirst} vertical={vertical}>
        {featuredImage && (
          <StyledImage
            image={contentfulImageMap(featuredImage)}
            alt={featuredImage.title}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            imageHeightAuto={imageHeightAuto}
            vertical={vertical}
            imageFirst={imageFirst}
            imgStyle={{ objectFit: imageSize }}
          />
        )}
        <TextBlockWrapper>
          {category?.title && <StyledCategory>{category.title}</StyledCategory>}
          {title?.title && (
            <StyledHeading headingFontSize={headingFontSize}>
              {title.title}
            </StyledHeading>
          )}
          {author?.name && <StyledAuthor>{`By ${author.name}`}</StyledAuthor>}
          <StyledIntro
            dangerouslySetInnerHTML={{ __html: text }}
            excerptFontSize={excerptFontSize}
          />
        </TextBlockWrapper>
      </Article>
    </StyledLink>
  )
}

export default PostCard
