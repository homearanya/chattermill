// Burger.js
import React from "react"
import { Link } from "gatsby"
import { Col } from "react-awesome-styled-grid"

import { useLockBodyScroll } from "../../../utils/hooks"
import UnivButtonLink from "../../universal-button-link"
import MobileDropdown from "./mobile-dropdown"
import {
  StyledRow,
  StyledCol,
  List,
  ListItem,
  UserAreaItem,
  CategoriesSeparator,
} from "./mobile-menu.styled"
import { StyledUnivButtonLink, UnderlinedLink } from "../navigation.styled"

const handleMobileDemoClick = () => {
  window.analytics &&
    window.analytics.track("Clicked Button", {
      email: "dummy@dummy.com",
      label: "Clicked Mobile Demo Button",
    })
}

const handleMobileLoginClick = () => {
  window.analytics &&
    window.analytics.track("Clicked Button", {
      email: "dummy@dummy.com",
      label: "Clicked Mobile LogIn Button",
    })
}

interface MobileMenuProps {
  menuItems: GatsbyTypes.NavigationQuery["markdownRemark"]["frontmatter"]["menuItems"]
  categories: GatsbyTypes.NavigationQuery["allContentfulCategory"]["edges"]
  open: boolean
  blog: boolean
  pathPrefix: string
}
const MobileMenu = ({
  menuItems,
  categories,
  blog,
  pathPrefix,
  open,
}: MobileMenuProps) => {
  // Call hook to lock body scroll
  useLockBodyScroll(open)

  return (
    <StyledRow open={open}>
      {blog ? (
        <Col xs={4}>
          <List>
            <ListItem>
              <Link to={`${pathPrefix}`} activeClassName="active">
                Home Blog
              </Link>
            </ListItem>
            {categories.map(({ node }) => {
              const { title, id } = node
              return (
                <ListItem key={id}>
                  <Link
                    to={`${pathPrefix}category/${title}`}
                    activeClassName="active"
                  >
                    {title}
                  </Link>
                </ListItem>
              )
            })}
          </List>
          <CategoriesSeparator />
        </Col>
      ) : null}
      <Col xs={4}>
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
                  <MobileDropdown
                    title={name}
                    href={href}
                    list={subMenuItems}
                  />
                )}
              </ListItem>
            )
          })}
        </List>
      </Col>
      <StyledCol xs={4}>
        <List>
          <UserAreaItem>
            <StyledUnivButtonLink
              button={{
                text: "Log In",
                link: "https://app.chattermill.com/login",
                inverted: true,
                newTab: false,
                onClick: handleMobileLoginClick,
              }}
            />
          </UserAreaItem>
          <UserAreaItem>
            <UnivButtonLink
              button={{
                text: "Free Trial",
                link: "https://app.chattermill.com/signup",
                onClick: handleMobileDemoClick,
              }}
            />
          </UserAreaItem>
        </List>
      </StyledCol>
    </StyledRow>
  )
}

export default MobileMenu
