import React from "react"
import { Container } from "react-awesome-styled-grid"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { StyledWrapper } from "../components/online-reviews-stats/online-reviews-stats.styled"
import Stats from "../components/online-reviews-stats/Stats"
function CxStatsPage() {
  const {
    headerImg,
    star,
    thumbs,
    frown,
    smile,
    graph,
    wheel,
    infographic,
  } = useStaticQuery(
    graphql`
      {
        headerImg: file(
          relativePath: { eq: "online-review-statistics-hero.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 800
              quality: 90
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        star: file(relativePath: { eq: "outline-01.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 393
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        thumbs: file(relativePath: { eq: "outline-02.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 393
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        frown: file(relativePath: { eq: "outline-03.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 393
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        smile: file(relativePath: { eq: "outline-04.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 393
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        graph: file(relativePath: { eq: "outline-05.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 393
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        wheel: file(relativePath: { eq: "outline-06.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 393
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        infographic: file(
          relativePath: { eq: "online-review-statistics-ig.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 393
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
        title="Online Reviews Statistics"
        description="51 Online Review Statistics for 2021"
      />
      <StyledWrapper className="online-reviews-stats">
        <section className="header">
          <h1 className="header-h1">51 Online Review Statistics for 2021</h1>
          <GatsbyImage
            image={getImage(headerImg)}
            alt="Two people talking on the phone."
          />
        </section>

        <section className="intro-copy">
          <p>
            Word of mouth has always been the best way to promote your business,
            and with online sales booming, these personal recommendations may be
            more important than ever. In fact,{" "}
            <a
              href="https://spiegel.medill.northwestern.edu/_pdf/Spiegel_Online%20Review_eBook_Jun2017_FINAL.pdf"
              target="_blank"
              rel="noreferrer"
            >
              95 percent
            </a>{" "}
            of customers read reviews before they buy, and 8 percent of
            consumers use these reviews to discover new local businesses.
          </p>
          <p>
            How your business collects and responds to online reviews is vital
            to its success, especially as people are spending up to{" "}
            <a
              href="https://www.bigcommerce.com/blog/covid-19-ecommerce/#changes-in-revenue-across-ecommerce"
              target="_blank"
              rel="noreferrer"
            >
              30 percent
            </a>{" "}
            more online since COVID-19. Businesses have to prioritize{" "}
            <Link to="/customer-experience-statistics/">
              customer experience
            </Link>{" "}
            and stay engaged online to encourage positive reviews and increase
            sales and visibility.{" "}
          </p>
          <p>
            We’ve collected these online review statistics to help you create a
            strategy for your business in 2021. Read up on how consumers use
            reviews to shop online, or{" "}
            <a href="#cx-ig">jump to our infographic</a> for key statistics and
            communication strategies.{" "}
          </p>
        </section>

        <section className="ces-toc">
          <a href="#section1">
            <div className="toc-single">
              <GatsbyImage image={getImage(star)} alt="A small gear" />
              <p className="ces-toc-name">The Importance of Reviews</p>
            </div>
          </a>

          <a href="#section2">
            <div className="toc-single">
              <GatsbyImage image={getImage(thumbs)} alt="A smiling face" />
              <p className="ces-toc-name">The Power of Positive Reviews</p>
            </div>
          </a>

          <a href="#section3">
            <div className="toc-single">
              <GatsbyImage
                image={getImage(frown)}
                alt="A graph trending upward"
              />
              <p className="ces-toc-name">Consequences of Bad Reviews</p>
            </div>
          </a>

          <a href="#section4">
            <div className="toc-single">
              <GatsbyImage image={getImage(smile)} alt="A networking icon" />
              <p className="ces-toc-name">Customer Engagement</p>
            </div>
          </a>

          <a href="#section5">
            <div className="toc-single">
              <GatsbyImage image={getImage(graph)} alt="A networking icon" />
              <p className="ces-toc-name">How to Get More Reviews</p>
            </div>
          </a>

          <a href="#section6">
            <div className="toc-single">
              <GatsbyImage image={getImage(wheel)} alt="A networking icon" />
              <p className="ces-toc-name">Online Reviews and COVID-19</p>
            </div>
          </a>
        </section>

        <Stats></Stats>

        <section className="outro-copy" id="cx-ig">
          <GatsbyImage
            image={getImage(infographic)}
            alt="online review statistics infographic"
          />
          <p>
            Consumers want engaged and honest communication from businesses now
            more than ever. Asking your{" "}
            <Link to="/blog/voice-of-customer-tools">
              customers to share their voice
            </Link>{" "}
            and investing in your{" "}
            <Link to="/solution/unlock-support-conversations">
              communication strategies
            </Link>{" "}
            is an ideal way to boost your sales and reputation online.{" "}
          </p>
        </section>

        <section className="end-cta">
          <div className="svg-container">
            <svg
              className="svg-top"
              width="598.1051"
              height="592.0733"
              viewBox="0 0 598.1051 592.0733"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m 491.47496,588.12093 -79.3663,-35.14498 C 469.49612,390.48881 477.19932,209.75712 424.52001,34.82691 L 507.18352,3.0953677 c 25.71668,-9.8717097 54.42681,4.7493252 61.1489,31.3441573 45.09562,177.649465 37.78967,358.626065 -13.96901,525.223005 -8.1761,26.30524 -37.65505,39.58776 -62.88845,28.4584 z M 383.97413,50.545828 C 438.8201,216.74407 438.34748,388.65894 391.90777,544.51214 L 25.824472,382.26208 C 7.5772227,374.22767 -2.5981145,354.93048 0.57486408,335.25023 5.9549394,301.94014 6.8416166,267.72889 3.0539769,233.42876 0.80883689,212.83256 12.432266,193.20861 31.902085,185.73485 Z" />
            </svg>

            <svg
              className="svg-bottom"
              width="598.1051"
              height="592.0733"
              viewBox="0 0 598.1051 592.0733"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m 491.47496,588.12093 -79.3663,-35.14498 C 469.49612,390.48881 477.19932,209.75712 424.52001,34.82691 L 507.18352,3.0953677 c 25.71668,-9.8717097 54.42681,4.7493252 61.1489,31.3441573 45.09562,177.649465 37.78967,358.626065 -13.96901,525.223005 -8.1761,26.30524 -37.65505,39.58776 -62.88845,28.4584 z M 383.97413,50.545828 C 438.8201,216.74407 438.34748,388.65894 391.90777,544.51214 L 25.824472,382.26208 C 7.5772227,374.22767 -2.5981145,354.93048 0.57486408,335.25023 5.9549394,301.94014 6.8416166,267.72889 3.0539769,233.42876 0.80883689,212.83256 12.432266,193.20861 31.902085,185.73485 Z" />
            </svg>
          </div>
          <p>Manage Customer Reviews Seamlessly with TrustPilot</p>
          <button>
            <a href="https://start.chattermill.com/trustpilot">Try For Free</a>
          </button>
        </section>
      </StyledWrapper>
    </Layout>
  )
}

export default CxStatsPage
