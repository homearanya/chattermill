import React, { useState, useRef, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Container } from "react-awesome-styled-grid";
import { useOnClickOutside } from "../../utils/hooks";
import UnivButtonLink from "../universal-button-link";

import {
  StyledNavigation,
  Nav,
  List,
  ListItem,
  UserAreaItem,
  Background
} from "./navigation.styled";

import logo from "../../images/logo-text.svg";
import Dropdown from "./dropdown";
import Burger from "./burger";
import MobileMenu from "./mobile-menu";

export type MenuItems = {
  name: string;
  href: string;
  subMenuItems: {
    name: string;
    href: string;
  }[];
}[];

interface NavigationData {
  menuItems: MenuItems;
}

interface NavigationQueryData {
  readonly markdownRemark: {
    frontmatter: NavigationData;
  };
}

function handleSubmit() {}

const Navigation = () => {
  const ref = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 32) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const {
    markdownRemark: { frontmatter }
  }: NavigationQueryData = useStaticQuery(graphql`
    query NavigationQuery {
      markdownRemark(fields: { slug: { eq: "/navigation/" } }) {
        frontmatter {
          menuItems {
            name
            href
            subMenuItems {
              name
              href
            }
          }
        }
      }
    }
  `);
  const { menuItems } = frontmatter;
  return (
    <>
      <StyledNavigation
        ref={ref}
        className={hasScrolled ? "scrolled" : undefined}
      >
        <Container>
          <Nav>
            <Link to="/">
              <img src={logo} alt="Chattermill logo" />
            </Link>
            <List>
              {menuItems.map((menuItem, index) => {
                const { name, href, subMenuItems } = menuItem;
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
                      <Dropdown title={name} list={subMenuItems} />
                    )}
                  </ListItem>
                );
              })}
              <UserAreaItem className="demo">
                <UnivButtonLink
                  button={{
                    text: "Get a Demo",
                    link:
                      "https://app.hubspot.com/meetings/jack123/30-minute-intro-to-chattermill",
                    inverted: true
                  }}
                />
              </UserAreaItem>
              <UserAreaItem>
                <UnivButtonLink
                  button={{
                    text: "Log In",
                    link: "https://app.chattermill.io/"
                  }}
                />
              </UserAreaItem>
            </List>
            <Burger open={open} setOpen={setOpen} />
          </Nav>
        </Container>
        <MobileMenu menuItems={menuItems} open={open} />
      </StyledNavigation>
      <Background open={open} />
    </>
  );
};

export default Navigation;
