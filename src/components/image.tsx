import React from "react"
import Img, { GatsbyImageProps } from "gatsby-image"

import { ImageObject } from "../types"

interface ImageProps extends GatsbyImageProps {
  readonly image: ImageObject
}

const Image = ({ image, ...props }: ImageProps) =>
  !!image && !!image.childImageSharp ? (
    <Img
      {...props}
      fixed={image.childImageSharp.fixed}
      fluid={image.childImageSharp.fluid}
    />
  ) : !!image && !!image.publicURL ? (
    <img
      src={image.publicURL}
      alt={props.alt}
      className={props.className as string | undefined}
      style={{ ...props.style, display: "inline-block" }}
    />
  ) : null

export default Image
