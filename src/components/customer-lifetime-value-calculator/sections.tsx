import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Icon from "./Icon"

const getImage = img => img.childImageSharp.gatsbyImageData

const sections = ({
  clvCompanysAverageFormula,
  clvCalculatorIllustrations,
  clvTermDefinitions,
  clvWhyMattersBusinesses,
}) => [
  {
    title: `Customer Lifetime Value Calculator: A Complete Guide to CLV`,
    titleTag: `h1`,
    body: (
      <div>
        <GatsbyImage
          image={getImage(clvCalculatorIllustrations)}
          alt="A Complete Guide to CLV"
        />
        <p>
          Customer lifetime value (CLV), often referred to as CLTV or LTV, is
          one of the most important business metrics for a company. CLV is a
          popular metric because it’s directly tied to revenue. By measuring CLV
          in relation to customer acquisition costs (CAC) and customer
          retention, companies can better prioritize their focus and funds. As a
          revenue{" "}
          <Link to="/customer-experience-statistics/">
            metric and statistic
          </Link>
          , CLV can be employed to understand both historical customer behavior
          and help forecast future customer behavior.
        </p>

        <p>
          Simply calculating and knowing CLV isn’t enough though. To get the
          most out of CLV metrics, businesses must improve their customer
          experience (CX) strategies. Our guide below gives insights into how CX
          relates to customer lifetime value and offers key CX tactics that
          companies can execute to increase their CLV and their bottom line. To
          quickly compute either an individual customer’s CLV or average CLV,{" "}
          <a href="#individual">
            jump to our easy-to-use customer lifetime value calculators now
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    title: `What is Customer Lifetime Value`,
    body: (
      <div>
        <div className="cc-box">
          Customer lifetime value (CLV) represents the total amount of money a
          customer will bring to a company throughout the business relationship.
        </div>

        <p>
          CLV can help determine the amount of money and effort that should be
          invested in acquiring new clients versus working towards retaining
          existing ones. A business typically profits more from existing
          customers than hustling to acquire new ones. According to{" "}
          <a href="https://www.issgovernance.com/market-intelligence/market-metrics/">
            Marketing Metrics
          </a>
          , the probability of converting a new customer is 5–20%. This is a
          much lower conversion rate compared to converting an existing
          prospect, who converts 60–70% of the time.
        </p>

        <p>
          The longer a customer pays for a company’s services, the more
          significant their lifetime value becomes. A company’s CX team directly
          affects CLV and profit due to their impact on the{" "}
          <Link to="/blog/customer-journey-map">customer journey</Link>
          and ability to reduce a businesses’{" "}
          <Link to="/blog/churn-analysis">churn rate </Link>. Before further
          examining{" "}
          <Link to="/customer-experience/">how CX can improve CLV </Link>, let’s
          discuss how to properly calculate CLV.
        </p>
      </div>
    ),
  },
  {
    title: `Individual Customer Lifetime Value Calculator`,
    body: (
      <div>
        <p>
          Ideally, a company wants to be able to calculate both their average
          CLV and individual customer’s CLV. Below, we will discuss how to
          calculate an individual customer’s lifetime value to help businesses
          determine which customers matter the most.
        </p>

        <p>
          To calculate individual CLV a corporation needs to know how much
          customers purchase, how often, and their general overhead costs.
        </p>

        <h3>Individual Customer Lifetime Value Formula</h3>

        <p>
          The customer lifetime value formula is fairly simple. To better
          understand the formula, we’ll need to define its components first.
        </p>

        <GatsbyImage
          image={getImage(clvTermDefinitions)}
          alt="Customer Lifetime Value Term Definitions"
        />
        <p>
          Let’s put these newly-defined terms together in the individual CLV
          formula:
        </p>

        <div className="formula">
          <div>
            Purchase Value <Icon name="multiply" />
          </div>
          <div>
            Purchase Frequency <Icon name="multiply" />
          </div>
          <div>
            Purchase Duration <Icon name="equal" />
          </div>
          <div>Customer Lifetime Value</div>
        </div>

        <p>
          Here is an example of how to calculate an individual customer’s
          lifetime value that regularly pays for a product or service.
        </p>

        <ul>
          <li>
            The customer pays $50 for a product{" "}
            <strong>(purchase value = $50)</strong>.
          </li>
          <li>
            The customer makes the $50 payment four times a year{" "}
            <strong>(purchase frequency = 4x annually)</strong>.
          </li>
          <li>
            For the past 3 years, the customer has consistently paid for a
            product <strong>(average customer duration = 3 years)</strong>.
          </li>
          <li>
            $50 x 4 x 3{" "}
            <strong>= $600 (Individual Customer Lifetime Value)</strong>.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: `Average Customer Lifetime Value Calculator`,
    body: (
      <div>
        <p>
          To determine a company’s average customer lifetime value, they will
          need to know the totals and averages of orders, revenue, and the
          number of customers per a specific period—typically one year. Let’s
          take a look at the components of a company’s average CLV.
        </p>

        <h3>Companies’ Average Customer Lifetime Value Formula</h3>

        <p>
          The formula for computing a company’s average CLV involves fairly
          straightforward division and multiplication.
        </p>

        <GatsbyImage
          image={getImage(clvCompanysAverageFormula)}
          alt="Companys Average Customer Lifetime Value Formula"
        />
        <p>
          <strong>Average Purchase Value:</strong> Calculate this number by
          dividing the total revenue in a period (usually one year) by the
          number of orders in that same timeframe.
        </p>

        <div className="formula">
          <div>
            Total Revenue <Icon name="divide" />
          </div>
          <div>
            Number of Orders
            <Icon name="equal" />
          </div>
          <div>Average Purchase Value</div>
        </div>

        <p>
          <strong>Average Frequency Rate:</strong> Continuing with the same
          timeframe in mind, calculate this metric by dividing the number of
          orders by the number of unique customers.
        </p>

        <div className="formula">
          <div>
            Number of Purchases <Icon name="divide" />
          </div>
          <div>
            Number of Customers
            <Icon name="equal" />
          </div>
          <div>Average Frequency Rate</div>
        </div>

        <p>
          <strong>Customer Value:</strong> Calculate this number by multiplying
          the average purchase value by the average frequency rate.
        </p>

        <div className="formula">
          <div>
            Average Purchase Value <Icon name="multiply" />
          </div>
          <div>
            Average Frequency Rate
            <Icon name="equal" />
          </div>
          <div>Customer Value</div>
        </div>

        <p>
          <strong>Average Customer Lifespan:</strong> Calculate this unit by
          averaging the amount of time a customer continues to purchase from
          your business. Use the same measurement of time as you did for
          calculating customer value.
        </p>

        <div className="formula">
          <div>
            Sum of Customers Lifespans <Icon name="divide" />
          </div>
          <div>
            Number of Customers
            <Icon name="equal" />
          </div>
          <div>Average Customer Lifespan</div>
        </div>

        <p>
          <strong>Company’s Average Customer Lifetime Value:</strong> Finally,
          to get your company’s average CLV you multiply customer value by
          average customer lifespan.
        </p>
      </div>
    ),
  },
  {
    title: `Why Customer Lifetime Value Matters to Businesses`,
    body: (
      <div>
        <p>
          CLV can influence both revenue decisions and the way in which a
          business interacts and serves its customers. Knowing a company’s
          average CLV can help determine the following:
        </p>

        <GatsbyImage
          image={getImage(clvWhyMattersBusinesses)}
          alt="Why Customer Lifetime Value Matters to Businesses"
        />
      </div>
    ),
  },
  {
    title: `How to Improve Customer Lifetime Value`,
    body: (
      <div>
        <p>
          Knowing individual customer lifetime value or a company’s average
          customer lifetime is just the starting point. To make the most out of
          this newfound knowledge a business must improve both its CX and{" "}
          <Link to="/blog/how-to-measure-customer-satisfaction">
            customer satisfaction (CSAT)
          </Link>
          . These tips below will help a business develop its CX and therefore
          increase its CLV.
        </p>

        <h3>Address Customer Pain Points</h3>

        <p>
          Not much will make a customer drop faster than not being able to get
          past a frustrating <Link to="/blog/pain-points/">pain point</Link>.
          Customers will often turn to competitors to see if their services
          aren’t bogged down with these pain points.
        </p>

        <p>
          These pain points often range from lack of support (not feeling heard
          by the company), financial reasoning (not worth the return on
          investment), or productivity (too time or effort-intensive). The best
          way for a business to address these pain points is to follow up with
          surveys after customers interact with them.
        </p>

        <h3>Survey Customers</h3>

        <p>
          While CLV focuses primarily on revenue, an enterprise will want to
          supplement its findings with qualitative data. This qualitative data
          should be a sentiment analysis, measuring{" "}
          <Link to="/blog/customer-effort-score">
            customer effort score (CES)
          </Link>
          ,{" "}
          <Link to="/blog/what-is-a-good-nps-score">
            net promoter score (NPS)
          </Link>
          , and CSAT.
        </p>

        <p>
          The best way to <Link to="/blog/NPS-calculator/">calculate NPS</Link>{" "}
          and CSAT scores is to survey customers after they interact with a
          service, such as directly after trying a demo or getting off the phone
          with a customer service representative.
        </p>

        <h3>Analyze Retention Rates</h3>

        <p>
          According to{" "}
          <a href="https://hbr.org/2014/10/the-value-of-keeping-the-right-customers">
            Harvard Business Review
          </a>
          , acquiring a new customer is anywhere from five to 25 times more
          expensive than retaining an existing one. Simply put,{" "}
          <Link to="/blog/customer-retention-analytics">
            retention rate matters
          </Link>
          . Fred Reichheld of Bain & Company’s{" "}
          <a href="https://media.bain.com/Images/BB_Prescription_cutting_costs.pdf">
            research
          </a>{" "}
          further emphasizes the importance of retaining clients and producing
          repeat buyers. Reichheld found that, “a 5% increase in customer
          retention produces more than a 25% increase in profit.”
        </p>

        <p>
          CLV can help determine at what point along the customer journey or in
          time do customers begin to churn. For instance, a business might lose
          customers after one year due to an increase in pricing in the second
          year. Or, clients stop using a company’s services after a certain
          point in using the product due to difficulty in user experience or
          loss of need.
        </p>

        <h3>Quick Lifetime Value Boosts and Strategies</h3>

        <p>
          These strategies involve low effort but have the possibility of high
          reward if done correctly.
        </p>

        <ul>
          <li>Increase the frequency of orders or the average order size</li>
          <li>Contact previously lost customers and one-time purchasers</li>
          <li>Create a rewards program for repeat purchasers</li>
          <li>
            Upsell by adding additional free services or software programs
          </li>
        </ul>

        <p>
          Calculating individual and company-wide CLV is incredibly important
          and useful. Nearly any company will be able to tell which customers
          spend the most and who has remained loyal for the longest.
          Furthermore, nearly any size business can measure CLV, regardless if
          they’re a pre-seed startup or a mega-corporation. If businesses want
          to grow their CLV, they should look first into developing a CX
          department.
        </p>

        <p>
          Sources:{" "}
          <a href="https://www.issgovernance.com/market-intelligence/market-metrics/">
            Marketing Metrics
          </a>{" "}
          |{" "}
          <a href="https://hbr.org/2014/10/the-value-of-keeping-the-right-customers">
            Harvard Business Review
          </a>{" "}
          |{" "}
          <a href="https://media.bain.com/Images/BB_Prescription_cutting_costs.pdf">
            Bain & Company
          </a>
        </p>
      </div>
    ),
  },
]

export default sections
