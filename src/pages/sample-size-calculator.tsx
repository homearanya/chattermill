import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { StyledWrapper } from "../components/sample-size-calculator/sample-size-calculator.styled"
import App from "../components/sample-size-calculator-app/app"
import { Sections } from "../components/sample-size-calculator/Sections"

function SampleSizeCalculatorPage() {
  const {
    headerImg,
    howItWorks,
    nPsSentimentAnalysisIg,
    surveyAccuracyFactors,
  } = useStaticQuery<GatsbyTypes.SampleSizeCalculatorPageQuery>(
    graphql`
      query SampleSizeCalculatorPage {
        headerImg: file(
          relativePath: {
            eq: "sample-size-calculator/sample-size-calculator-hero.png"
          }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 800
              quality: 80
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
        howItWorks: file(
          relativePath: { eq: "sample-size-calculator/how-it-works.png" }
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
        nPsSentimentAnalysisIg: file(
          relativePath: {
            eq: "sample-size-calculator/nps-and-sentiment-analysis-ig.png"
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
        surveyAccuracyFactors: file(
          relativePath: {
            eq: "sample-size-calculator/survey-accuracy-factors.png"
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
      }
    `
  )
  const getImage = img => img?.childImageSharp?.gatsbyImageData

  return (
    <Layout>
      <SEO
        title="Sample Size Calculator"
        description="Use this Sample Size Calculator to quickly figure out how many people you need to address when conducting online surveys."
      />
      <StyledWrapper className="sample-size-calculator-page">
        <section className="header">
          <h1 className="header-h1">Sample Size Calculator</h1>
          <GatsbyImage image={getImage(headerImg)} alt="Magnifying glass" />
        </section>
        <section className="intro-copy">
          <p>
            Don’t you wish you could sometimes read people’s minds?{" "}
            <Link to="/blog/survey-data-analysis/">Surveys</Link> can provide
            valuable insight into the opinions of a group of people you care
            about, such as customers, employees, or voters. One of the first
            steps to creating a survey of any kind is to determine who you will
            ask to participate.{" "}
          </p>
          <p>
            Realistically, it’s unlikely you will be able to get every single
            person in the group of people you’re interested in to take your
            survey. You should aim to{" "}
            <Link to="/blog/response-bias/">avoid response bias</Link> of people
            that represent the group as a whole. The participating survey
            respondents represent what is known in statistics as a sample size.{" "}
          </p>
          <p>
            Figuring out how many people you need to achieve reliable data from
            your survey involves some detailed mathematics. The guide below
            offers an easy-to-use sample size calculator to help you determine
            the appropriate target number for the best results.{" "}
          </p>
          <p>
            Additionally, we've listed out key terms and a more in-depth look at
            how to calculate the complex equation manually. Or you can jump down
            to our infographic for guidance on How to Create the Best Online
            Surveys.
          </p>
        </section>
        <section className="app-section">
          <App />
        </section>
        <Sections
          howItWorks={getImage(howItWorks)}
          nPsSentimentAnalysisIg={getImage(nPsSentimentAnalysisIg)}
          surveyAccuracyFactors={getImage(surveyAccuracyFactors)}
        />
      </StyledWrapper>
    </Layout>
  )
}

export default SampleSizeCalculatorPage
