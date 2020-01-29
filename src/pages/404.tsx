import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { TextBlockData } from "../types"
import { StyledTextBlock } from "../components/home-header/home-header.styled"

const ReStyledTextBlock = styled(StyledTextBlock)`
  text-align: center;
  padding: 7rem 0 0;
  .text {
    font-size: 1.6rem;
  }
`

const NotFoundPage = () => {
  const textBlock: TextBlockData = {
    heading: "PAGE NOT FOUND",
    text: ["You just hit a route that doesn&#39;t exist... the sadness."],
    button: {
      text: "Take me Home",
      link: "/",
    },
  }
  return (
    <Layout className="notfound-page">
      <SEO title="404: Page Not found" />
      <Container>
        <Row>
          <Col justify="center">
            <ReStyledTextBlock
              textBlock={textBlock}
              classNames={Object.keys(textBlock)}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
