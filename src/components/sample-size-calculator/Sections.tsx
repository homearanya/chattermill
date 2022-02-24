import React from "react"
import { Section1 } from "./Section1"
import { Section2 } from "./Section2"
import { Section3 } from "./Section3"

export const Sections = ({
  howItWorks,
  nPsSentimentAnalysisIg,
  surveyAccuracyFactors,
}) => {
  return (
    <section>
      <div id="bg1" />
      <Section1 surveyAccuracyFactors={surveyAccuracyFactors} />

      <Section2 howItWorks={howItWorks} />

      <div id="bg2" />
      <Section3 nPsSentimentAnalysisIg={nPsSentimentAnalysisIg} />
    </section>
  )
}
