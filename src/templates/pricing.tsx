import React from "react"
import { graphql } from "gatsby"
import media from "../styles/media"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FAQ from "../components/faq"
import CustomersQuotesPricing, {
  CustomersQuotesPricingData,
} from "../components/customers-quotes-pricing-plans"
import PricingTable, { PricingTableData } from "../components/pricing-table"
import featuredImage from "../images/chattermill-pricing.png"
import PricingFeatureTable from "../components/pricing-feature-options"

interface PricingPageProps {
  readonly data: PageQueryData
}

const Pricing = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        title2,
        title3,
        subTitle,
        pricingTable,
        customersQuotesPricing,
      },
    },
  },
}: PricingPageProps) => {
  return (
    <Layout className="pricing-page">
      <SEO
        title={"Chattermill Pricing Plans"}
        description={"Pricing plans to propel your CX"}
        featuredImage={featuredImage}
      />
      <StyledSection>
        <StyledHeader>{title}</StyledHeader>
        <StyledSubHeader>{subTitle}</StyledSubHeader>
        <PricingTable data={pricingTable} />
      </StyledSection>
      <StyledSection>
        <StyledHeader>{title2}</StyledHeader>
        <PricingFeatureTable />
      </StyledSection>
      <StyledSection>
        <StyledHeader
          style={{
            paddingBottom: "-2rem",
            paddingTop: "6rem",
          }}
        >
          {title3}
        </StyledHeader>
        <FAQ />
      </StyledSection>
      <CustomersQuotesPricing data={customersQuotesPricing} />
    </Layout>
  )
}

export default Pricing

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      title2: string
      title3: string
      subTitle: string
      pricingTable: PricingTableData
      customersQuotesPricing: CustomersQuotesPricingData
    }
  }
}

export const query = graphql`
  query PricingPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        title2
        title3
        subTitle
        customersQuotesPricing {
          customersQuotes {
            customerLogo
            text
            person {
              image
              name
              role
            }
          }
        }
        pricingTable {
          pricingTable {
            smallHeading
            text
            CmLiteItems {
              Liteitem
            }
            pricingTerms
          }
        }
      }
    }
  }
`

// Styled Components

const StyledHeader = styled.h1`
  font-size: 4rem;
  color: #291c45;
  text-align: center;
  padding: 5rem 1rem;

  ${media.lessThan("sm")`
    padding: 3rem;
    
  `}
`

const StyledSubHeader = styled.h2`
  font-size: 2.5rem;
  color: #291c45;
  font-weight: 400;
  text-align: center;
  padding-bottom: 3rem;
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 8rem 0rem;

  ${media.lessThan("sm")`
    padding: 4rem 1rem;
    
  `}
`
