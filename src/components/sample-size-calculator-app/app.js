import React, { useState, useEffect } from "react";
import { StyledWrapper } from "./app.styled";
import PopulationSize from "./components/PopulationSize";
import ConfidenceLevel from "./components/ConfidenceLevel";
import ErrorMargin from "./components/ErrorMargin";
import IdealSampleSize from "./components/IdealSampleSize";

function App() {
  const [population, setPopulation] = useState(1000);
  const [confidence, setConfidence] = useState(1.96);
  const [margin, setMargin] = useState(5);
  const [sampleSize, setSampleSize] = useState(278);

  useEffect(() => {
    calculateIdealSample();
  });

  const updatePopulation = e => {
    setPopulation(e.target.value);
  };

  const updateMargin = e => {
    setMargin(e.target.value);
  };

  const updateConfidence = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    setConfidence(e.target.dataset.value);
  };

  const calculateIdealSample = e => {
    const marginOfError = margin / 100;
    const marginOfErrorSquared = marginOfError * marginOfError;
    const multiplier1 = 0.5 * 0.5;
    const confidenceSquared = confidence * confidence;
    const top =
      (confidenceSquared * multiplier1) / (marginOfError * marginOfError);

    const bottom =
      1 +
      (confidenceSquared * multiplier1) / (marginOfErrorSquared * population);

    let result = top / bottom;
    result = result.toFixed(0);
    setSampleSize(result);
  };

  return (
    <StyledWrapper className="App">
      <section className="sample-size-calculator">
        <h1>Sample Size Calculator</h1>
        <p>
          Enter the population size, confidence level, margin of error, and the
          perfect sample size is calculated for you.
        </p>
        <PopulationSize
          population={population}
          updatePopulation={updatePopulation}
        />
        <ConfidenceLevel updateConfidence={updateConfidence} />
        <ErrorMargin margin={margin} updateMargin={updateMargin} />
        <IdealSampleSize sampleSize={sampleSize} />
      </section>
    </StyledWrapper>
  );
}

export default App;
