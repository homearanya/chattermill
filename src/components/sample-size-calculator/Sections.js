import React from "react";
import { Section1 } from "./Section1.js";
import { Section2 } from "./Section2.js";
import { Section3 } from "./Section3.js";

export const Sections = ({
  howItWorks,
  nPsSentimentAnalysisIg,
  surveyAccuracyFactors
}) => {
  return (
    <section>
      <div id="bg1"></div>
      <Section1 surveyAccuracyFactors={surveyAccuracyFactors}> </Section1>

      <Section2 howItWorks={howItWorks}></Section2>

      <div id="bg2"></div>
      <Section3 nPsSentimentAnalysisIg={nPsSentimentAnalysisIg}></Section3>
    </section>
  );
};
