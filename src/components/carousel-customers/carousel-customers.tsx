import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Carousel from "react-bootstrap/Carousel"

import {
  SectionWrapper,
  StyledSection,
  StyledContainer,
  ImageWrapper,
  StyledImage,
  Wrapper,
  Tagline,
  Title,
  SubTitle,
  ReadMore,
} from "./carousel-customers.styles"
import "./styles.css"
import { contentfulImageMap } from "../../utils/helpers"

interface CarouselCustomersProps {
  items: GatsbyTypes.ContentfulCaseStudy[]
  image: GatsbyTypes.ContentfulAsset
}

function CarouselCustomers({ items, image }: CarouselCustomersProps) {
  const {
    site: {
      siteMetadata: {
        customers: { pathPrefix },
      },
    },
  } = useStaticQuery<GatsbyTypes.CarouselCustomersQuery>(
    graphql`
      query CarouselCustomers {
        site {
          siteMetadata {
            customers {
              pathPrefix
            }
          }
        }
      }
    `
  )

  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <SectionWrapper>
      <ImageWrapper>
        <StyledImage image={contentfulImageMap(image)} />
      </ImageWrapper>
      <StyledSection>
        <StyledContainer>
          <Wrapper>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              controls={true}
              interval={3000}
              prevIcon={<span>&lt;</span>}
              nextIcon={<span>&gt;</span>}
            >
              {items.map((item, i) => {
                const { id, slug, name, carouselTitle, carouselSubtitle } = item
                let className
                if (i > index) {
                  if (i === items.length - 1 && index === 0) {
                    className = "behind"
                  } else {
                    className = "ahead"
                  }
                } else if (i < index) {
                  if (i === 0 && index === items.length - 1) {
                    className = "ahead"
                  } else {
                    className = "behind"
                  }
                }

                return (
                  <Carousel.Item key={id} className={className}>
                    <Tagline>{name}</Tagline>
                    <Title>{carouselTitle}</Title>
                    <SubTitle>{carouselSubtitle}</SubTitle>
                    <ReadMore to={`${pathPrefix}${slug}`}>
                      Read More<span>&nbsp;&ndash;&gt;</span>
                    </ReadMore>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Wrapper>
        </StyledContainer>
      </StyledSection>
    </SectionWrapper>
  )
}

export default CarouselCustomers
