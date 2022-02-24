import React, { CSSProperties, FC } from "react"
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image"

import LazyImage from "./lazy-image"
export interface ImageProps {
  readonly image?: SubFile
  readonly src?: string
  readonly className?: string
  readonly style?: CSSProperties
  readonly imgStyle?: CSSProperties
  readonly loading?: "auto" | "lazy" | "eager"
  readonly alt?: string
  readonly objectFit?: CSSProperties["objectFit"]
}

const Image: FC<ImageProps> = ({
  image,
  src,
  className,
  style,
  imgStyle,
  loading,
  alt,
  objectFit,
  ...props
}: ImageProps) => {
  const gatsbyImageData = image?.childImageSharp?.gatsbyImageData

  const publicURL = image && image.publicURL ? image.publicURL : undefined

  if (gatsbyImageData) {
    return (
      <GatsbyImage
        image={gatsbyImageData}
        className={className}
        imgStyle={imgStyle}
        alt={alt}
        objectFit={objectFit}
        {...props}
      />
    )
  } else if (publicURL || src) {
    return (
      <LazyImage
        src={publicURL || src}
        alt={alt}
        className={className}
        style={{ ...style, display: "inline-block" }}
        {...props}
      />
    )
  } else {
    return null
  }
}

export default Image
