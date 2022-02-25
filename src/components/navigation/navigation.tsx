import React, { useState, useRef } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container } from "react-awesome-styled-grid"
import { useOnClickOutside } from "../../utils/hooks"
import UnivButtonLink from "../universal-button-link"
import {
  StyledNavigation,
  Nav,
  List,
  ListItem,
  UserAreaItem,
  Background,
  CategoryNav,
  CategoryList,
  CategoryListItem,
  Logo,
  StyledUnivButtonLink,
  UnderlinedLink,
} from "./navigation.styled"

import logo from "../../images/logo-text.svg"
import Dropdown from "./dropdown"
import Burger from "../burger"
import MobileMenu from "./mobile-menu"
import Banner from "../Banner"

export interface MenuEdge {
  node: {
    id: string
    title: string
    slug?: string
  }
}

type MenuItem = {
  name: string
  href: string
  onClick?: () => void
  subMenuItems?: {
    name: string
    href: string
  }[]
}

export type MenuItems = MenuItem[]

const handleDemoClick = () => {
  window.analytics &&
    window.analytics.track("Clicked Button", {
      email: "dummy@dummy.com",
      label: "Clicked Get Started Button",
    })
}
const handleLogInClick = () => {
  window.analytics &&
    window.analytics.track("Clicked Button", {
      email: "dummy@dummy.com",
      label: "Clicked LogIn Button",
    })
}
interface NavigationProps {
  path?: string
  blog?: boolean
}
const Navigation = ({ blog = false }: NavigationProps) => {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)

  useOnClickOutside(ref, () => setOpen(false))

  const {
    site: {
      siteMetadata: {
        blog: { pathPrefix },
      },
    },
    allContentfulCategory: { edges },
    markdownRemark: { frontmatter },
  } = useStaticQuery<GatsbyTypes.NavigationQuery>(graphql`
    query Navigation {
      markdownRemark(fields: { slug: { eq: "/navigation/" } }) {
        frontmatter {
          menuItems {
            name
            href
            underlined
            subMenuItems {
              name
              href
            }
          }
        }
      }
      site {
        siteMetadata {
          blog {
            pathPrefix
          }
        }
      }
      allContentfulCategory(sort: { fields: [order], order: ASC }) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)
  const { menuItems } = frontmatter

  return (
    <>
      {!open && (
        <Banner
          href="/customer-support-trends/"
          text="Get your free copy of Chattermill’s Customer Support Trends 2022 Report"
        />
      )}
      <StyledNavigation ref={ref} blog={blog}>
        <Container>
          <Nav>
            <Logo to="/">
              <img
                width="137px"
                height="21px"
                src={logo}
                alt="Chattermill logo"
              />
            </Logo>
            <List>
              {menuItems.map((menuItem, index) => {
                const { name, href, underlined, subMenuItems } = menuItem
                return (
                  <ListItem key={index}>
                    {href &&
                    (href.indexOf("http://") !== -1 ||
                      href.indexOf("https://") !== -1) ? (
                      <a href={href}>{name}</a>
                    ) : !subMenuItems ? (
                      underlined ? (
                        <UnderlinedLink to={href} activeClassName="active">
                          {name}
                        </UnderlinedLink>
                      ) : (
                        <Link to={href} activeClassName="active">
                          {name}
                        </Link>
                      )
                    ) : (
                      <Dropdown title={name} href={href} list={subMenuItems} />
                    )}
                  </ListItem>
                )
              })}
              <UserAreaItem>
                <StyledUnivButtonLink
                  button={{
                    text: "Log In",
                    link: "https://app.chattermill.com/login",
                    inverted: true,
                    onClick: handleLogInClick,
                  }}
                />
              </UserAreaItem>
              <UserAreaItem className="trial">
                <UnivButtonLink
                  button={{
                    text: "Free Trial",
                    link: "https://app.chattermill.com/signup",
                    inverted: false,
                    onClick: handleDemoClick,
                  }}
                />
              </UserAreaItem>
            </List>
            <Burger open={open} setOpen={setOpen} />
          </Nav>
          {blog ? (
            <CategoryNav open={open}>
              <CategoryList>
                <CategoryListItem>
                  <Link to={`${pathPrefix}`} activeClassName="active">
                    Home Blog
                  </Link>
                </CategoryListItem>
                {edges.map(({ node }) => {
                  const { title, id } = node
                  return (
                    <CategoryListItem key={id}>
                      <Link
                        to={`${pathPrefix}category/${title}`}
                        activeClassName="active"
                      >
                        {title}
                      </Link>
                    </CategoryListItem>
                  )
                })}
              </CategoryList>
            </CategoryNav>
          ) : null}
        </Container>
        <MobileMenu
          blog={blog}
          pathPrefix={pathPrefix}
          menuItems={menuItems}
          categories={edges}
          open={open}
        />
      </StyledNavigation>
      <Background open={open} />
    </>
  )
}
export default Navigation
