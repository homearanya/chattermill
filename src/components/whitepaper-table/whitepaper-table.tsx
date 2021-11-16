import React from "react"

import { Container, Row } from "react-awesome-styled-grid"
import { TextBlockData } from "../../types"

import {
  StyledSection,
  StyledCol,
  StyledTextBlock,
} from "./whitepaper-table.styled"

export interface WhitepaperTableData {
  subHeading: string
  benefits: TextBlockData[]
}

interface WhitepaperTableProps {
  readonly data: WhitepaperTableData
  readonly withBoxShadow?: boolean
}

const WhitepaperTable = ({
  data: { benefits },
  withBoxShadow,
}: WhitepaperTableProps) => {
  return (
    <StyledSection className="benefits-section">
      <Container>
        <Row justify="center">
          {benefits.map((textBlock, index) => {
            return (
              <StyledCol key={index} xs={4} sm={4} md={4} lg={4}>
                <StyledTextBlock
                  textBlock={textBlock}
                  withBoxShadow={withBoxShadow}
                  withObserver
                />
              </StyledCol>
            )
          })}
        </Row>
      </Container>
    </StyledSection>
  )
}

export default WhitepaperTable
