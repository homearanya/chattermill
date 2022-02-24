import React, { Fragment } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA2Blog from "../components/cta2-blog"

import { StyledWrapper } from "../components/sentiment-analysis-guide/sentiment-analysis-guide.styled"

// import custom components
import SentimentAnalysisTypes from "../components/sentiment-analysis-guide/SentimentAnalysisTypes"
import UseCase from "../components/sentiment-analysis-guide/UseCase"

function SentimentAnalysisGuidePage() {
  const { headerImg, aiSentimentAnalysis, toolResults } = useStaticQuery(
    graphql`
      {
        headerImg: file(
          relativePath: {
            eq: "sentiment-analysis-guide/sentiment-analysis-hero.png"
          }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 800
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        aiSentimentAnalysis: file(
          relativePath: {
            eq: "sentiment-analysis-guide/ai-sentiment-analysis.png"
          }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 800
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        toolResults: file(
          relativePath: {
            eq: "sentiment-analysis-guide/sentiment-analyzer-tool-results.png"
          }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 800
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
        title="Sentiment Analysis Guide"
        description="Sentiment analysis is a computational language processing technique that assigns weighted&nbsp; sentiment scores to elements of a sentence to contextually identify opinions expressed through text as positive, negative or neutral. A classification algorithm is used to identify the key phrases and score them accordingly."
      />
      <StyledWrapper className="sentiment-analysis-guide-page">
        <div class="App">
          <section className="header">
            <h1 className="header-h1">
              Sentiment Analysis: The Ultimate Guide
            </h1>
            <GatsbyImage image={getImage(headerImg)} alt="Art hero" />
          </section>
          <section className="intro-copy">
            <p>
              Everyone has an opinion. And in today&rsquo;s world, those
              opinions are easier to share than ever before. All of those shared
              thoughts and perspectives can provide valuable insights into a
              company&rsquo;s current and future bottom line when they put
              sentiment analysis in action.
            </p>
            <p>
              The process of sentiment analysis allows you to categorize written
              text &mdash; often in the form of customer reviews, social media
              posts or employee correspondence &mdash; as positive, negative, or
              neutral. Sentiment analysis results provide valuable insights for
              a business to track their brand&rsquo;s reputation through
              customer feedback, understand the subtleties of their social media
              engagement, adapt to employee commentary, and conduct market
              research.
            </p>
            <p>
              This guide will reveal the many concepts that go into
              understanding sentiment analysis, the forms it can take, potential
              risks, and real-world examples of the process in action.
              Additionally, we&rsquo;ve provided a{" "}
              <Link to="#tool-results">text analytics tool</Link> as a hands-on
              application of the concepts we&rsquo;ll be outlining below.
            </p>
          </section>
          <section className="text-toc">
            <p className="toc-title">Contents</p>
            <ol>
              <li>
                <Link to="#what-is">What is Sentiment Analysis?</Link>
              </li>
              <li>
                <Link to="#definitions">
                  Important Sentiment Analysis Definitions
                </Link>
              </li>
              <li>
                <Link to="#why">Why Do We Need Sentiment Analysis?</Link>
              </li>
              <li>
                <Link to="#types">Types of Sentiment Analysis</Link>
              </li>
              <li>
                <Link to="#methods">Sentiment Analysis Methods</Link>
              </li>
              <li>
                <Link to="#pitfalls">
                  Potential Pitfalls of Sentiment Analysis
                </Link>
              </li>
              <li>
                <Link to="#examples">Sentiment Analysis Uses and Examples</Link>
              </li>
            </ol>
          </section>
          <section className="body-copy">
            <h2 id="what-is">What is Sentiment Analysis?</h2>
            <GatsbyImage image={getImage(aiSentimentAnalysis)} alt="" />
            <p>
              Sentiment analysis is a computational language processing
              technique that assigns weighted&nbsp; sentiment scores to elements
              of a sentence to contextually identify opinions expressed through
              text as positive, negative or neutral. A classification algorithm
              is used to identify the key phrases and score them accordingly.
            </p>
            <p>
              To better understand how this is achieved, we first must define
              some of the key phrases in the world of sentiment analysis.
            </p>
            <h2 id="definitions">Important Sentiment Analysis Definitions</h2>
            <ul>
              <li>
                AFINN lexicon: The{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gist.githubusercontent.com/damianesteban/06e8be3225f641100126/raw/a51c27d4e9cc242f829d895e23b4435021ab55e5/afinn-111.txt"
                >
                  AFINN
                </a>{" "}
                lexicon is a simple and commonly used list of English words
                manually rated for their intrinsic &ldquo;goodness&rdquo; or
                &ldquo;badness&rdquo; by Danish professor and engineer Finn
                &Aring;rup Nielsen.
              </li>
              <li>
                Customer feedback:{" "}
                <Link to="/blog/customer-feedback-analysis/">
                  Customer feedback
                </Link>{" "}
                is the information and opinions supplied by customers about
                their experience with a product or service.
              </li>
              <li>
                Machine learning: Machine learning is a form of artificial
                intelligence that uses and studies computer algorithms that
                improve and adapt automatically through analysis and
                identification of data patterns.
              </li>
              <li>
                Natural language processing (NLP): Natural language processing
                (NLP) is the computer science application of artificial
                intelligence to train computers to understand the nuances of
                human communication through speech and written language.
              </li>
              <li>
                Opinion mining: Opinion mining is an alternate name for
                sentiment analysis.
              </li>
              <li>
                Polarity: In the field of sentiment analysis, polarity is the
                positive or negative value given to quantify the sentiment in
                the text being analyzed.&nbsp;
              </li>
              <li>
                Quantitative vs. qualitative: Quantitative analysis looks at
                hard numbers as data, whereas qualitative analysis is less
                tangible and examines subjective concepts and opinions.
              </li>
              <li>
                Sentiment library: Sentiment libraries are lengthy lists (or
                lexicons) of specific adjectives (such as terrific, awful, good,
                bad) and phrases (such as great food, horrible service,
                fantastic product, dreadful show) that have been identified and
                manually scored positively or negatively by human coders.
              </li>
              <li>
                Text analytics:{" "}
                <Link to="/blog/text-analytics/">Text analytics</Link> is the
                process of transforming written qualitative information into
                quantitative data points that can be measured for statistical
                analysis.
              </li>
            </ul>
            <h2 id="why">Why Do We Need Sentiment Analysis?</h2>
            <p>
              Between social media, online reviews, and{" "}
              <Link to="/blog/survey-data-analysis/">customer surveys</Link>,
              the amount of customer feedback companies receive can be
              staggering. But how to best make use of the information
              you&rsquo;ve collected and how to manage that process mindfully to{" "}
              <Link to="/blog/response-bias/">avoid bias</Link> are questions
              that require consideration. In order to translate all of that
              qualitative feedback into actionable insights, an automated
              process like sentiment analysis ensures that changes can be made
              based on statistically significant data, rather than simplistic
              intuition that can lead to poor decisions.&nbsp;
            </p>
            <p>
              Interpreting this mountain of data successfully can potentially
              translate it into a clear vision of what specific segments of
              consumers think about a particular product or brand. It can also
              provide a wealth of information revealing the state of the market
              from a customer&rsquo;s viewpoint.
            </p>
            <SentimentAnalysisTypes id="types" />
            <h2 id="methods">Sentiment Analysis Methods</h2>
            <p>There are two main methods of sentiment analysis to consider.</p>
            <h3>Rule-Based Sentiment Analysis</h3>
            <p>
              Rule-based sentiment analysis uses a Natural Language Processing
              algorithm to identify words within the analyzed text that match up
              to an existing sentiment library, and then calculate if there are
              more of the positively or negatively scored words. If the text is
              determined to contain an abundance of positive words, it is deemed
              to have a positive polarity score.
            </p>
            <p>
              To achieve more valuable results, those scores often need to be
              combined with additional pre-determined rules that compensate for
              language variances that may influence the intended meaning of the
              words chosen. Concepts such as sarcasm, irony, and humor are not
              easily interpreted by computers and must be accommodated for in
              the programming of rule-based sentiment analysis systems.
            </p>
            <h3>Automatic Sentiment Analysis</h3>
            <p>
              Automatic sentiment analysis is also known as Machine Learning
              (ML) Based Sentiment Analysis. The use of machine learning
              classification algorithms in this method allows for faster
              processing of data with greater precision and statistical accuracy
              to calculate the gist of the original message.
            </p>
            <p>
              This method is much more prevalent these days, as rule-based
              sentiment analysis is often used only as a first step, in essence
              laying the groundwork for the training of a future machine
              learning algorithm. Automatic sentiment analysis is widely
              believed to provide better depth of understanding of the
              author&rsquo;s original intended meaning.
            </p>
            <h3 id="tool-results">Free Sentiment Analytics Tool</h3>
            <GatsbyImage image={getImage(toolResults)} alt="" />
            <p>
              A free{" "}
              <Link to="/try-text-analytics/">
                theme and sentiment analyzer
              </Link>{" "}
              like the one pictured here offers a quick way to gather deeper
              insight into your customer feedback. Simply type the text of the
              comment you wish to measure in the box, click Analyse Feedback,
              and you&rsquo;ll get a result identifying the positive and/or
              negative sentiments.&nbsp;
            </p>
            <p>
              A quick tool like this provides straightforward access to better
              understanding your customers and their views of your business
              and/or products. And these tools can be customized to better suit
              the needs of your specific company to best make use of the data
              collected across your customer feedback pipeline.
            </p>
            <h2 id="pitfalls">Potential Pitfalls of Sentiment Analysis</h2>
            <p>
              Sentiment analysis is not an exact science. Below are some of the
              challenges to keep in mind when you put the technique to use to
              translate your qualitative data into quantitative results.&nbsp;
            </p>
            <ul>
              <li>
                <strong>Determining context:</strong> A basic sentiment analysis
                algorithm is not capable of interpreting the context surrounding
                a line of text. Due to that fact, the algorithm must be written
                to include an added element that will take the context of the
                full message into account.
              </li>
              <li>
                <strong>Identifying tone and subjectivity:</strong> While
                identifying tone may not be a major issue, programming an
                algorithm to determine subjectivity or objectivity is a bigger
                challenge. This can be addressed by a deeper sentiment library
                with a broader scope of verbiage options to consider in the
                calculations.
              </li>
              <li>
                <strong>Recognizing sarcasm and irony:</strong> The subversive
                nature of sarcasm and irony are often a roadblock in NLP. The
                algorithm simply takes a humorous play on words at face value,
                thus misidentifying the sentiment. Avoiding these issues
                requires a carefully trained NLP sentiment analysis system based
                on deep context analysis and a variety of sample texts.
              </li>
              <li>
                <strong>Neutral tone definition:</strong> When the analyzed text
                doesn&rsquo;t include any language signifying positivity or
                negativity, you are left with a neutral tone that basically
                simply states facts. These messages can be identified by
                training your algorithm to recognize what is <em>not</em>{" "}
                present, as in if there are no positive or negative sentiments
                expressed, it would be labelled as neutral.
              </li>
            </ul>
            <h2 id="examples">Sentiment Analysis Uses and Examples</h2>
            <p>
              The usefulness of sentiment analysis is shown by the many
              industries the process serves. From retail to human resources,
              finance to marketing, these are some of the key areas where
              sentiment analysis consistently delivers useful results.
            </p>
            <h3>Voice of the Customer (VoC)</h3>
            <p>
              Collecting, analyzing and then actually listening to customer
              feedback is critical for all businesses to survive. Identifying
              the{" "}
              <Link to="/blog/voice-of-the-customer/">
                Voice of the Customer
              </Link>{" "}
              (VoC) for your company requires conducting surveys (such as the{" "}
              <Link to="/blog/nps-calculator/">NPS Score survey</Link>) and
              extracting insight through sentiment analysis of survey results
              and additional customer reviews. Better understanding of the
              expectations, wants, needs and dislikes of your customers through
              VoC makes it possible to monitor for changes in customer
              perceptions of your company and visualize the nuances of customer
              experience through quantitative data.
            </p>
            <UseCase
              title="HelloFresh"
              tagline="food delivery service provider"
              revealed="Children disliked recipes for casseroles because they couldn’t see what was in their food."
              result={
                <Fragment>
                  {" "}
                  <Link to="/blog/hellofresh-covid19-strategy">
                    HelloFresh
                  </Link>{" "}
                  adjusted the types of recipes provided to families,
                  demonstrating their acknowledgement of the consumers&rsquo;
                  needs.
                </Fragment>
              }
            />
            <h3>Voice of the Employee</h3>
            <p>
              The Voice of the Employee (VoE), similar to the Voice of the
              Customer (VoC), is revealed through gathering employee feedback to
              identify the needs, wishes, goals, and preferences of the
              collective staff of that company. Through employee engagement
              programs, internal survey and direct feedback, VoE appraises both
              specific needs such as salaries, health benefits, and career
              paths, as well as implicit emotional needs for respect and
              security in the workplace through sentiment analysis.
            </p>
            <UseCase
              title="Kmart Australia"
              tagline="grocery super store chain"
              revealed={
                <Fragment>
                  <a
                    href="https://www.cultureamp.com/case-studies/kmart/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kmart
                  </a>{" "}
                  employees cared deeply about their tenure at the company.
                </Fragment>
              }
              result="Executives created staff name badges that highlight service recognition and are presented at workdate anniversary celebrations."
            />
            <h3>Market Research</h3>
            <p>
              When applied to the world of marketing, the resulting insights
              achieved through sentiment analysis can range from the monitoring
              of your brand versus a competitor to comparisons of the reception
              a product received in new international markets. These powerful
              algorithms can provide measured perspectives on predictive tasks,
              from high-level industry campaign concepts to the minutiae of the
              best wording to use on a landing page.
            </p>
            <UseCase
              title="Audi vs. BMW vs. Mercedes"
              tagline="car industry research"
              revealed={
                <Fragment>
                  Audi&rsquo;s positive{" "}
                  <a
                    href="https://www.researchgate.net/publication/283515335_Twitter_Sentiment_Analysis_A_Case_Study_in_the_Automotive_Industry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    polarity score
                  </a>{" "}
                  was higher than both BMW and Mercedes, indicating higher
                  overall customer satisfaction of Audi consumers.
                </Fragment>
              }
              result="Marketers focused on providing offers via Audi’s page in order to circulate them to a higher percentage of satisfied customers."
            />
            <h3>Stock Market Analysis</h3>
            <p>
              The widespread use of social media platforms creates a space for
              investors to share their thoughts and opinions. All of that
              content can be examined through a sentiment analysis system to
              deliver a sense of what people think about a particular stock.
              These findings then become important predictors of stock
              fluctuations.
            </p>
            <UseCase
              title="Amarin Corporation"
              tagline="biotech company"
              revealed={
                <Fragment>
                  <a
                    href="https://seekingalpha.com/article/4218348-twitter-sentiment-analysis-and-october-biotech-recap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Amarin
                  </a>{" "}
                  Corporation had the highest number of positive tweets among
                  publicly-traded biotech companies after news of their medical
                  research success.
                </Fragment>
              }
              result="The stock (NASDAQ: AMRN) sky rocketed up over 300% after the positive news, as predicted by the sentiment analysis."
            />
          </section>
          <section className="outro-copy">
            <p>
              Sentiment analysis is an essential tool that can provide
              actionable insights to help your business improve on multiple
              fronts, from monitoring your brand to customer experience to
              employee satisfaction. Conducting business in the 21st century
              calls for greater understanding of your market, your customers,
              and your staff to achieve success, making the benefits of
              sentiment analysis invaluable.
            </p>
          </section>
        </div>
      </StyledWrapper>
      <CTA2Blog
        data={{
          shapeColor: "#10C2ED",
          text: "Power your CX with Chattermill",
        }}
      />
    </Layout>
  )
}

export default SentimentAnalysisGuidePage
