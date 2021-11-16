import { getSrc } from "gatsby-plugin-image"
import React from "react"
import { Container } from "react-awesome-styled-grid"

import {
  StyledSection,
  StyledRow,
  InnerWrapper,
  StyledImage,
  StyledReportImage,
  StyledWrapper,
  StyledLabel,
  StyledParagraph,
  Button,
} from "./features-section-product.styled"

export const FeatureSectionProduct = ({
  data,
  cols = 4,
  boldLabel = true,
  fullHeight = true,
}) => {
  return (
    <StyledSection>
      <Container>
        <StyledRow cols={cols}>
          {data &&
            data.map((card, index) => {
              return (
                <InnerWrapper>
                  <StyledWrapper key={index} fullHeight={fullHeight}>
                    <StyledImage
                      src={
                        card.icon.file?.url ||
                        getSrc(card.icon?.childImageSharp?.gatsbyImageData)
                      }
                      key={index}
                    />
                    {card.image ? (
                      <StyledReportImage
                        src={card.image.publicURL}
                        key={index}
                      />
                    ) : null}
                    <StyledLabel
                      boldLabel={boldLabel}
                      key={index}
                      dangerouslySetInnerHTML={{ __html: card.label }}
                    />
                    <StyledParagraph key={index}>
                      {card.description}
                    </StyledParagraph>
                  </StyledWrapper>
                  {card.button ? (
                    <Button to={card.button.link}>{card.button.text}</Button>
                  ) : null}
                </InnerWrapper>
              )
            })}
        </StyledRow>
      </Container>
    </StyledSection>
  )
}

export default FeatureSectionProduct
