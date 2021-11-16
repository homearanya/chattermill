import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

import {
  Grid,
  Header,
  Heading,
  Section,
  StyledButton,
  StyledContainer,
  SubTitle,
} from "./ProductDashboard.styled"

const ProductDashboard = () => {
  const { allContentfulProductPage, site } = useStaticQuery<GatsbyTypes.ProductDashboardQueryQuery>(graphql`
    query ProductDashboardQuery {
      site {
        siteMetadata {
          productPage {
            pathPrefix
          }
        }
      }
      allContentfulProductPage {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)
  const { pathPrefix } = site.siteMetadata.productPage

  const { pathname } = useLocation()
  const currentIndex = allContentfulProductPage.edges.findIndex(({ node }) => {
    const { slug } = node
    const productPath = `${pathPrefix}${slug}/`
    return productPath === pathname
  })

  let nextIndex
  if (currentIndex === allContentfulProductPage.edges.length - 1) {
    nextIndex = 0
  } else {
    nextIndex = currentIndex + 1
  }
  const nextProduct = allContentfulProductPage.edges[nextIndex].node

  return (
    <Section>
      <StyledContainer>
        <Grid>
          <Header to={`${pathPrefix}${nextProduct.slug}/`}>
            <SubTitle>Continue to</SubTitle>
            <Heading>{nextProduct.title}</Heading>
          </Header>
          {allContentfulProductPage.edges.map(({ node }) => {
            const { slug, title } = node
            const productPath = `${pathPrefix}${slug}/`
            return (
              <StyledButton to={productPath} active={productPath === pathname}>
                {title}
              </StyledButton>
            )
          })}
        </Grid>
      </StyledContainer>
    </Section>
  )
}

export default ProductDashboard
