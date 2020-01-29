import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Container, Col } from "react-awesome-styled-grid"

import {
  StyledFooter,
  NavigationRow,
  SocialLinksWrapper,
  SocialLinkWrapper,
  MenuHeading,
  MenusRow,
  MenuCol,
  SocialCol,
  CopyRightRow,
} from "./footer.styled"

import TwitterIcon from "../../images/twitter.inline.svg"
import MediumIcon from "../../images/medium.inline.svg"
import LinkdedInIcon from "../../images/linkedin.inline.svg"
import FacebookIcon from "../../images/facebook.inline.svg"
import AngelListIcon from "../../images/angellist.inline.svg"

interface FooterQueryData {
  readonly markdownRemark: {
    frontmatter: {
      menus: {
        heading: string
        menuItems: {
          name: string
          href: string
        }[]
      }[]
    }
  }
}

const Footer = () => {
  const data: FooterQueryData = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(fields: { slug: { eq: "/footer/" } }) {
        frontmatter {
          menus {
            heading
            menuItems {
              name
              href
            }
          }
        }
      }
    }
  `)
  const { menus } = data.markdownRemark.frontmatter
  const today = new Date()

  const socials: {
    name: "Twitter" | "Medium" | "LinkedIn" | "Facebook" | "AngelList"
    icon: React.FunctionComponentElement<SVGElement>
    color: string
    background: string
    href: string
  }[] = [
    {
      name: "Twitter",
      icon: <TwitterIcon />,
      color: "#30ace3",
      background: "#00000000",
      href: "https://www.twitter.com/chattermillAI/",
    },
    {
      name: "Medium",
      icon: <MediumIcon />,
      color: "#ffffff",
      background: "#000000d6",
      href: "https://blog.chattermill.io/",
    },
    {
      name: "LinkedIn",
      icon: <LinkdedInIcon />,
      color: "#ffffff",
      background: "#0073B0",
      href: "https://www.linkedin.com/company/chattermill",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon />,
      color: "#ffffff",
      background: "#0073B0",
      href: "https://www.facebook.com/chattermillAI",
    },
    {
      name: "AngelList",
      icon: <AngelListIcon />,
      color: "#ffffff",
      background: "#000000",
      href: "https://www.angel.co/chattermill",
    },
  ]
  return (
    <StyledFooter>
      <Container>
        <NavigationRow>
          <SocialCol
            xs={4}
            lg={3}
            justify={{ xs: "center", lg: "start" }}
            noGutter
          >
            <SocialLinksWrapper>
              {socials.map((socialLink, index) => {
                const { color, background, icon, href } = socialLink
                return (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialLinkWrapper color={color} background={background}>
                      {icon}
                    </SocialLinkWrapper>
                  </a>
                )
              })}
            </SocialLinksWrapper>
          </SocialCol>
          <Col xs={4} lg={9}>
            <MenusRow justify={{ sm: "space-between" }}>
              {menus.map((menu, index) => {
                const { heading, menuItems } = menu
                return (
                  <MenuCol xs={4} sm={1} noGutter key={index}>
                    <MenuHeading>{heading}</MenuHeading>
                    <ul>
                      {menuItems && menuItems.length > 0
                        ? menuItems.map((menuItem, index) => (
                            <li key={index}>
                              {menuItem.href &&
                              (menuItem.href.indexOf("http://") !== -1 ||
                                menuItem.href.indexOf("https://") !== -1) ? (
                                <a key={index} href={menuItem.href}>
                                  {menuItem.name}
                                </a>
                              ) : (
                                <Link key={index} to={menuItem.href}>
                                  {menuItem.name}
                                </Link>
                              )}
                            </li>
                          ))
                        : null}
                    </ul>
                  </MenuCol>
                )
              })}
            </MenusRow>
          </Col>
        </NavigationRow>
        <CopyRightRow>
          <Col xs={4} lg={4} offset={{ lg: 8 }} justify={{ xs: "center" }}>
            &copy; Chattermill 2015-{today.getFullYear()} All Rights Reserved
          </Col>
        </CopyRightRow>
      </Container>
    </StyledFooter>
  )
}

export default Footer
