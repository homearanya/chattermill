import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Col } from "react-awesome-styled-grid"

import {
  StyledContainer,
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

const Footer = () => {
  const data = useStaticQuery<GatsbyTypes.FooterQueryQuery>(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          industries {
            pathPrefix
          }
        }
      }
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
      allContentfulIndustry(sort: { fields: [title], order: ASC }) {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `)
  let { menus } = data.markdownRemark.frontmatter
  // const {
  // 	site: {
  // 		siteMetadata: {
  // 			industries: { pathPrefix: industryPathPrefix },
  // 		},
  // 	},
  // } = data
  // const {
  // 	allContentfulIndustry: { edges: industryEdges },
  // } = data

  // if (industryEdges.length) {
  // 	const industryMenuItem = {
  // 		heading: "Industries",
  // 		menuItems: industryEdges.map(({ node }) => ({
  // 			name: node.title,
  // 			href: `${industryPathPrefix}${node.slug}/`,
  // 		})),
  // 	}
  // 	const calculatorsIndex = menus.findIndex(
  // 		(menuItem) => menuItem.heading === "Calculators"
  // 	)
  // 	menus = [
  // 		...menus.slice(0, calculatorsIndex),
  // 		industryMenuItem,
  // 		...menus.slice(calculatorsIndex),
  // 	]
  // }

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
      href: "https://angel.co/company/chattermill",
    },
  ]

  return (
    <StyledFooter>
      <StyledContainer>
        <NavigationRow>
          <SocialCol xs={4} align="center" noGutter>
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
          <Col xs={4} align="center">
            <MenusRow justify={{ sm: "space-around", lg: "space-between" }}>
              {menus.map((menu, index) => {
                const { heading, menuItems } = menu
                return (
                  <MenuCol
                    noGutter
                    key={index}
                    align={{ xs: "center", sm: "flex-start" }}
                  >
                    <MenuHeading>{heading}</MenuHeading>
                    <ul>
                      {menuItems && menuItems.length > 0
                        ? menuItems.map((menuItem, index) => (
                            <li key={index}>
                              {menuItem.href &&
                              (menuItem.href.indexOf("http://") !== -1 ||
                                menuItem.href.indexOf("https://") !== -1) ? (
                                <a
                                  key={index}
                                  href={menuItem.href}
                                  onClick={(e) => {
                                    window.analytics &&
                                      window.analytics.track(
                                        "Clicked OutBound Footer Link",
                                        {
                                          email: "dummy@dummy.com",
                                          label: menuItem.name,
                                        }
                                      )
                                  }}
                                >
                                  {menuItem.name}
                                </a>
                              ) : (
                                <Link
                                  key={index}
                                  to={menuItem.href}
                                  onClick={() => {
                                    window.analytics &&
                                      window.analytics.track(
                                        "Clicked Footer Link",
                                        {
                                          label: menuItem.name,
                                        }
                                      )
                                  }}
                                >
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
          <Col xs={4} align="center">
            &copy; Chattermill 2015-{today.getFullYear()} All Rights Reserved
          </Col>
        </CopyRightRow>
      </StyledContainer>
    </StyledFooter>
  )
}

export default Footer
