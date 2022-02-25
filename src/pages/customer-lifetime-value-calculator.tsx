import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/CustomerLifetimeValueCalculator/App.scss"
import config from "../components/customer-lifetime-value-calculator/config"
import sections from "../components/customer-lifetime-value-calculator/sections"

import Section from "../components/customer-lifetime-value-calculator/Section"
import Calculator from "../components/customer-lifetime-value-calculator/Calculator"

function parseCalculatorConfig(payload) {
  return payload.map(d =>
    d.type === "number" ? { ...d, ...{ min: 1, max: 10000 } } : d
  )
}

function CustomerLifetimeValueCalculator() {
  const {
    clvCompanysAverageFormula,
    clvCalculatorIllustrations,
    clvTermDefinitions,
    clvWhyMattersBusinesses,
  } = useStaticQuery<GatsbyTypes.CustomerLifetimeValueCalculatorQuery>(
    graphql`
      query CustomerLifetimeValueCalculator {
        clvCompanysAverageFormula: file(
          relativePath: { eq: "companys-average-CLV-formula.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 800
              quality: 80
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        clvCalculatorIllustrations: file(
          relativePath: {
            eq: "customer-lifetime-value-calculator-illustrations.png"
          }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 800
              quality: 80
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        clvTermDefinitions: file(
          relativePath: { eq: "customer-lifetime-value-term-definitions.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 800
              quality: 80
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        clvWhyMattersBusinesses: file(
          relativePath: { eq: "Why-CLV-Matters-to-Businesses.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 800
              quality: 80
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    `
  )

  function getSection(id) {
    const sectionsWithImages = sections({
      clvCompanysAverageFormula,
      clvCalculatorIllustrations,
      clvTermDefinitions,
      clvWhyMattersBusinesses,
    })
    return (
      <Section
        id={"section-" + (id + 1)}
        title={sectionsWithImages[id].title}
        body={sectionsWithImages[id].body}
        heading={sectionsWithImages[id].titleTag}
      />
    )
  }
  return (
    <Layout>
      <SEO
        title="Customer Lifetime Value Calculator: A Complete Guide to CLV"
        description="Customer lifetime value (CLV) is one of the most important business metrics. Our guide thoroughly explains the topic and has easy-to-use CLV calculators that will benefit any company."
      />
      <div className="app">
        {getSection(0)}
        {getSection(1)}
        {getSection(2)}
        <Calculator
          name="Individual Customer Lifetime Value Calculator"
          result="Individual Customer Lifetime Value"
          id="individual"
          config={parseCalculatorConfig(config.individual)}
        ></Calculator>
        {getSection(3)}
        <Calculator
          name="Average Customer Lifetime Value Calculator"
          result="Company's Average CLV"
          id="average"
          config={parseCalculatorConfig(config.average)}
        ></Calculator>
        {getSection(4)}
        {getSection(5)}
      </div>
    </Layout>
  )
}

export default CustomerLifetimeValueCalculator
