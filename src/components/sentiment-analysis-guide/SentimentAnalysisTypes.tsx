import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import SentimentAnalysisType from "./SentimentAnalysisType"

const SentimentAnalysisTypes = props => {
  const {
    fineGrained,
    emotionDetection,
    aspectBased,
    intentAnalysis,
  } = useStaticQuery(
    graphql`
      {
        fineGrained: file(
          relativePath: { eq: "sentiment-analysis-guide/illo-fine-grained.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 150
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        emotionDetection: file(
          relativePath: {
            eq: "sentiment-analysis-guide/illo-emotion-detection.png"
          }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 150
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        aspectBased: file(
          relativePath: { eq: "sentiment-analysis-guide/illo-aspect-based.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 150
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        intentAnalysis: file(
          relativePath: {
            eq: "sentiment-analysis-guide/illo-intent-analysis.png"
          }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 150
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
    <>
      <h2 id={props.id}>Types of Sentiment Analysis</h2>
      <p>
        Sentiment analysis is not a one-stop-shop. Depending on your intended
        application of the resulting data, you should determine in advance of
        which type of sentiment analysis will work best for your needs.
      </p>

      <SentimentAnalysisType
        title="Fine-Grained Sentiment Analysis"
        copy="Fine-grained sentiment analysis focuses on identifying the polarity of the opinion. It can be a simple positive or negative sentiment measurement. Or it can be taken to a heightened level of specificity through identifiers such as very good, good, neutral, bad, very bad."
        icon={getImage(fineGrained)}
        iconAlt="Magnifying glass icon."
      />

      <SentimentAnalysisType
        title="Emotion Detection"
        copy="Emotion detection is best to identify particular emotional states visible in the content being analyzed. Typically, this type requires a blend of machine learning algorithms and multiple lexicons to clearly determine the meaning behind the words used."
        icon={getImage(emotionDetection)}
        iconAlt="Happy and sad face icons."
      />

      <SentimentAnalysisType
        title="Aspect-Based Sentiment Analysis"
        copy="Aspect-based sentiment analysis was developed to isolate and clarify customer opinions on a particular element of a product (such as the sound quality of a set of headphones)."
        icon={getImage(aspectBased)}
        iconAlt="Circles interconnected with bars."
      />

      <SentimentAnalysisType
        title="Intent Analysis"
        copy="Intent analysis strives to identify the type of objective or goals implied by the message sender, which is especially useful in customer support situations."
        icon={getImage(intentAnalysis)}
        iconAlt="Target with arrow in the center."
      />
    </>
  )
}

export default SentimentAnalysisTypes
