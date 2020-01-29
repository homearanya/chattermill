import styled, { css } from "styled-components"

import {
  $white,
  $colorHeading,
  $colorSecondary,
  $colorPrimary,
} from "../../styles/variables"

import media from "../../styles/media"

export const StyledNavigation = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${$white};
  z-index: 1000;
  transition: all 0.2s;
  height: 9rem;

  &.scrolled {
    height: 6rem;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${$white};
    z-index: 0;
  }
`

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
`
export const List = styled.ul`
  list-style: none;
  display: flex;
`

export const menuItem = css`
  color: ${$colorHeading};
  display: inline-block;
  font-size: 1.4rem;
  padding: 1rem 1.5rem 0.7rem 1.5rem;
  text-decoration: none;
  transition: all 0.2s;
  border-bottom: 3px solid transparent;
`
export const menuItemHover = css`
  color: ${$colorSecondary};
  border-bottom: 3px solid ${$colorPrimary};
`
export const ListItem = styled.li`
  a:link,
  a:visited {
    ${menuItem};
  }

  a:hover,
  a:active {
    ${menuItemHover};
  }

  ${media.lessThan("md")`
    display: none;
  `};
`

export const UserAreaItem = styled(ListItem)`
  &.login a {
    margin: 0 1rem 0 2rem;
  }

  &.demo a {
    margin: 0 1rem;
  }

  ${media.lessThan("md")`
    display: list-item;
    &.login a{
      margin: 0 1rem 0 0;
      padding-left: 0;
    }
  `};
  ${media.lessThan("sm")`
    display: none;
    margin: 0 ;
    padding: 0;
  `};
`

interface BackgroundProps {
  open: boolean
}
export const Background = styled.div<BackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: ${({ open }) => (open ? "1" : "0")};
  background-color: rgb(41, 28, 69, 0.9);
  z-index: ${({ open }) => (open ? "999" : "-999")};
  transition: opacity 0.3s linear;
`
