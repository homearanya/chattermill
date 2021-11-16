import React, { CSSProperties } from "react"
import Img, { FixedObject, FluidObject } from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"

import { getPresentationWidthFromSizes } from "../utils/helpers"
import LazyImage from "./lazy-image"
export interface ImageProps {
  readonly image?: SubFile
  readonly src?: string
  readonly className?: string
  readonly style?: CSSProperties
  readonly imgStyle?: CSSProperties
  readonly loading?: "auto" | "lazy" | "eager"
  readonly alt?: string
}

const Image = ({
  image,
  src,
  className,
  style,
  imgStyle,
  loading,
  alt,
  ...props
}: ImageProps) => {
  const fluid = image?.childImageSharp?.fluid
  const fixed = !fluid && image?.childImageSharp?.fixed
  const gatsbyImageData =
    !fluid &&
    image &&
    image.childImageSharp &&
    image.childImageSharp.gatsbyImageData
      ? image.childImageSharp.gatsbyImageData
      : undefined

  const publicURL = image && image.publicURL ? image.publicURL : undefined

  if (gatsbyImageData) {
    return (
      <GatsbyImage
        image={gatsbyImageData}
        className={className}
        imgStyle={imgStyle}
        alt={alt}
        {...props}
      />
    )
  } else if (fluid || gatsbyImageData) {
    let processedStyle = style
    if (fluid && fluid.sizes) {
      processedStyle = style
        ? {
            ...style,
            maxWidth: getPresentationWidthFromSizes(fluid.sizes),
            marginLeft: "auto", // Used to center the image
            marginRight: "auto", // Used to center the image
          }
        : {
            maxWidth: getPresentationWidthFromSizes(fluid.sizes),
            marginLeft: "auto", // Used to center the image
            marginRight: "auto", // Used to center the image
          }
    }

    return (
      <Img
        className={className}
        style={processedStyle}
        imgStyle={imgStyle}
        loading={loading}
        fixed={fixed as FixedObject}
        fluid={fluid as FluidObject}
        alt={alt}
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
  }
}

export default Image
