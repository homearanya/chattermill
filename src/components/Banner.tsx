import React, { useEffect, useState } from "react"
import styled from "styled-components"
import media from "../styles/media"

interface BannerProps {
  text: string
  href: string
}
const Banner = ({ text, href }: BannerProps) => {
  return (
    <StyledBanner href={href} target="_blank">
      <SmallHeading>{text}</SmallHeading>
    </StyledBanner>
  )
}

export default Banner

export const StyledBanner = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 0;
  border-radius: 1px;
  /* position: absolute; */
  z-index: 99999999;
  background-color: #291c45;
  text-decoration: none;
  opacity: 1;
  transition: 0.5s all 2s;
`

export const SmallHeading = styled.h3`
  font-size: 1.6rem;
  line-height: 1.13;
  vertical-align: middle;
  color: white;
  font-weight: 500;
  text-align: center;
  letter-spacing: 2px;
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

  ${media.lessThan("md")`
    font-size: 1.3rem;
  `}
`
