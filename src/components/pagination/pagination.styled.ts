import styled, { css } from "styled-components"

import media from "../../styles/media"
import { ButtonLink } from "../../styles/common.styled"
import { $colorSecondary, $colorHeading } from "../../styles/variables"
import { absoluteCenter } from "../../styles/mixins"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 5rem auto 0;
  width: 100%;
  padding: 0 1.5rem;
`

export const PreviousLink = styled(ButtonLink)`
  margin-right: auto;
  order: 1;
  ${media.lessThan("sm")`
    display: none !important;
  `}
`

export const NextLink = styled(ButtonLink)`
  margin-left: auto;
  order: 3;
  ${media.lessThan("sm")`
    display: none !important;
  `}
`

export const PageIndicator = styled.span`
  ${absoluteCenter};
  font-size: 1.6rem;
  color: ${$colorSecondary};
  z-index: -1;
  opacity: 0.7;

  ${media.lessThan("sm")`
    font-size: 1.4rem;
    padding: 1rem 0;
  `}
`

export const ListOfPageNumbers = styled.ul`
  ${absoluteCenter};
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const activeStyles = css`
  color: ${$colorHeading};
  transform: scale(1.5);
  opacity: 1;
`

interface PageNumberProps {
  active: boolean
}
export const PageNumber = styled.li<PageNumberProps>`
  font-size: 1.6rem;
  padding: 0.3rem 0.6rem;
  transition: all 0.2s;
  opacity: 0.5;
  ${({ active }) => active && activeStyles}

  cursor: pointer;
  :hover {
    ${activeStyles};
  }

  a {
    text-decoration: none;
    color: ${$colorSecondary};
  }
`
