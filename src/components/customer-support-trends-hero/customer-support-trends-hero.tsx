import * as React from "react"

import { WideContainer } from "../../styles/common.styled"
import {
  StyledSection,
  Title,
  Description,
} from "./customer-support-trends-hero.styled"
import { Row, Col } from "react-awesome-styled-grid"
import { GatsbyImage } from "gatsby-plugin-image"

export interface HeaderProps {
  hero: {
    title: string
    description: string
    image: GatsbyTypes.Maybe<{
      readonly childImageSharp: GatsbyTypes.Maybe<
        Pick<GatsbyTypes.ImageSharp, "gatsbyImageData">
      >
    }>
  }
}

const CustomerSupportTrendsHero: React.FC<HeaderProps> = ({ hero }) => {
  const { title, description, image } = hero
  return (
    <StyledSection>
      <WideContainer>
        <Row align="center">
          <Col xs={4} sm={4} md={5} lg={5}>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Col>
          <Col xs={4} sm={4} md={7} lg={6} offset={{ lg: 1 }}>
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt={title}
              objectFit="contain"
            />
          </Col>
        </Row>
      </WideContainer>
    </StyledSection>
  )
}

export default CustomerSupportTrendsHero
