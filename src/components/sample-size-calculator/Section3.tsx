import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const Section3 = ({ nPsSentimentAnalysisIg }) => {
  return (
    <section id="section3" className="stat-section">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-header-title">
            Impact of Sample Size on Different Types of Surveys
          </h2>
          <p>
            Surveys can serve a multitude of purposes across various industries.
            And the importance of your sample size may vary according to the
            goals you establish for each survey. These are several types of
            surveys to keep in mind based on your needs.{" "}
          </p>
        </div>
        <div className="section-header">
          <h3 className="section-header-title">Customer Satisfaction</h3>
          <p>
            Measuring perspectives on customer experience can be critical to
            identifying areas of improvement to benefit your bottom line.{" "}
          </p>
          <p>
            {" "}
            For example, surveys are the basis for measuring a company’s{" "}
            <Link to="/blog/NPS-calculator/">net promoter score</Link>, which is
            a metric used by the majority of businesses to gauge customer
            satisfaction.{" "}
          </p>
          <p>
            A statistically significant sample size is not critical to these
            survey results as the content of the{" "}
            <Link to="/blog/voice-of-the-customer/">feedback</Link> has the
            greater impact.
          </p>
        </div>
        <div className="section-header">
          <h3 className="section-header-title">Employee Satisfaction</h3>
          <p>
            Human resources professionals swear by the power of employee
            satisfaction surveys, as they provide direct input from staff on the
            internal health of an organization.{" "}
          </p>
          <p>
            {" "}
            For this reason, achieving a statistically significant sample size
            within a company will allow for data applicable to the entire
            employee population.{" "}
          </p>
          <p> </p>
          <p>
            {" "}
            But even a smaller sample size can be useful in these surveys when
            quality feedback is the goal.
          </p>
        </div>
        <div className="section-header">
          <h3 className="section-header-title">Political Polls</h3>
          <p>
            Surveys on the job approval of political candidates has been a
            mainstay of election cycles for over fifty years.{" "}
          </p>
          <p>
            {" "}
            The results are used for trend purposes to provide insight on the
            American population’s perception of the country’s well-being.{" "}
          </p>
          <p>
            {" "}
            With over 200 million voting-age citizens, a statistically
            significant sample size of at least 1000 is critical to achieving
            relevant data.
          </p>
        </div>
        <div className="section-header">
          <h3 className="section-header-title">Market Research</h3>
          <p>
            Discovering what your market “
            <Link to="/blog/the-art-of-listening/">thinks</Link>” can be a
            powerful asset in strategizing your business plans.{" "}
          </p>
          <p>
            {" "}
            Market research surveys require statistically significant sample
            sizes in order to ensure the accuracy of the insights tailored to
            your specific target market.
          </p>
          <p>
            Take a look at the visual below for additional tips on how to
            maximize the impact of your results when conducting an online
            survey.
          </p>
        </div>
        <GatsbyImage
          image={nPsSentimentAnalysisIg}
          alt="Survery Accuracy Factors"
        />
        <div className="section-header">
          <p>
            When you make the choice to conduct a survey, take the time to
            correctly calculate your sample size and put thought into each
            element of the survey (even simple{" "}
            <Link to="/blog/demographic-survey-questions">
              demographic questions
            </Link>
            ).
          </p>
          <p>
            If you were to simply take a guess, you could seriously jeopardize
            the validity of your resulting data—potentially wasting a lot of
            time and money.
          </p>
          <p>
            Take the guesswork out of the process and let us do the math for you
            by using the straightforward sample size calculator above.
          </p>
        </div>
      </div>
    </section>
  )
}
