import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const Section2 = ({ howItWorks }) => {
  return (
    <section id="section2" className="stat-section">
      <div className="section-wrapper">
        <div className="section-header">
          <div className="section-header-text-container">
            <h2 className="section-header-title">
              How to Calculate Sample Size
            </h2>
            <p>
              Unless you are a fan of math and statistics, manually calculating
              your sample size may seem a bit arduous. But for those of you
              curious to understand the factors that will impact your company’s
              search to find the right amount of survey respondents for your
              particular needs, we take you step-by-step through the equation
              below.
            </p>
          </div>
        </div>
        <GatsbyImage image={howItWorks} alt="How it Works" />

        <div className="section-header-text-container">
          <p>
            To help you make better use of the equation above, here is a
            longhand example of the mathematical process in real time. Let's
            calculate the sample size using the inputs below.
          </p>

          <p>Example: </p>
          <ul>
            <li>Population Size (N) = 1000</li>
            <li>Margin of Error (e) = +/- 5% (or 0.05)</li>
            <li>Confidence Level of 95% = z-score (z) = 1.96</li>
            <li>Standard Deviation (p) = 50% (or 0.5)</li>
          </ul>

          <p>
            Based on the formula, the long version of the calculations look like
            this:
          </p>
          <ul>
            <li>
              Sample size =<br />
              <span className="blue">[1.962 *0.5(1-0.5)] / 0.052</span>
              <br />
              (divided by)
              <br />
              <span className="orange">
                1 + [1.962 * 0.5(1-0.5)] / 0.052 * 1000]
              </span>
            </li>
            <li>
              Sample size =<br />
              <span className="blue">[3.8416 * 0.25] / 0.0025</span>
              <br />
              (divided by)
              <br /> <span className="orange">1 + [[3.8416 * 0.25] / 2.5]</span>
            </li>
            <li>
              Sample size = <span className="blue">384</span> /{" "}
              <span className="orange">1.384</span>
            </li>
            <li>Sample size (final answer) = 278</li>
          </ul>

          <p>
            In general, it’s widely agreed that a larger sample size leads to
            more statistically significant results, adding validation to your
            numbers by showing that there’s less chance that your results
            happened by chance.
          </p>

          <p>
            It’s important to be mindful of the risks of aiming for a sample
            size that is either too large or too small. If you seek out too many
            participants, your survey can quickly become too expensive and
            time-consuming to run, with the costs outweighing the benefits. And
            if you opt for too small of a sample size, you could end up with
            skewed results due to a disproportionate number of outlier opinions
            that don’t truly represent your target population.
          </p>
        </div>
      </div>
    </section>
  )
}
