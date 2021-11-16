import React from "react"
import { Link } from "gatsby"
import { Container, Row } from "react-awesome-styled-grid"
import { useInView } from "react-intersection-observer"
import { TextBlockData } from "../../types"

import {
  StyledSection,
  StyledHeading,
  StyledCol,
  StyledTextBlock,
  Cta,
} from "./unlock-table.styled"

export interface UnlockTableData {
  heading?: string
  subHeading: string
  benefits: TextBlockData[]
}

interface UnlockTableProps {
  readonly data: UnlockTableData
  readonly withBoxShadow?: boolean
  readonly withBorder?: boolean
}

const UnlockTable = ({
  data: { heading, benefits },
  withBoxShadow,
  withBorder,
}: UnlockTableProps) => {
  const [headingRef, headingInView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  })

  return (
    <StyledSection className="benefits-section" withBorder={withBorder}>
      <Container>
        {heading && (
          <StyledHeading
            dangerouslySetInnerHTML={{ __html: heading }}
            ref={headingRef}
            inView={headingInView}
          />
        )}
        <Row justify="center">
          {benefits.map((textBlock, index) => {
            return (
              <StyledCol key={index} xs={4} sm={2.5} md={2.4} lg={2.4}>
                <StyledTextBlock
                  textBlock={textBlock}
                  withBoxShadow={withBoxShadow}
                  withObserver
                />
              </StyledCol>
            )
          })}
        </Row>
        <Cta>
          Don't see your integration? We are always expanding our{" "}
          <Link to="/integrations/trustpilot/">
            <span className="underline">integrations list</span>
          </Link>
          .
        </Cta>
      </Container>
    </StyledSection>
  )
}

export default UnlockTable
