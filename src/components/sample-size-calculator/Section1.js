import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const Section1 = ({ surveyAccuracyFactors }) => {
  return (
    <section id="section1" className="stat-section">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-header-title">
            Sample Size Calculator Terms to Know
          </h2>
        </div>
        <GatsbyImage
          image={surveyAccuracyFactors}
          alt="Survery Accuracy Factors"
        />
        <div className="section-header">
          <h3 className="section-header-title">1. Population Size</h3>
          <p>
            <strong>
              The total number of people in the demographic you want to measure.
            </strong>{" "}
          </p>
          <p>
            This could be the population of a country, the total number of
            employees within a company, or the amount of customers who’ve
            purchased a specific product.{" "}
          </p>
          <p>
            It’s OK if you’re unsure of an exact number for your target
            population, as it’s common to use an estimate for this value.
          </p>
        </div>
        <div className="section-header">
          <h3 className="section-header-title">
            2. Margin of Error (Confidence Interval)
          </h3>
          <p>
            <strong>
              The percentage of error you are willing to allow in your results.
            </strong>{" "}
          </p>
          <p>
            It reveals the acceptable proximity of your results to the true
            value of your target population.{" "}
          </p>
          <p>
            {" "}
            It is typically shown as a plus or minus percentage range, such as
            “+/- 5%.”{" "}
          </p>
          <p>
            {" "}
            You’ve probably seen this in practice in news coverage of elections.{" "}
          </p>
          <p>
            If you saw that “43% of voters selected Candidate X, with a margin
            of error of +/- 5%,” the news was reporting their confidence that
            somewhere between 38% (43 - 5) and 48% (43 + 5) of the entire
            population of voters made that selection.
          </p>
        </div>
        <div className="section-header">
          <h3 className="section-header-title">3. Confidence Level</h3>
          <p>
            <strong>
              The percentage reflecting how sure you are that your results will
              fall within your margin of error.
            </strong>{" "}
          </p>
          <p>
            The most commonly used confidence levels are 90%, 95%, and 99%.{" "}
          </p>
          <p>
            Based on our example above, if you select a confidence level of 99%,
            you are confirming that you are 99% certain your survey data will
            land in that 38% - 48% we found with our =/- 5% margin of error.{" "}
          </p>
          <p>
            {" "}
            The higher you set your confidence level, the greater the accuracy
            of your end results.
          </p>
        </div>
        <div className="section-header">
          <h3 className="section-header-title">4. Standard Deviation</h3>
          <p>
            <strong>
              The estimated percentage of variation you anticipate among your
              survey results.
            </strong>{" "}
          </p>
          <p>
            This number is difficult to calculate prior to running your survey,
            so best practice is to use 50% (0.5) in your calculations.{" "}
          </p>
          <p>
            Sticking with this value will help ensure that your sample size is
            large enough.
          </p>
        </div>
        <div className="section-header">
          <h3 className="section-header-title">5. Z-score</h3>
          <p>
            <strong>
              A constant value determined automatically based on your chosen
              confidence level.
            </strong>{" "}
          </p>
          <p>
            Technically, the z-score represents how many standard deviations are
            between a selected value and the average number of the population.{" "}
          </p>
          <p>
            Also known as a “standard score,” the z-score offers a uniform
            method of comparing your results to a “normal” population.{" "}
          </p>
          <p>
            {" "}
            See Step 2 in the graphic below for a list of the most common
            z-score values.
          </p>
        </div>
      </div>
    </section>
  )
}
