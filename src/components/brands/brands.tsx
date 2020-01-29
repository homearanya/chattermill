import React from "react"
import { useInView } from "react-intersection-observer"
import { Col } from "react-awesome-styled-grid"

import { StyledLink, StyledWhiteIcon, StyledColorIcon } from "./brands.styled"

export interface BrandsProps {
  brands: {
    name: string
    whiteIcon: string
    colorIcon: string
    link: string
  }[]
  withObserver?: boolean
  columsXS: number
  noGutter?: boolean
}
export const Brands = ({
  brands,
  withObserver,
  columsXS,
  noGutter,
}: BrandsProps) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "50px",
  })
  return (
    <>
      {brands.map((brand, index) => {
        const { name, whiteIcon, colorIcon, link } = brand
        return (
          <Col
            key={index}
            noGutter={noGutter}
            xs={columsXS}
            sm={8 / 3}
            md={1}
            justify={{ xs: "center" }}
          >
            <StyledLink
              ref={ref}
              href={link}
              index={index}
              withObserver={withObserver}
              inView={inView}
              target="_blank"
            >
              <StyledWhiteIcon src={whiteIcon} alt={name} />
              <StyledColorIcon src={colorIcon} alt={name} />
            </StyledLink>
          </Col>
        )
      })}
    </>
  )
}

export default Brands
