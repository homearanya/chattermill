import React from "react"
import { useInView } from "react-intersection-observer"

import {
  StyledCol,
  StyledLink,
  StyledWhiteIcon,
  StyledColorIcon,
} from "./brands.styled"

export interface Brand {
  name: string
  whiteIcon: string
  colorIcon: string
  link: string
  width?: string
  height?: string
}

export interface BrandsProps {
  brands: Brand[]
  withObserver?: boolean
  columsXS: number
  noGutter?: boolean
  className?: string
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
        const { name, whiteIcon, colorIcon, link, width, height } = brand
        return (
          <StyledCol
            key={index}
            noGutter={noGutter}
            xs={columsXS}
            sm={8 / 3}
            md={4}
            align={{ xs: "center" }}
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
              <StyledWhiteIcon
                src={whiteIcon}
                alt={name}
                width={width}
                height={height}
              />
              <StyledColorIcon
                src={colorIcon}
                alt={name}
                width={width}
                height={height}
              />
            </StyledLink>
          </StyledCol>
        )
      })}
    </>
  )
}

export default Brands
