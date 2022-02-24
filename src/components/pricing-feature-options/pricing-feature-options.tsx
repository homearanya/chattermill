import React from "react"
import { InfoCircleOutlined, CheckCircleTwoTone } from "@ant-design/icons"
import {
  StyledMediumHeader,
  StyledLink,
  StyledWideContainer,
  StyledColHeader,
  StyledDiv,
  StyledThead,
  StyledTable,
  StyledDivGap,
  StyledTooltip,
  StyledAlternateMainHeader,
} from "./pricing-feature-options.styles"
import StyledTableRow from "./styled-row/styled-row1"
import StyledTableRow1 from "./styled-row/styled-row2"

const data = {
  item1: {
    description: "Channel",
    tooltip:
      "A channel is a single source of customer feedback, such as an NPS survey, CSAT survey, Online reviews or App Store reviews. Our most advance customers use unify multiple channels of customer feedback within Chattermill to discover novel insights across the customer journey and scale their Customer Experience.",
    fact1: 1,
    fact2: 3,
    fact3: "Custom",
  },
  item2: {
    description: "Volume",
    tooltip:
      "Free accounts have up to 1,000 /month, Teams accounts have up to 3,000 /month and Enterprise accounts have custom volumes of customer feedback responses and comments.",
    fact1: "1,000 / month",
    fact2: "3,000 / month",
    fact3: "Bespoke",
  },
  item3: {
    description: "Users",
    fact1: 20,
    fact2: 50,
    fact3: "Unlimited",
  },
  item4: {
    description: "Models",
    tooltip:
      "Models are what we use to analyse your data. Our most powerful models are custom built and trained on your own existing datasets to produce the most granular and accurate levels of customer insight.",
    fact1: "Universal",
    fact2: "Industry and Data Type models",
    fact3: "Bespoke",
  },
  item5: {
    description: "Attributes",
    tooltip:
      "An attribute is usually operational or transactional data passed with each piece of customer feedback. For example, a customers location, the products bought or the customer care agent they spoke to.",
    fact1: "X",
    fact2: 3,
    fact3: "Unlimted",
  },
  item6: {
    description: "Integrations",
    tooltip:
      "Integrations differ depending on the plan you are on. Free plans include one integration (NPS, Reviews, CSV, Customer Support tickets or App Store feedback). Teams plan include three integrations from the same options, including  additional attributes. Our enterprise plans include advanced and custom integrations depending on your requirements.",
    fact1: "Basic",
    fact2: "Standard",
    fact3: "Bespoke",
  },
  item7: {
    description: "Languages",
    fact1: 1,
    fact2: "Multiple",
    fact3: "Unlimited",
  },
  item8: {
    description: "Support",
    fact1: "Self-service resources only",
    fact2: "Standard support without SLAs",
    fact3: "Full customer support with account manager",
  },
  item9: {
    description: "Infosec and Legal Review",
    fact1: "X",
    fact2: "X",
    fact3: <CheckCircleTwoTone />,
  },
}

const PricingFeatureTable = () => {
  return (
    <StyledWideContainer>
      <StyledTooltip place="right" effect="float" />

      <StyledTable
        cellPadding="0"
        cellSpacing="0"
        style={{
          padding: "5rem",
        }}
      >
        <tbody
          style={{
            overflowY: "scroll",
          }}
        >
          <StyledThead>
            <StyledColHeader
              style={{
                justifyContent: "space-between",
                borderLeft: "1px solid rgb(227, 236, 240)",
                borderBottom: "1px solid rgb(227, 236, 240)",
                borderTop: "1px solid rgb(227, 236, 240)",
              }}
            >
              <StyledDiv>
                <StyledDivGap></StyledDivGap>
                <StyledAlternateMainHeader>
                  FEATURES AND SERVICES
                </StyledAlternateMainHeader>
              </StyledDiv>
            </StyledColHeader>
            <StyledColHeader>
              <StyledDiv>
                <StyledMediumHeader>Community</StyledMediumHeader>
                <StyledLink href="https://app.chattermill.com/signup/">
                  Start For Free
                </StyledLink>
              </StyledDiv>
            </StyledColHeader>
            <StyledColHeader>
              <StyledDiv>
                <StyledMediumHeader>Teams</StyledMediumHeader>
                <StyledLink href="https://app.chattermill.com/signup/">
                  Explore Product
                </StyledLink>
              </StyledDiv>
            </StyledColHeader>
            <StyledColHeader>
              <StyledDiv>
                <StyledMediumHeader>Enterprise</StyledMediumHeader>
                <StyledLink href="/book-demo/">Contact Us</StyledLink>
              </StyledDiv>

              {/* Rows */}
            </StyledColHeader>

            {/* Channels */}
            <StyledTableRow
              description={data.item1.description}
              fact1={data.item1.fact1}
              fact2={data.item1.fact2}
              fact3={data.item1.fact3}
              tooltip={data.item1.tooltip}
              component={<InfoCircleOutlined />}
            />

            {/* Volume */}
            <StyledTableRow1
              style={{
                backgroundColor: "white",
              }}
              description={data.item2.description}
              fact1={data.item2.fact1}
              fact2={data.item2.fact2}
              fact3={data.item2.fact3}
              tooltip={data.item2.tooltip}
              component={<InfoCircleOutlined />}
            />
            <StyledTableRow
              description={data.item3.description}
              fact1={data.item3.fact1}
              fact2={data.item3.fact2}
              fact3={data.item3.fact3}
            />

            {/* Models */}
            <StyledTableRow1
              style={{
                backgroundColor: "white",
              }}
              description={data.item4.description}
              fact1={data.item4.fact1}
              fact2={data.item4.fact2}
              fact3={data.item4.fact3}
              tooltip={data.item4.tooltip}
              component={<InfoCircleOutlined />}
            />

            {/* Attributes */}
            <StyledTableRow
              description={data.item5.description}
              fact1={data.item5.fact1}
              fact2={data.item5.fact2}
              fact3={data.item5.fact3}
              tooltip={data.item5.tooltip}
              component={<InfoCircleOutlined />}
            />

            {/* Integrations */}
            <StyledTableRow1
              style={{
                backgroundColor: "white",
              }}
              description={data.item6.description}
              fact1={data.item6.fact1}
              fact2={data.item6.fact2}
              fact3={data.item6.fact3}
              tooltip={data.item6.tooltip}
              component={<InfoCircleOutlined />}
            />
            <StyledTableRow
              description={data.item7.description}
              fact1={data.item7.fact1}
              fact2={data.item7.fact2}
              fact3={data.item7.fact3}
            />
            <StyledTableRow1
              style={{
                backgroundColor: "white",
              }}
              description={data.item8.description}
              fact1={data.item8.fact1}
              fact2={data.item8.fact2}
              fact3={data.item8.fact3}
            />
            <StyledTableRow
              description={data.item9.description}
              fact1={data.item9.fact1}
              fact2={data.item9.fact2}
              fact3={data.item9.fact3}
            />
          </StyledThead>
        </tbody>
      </StyledTable>
    </StyledWideContainer>
  )
}

export default PricingFeatureTable
