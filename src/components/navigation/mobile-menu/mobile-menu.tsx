// Burger.js
import React, { useEffect } from "react"
import { Link } from "gatsby"
import { Col } from "react-awesome-styled-grid"

import UnivButtonLink from "../../universal-button-link"

import MobileDropdown from "./mobile-dropdown"
import {
  StyledRow,
  StyledCol,
  List,
  ListItem,
  UserAreaItem,
} from "./mobile-menu.styled"
import { MenuItems } from "../navigation"

interface MobileMenuProps {
  menuItems: MenuItems
  open: boolean
}
const MobileMenu = ({ menuItems, open }: MobileMenuProps) => {
  useEffect(() => {
    // Update the document title using the browser API
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  })
  return (
    <StyledRow open={open}>
      <Col xs={4}>
        <List>
          {menuItems.map((menuItem, index) => {
            const { name, href, subMenuItems } = menuItem
            return (
              <ListItem key={index}>
                {href &&
                (href.indexOf("http://") !== -1 ||
                  href.indexOf("https://") !== -1) ? (
                  <a href={href}>{name}</a>
                ) : href ? (
                  <Link to={href} activeClassName="active">
                    {name}
                  </Link>
                ) : (
                  <MobileDropdown title={name} list={subMenuItems} />
                )}
              </ListItem>
            )
          })}
        </List>
      </Col>
      <StyledCol xs={4}>
        <List>
          <UserAreaItem style={{ marginBottom: "1.5rem" }}>
            <UnivButtonLink
              button={{ text: "Get a Demo", link: "/contact/", inverted: true }}
            />
          </UserAreaItem>
          <UserAreaItem>
            <UnivButtonLink
              button={{ text: "Log In", link: "https://app.chattermill.io/" }}
            />
          </UserAreaItem>
        </List>
      </StyledCol>
    </StyledRow>
  )
}

export default MobileMenu
