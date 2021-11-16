import styled, { css } from "styled-components"
import { Link } from "gatsby"

import {
  $white,
  $colorHeading,
  $colorSecondary,
  $colorPrimary,
  $greyUltraLight,
  $lime,
} from "../../styles/variables"

import media from "../../styles/media"
import UnivButtonLink from "../universal-button-link"

interface StyledNavigationProps {
  blog?: boolean
}
export const StyledNavigation = styled.header<StyledNavigationProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${$white};
  z-index: 1000;
  transition: all 0.1s;
  height: ${({ blog }) => (blog ? "14rem" : "10rem")};

  & > div {
    width: 100%;
  }

  ${media.lessThan("sm")`
    height:  8rem;
`}
`

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  margin: 0.5rem 0 0.5rem 0;
  align-items: center;
  justify-content: space-between;
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  background-color: ${$white};
  z-index: 1;

  ${media.lessThan("sm")`
    margin-top: 0;
  `}
`

export const Logo = styled(Link)`
  ${media.lessThan("mdl")`
    max-width: 12rem;
  `};
`
export const UnderlinedLink = styled(Link)`
  border-bottom: 3px solid ${$lime} !important;

  &:hover {
    border-bottom: 3px solid ${$colorPrimary} !important;
  }
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
  width: 100%;
  border-bottom: 3px solid transparent;
  ${media.lessThan("mdl")`
      padding: 1rem 0.6rem 0.7rem 0.6rem;
  `}
`
export const menuItemHover = css`
  color: ${$colorSecondary};
  border-bottom: 3px solid ${$colorPrimary};
`
export const ListItem = styled.li`
  padding: 0.5rem;
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
  display: flex;
  align-items: center;
  &.login a {
    margin: 0 1rem 0 1rem;
    padding-left: 2rem;
  }

  &.demo a {
    margin: 0rem 0rem 0rem 0rem;
  }

  &.trial a {
    margin: 0rem 0rem 0rem 0rem;
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
  z-index: ${({ open }) => (open ? "100" : "-1")};
  transition: opacity 0.3s linear;
`

interface CategoryNavProps {
  open?: boolean
}
export const CategoryNav = styled.nav<CategoryNavProps>`
  position: relative;
  background-color: ${$white};
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 6rem;
  /* justify-content: center; */
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  border-bottom: ${`1px solid ${$greyUltraLight}`};

  ${media.lessThan("sm")`
    border-bottom: 0;
  `};
`
export const LogoArea = styled.div`
  display: flex;
  align-items: center;
`

const ulStyles = css`
  list-style: none;
  display: flex;
  align-items: center;
  position: relative;
  top: 0.15rem;
`

export const CategoryList = styled.ul`
  ${ulStyles};
  align-items: center;
  /* provisional until I sort out search */
`
export const categoryMenuItem = css`
  color: ${$colorHeading};
  display: block;
  font-size: 1.6rem;
  padding: 1rem 3rem 0.7rem;
  text-decoration: none;

  transition: all 0.2s;
  border-bottom: 3px solid transparent;
  &.active {
    border-bottom: 3px solid ${$colorPrimary};
  }
`
export const categoryMenuItemHover = css`
  color: ${$colorSecondary};
  border-bottom: 3px solid ${$colorPrimary};
`
export const CategoryListItem = styled.li`
  a:link,
  a:visited {
    ${categoryMenuItem};
    ${LogoArea} & {
      font-weight: 600;
      color: ${$colorSecondary};

      ${media.lessThan("sm")`
        padding: 1rem 2rem 0.7rem;
      `};
    }
  }

  a:hover,
  a:active {
    ${categoryMenuItemHover};
  }

  ${CategoryList} & {
    ${media.lessThan("sm")`
    display: none;
  `};
  }
`
export const StyledUnivButtonLink = styled(UnivButtonLink)`
  border-color: ${$white} !important;
  margin-right: 2rem;
  ${media.lessThan("sm")`
    margin-right: 0rem;
    margin-bottom: 2rem;
  `};
`
