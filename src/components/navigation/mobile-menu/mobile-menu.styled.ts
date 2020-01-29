import styled, { css } from "styled-components"
import { Row, Col } from "react-awesome-styled-grid"

import media from "../../../styles/media"
import {
  $white,
  $colorHeading,
  $colorSecondary,
  $colorPrimary,
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

  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  z-index: -1;
`

export const StyledCol = styled(Col)`
  display: none;

  ${media.lessThan("sm")`
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
  border-bottom: 2px solid transparent;
`
export const menuItemHover = css`
  color: ${$colorSecondary};
  border-bottom: 2px solid ${$colorPrimary};
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

  &:first-child a {
    padding: 0;
  }

  ${media.lessThan("sm")`
    &:first-child {
      margin-top: 3rem;
    }
  `}
`
