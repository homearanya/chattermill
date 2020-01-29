import React from "react"

import { ImageObject } from "../../types"

import { WideContainer } from "../../styles/common.styled"

import {
  StyledLogo,
  StyledImage,
  SmallHeader,
  StyledHeading,
} from "./customers-header.styled"

export interface CustomersHeaderData {
  readonly backgroundImage: {
    src: ImageObject
    alt: string
  }
}

interface CustomersHeaderProps {
  readonly data: CustomersHeaderData
}

export const CustomersHeader = ({ data }: CustomersHeaderProps) => {
  const {
    backgroundImage: { src, alt },
  } = data

  return (
    <section>
      <WideContainer>
        <StyledImage image={src} alt={alt} />
        <SmallHeader>
          <StyledLogo />
          <StyledHeading>Customers</StyledHeading>
        </SmallHeader>
      </WideContainer>
    </section>
  )
}

export default CustomersHeader
