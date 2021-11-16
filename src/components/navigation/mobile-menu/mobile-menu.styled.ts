import styled, { css } from "styled-components"
import { Row, Col } from "react-awesome-styled-grid"

import media from "../../../styles/media"
import {
  $white,
  $colorHeading,
  $colorSecondary,
  $colorPrimary,
  $greyUltraLight,
} from "../../../styles/variables"

interface StyledRowProps {
  open: boolean
}

export const StyledRow = styled(Row)<StyledRowProps>`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 3rem;
  width: 100vw;
  background-color: ${$white};
  transition: transform 0.3s ease-in-out;
  margin: 0 !important;
  overflow-y: scroll;
  height: calc(100vh - 80px);
  -webkit-overflow-scrolling: touch;

  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-120%)")};
  z-index: -1;

  display: none;
  ${media.lessThan("md")`
    display: block;
  `}
`

export const StyledCol = styled(Col)`
  display: none;

  ${media.lessThan("md")`
  display: flex;
  align-items: center;
  justify-content: center;

  `}
`
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

export const menuItem = css`
  color: ${$colorHeading};
  display: inline-block;
  font-size: 2.2rem;
  padding: 1rem 0rem 0.8rem 0rem;
  text-decoration: none;
  transition: all 0.2s;
  border-bottom: 3px solid transparent;
  &.active {
    border-bottom: 3px solid ${$colorPrimary};
    overflow: scroll;
  }
`
export const menuItemHover = css`
  color: ${$colorSecondary};
  border-bottom: 3px solid ${$colorPrimary};
`
export const ListItem = styled.li`
  width: 25rem;
  margin: 0 auto;

  a:link,
  a:visited {
    ${menuItem};
  }

  a:hover,
  a:active {
    ${menuItemHover};
  }
`
export const UserAreaItem = styled(ListItem)`
  width: auto;

  & a {
    font-size: 2.2rem !important;
  }

  &:first-child a {
    padding: 0;
  }

  ${media.lessThan("md")`
    &:first-child {
      margin-top: 3rem;
    }
  `}
`
export const CategoriesSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${$greyUltraLight};
  margin: 2rem 0;
`
