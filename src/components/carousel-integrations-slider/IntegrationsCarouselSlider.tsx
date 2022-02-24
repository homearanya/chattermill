import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { contentfulImageMap } from "../../utils/helpers"
import {
  ImageWrapper,
  StyledLink,
  Slider,
  StyledImage,
  Row,
} from "./IntegrationsCarouselSlider.styled"

const maxtotalRows = 5

const IntegrationsCarouselSlider = () => {
  const { site, allContentfulIntegration } = useStaticQuery<
    GatsbyTypes.IntegrationsCarouselSliderQuery
  >(graphql`
    query IntegrationsCarouselSlider {
      site {
        siteMetadata {
          integrations {
            pathPrefix
          }
        }
      }
      allContentfulIntegration {
        edges {
          node {
            id
            title
            slug
            logo {
              file {
                url
              }

              gatsbyImageData(
                width: 100
                quality: 100
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `)
  const { pathPrefix } = site.siteMetadata.integrations
  const slides2d = useMemo(() => {
    const slides = allContentfulIntegration.edges.map(({ node }) => ({
      ...node,
    }))

    let numRows = maxtotalRows
    let totalSlidesPerRow = Math.ceil(slides.length / numRows)
    let totalSlidesLastRow = slides.length % totalSlidesPerRow
    while (totalSlidesPerRow < 3 && numRows > 1) {
      numRows--
      totalSlidesPerRow = Math.ceil(slides.length / numRows)
      totalSlidesLastRow = slides.length % totalSlidesPerRow
    }
    let slides2d = []
    for (let i = 0; i < numRows; i++) {
      if (i < numRows - 1) {
        slides2d = [
          ...slides2d,
          [
            ...slides.slice(i * totalSlidesPerRow, (i + 1) * totalSlidesPerRow),
            ...slides.slice(i * totalSlidesPerRow, (i + 1) * totalSlidesPerRow),
          ],
        ]
      } else {
        slides2d = [
          ...slides2d,
          [
            ...slides.slice(
              i * totalSlidesPerRow,
              i * totalSlidesPerRow + totalSlidesLastRow
            ),
            ...slides.slice(
              i * totalSlidesPerRow,
              i * totalSlidesPerRow + totalSlidesLastRow
            ),
          ],
        ]
      }
    }

    return slides2d
  }, [allContentfulIntegration])

  return (
    <Slider>
      {slides2d.map((row, index) => {
        let animationDuration = 28
        switch (index) {
          case 0:
            animationDuration = 28
            break
          case 1:
            animationDuration = 34
            break
          case 2:
            animationDuration = 26
            break
          case 3:
            animationDuration = 32
            break
          case 4:
            animationDuration = 36
            break
        }
        return (
          <Row key={index} animationDuration={animationDuration}>
            {row.map(({ id, title, slug, logo }) => (
              <StyledLink key={id} to={`${pathPrefix}${slug}/`}>
                <ImageWrapper>
                  <StyledImage image={contentfulImageMap(logo)} alt={title} />
                </ImageWrapper>
              </StyledLink>
            ))}
          </Row>
        )
      })}
    </Slider>
  )
}

export default IntegrationsCarouselSlider
