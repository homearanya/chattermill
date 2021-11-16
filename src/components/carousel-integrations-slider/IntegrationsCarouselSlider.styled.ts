import { Link } from "gatsby"

import styled, { css } from "styled-components"

import { slidingSmoothly } from "../../styles/common.styled"

import Image from "../image"

export const Slider = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 5rem 0;
  :before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 24%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      white 2.52%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 2;
  }
  :after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    width: 24%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(
      270deg,
      white 2.52%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 2;
  }
`
interface RowProps {
  animationDuration: number
}
export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
  min-height: 3rem;
  transform: translate3d(0px, 0px, 0px);
  pointer-events: auto;
  ${({ animationDuration }) => css`
    animation: ${animationDuration}s linear 0s infinite normal none running
      ${slidingSmoothly};
  `};
  filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 6px);
  &:nth-child(2n) {
    margin-left: -8.8rem;
  }
`

export const StyledLink = styled(Link)`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: #ffffff;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.110058);
  border-radius: 2.1rem;
  padding: 0.7rem 3rem;
  margin: 0.5rem;
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 6rem;
`
export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  max-width: 5rem;
  max-height: 3rem;
  img {
    object-fit: contain !important ;
  }
`
