import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

import { StyledWrapper } from "../components/cx-stats/cx-stats.styled"
import Stats from "../components/cx-stats/Stats"
import headerMp4 from "../components/cx-stats/images/customer-experience-animation.mp4"
import headerWebm from "../components/cx-stats/images/customer-experience-animation.webm"

function CxStatsPage() {
  const { wheel, face, graph, share, infographic } = useStaticQuery(
    graphql`
      {
        wheel: file(
          relativePath: { eq: "cx-stats/illustration-outline-01.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 100
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        face: file(
          relativePath: { eq: "cx-stats/illustration-outline-02.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 100
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        graph: file(
          relativePath: { eq: "cx-stats/illustration-outline-03.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 100
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        share: file(
          relativePath: { eq: "cx-stats/illustration-outline-04.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 100
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        infographic: file(
          relativePath: {
            eq: "cx-stats/customer-service-stats-and-takeaways-for-2021-infographic.png"
          }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 850
              quality: 100
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
        title="CX Statistics"
        description="46 Customer Experience Statistics to Know for 2021"
      />
      <StyledWrapper className="cx-stats">
        <section className="header">
          <h1 className="header-h1">
            46 Customer Experience Statistics to Know for 2021
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <video autoplay loop muted playsinline>
                <source src="${headerWebm}" type="video/webm">
                <source src="${headerMp4}" type="video/mp4">
                </video>
              `,
            }}
          />
        </section>
        <section className="intro-copy">
          <p>
            Today’s customers have extremely high expectations for brands,
            requiring them to understand their wants, needs, and{" "}
            <Link to="/blog/pain-points">pain points</Link>. The most successful
            companies in 2021 will be the brands who truly understand this
            expectation and therefore obsess over the latest{" "}
            <Link to="/blog/CX-technology">CX technology</Link> and perfecting
            their{" "}
            <Link to="/blog/voice-of-customer-tools">
              voice of the customer
            </Link>{" "}
            capabilities.
          </p>
          <p>
            To help drive home the importance of a{" "}
            <Link to="/blog/unified-customer-experience">unified CX</Link> as it
            relates to satisfaction,{" "}
            <Link to="/blog/customer-retention-analytics">retention</Link>, and
            more, we’ve gathered 46 of the most impactful customer experience
            statistics to know in 2021. Use the links below to jump to the
            section that interests you most, or{" "}
            <a href="#cx-ig">jump right down to our infographic</a> to see our
            top 10 customer experience stats and takeaways for 2021
          </p>
        </section>
        <section className="ces-toc">
          <a href="#section1">
            <div className="toc-single">
              <GatsbyImage image={getImage(wheel)} alt="A small gear" />
              <p className="ces-toc-name">Operations and Revenue</p>
            </div>
          </a>
          <a href="#section2">
            <div className="toc-single">
              <GatsbyImage image={getImage(face)} alt="A smiling face" />
              <p className="ces-toc-name">Customer Satisfaction</p>
            </div>
          </a>
          <a href="#section3">
            <div className="toc-single">
              <GatsbyImage
                image={getImage(graph)}
                alt="A graph trending upward"
              />
              <p className="ces-toc-name">Customer Experience KPIs</p>
            </div>
          </a>
          <a href="#section4">
            <div className="toc-single">
              <GatsbyImage image={getImage(share)} alt="A networking icon" />
              <p className="ces-toc-name">The Future of CX</p>
            </div>
          </a>
        </section>
        <Stats></Stats>
        <section className="outro-copy" id="cx-ig">
          <p>
            Take a look at the infographic below for a visual takeaway of the
            top 10 most interesting customer experience statistics for 2021.
          </p>
          <GatsbyImage
            image={getImage(infographic)}
            alt="customer experience statistics infographic"
          />
          <p>
            Hopefully, all of this data has got you convinced that customer
            experience programs are worth the effort. Whether you’re a{" "}
            <Link to="/blog/what-is-CX">CX beginner</Link> or a long-time
            professional, <Link to="/contact?ref=footer/">contact us</Link>{" "}
            today to learn how Chattermill can help you gather invaluable
            customer feedback for a better experience.
          </p>
        </section>
      </StyledWrapper>
    </Layout>
  )
}

export default CxStatsPage
