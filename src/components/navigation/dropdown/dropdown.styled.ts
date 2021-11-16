import styled from "styled-components"

import {
  $colorHeading,
  $colorSecondary,
  $white,
  $greyLight,
} from "../../../styles/variables"
import { boxShadow } from "../../../styles/mixins"
import ArrowDown from "../../../images/arrow-down.inline.svg"

import { menuItem, menuItemHover } from "../navigation.styled"

export const ArrowDownIcon = styled(ArrowDown)`
  fill: ${$colorHeading};
  margin-left: 0.5rem;
  height: 0.8rem;
  width: 0.8rem;
  transition: fill 0.2s;
`

export const ArrowUpIcon = styled(ArrowDownIcon)`
  transform: rotateX(180deg);
`

export const Wrapper = styled.div`
  position: relative;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  ${menuItem};
  :hover {
    ${menuItemHover};
    ${ArrowDownIcon} {
      fill: ${$colorSecondary};
    }
    cursor: pointer;
  }

  &&& {
    a {
      padding: 0;
      border-bottom: 0;
      display: inline;
    }
  }
`
export const Title = styled.span``
export const List = styled.ul`
  list-style: none;
  position: absolute;
  left: 0;
  ${boxShadow};
  background-color: ${$white};
  padding: 1rem 0;
  min-width: 22rem;
`
export const ListItem = styled.li`
  a:link,
  a:visited {
    ${menuItem};
    width: 100%;
    padding: 1rem 5rem 1rem 3rem;
    border: none;
  }
  a:hover,
  a:active {
    ${menuItemHover};
    border: none;
    background-color: ${$greyLight};
  }
`
