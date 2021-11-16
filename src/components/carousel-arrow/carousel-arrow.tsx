import React from "react"
import styled from "styled-components"
import { CustomArrowProps } from "react-slick"

interface CarouselArrowProps extends CustomArrowProps {
  right?: boolean
  bg?: string
  fill?: string
}

const CarouselArrow = ({
  right = true,
  bg,
  fill = "#fff",
  ...props
}: CarouselArrowProps) => {
  return (
    <Box right={right} bg={bg} {...props}>
      <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* <rect
          opacity="0.845113"
          x="38"
          y="38"
          width="38"
          height="38"
          rx="6"
          transform="rotate(-180 38 38)"
          fill="#291E45"
        /> */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.5666 18.9996L13.0842 15.9011C12.3548 15.6346 11.9787 14.8281 12.2434 14.0981C12.5091 13.3657 13.3188 12.9881 14.0506 13.2554L25.9158 17.5896C26.5155 17.8087 26.8764 18.393 26.8385 18.9996C26.8764 19.6062 26.5155 20.1905 25.9158 20.4096L14.0506 24.7438C13.3188 25.0111 12.5091 24.6335 12.2434 23.9011C11.9787 23.1711 12.3548 22.3646 13.0842 22.0981L21.5666 18.9996Z"
          fill={fill}
        />
      </svg>
    </Box>
  )
}

export default CarouselArrow

interface BoxProps {
  right: boolean
  bg?: string
}
const Box = styled.div<BoxProps>`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  left: ${({ right }) => (right ? "unset" : 0)};
  right: ${({ right }) => (right ? 0 : "unset")};
  ${({ bg }) => `
    background: ${`${bg} !important` || "transparent"};
    opacity: ${bg ? 1 : 0.7};
    padding: ${bg ? "1rem" : 0};
    box-sizing: ${bg ? "content-box" : "border-box"}
  `};
  z-index: 100;
  transition: opacity 0.3s;

  :hover {
    opacity: 1;
  }

  ::before {
    content: unset;
  }

  svg {
    transform: ${({ right }) => (right ? "rotate(0)" : "rotate(180deg)")};
  }
`
