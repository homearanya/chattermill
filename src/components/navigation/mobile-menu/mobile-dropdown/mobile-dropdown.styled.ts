import styled from "styled-components"

import {
  $colorHeading,
  $colorSecondary,
  $greyLight,
} from "../../../../styles/variables"
import { dropdownOpen } from "../../../../styles/common.styled"
import ArrowDown from "../../../../images/arrow-down.inline.svg"

import { menuItem, menuItemHover } from "../mobile-menu.styled"

export const ArrowDownIcon = styled(ArrowDown)`
  fill: ${$colorHeading};
  margin-left: 1rem;
  height: 1rem;
  width: 1rem;
  transition: fill 0.2s;
`

export const ArrowUpIcon = styled(ArrowDownIcon)`
  transform: rotateX(180deg);
`

export const Header = styled.div`
  ${menuItem};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2.2rem;
  width: 25rem;
  border-bottom: 2px solid transparent;
  :hover {
    ${menuItemHover};
    ${ArrowDownIcon} {
      fill: ${$colorSecondary};
    }
    cursor: pointer;
  }
`
export const Title = styled.span``

interface ListProps {
  isOpen: boolean
}
export const List = styled.ul<ListProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  list-style: none;
  padding: 1rem 0;
  animation: ${dropdownOpen} 0.5s;
`

export const ListItem = styled.li`
  a:link,
  a:visited {
    ${menuItem};
    font-size: 2rem;
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
