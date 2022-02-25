import React from "react"
import * as handleShare from "./util"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Section1 = () => {
  const { section1Header, statImg1, statImg2, statImg3 } = useStaticQuery(
    graphql`
      {
        section1Header: file(
          relativePath: { eq: "illustration-header-section-01.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 580
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        statImg1: file(relativePath: { eq: "illustration-stat-01.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 393
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        statImg2: file(relativePath: { eq: "illustration-stat-02.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 393
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        statImg3: file(relativePath: { eq: "illustration-stat-03.png" }) {
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
    <section id="section1" className="stat-section">
      <div className="section-wrapper">
        <div className="section-header">
          <div className="section-header-text-container">
            <p className="section-header-title">
              Operations and Revenue Statistics
            </p>
          </div>
          <div className="section-header-img-container">
            <GatsbyImage
              image={getImage(section1Header)}
              alt="A computer with gears around it"
            />
            <div className="header-circle"></div>
          </div>
        </div>
        <div className="stats-grid sg1">
          <div className="stat-block sg1-1">
            <p className="stat-block-copy">
              On average, a $1 billion company will earn{" "}
              <span className="bold-class">$775 million</span> over three years
              with modest CX improvements.
            </p>
            <div className="bottom-info-container">
              <a
                className="stat-block-source"
                href="https://www.linkedin.com/pulse/roi-customer-experience-2018-temkin-group-report-bruce-temkin-ccxp/"
                target="_blank"
              >
                Temkin
              </a>
              <div className="stat-share-container">
                <a
                  className="stat-twitter-icon"
                  onClick={handleShare.shareTweet}
                >
                  <svg
                    width="20px"
                    height="18px"
                    viewBox="0 0 20 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-twitter</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Customer-Experience-Statistics---V1"
                        transform="translate(-420.000000, -1084.000000)"
                        fill="#10C2ED"
                        fillRule="nonzero"
                      >
                        <g
                          id="Group-26"
                          transform="translate(250.000000, 448.000000)"
                        >
                          <g
                            id="Group-24"
                            transform="translate(0.000000, 419.500000)"
                          >
                            <g
                              id="Group"
                              transform="translate(30.000000, 212.000000)"
                            >
                              <path
                                d="M146.294388,21.6218323 C153.832479,21.6218323 157.956805,15.3781796 157.956805,9.9594532 C157.956805,9.78180317 157.956805,9.60407685 157.944102,9.42642682 C158.743585,8.84266509 159.441596,8.11932392 159.999876,7.30717681 C159.26387,7.62440628 158.464388,7.85286795 157.6395,7.94167389 C158.489717,7.43409149 159.136917,6.63460914 159.44152,5.68280629 C158.654664,6.15235626 157.766376,6.49499155 156.840017,6.67264158 C156.091232,5.87315923 155.025294,5.37824159 153.845067,5.37824159 C151.573535,5.37824159 149.746109,7.21833272 149.746109,9.47720032 C149.746109,9.79446794 149.784179,10.1116974 149.847618,10.4162621 C146.44667,10.2385739 143.41365,8.61424157 141.395909,6.12695044 C141.040532,6.73607985 140.837553,7.43405334 140.837553,8.1954651 C140.837553,9.61677976 141.560856,10.8731092 142.664903,11.6091532 C141.992373,11.5838237 141.3578,11.3934708 140.812147,11.0889061 L140.812147,11.1396414 C140.812147,13.1320149 142.220797,14.781715 144.098959,15.162459 C143.756362,15.2512649 143.38832,15.3020384 143.020318,15.3020384 C142.753785,15.3020384 142.5,15.2766708 142.246165,15.2386002 C142.766488,16.8629707 144.276647,18.0431589 146.078667,18.0812676 C144.670018,19.1853147 142.906029,19.8325147 140.989835,19.8325147 C140.6472,19.8325147 140.329971,19.8198118 140,19.7817793 C141.814723,20.9492265 143.972044,21.6218323 146.294388,21.6218323 Z"
                                id="icon-twitter"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <CopyToClipboard text="On average, a $1 billion company will earn $775 million over three years with modest CX improvements. via Chattermill">
                  <a
                    className="stat-clipboard-icon"
                    onClick={handleShare.shareClip}
                  >
                    <svg
                      width="18px"
                      height="20px"
                      viewBox="0 0 18 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>icon-copy</title>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Customer-Experience-Statistics---V1"
                          transform="translate(-390.000000, -1083.000000)"
                          fill="#10C2ED"
                          fillRule="nonzero"
                        >
                          <g
                            id="Group-26"
                            transform="translate(250.000000, 448.000000)"
                          >
                            <g
                              id="Group-24"
                              transform="translate(0.000000, 419.500000)"
                            >
                              <g
                                id="Group"
                                transform="translate(30.000000, 212.000000)"
                              >
                                <path
                                  d="M120.624975,23.499994 C121.66051,23.499994 122.49997,22.6605338 122.49997,21.6249985 L122.49997,19.750003 L125.624963,19.750003 C126.660498,19.750003 127.499958,18.9105427 127.499958,17.8750075 L127.499958,7.40166664 C127.499958,6.97297198 127.253911,6.37898689 126.950796,6.07587176 L124.924128,4.04920423 C124.621013,3.74608911 124.027028,3.50004172 123.598333,3.50004172 L116.874984,3.50004172 C115.839448,3.50004172 114.999988,4.339502 114.999988,5.37503725 L114.999988,7.25003278 L111.874996,7.25003278 C110.83946,7.25003278 110,8.08949306 110,9.12502831 L110,21.6249985 C110,22.6605338 110.83946,23.499994 111.874996,23.499994 L120.624975,23.499994 Z M125.390588,17.8750075 L117.109358,17.8750075 C116.980002,17.8750075 116.874984,17.7699891 116.874984,17.640633 L116.874984,5.60941169 C116.874984,5.48005562 116.980002,5.37503725 117.109358,5.37503725 L121.249973,5.37503725 L121.249973,8.81252906 C121.249973,9.33029668 121.669703,9.75002682 122.187471,9.75002682 L125.624963,9.75002682 L125.624963,17.640633 C125.624963,17.7699891 125.519944,17.8750075 125.390588,17.8750075 Z M125.624969,7.87503725 L123.124969,7.87503725 L123.124969,5.37503725 L123.501211,5.37503725 C123.563353,5.37503725 123.622976,5.39971829 123.66696,5.44366349 L125.556337,7.3330404 C125.58159,7.35829363 125.603673,7.39970419 125.615589,7.44038572 L125.624969,7.4987886 L125.624969,7.87503725 Z M120.3906,21.6249985 L112.10937,21.6249985 C111.980014,21.6249985 111.874996,21.5199801 111.874996,21.3906241 L111.874996,9.35940275 C111.874996,9.23004668 111.980014,9.12502831 112.10937,9.12502831 L114.999988,9.12502831 L114.999988,17.8750075 C114.999988,18.9105427 115.839448,19.750003 116.874984,19.750003 L120.624975,19.750003 L120.624975,21.3906241 C120.624975,21.5199801 120.519956,21.6249985 120.3906,21.6249985 Z"
                                  id="icon-copy"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </CopyToClipboard>
              </div>
            </div>
          </div>

          <div className="stat-block sg1-2">
            <p className="stat-block-copy">
              There is a very high correlation (R=0.82) between{" "}
              <span className="bold-class">CX and repurchasing.</span>
            </p>
            <div className="bottom-info-container">
              <a
                className="stat-block-source"
                href="https://www.linkedin.com/pulse/roi-customer-experience-2018-temkin-group-report-bruce-temkin-ccxp/"
                target="_blank"
              >
                Temkin
              </a>
              <div className="stat-share-container">
                <a
                  className="stat-twitter-icon"
                  onClick={handleShare.shareTweet}
                >
                  <svg
                    width="20px"
                    height="18px"
                    viewBox="0 0 20 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-twitter</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Customer-Experience-Statistics---V1"
                        transform="translate(-420.000000, -1084.000000)"
                        fill="#10C2ED"
                        fillRule="nonzero"
                      >
                        <g
                          id="Group-26"
                          transform="translate(250.000000, 448.000000)"
                        >
                          <g
                            id="Group-24"
                            transform="translate(0.000000, 419.500000)"
                          >
                            <g
                              id="Group"
                              transform="translate(30.000000, 212.000000)"
                            >
                              <path
                                d="M146.294388,21.6218323 C153.832479,21.6218323 157.956805,15.3781796 157.956805,9.9594532 C157.956805,9.78180317 157.956805,9.60407685 157.944102,9.42642682 C158.743585,8.84266509 159.441596,8.11932392 159.999876,7.30717681 C159.26387,7.62440628 158.464388,7.85286795 157.6395,7.94167389 C158.489717,7.43409149 159.136917,6.63460914 159.44152,5.68280629 C158.654664,6.15235626 157.766376,6.49499155 156.840017,6.67264158 C156.091232,5.87315923 155.025294,5.37824159 153.845067,5.37824159 C151.573535,5.37824159 149.746109,7.21833272 149.746109,9.47720032 C149.746109,9.79446794 149.784179,10.1116974 149.847618,10.4162621 C146.44667,10.2385739 143.41365,8.61424157 141.395909,6.12695044 C141.040532,6.73607985 140.837553,7.43405334 140.837553,8.1954651 C140.837553,9.61677976 141.560856,10.8731092 142.664903,11.6091532 C141.992373,11.5838237 141.3578,11.3934708 140.812147,11.0889061 L140.812147,11.1396414 C140.812147,13.1320149 142.220797,14.781715 144.098959,15.162459 C143.756362,15.2512649 143.38832,15.3020384 143.020318,15.3020384 C142.753785,15.3020384 142.5,15.2766708 142.246165,15.2386002 C142.766488,16.8629707 144.276647,18.0431589 146.078667,18.0812676 C144.670018,19.1853147 142.906029,19.8325147 140.989835,19.8325147 C140.6472,19.8325147 140.329971,19.8198118 140,19.7817793 C141.814723,20.9492265 143.972044,21.6218323 146.294388,21.6218323 Z"
                                id="icon-twitter"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <CopyToClipboard text="There is a very high correlation (R=0.82) between CX and repurchasing. via Chattermill">
                  <a
                    className="stat-clipboard-icon"
                    onClick={handleShare.shareClip}
                  >
                    <svg
                      width="18px"
                      height="20px"
                      viewBox="0 0 18 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>icon-copy</title>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Customer-Experience-Statistics---V1"
                          transform="translate(-390.000000, -1083.000000)"
                          fill="#10C2ED"
                          fillRule="nonzero"
                        >
                          <g
                            id="Group-26"
                            transform="translate(250.000000, 448.000000)"
                          >
                            <g
                              id="Group-24"
                              transform="translate(0.000000, 419.500000)"
                            >
                              <g
                                id="Group"
                                transform="translate(30.000000, 212.000000)"
                              >
                                <path
                                  d="M120.624975,23.499994 C121.66051,23.499994 122.49997,22.6605338 122.49997,21.6249985 L122.49997,19.750003 L125.624963,19.750003 C126.660498,19.750003 127.499958,18.9105427 127.499958,17.8750075 L127.499958,7.40166664 C127.499958,6.97297198 127.253911,6.37898689 126.950796,6.07587176 L124.924128,4.04920423 C124.621013,3.74608911 124.027028,3.50004172 123.598333,3.50004172 L116.874984,3.50004172 C115.839448,3.50004172 114.999988,4.339502 114.999988,5.37503725 L114.999988,7.25003278 L111.874996,7.25003278 C110.83946,7.25003278 110,8.08949306 110,9.12502831 L110,21.6249985 C110,22.6605338 110.83946,23.499994 111.874996,23.499994 L120.624975,23.499994 Z M125.390588,17.8750075 L117.109358,17.8750075 C116.980002,17.8750075 116.874984,17.7699891 116.874984,17.640633 L116.874984,5.60941169 C116.874984,5.48005562 116.980002,5.37503725 117.109358,5.37503725 L121.249973,5.37503725 L121.249973,8.81252906 C121.249973,9.33029668 121.669703,9.75002682 122.187471,9.75002682 L125.624963,9.75002682 L125.624963,17.640633 C125.624963,17.7699891 125.519944,17.8750075 125.390588,17.8750075 Z M125.624969,7.87503725 L123.124969,7.87503725 L123.124969,5.37503725 L123.501211,5.37503725 C123.563353,5.37503725 123.622976,5.39971829 123.66696,5.44366349 L125.556337,7.3330404 C125.58159,7.35829363 125.603673,7.39970419 125.615589,7.44038572 L125.624969,7.4987886 L125.624969,7.87503725 Z M120.3906,21.6249985 L112.10937,21.6249985 C111.980014,21.6249985 111.874996,21.5199801 111.874996,21.3906241 L111.874996,9.35940275 C111.874996,9.23004668 111.980014,9.12502831 112.10937,9.12502831 L114.999988,9.12502831 L114.999988,17.8750075 C114.999988,18.9105427 115.839448,19.750003 116.874984,19.750003 L120.624975,19.750003 L120.624975,21.3906241 C120.624975,21.5199801 120.519956,21.6249985 120.3906,21.6249985 Z"
                                  id="icon-copy"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </CopyToClipboard>
              </div>
            </div>
          </div>

          <div className="stat-block alt-light-blue sg1-3">
            <p className="stat-block-copy">
              <span className="bold-class">77% of marketing leaders</span> agree
              or strongly agree that they use automation to improve CX.
            </p>
            <GatsbyImage
              image={getImage(statImg1)}
              alt="Talk bubbles in a row"
            />
            <div className="bottom-info-container">
              <a
                className="stat-block-source"
                href="https://www.oracle.com/a/ocom/docs/dc/em/oracle_globalcxreport2019redwood8web.pdf?elqTrackId=78cfbb888f0c473ab9ebd021cbd337c6&elqaid=84258&elqat=2"
                target="_blank"
              >
                Oracle
              </a>
              <div className="stat-share-container">
                <a
                  className="stat-twitter-icon"
                  onClick={handleShare.shareTweet}
                >
                  <svg
                    width="20px"
                    height="18px"
                    viewBox="0 0 20 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-twitter</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Customer-Experience-Statistics---V1"
                        transform="translate(-420.000000, -1084.000000)"
                        fill="#10C2ED"
                        fillRule="nonzero"
                      >
                        <g
                          id="Group-26"
                          transform="translate(250.000000, 448.000000)"
                        >
                          <g
                            id="Group-24"
                            transform="translate(0.000000, 419.500000)"
                          >
                            <g
                              id="Group"
                              transform="translate(30.000000, 212.000000)"
                            >
                              <path
                                d="M146.294388,21.6218323 C153.832479,21.6218323 157.956805,15.3781796 157.956805,9.9594532 C157.956805,9.78180317 157.956805,9.60407685 157.944102,9.42642682 C158.743585,8.84266509 159.441596,8.11932392 159.999876,7.30717681 C159.26387,7.62440628 158.464388,7.85286795 157.6395,7.94167389 C158.489717,7.43409149 159.136917,6.63460914 159.44152,5.68280629 C158.654664,6.15235626 157.766376,6.49499155 156.840017,6.67264158 C156.091232,5.87315923 155.025294,5.37824159 153.845067,5.37824159 C151.573535,5.37824159 149.746109,7.21833272 149.746109,9.47720032 C149.746109,9.79446794 149.784179,10.1116974 149.847618,10.4162621 C146.44667,10.2385739 143.41365,8.61424157 141.395909,6.12695044 C141.040532,6.73607985 140.837553,7.43405334 140.837553,8.1954651 C140.837553,9.61677976 141.560856,10.8731092 142.664903,11.6091532 C141.992373,11.5838237 141.3578,11.3934708 140.812147,11.0889061 L140.812147,11.1396414 C140.812147,13.1320149 142.220797,14.781715 144.098959,15.162459 C143.756362,15.2512649 143.38832,15.3020384 143.020318,15.3020384 C142.753785,15.3020384 142.5,15.2766708 142.246165,15.2386002 C142.766488,16.8629707 144.276647,18.0431589 146.078667,18.0812676 C144.670018,19.1853147 142.906029,19.8325147 140.989835,19.8325147 C140.6472,19.8325147 140.329971,19.8198118 140,19.7817793 C141.814723,20.9492265 143.972044,21.6218323 146.294388,21.6218323 Z"
                                id="icon-twitter"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <CopyToClipboard text="77% of marketing leaders agree or strongly agree that they use automation to improve CX. via Chattermill">
                  <a
                    className="stat-clipboard-icon"
                    onClick={handleShare.shareClip}
                  >
                    <svg
                      width="18px"
                      height="20px"
                      viewBox="0 0 18 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>icon-copy</title>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Customer-Experience-Statistics---V1"
                          transform="translate(-390.000000, -1083.000000)"
                          fill="#10C2ED"
                          fillRule="nonzero"
                        >
                          <g
                            id="Group-26"
                            transform="translate(250.000000, 448.000000)"
                          >
                            <g
                              id="Group-24"
                              transform="translate(0.000000, 419.500000)"
                            >
                              <g
                                id="Group"
                                transform="translate(30.000000, 212.000000)"
                              >
                                <path
                                  d="M120.624975,23.499994 C121.66051,23.499994 122.49997,22.6605338 122.49997,21.6249985 L122.49997,19.750003 L125.624963,19.750003 C126.660498,19.750003 127.499958,18.9105427 127.499958,17.8750075 L127.499958,7.40166664 C127.499958,6.97297198 127.253911,6.37898689 126.950796,6.07587176 L124.924128,4.04920423 C124.621013,3.74608911 124.027028,3.50004172 123.598333,3.50004172 L116.874984,3.50004172 C115.839448,3.50004172 114.999988,4.339502 114.999988,5.37503725 L114.999988,7.25003278 L111.874996,7.25003278 C110.83946,7.25003278 110,8.08949306 110,9.12502831 L110,21.6249985 C110,22.6605338 110.83946,23.499994 111.874996,23.499994 L120.624975,23.499994 Z M125.390588,17.8750075 L117.109358,17.8750075 C116.980002,17.8750075 116.874984,17.7699891 116.874984,17.640633 L116.874984,5.60941169 C116.874984,5.48005562 116.980002,5.37503725 117.109358,5.37503725 L121.249973,5.37503725 L121.249973,8.81252906 C121.249973,9.33029668 121.669703,9.75002682 122.187471,9.75002682 L125.624963,9.75002682 L125.624963,17.640633 C125.624963,17.7699891 125.519944,17.8750075 125.390588,17.8750075 Z M125.624969,7.87503725 L123.124969,7.87503725 L123.124969,5.37503725 L123.501211,5.37503725 C123.563353,5.37503725 123.622976,5.39971829 123.66696,5.44366349 L125.556337,7.3330404 C125.58159,7.35829363 125.603673,7.39970419 125.615589,7.44038572 L125.624969,7.4987886 L125.624969,7.87503725 Z M120.3906,21.6249985 L112.10937,21.6249985 C111.980014,21.6249985 111.874996,21.5199801 111.874996,21.3906241 L111.874996,9.35940275 C111.874996,9.23004668 111.980014,9.12502831 112.10937,9.12502831 L114.999988,9.12502831 L114.999988,17.8750075 C114.999988,18.9105427 115.839448,19.750003 116.874984,19.750003 L120.624975,19.750003 L120.624975,21.3906241 C120.624975,21.5199801 120.519956,21.6249985 120.3906,21.6249985 Z"
                                  id="icon-copy"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </CopyToClipboard>
              </div>
            </div>
          </div>

          <div className="stat-block sg1-4">
            <p className="stat-block-copy">
              63% of customers say they would be willing to share
              <span className="bold-class">more personal data</span> with a
              company that offers a great experience.
            </p>
            <div className="bottom-info-container">
              <a
                className="stat-block-source"
                href="https://www.pwc.com/us/en/advisory-services/publications/consumer-intelligence-series/pwc-consumer-intelligence-series-customer-experience.pdf"
                target="_blank"
              >
                PwC
              </a>
              <div className="stat-share-container">
                <a
                  className="stat-twitter-icon"
                  onClick={handleShare.shareTweet}
                >
                  <svg
                    width="20px"
                    height="18px"
                    viewBox="0 0 20 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-twitter</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Customer-Experience-Statistics---V1"
                        transform="translate(-420.000000, -1084.000000)"
                        fill="#10C2ED"
                        fillRule="nonzero"
                      >
                        <g
                          id="Group-26"
                          transform="translate(250.000000, 448.000000)"
                        >
                          <g
                            id="Group-24"
                            transform="translate(0.000000, 419.500000)"
                          >
                            <g
                              id="Group"
                              transform="translate(30.000000, 212.000000)"
                            >
                              <path
                                d="M146.294388,21.6218323 C153.832479,21.6218323 157.956805,15.3781796 157.956805,9.9594532 C157.956805,9.78180317 157.956805,9.60407685 157.944102,9.42642682 C158.743585,8.84266509 159.441596,8.11932392 159.999876,7.30717681 C159.26387,7.62440628 158.464388,7.85286795 157.6395,7.94167389 C158.489717,7.43409149 159.136917,6.63460914 159.44152,5.68280629 C158.654664,6.15235626 157.766376,6.49499155 156.840017,6.67264158 C156.091232,5.87315923 155.025294,5.37824159 153.845067,5.37824159 C151.573535,5.37824159 149.746109,7.21833272 149.746109,9.47720032 C149.746109,9.79446794 149.784179,10.1116974 149.847618,10.4162621 C146.44667,10.2385739 143.41365,8.61424157 141.395909,6.12695044 C141.040532,6.73607985 140.837553,7.43405334 140.837553,8.1954651 C140.837553,9.61677976 141.560856,10.8731092 142.664903,11.6091532 C141.992373,11.5838237 141.3578,11.3934708 140.812147,11.0889061 L140.812147,11.1396414 C140.812147,13.1320149 142.220797,14.781715 144.098959,15.162459 C143.756362,15.2512649 143.38832,15.3020384 143.020318,15.3020384 C142.753785,15.3020384 142.5,15.2766708 142.246165,15.2386002 C142.766488,16.8629707 144.276647,18.0431589 146.078667,18.0812676 C144.670018,19.1853147 142.906029,19.8325147 140.989835,19.8325147 C140.6472,19.8325147 140.329971,19.8198118 140,19.7817793 C141.814723,20.9492265 143.972044,21.6218323 146.294388,21.6218323 Z"
                                id="icon-twitter"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <CopyToClipboard text="63% of customers say they would be willing to share more personal data with a company that offers a great experience. via Chattermill">
                  <a
                    className="stat-clipboard-icon"
                    onClick={handleShare.shareClip}
                  >
                    <svg
                      width="18px"
                      height="20px"
                      viewBox="0 0 18 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>icon-copy</title>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Customer-Experience-Statistics---V1"
                          transform="translate(-390.000000, -1083.000000)"
                          fill="#10C2ED"
                          fillRule="nonzero"
                        >
                          <g
                            id="Group-26"
                            transform="translate(250.000000, 448.000000)"
                          >
                            <g
                              id="Group-24"
                              transform="translate(0.000000, 419.500000)"
                            >
                              <g
                                id="Group"
                                transform="translate(30.000000, 212.000000)"
                              >
                                <path
                                  d="M120.624975,23.499994 C121.66051,23.499994 122.49997,22.6605338 122.49997,21.6249985 L122.49997,19.750003 L125.624963,19.750003 C126.660498,19.750003 127.499958,18.9105427 127.499958,17.8750075 L127.499958,7.40166664 C127.499958,6.97297198 127.253911,6.37898689 126.950796,6.07587176 L124.924128,4.04920423 C124.621013,3.74608911 124.027028,3.50004172 123.598333,3.50004172 L116.874984,3.50004172 C115.839448,3.50004172 114.999988,4.339502 114.999988,5.37503725 L114.999988,7.25003278 L111.874996,7.25003278 C110.83946,7.25003278 110,8.08949306 110,9.12502831 L110,21.6249985 C110,22.6605338 110.83946,23.499994 111.874996,23.499994 L120.624975,23.499994 Z M125.390588,17.8750075 L117.109358,17.8750075 C116.980002,17.8750075 116.874984,17.7699891 116.874984,17.640633 L116.874984,5.60941169 C116.874984,5.48005562 116.980002,5.37503725 117.109358,5.37503725 L121.249973,5.37503725 L121.249973,8.81252906 C121.249973,9.33029668 121.669703,9.75002682 122.187471,9.75002682 L125.624963,9.75002682 L125.624963,17.640633 C125.624963,17.7699891 125.519944,17.8750075 125.390588,17.8750075 Z M125.624969,7.87503725 L123.124969,7.87503725 L123.124969,5.37503725 L123.501211,5.37503725 C123.563353,5.37503725 123.622976,5.39971829 123.66696,5.44366349 L125.556337,7.3330404 C125.58159,7.35829363 125.603673,7.39970419 125.615589,7.44038572 L125.624969,7.4987886 L125.624969,7.87503725 Z M120.3906,21.6249985 L112.10937,21.6249985 C111.980014,21.6249985 111.874996,21.5199801 111.874996,21.3906241 L111.874996,9.35940275 C111.874996,9.23004668 111.980014,9.12502831 112.10937,9.12502831 L114.999988,9.12502831 L114.999988,17.8750075 C114.999988,18.9105427 115.839448,19.750003 116.874984,19.750003 L120.624975,19.750003 L120.624975,21.3906241 C120.624975,21.5199801 120.519956,21.6249985 120.3906,21.6249985 Z"
                                  id="icon-copy"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </CopyToClipboard>
              </div>
            </div>
          </div>

          <div className="stat-block sg1-5">
            <p className="stat-block-copy">
              <span className="bold-class">
                82% of the top-performing companies
              </span>{" "}
              report paying close attention to the human experience around
              digital and tech.
            </p>
            <div className="stat-img-wrapper">
              <GatsbyImage
                image={getImage(statImg2)}
                alt="A sad face in a magnifying glass"
              />
              <div className="stat-block-img-bg"></div>
            </div>
            <div className="bottom-info-container">
              <a
                className="stat-block-source"
                href="https://www.pwc.com/us/en/advisory-services/publications/consumer-intelligence-series/pwc-consumer-intelligence-series-customer-experience.pdf"
                target="_blank"
              >
                PwC
              </a>
              <div className="stat-share-container">
                <a
                  className="stat-twitter-icon"
                  onClick={handleShare.shareTweet}
                >
                  <svg
                    width="20px"
                    height="18px"
                    viewBox="0 0 20 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-twitter</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Customer-Experience-Statistics---V1"
                        transform="translate(-420.000000, -1084.000000)"
                        fill="#10C2ED"
                        fillRule="nonzero"
                      >
                        <g
                          id="Group-26"
                          transform="translate(250.000000, 448.000000)"
                        >
                          <g
                            id="Group-24"
                            transform="translate(0.000000, 419.500000)"
                          >
                            <g
                              id="Group"
                              transform="translate(30.000000, 212.000000)"
                            >
                              <path
                                d="M146.294388,21.6218323 C153.832479,21.6218323 157.956805,15.3781796 157.956805,9.9594532 C157.956805,9.78180317 157.956805,9.60407685 157.944102,9.42642682 C158.743585,8.84266509 159.441596,8.11932392 159.999876,7.30717681 C159.26387,7.62440628 158.464388,7.85286795 157.6395,7.94167389 C158.489717,7.43409149 159.136917,6.63460914 159.44152,5.68280629 C158.654664,6.15235626 157.766376,6.49499155 156.840017,6.67264158 C156.091232,5.87315923 155.025294,5.37824159 153.845067,5.37824159 C151.573535,5.37824159 149.746109,7.21833272 149.746109,9.47720032 C149.746109,9.79446794 149.784179,10.1116974 149.847618,10.4162621 C146.44667,10.2385739 143.41365,8.61424157 141.395909,6.12695044 C141.040532,6.73607985 140.837553,7.43405334 140.837553,8.1954651 C140.837553,9.61677976 141.560856,10.8731092 142.664903,11.6091532 C141.992373,11.5838237 141.3578,11.3934708 140.812147,11.0889061 L140.812147,11.1396414 C140.812147,13.1320149 142.220797,14.781715 144.098959,15.162459 C143.756362,15.2512649 143.38832,15.3020384 143.020318,15.3020384 C142.753785,15.3020384 142.5,15.2766708 142.246165,15.2386002 C142.766488,16.8629707 144.276647,18.0431589 146.078667,18.0812676 C144.670018,19.1853147 142.906029,19.8325147 140.989835,19.8325147 C140.6472,19.8325147 140.329971,19.8198118 140,19.7817793 C141.814723,20.9492265 143.972044,21.6218323 146.294388,21.6218323 Z"
                                id="icon-twitter"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <CopyToClipboard text="82% of the top-performing companies report paying close attention to the human experience around digital and tech. via Chattermill">
                  <a
                    className="stat-clipboard-icon"
                    onClick={handleShare.shareClip}
                  >
                    <svg
                      width="18px"
                      height="20px"
                      viewBox="0 0 18 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>icon-copy</title>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Customer-Experience-Statistics---V1"
                          transform="translate(-390.000000, -1083.000000)"
                          fill="#10C2ED"
                          fillRule="nonzero"
                        >
                          <g
                            id="Group-26"
                            transform="translate(250.000000, 448.000000)"
                          >
                            <g
                              id="Group-24"
                              transform="translate(0.000000, 419.500000)"
                            >
                              <g
                                id="Group"
                                transform="translate(30.000000, 212.000000)"
                              >
                                <path
                                  d="M120.624975,23.499994 C121.66051,23.499994 122.49997,22.6605338 122.49997,21.6249985 L122.49997,19.750003 L125.624963,19.750003 C126.660498,19.750003 127.499958,18.9105427 127.499958,17.8750075 L127.499958,7.40166664 C127.499958,6.97297198 127.253911,6.37898689 126.950796,6.07587176 L124.924128,4.04920423 C124.621013,3.74608911 124.027028,3.50004172 123.598333,3.50004172 L116.874984,3.50004172 C115.839448,3.50004172 114.999988,4.339502 114.999988,5.37503725 L114.999988,7.25003278 L111.874996,7.25003278 C110.83946,7.25003278 110,8.08949306 110,9.12502831 L110,21.6249985 C110,22.6605338 110.83946,23.499994 111.874996,23.499994 L120.624975,23.499994 Z M125.390588,17.8750075 L117.109358,17.8750075 C116.980002,17.8750075 116.874984,17.7699891 116.874984,17.640633 L116.874984,5.60941169 C116.874984,5.48005562 116.980002,5.37503725 117.109358,5.37503725 L121.249973,5.37503725 L121.249973,8.81252906 C121.249973,9.33029668 121.669703,9.75002682 122.187471,9.75002682 L125.624963,9.75002682 L125.624963,17.640633 C125.624963,17.7699891 125.519944,17.8750075 125.390588,17.8750075 Z M125.624969,7.87503725 L123.124969,7.87503725 L123.124969,5.37503725 L123.501211,5.37503725 C123.563353,5.37503725 123.622976,5.39971829 123.66696,5.44366349 L125.556337,7.3330404 C125.58159,7.35829363 125.603673,7.39970419 125.615589,7.44038572 L125.624969,7.4987886 L125.624969,7.87503725 Z M120.3906,21.6249985 L112.10937,21.6249985 C111.980014,21.6249985 111.874996,21.5199801 111.874996,21.3906241 L111.874996,9.35940275 C111.874996,9.23004668 111.980014,9.12502831 112.10937,9.12502831 L114.999988,9.12502831 L114.999988,17.8750075 C114.999988,18.9105427 115.839448,19.750003 116.874984,19.750003 L120.624975,19.750003 L120.624975,21.3906241 C120.624975,21.5199801 120.519956,21.6249985 120.3906,21.6249985 Z"
                                  id="icon-copy"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </CopyToClipboard>
              </div>
            </div>
          </div>

          <div className="stat-block sg1-6">
            <p className="stat-block-copy">
              Customers are willing to pay up to{" "}
              <span className="bold-class">16% more</span>for products and
              services if it means great customer experience.
            </p>
            <div className="bottom-info-container">
              <a
                className="stat-block-source"
                href="https://www.pwc.com/us/en/advisory-services/publications/consumer-intelligence-series/pwc-consumer-intelligence-series-customer-experience.pdf"
                target="_blank"
              >
                PwC
              </a>
              <div className="stat-share-container">
                <a
                  className="stat-twitter-icon"
                  onClick={handleShare.shareTweet}
                >
                  <svg
                    width="20px"
                    height="18px"
                    viewBox="0 0 20 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-twitter</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Customer-Experience-Statistics---V1"
                        transform="translate(-420.000000, -1084.000000)"
                        fill="#10C2ED"
                        fillRule="nonzero"
                      >
                        <g
                          id="Group-26"
                          transform="translate(250.000000, 448.000000)"
                        >
                          <g
                            id="Group-24"
                            transform="translate(0.000000, 419.500000)"
                          >
                            <g
                              id="Group"
                              transform="translate(30.000000, 212.000000)"
                            >
                              <path
                                d="M146.294388,21.6218323 C153.832479,21.6218323 157.956805,15.3781796 157.956805,9.9594532 C157.956805,9.78180317 157.956805,9.60407685 157.944102,9.42642682 C158.743585,8.84266509 159.441596,8.11932392 159.999876,7.30717681 C159.26387,7.62440628 158.464388,7.85286795 157.6395,7.94167389 C158.489717,7.43409149 159.136917,6.63460914 159.44152,5.68280629 C158.654664,6.15235626 157.766376,6.49499155 156.840017,6.67264158 C156.091232,5.87315923 155.025294,5.37824159 153.845067,5.37824159 C151.573535,5.37824159 149.746109,7.21833272 149.746109,9.47720032 C149.746109,9.79446794 149.784179,10.1116974 149.847618,10.4162621 C146.44667,10.2385739 143.41365,8.61424157 141.395909,6.12695044 C141.040532,6.73607985 140.837553,7.43405334 140.837553,8.1954651 C140.837553,9.61677976 141.560856,10.8731092 142.664903,11.6091532 C141.992373,11.5838237 141.3578,11.3934708 140.812147,11.0889061 L140.812147,11.1396414 C140.812147,13.1320149 142.220797,14.781715 144.098959,15.162459 C143.756362,15.2512649 143.38832,15.3020384 143.020318,15.3020384 C142.753785,15.3020384 142.5,15.2766708 142.246165,15.2386002 C142.766488,16.8629707 144.276647,18.0431589 146.078667,18.0812676 C144.670018,19.1853147 142.906029,19.8325147 140.989835,19.8325147 C140.6472,19.8325147 140.329971,19.8198118 140,19.7817793 C141.814723,20.9492265 143.972044,21.6218323 146.294388,21.6218323 Z"
                                id="icon-twitter"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <CopyToClipboard text="Customers are willing to pay up to 16% more for products and services if it means great customer experience. via Chattermill">
                  <a
                    className="stat-clipboard-icon"
                    onClick={handleShare.shareClip}
                  >
                    <svg
                      width="18px"
                      height="20px"
                      viewBox="0 0 18 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>icon-copy</title>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Customer-Experience-Statistics---V1"
                          transform="translate(-390.000000, -1083.000000)"
                          fill="#10C2ED"
                          fillRule="nonzero"
                        >
                          <g
                            id="Group-26"
                            transform="translate(250.000000, 448.000000)"
                          >
                            <g
                              id="Group-24"
                              transform="translate(0.000000, 419.500000)"
                            >
                              <g
                                id="Group"
                                transform="translate(30.000000, 212.000000)"
                              >
                                <path
                                  d="M120.624975,23.499994 C121.66051,23.499994 122.49997,22.6605338 122.49997,21.6249985 L122.49997,19.750003 L125.624963,19.750003 C126.660498,19.750003 127.499958,18.9105427 127.499958,17.8750075 L127.499958,7.40166664 C127.499958,6.97297198 127.253911,6.37898689 126.950796,6.07587176 L124.924128,4.04920423 C124.621013,3.74608911 124.027028,3.50004172 123.598333,3.50004172 L116.874984,3.50004172 C115.839448,3.50004172 114.999988,4.339502 114.999988,5.37503725 L114.999988,7.25003278 L111.874996,7.25003278 C110.83946,7.25003278 110,8.08949306 110,9.12502831 L110,21.6249985 C110,22.6605338 110.83946,23.499994 111.874996,23.499994 L120.624975,23.499994 Z M125.390588,17.8750075 L117.109358,17.8750075 C116.980002,17.8750075 116.874984,17.7699891 116.874984,17.640633 L116.874984,5.60941169 C116.874984,5.48005562 116.980002,5.37503725 117.109358,5.37503725 L121.249973,5.37503725 L121.249973,8.81252906 C121.249973,9.33029668 121.669703,9.75002682 122.187471,9.75002682 L125.624963,9.75002682 L125.624963,17.640633 C125.624963,17.7699891 125.519944,17.8750075 125.390588,17.8750075 Z M125.624969,7.87503725 L123.124969,7.87503725 L123.124969,5.37503725 L123.501211,5.37503725 C123.563353,5.37503725 123.622976,5.39971829 123.66696,5.44366349 L125.556337,7.3330404 C125.58159,7.35829363 125.603673,7.39970419 125.615589,7.44038572 L125.624969,7.4987886 L125.624969,7.87503725 Z M120.3906,21.6249985 L112.10937,21.6249985 C111.980014,21.6249985 111.874996,21.5199801 111.874996,21.3906241 L111.874996,9.35940275 C111.874996,9.23004668 111.980014,9.12502831 112.10937,9.12502831 L114.999988,9.12502831 L114.999988,17.8750075 C114.999988,18.9105427 115.839448,19.750003 116.874984,19.750003 L120.624975,19.750003 L120.624975,21.3906241 C120.624975,21.5199801 120.519956,21.6249985 120.3906,21.6249985 Z"
                                  id="icon-copy"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </CopyToClipboard>
              </div>
            </div>
          </div>

          <div className="stat-block alt-dark-blue sg1-7">
            <p className="stat-block-copy">
              32% of consumers say they will{" "}
              <span className="bold-class">
                walk away from a brand they love
              </span>{" "}
              after just one bad experience.
            </p>
            <div className="bottom-info-container">
              <a
                className="stat-block-source"
                href="https://www.pwc.com/us/en/advisory-services/publications/consumer-intelligence-series/pwc-consumer-intelligence-series-customer-experience.pdf"
                target="_blank"
              >
                PwC
              </a>
              <div className="stat-share-container">
                <a
                  className="stat-twitter-icon"
                  onClick={handleShare.shareTweet}
                >
                  <svg
                    width="20px"
                    height="18px"
                    viewBox="0 0 20 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-twitter</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Customer-Experience-Statistics---V1"
                        transform="translate(-420.000000, -1084.000000)"
                        fill="#10C2ED"
                        fillRule="nonzero"
                      >
                        <g
                          id="Group-26"
                          transform="translate(250.000000, 448.000000)"
                        >
                          <g
                            id="Group-24"
                            transform="translate(0.000000, 419.500000)"
                          >
                            <g
                              id="Group"
                              transform="translate(30.000000, 212.000000)"
                            >
                              <path
                                d="M146.294388,21.6218323 C153.832479,21.6218323 157.956805,15.3781796 157.956805,9.9594532 C157.956805,9.78180317 157.956805,9.60407685 157.944102,9.42642682 C158.743585,8.84266509 159.441596,8.11932392 159.999876,7.30717681 C159.26387,7.62440628 158.464388,7.85286795 157.6395,7.94167389 C158.489717,7.43409149 159.136917,6.63460914 159.44152,5.68280629 C158.654664,6.15235626 157.766376,6.49499155 156.840017,6.67264158 C156.091232,5.87315923 155.025294,5.37824159 153.845067,5.37824159 C151.573535,5.37824159 149.746109,7.21833272 149.746109,9.47720032 C149.746109,9.79446794 149.784179,10.1116974 149.847618,10.4162621 C146.44667,10.2385739 143.41365,8.61424157 141.395909,6.12695044 C141.040532,6.73607985 140.837553,7.43405334 140.837553,8.1954651 C140.837553,9.61677976 141.560856,10.8731092 142.664903,11.6091532 C141.992373,11.5838237 141.3578,11.3934708 140.812147,11.0889061 L140.812147,11.1396414 C140.812147,13.1320149 142.220797,14.781715 144.098959,15.162459 C143.756362,15.2512649 143.38832,15.3020384 143.020318,15.3020384 C142.753785,15.3020384 142.5,15.2766708 142.246165,15.2386002 C142.766488,16.8629707 144.276647,18.0431589 146.078667,18.0812676 C144.670018,19.1853147 142.906029,19.8325147 140.989835,19.8325147 C140.6472,19.8325147 140.329971,19.8198118 140,19.7817793 C141.814723,20.9492265 143.972044,21.6218323 146.294388,21.6218323 Z"
                                id="icon-twitter"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <CopyToClipboard text="32% of consumers say they will walk away from a brand they love after just one bad experience. via Chattermill">
                  <a
                    className="stat-clipboard-icon"
                    onClick={handleShare.shareClip}
                  >
                    <svg
                      width="18px"
                      height="20px"
                      viewBox="0 0 18 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>icon-copy</title>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Customer-Experience-Statistics---V1"
                          transform="translate(-390.000000, -1083.000000)"
                          fill="#10C2ED"
                          fillRule="nonzero"
                        >
                          <g
                            id="Group-26"
                            transform="translate(250.000000, 448.000000)"
                          >
                            <g
                              id="Group-24"
                              transform="translate(0.000000, 419.500000)"
                            >
                              <g
                                id="Group"
                                transform="translate(30.000000, 212.000000)"
                              >
                                <path
                                  d="M120.624975,23.499994 C121.66051,23.499994 122.49997,22.6605338 122.49997,21.6249985 L122.49997,19.750003 L125.624963,19.750003 C126.660498,19.750003 127.499958,18.9105427 127.499958,17.8750075 L127.499958,7.40166664 C127.499958,6.97297198 127.253911,6.37898689 126.950796,6.07587176 L124.924128,4.04920423 C124.621013,3.74608911 124.027028,3.50004172 123.598333,3.50004172 L116.874984,3.50004172 C115.839448,3.50004172 114.999988,4.339502 114.999988,5.37503725 L114.999988,7.25003278 L111.874996,7.25003278 C110.83946,7.25003278 110,8.08949306 110,9.12502831 L110,21.6249985 C110,22.6605338 110.83946,23.499994 111.874996,23.499994 L120.624975,23.499994 Z M125.390588,17.8750075 L117.109358,17.8750075 C116.980002,17.8750075 116.874984,17.7699891 116.874984,17.640633 L116.874984,5.60941169 C116.874984,5.48005562 116.980002,5.37503725 117.109358,5.37503725 L121.249973,5.37503725 L121.249973,8.81252906 C121.249973,9.33029668 121.669703,9.75002682 122.187471,9.75002682 L125.624963,9.75002682 L125.624963,17.640633 C125.624963,17.7699891 125.519944,17.8750075 125.390588,17.8750075 Z M125.624969,7.87503725 L123.124969,7.87503725 L123.124969,5.37503725 L123.501211,5.37503725 C123.563353,5.37503725 123.622976,5.39971829 123.66696,5.44366349 L125.556337,7.3330404 C125.58159,7.35829363 125.603673,7.39970419 125.615589,7.44038572 L125.624969,7.4987886 L125.624969,7.87503725 Z M120.3906,21.6249985 L112.10937,21.6249985 C111.980014,21.6249985 111.874996,21.5199801 111.874996,21.3906241 L111.874996,9.35940275 C111.874996,9.23004668 111.980014,9.12502831 112.10937,9.12502831 L114.999988,9.12502831 L114.999988,17.8750075 C114.999988,18.9105427 115.839448,19.750003 116.874984,19.750003 L120.624975,19.750003 L120.624975,21.3906241 C120.624975,21.5199801 120.519956,21.6249985 120.3906,21.6249985 Z"
                                  id="icon-copy"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </CopyToClipboard>
              </div>
            </div>
          </div>

          <div className="stat-block sg1-8">
            <p className="stat-block-copy">
              <span className="bold-class">82% of organizations’ ROI </span>on
              marketing technology improved in 2020.
            </p>
            <div className="bottom-info-container">
              <a
                className="stat-block-source"
                href="https://www.acquia.com/resources/e-book/deliver-cx-they-expect-customer-experience-trends-report"
                target="_blank"
              >
                Acquia
              </a>
              <div className="stat-share-container">
                <a
                  className="stat-twitter-icon"
                  onClick={handleShare.shareTweet}
                >
                  <svg
                    width="20px"
                    height="18px"
                    viewBox="0 0 20 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-twitter</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Customer-Experience-Statistics---V1"
                        transform="translate(-420.000000, -1084.000000)"
                        fill="#10C2ED"
                        fillRule="nonzero"
                      >
                        <g
                          id="Group-26"
                          transform="translate(250.000000, 448.000000)"
                        >
                          <g
                            id="Group-24"
                            transform="translate(0.000000, 419.500000)"
                          >
                            <g
                              id="Group"
                              transform="translate(30.000000, 212.000000)"
                            >
                              <path
                                d="M146.294388,21.6218323 C153.832479,21.6218323 157.956805,15.3781796 157.956805,9.9594532 C157.956805,9.78180317 157.956805,9.60407685 157.944102,9.42642682 C158.743585,8.84266509 159.441596,8.11932392 159.999876,7.30717681 C159.26387,7.62440628 158.464388,7.85286795 157.6395,7.94167389 C158.489717,7.43409149 159.136917,6.63460914 159.44152,5.68280629 C158.654664,6.15235626 157.766376,6.49499155 156.840017,6.67264158 C156.091232,5.87315923 155.025294,5.37824159 153.845067,5.37824159 C151.573535,5.37824159 149.746109,7.21833272 149.746109,9.47720032 C149.746109,9.79446794 149.784179,10.1116974 149.847618,10.4162621 C146.44667,10.2385739 143.41365,8.61424157 141.395909,6.12695044 C141.040532,6.73607985 140.837553,7.43405334 140.837553,8.1954651 C140.837553,9.61677976 141.560856,10.8731092 142.664903,11.6091532 C141.992373,11.5838237 141.3578,11.3934708 140.812147,11.0889061 L140.812147,11.1396414 C140.812147,13.1320149 142.220797,14.781715 144.098959,15.162459 C143.756362,15.2512649 143.38832,15.3020384 143.020318,15.3020384 C142.753785,15.3020384 142.5,15.2766708 142.246165,15.2386002 C142.766488,16.8629707 144.276647,18.0431589 146.078667,18.0812676 C144.670018,19.1853147 142.906029,19.8325147 140.989835,19.8325147 C140.6472,19.8325147 140.329971,19.8198118 140,19.7817793 C141.814723,20.9492265 143.972044,21.6218323 146.294388,21.6218323 Z"
                                id="icon-twitter"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <CopyToClipboard text="82% of organizations’ ROI on marketing technology improved in 2020. via Chattermill">
                  <a
                    className="stat-clipboard-icon"
                    onClick={handleShare.shareClip}
                  >
                    <svg
                      width="18px"
                      height="20px"
                      viewBox="0 0 18 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>icon-copy</title>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Customer-Experience-Statistics---V1"
                          transform="translate(-390.000000, -1083.000000)"
                          fill="#10C2ED"
                          fillRule="nonzero"
                        >
                          <g
                            id="Group-26"
                            transform="translate(250.000000, 448.000000)"
                          >
                            <g
                              id="Group-24"
                              transform="translate(0.000000, 419.500000)"
                            >
                              <g
                                id="Group"
                                transform="translate(30.000000, 212.000000)"
                              >
                                <path
                                  d="M120.624975,23.499994 C121.66051,23.499994 122.49997,22.6605338 122.49997,21.6249985 L122.49997,19.750003 L125.624963,19.750003 C126.660498,19.750003 127.499958,18.9105427 127.499958,17.8750075 L127.499958,7.40166664 C127.499958,6.97297198 127.253911,6.37898689 126.950796,6.07587176 L124.924128,4.04920423 C124.621013,3.74608911 124.027028,3.50004172 123.598333,3.50004172 L116.874984,3.50004172 C115.839448,3.50004172 114.999988,4.339502 114.999988,5.37503725 L114.999988,7.25003278 L111.874996,7.25003278 C110.83946,7.25003278 110,8.08949306 110,9.12502831 L110,21.6249985 C110,22.6605338 110.83946,23.499994 111.874996,23.499994 L120.624975,23.499994 Z M125.390588,17.8750075 L117.109358,17.8750075 C116.980002,17.8750075 116.874984,17.7699891 116.874984,17.640633 L116.874984,5.60941169 C116.874984,5.48005562 116.980002,5.37503725 117.109358,5.37503725 L121.249973,5.37503725 L121.249973,8.81252906 C121.249973,9.33029668 121.669703,9.75002682 122.187471,9.75002682 L125.624963,9.75002682 L125.624963,17.640633 C125.624963,17.7699891 125.519944,17.8750075 125.390588,17.8750075 Z M125.624969,7.87503725 L123.124969,7.87503725 L123.124969,5.37503725 L123.501211,5.37503725 C123.563353,5.37503725 123.622976,5.39971829 123.66696,5.44366349 L125.556337,7.3330404 C125.58159,7.35829363 125.603673,7.39970419 125.615589,7.44038572 L125.624969,7.4987886 L125.624969,7.87503725 Z M120.3906,21.6249985 L112.10937,21.6249985 C111.980014,21.6249985 111.874996,21.5199801 111.874996,21.3906241 L111.874996,9.35940275 C111.874996,9.23004668 111.980014,9.12502831 112.10937,9.12502831 L114.999988,9.12502831 L114.999988,17.8750075 C114.999988,18.9105427 115.839448,19.750003 116.874984,19.750003 L120.624975,19.750003 L120.624975,21.3906241 C120.624975,21.5199801 120.519956,21.6249985 120.3906,21.6249985 Z"
                                  id="icon-copy"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </CopyToClipboard>
              </div>
            </div>
          </div>

          <div className="stat-block sg1-9">
            <p className="stat-block-copy">
              Regardless of discipline, industry, or company revenue,{" "}
              <span className="bold-class">over 90%</span> agree that CX is a
              primary focus.
            </p>
            <div className="bottom-info-container">
              <a
                className="stat-block-source"
                href="https://www.oracle.com/a/ocom/docs/dc/em/oracle_globalcxreport2019redwood8web.pdf?elqTrackId=78cfbb888f0c473ab9ebd021cbd337c6&elqaid=84258&elqat=2"
                target="_blank"
              >
                Oracle
              </a>
              <div className="stat-share-container">
                <a
                  className="stat-twitter-icon"
                  onClick={handleShare.shareTweet}
                >
                  <svg
                    width="20px"
                    height="18px"
                    viewBox="0 0 20 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-twitter</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Customer-Experience-Statistics---V1"
                        transform="translate(-420.000000, -1084.000000)"
                        fill="#10C2ED"
                        fillRule="nonzero"
                      >
                        <g
                          id="Group-26"
                          transform="translate(250.000000, 448.000000)"
                        >
                          <g
                            id="Group-24"
                            transform="translate(0.000000, 419.500000)"
                          >
                            <g
                              id="Group"
                              transform="translate(30.000000, 212.000000)"
                            >
                              <path
                                d="M146.294388,21.6218323 C153.832479,21.6218323 157.956805,15.3781796 157.956805,9.9594532 C157.956805,9.78180317 157.956805,9.60407685 157.944102,9.42642682 C158.743585,8.84266509 159.441596,8.11932392 159.999876,7.30717681 C159.26387,7.62440628 158.464388,7.85286795 157.6395,7.94167389 C158.489717,7.43409149 159.136917,6.63460914 159.44152,5.68280629 C158.654664,6.15235626 157.766376,6.49499155 156.840017,6.67264158 C156.091232,5.87315923 155.025294,5.37824159 153.845067,5.37824159 C151.573535,5.37824159 149.746109,7.21833272 149.746109,9.47720032 C149.746109,9.79446794 149.784179,10.1116974 149.847618,10.4162621 C146.44667,10.2385739 143.41365,8.61424157 141.395909,6.12695044 C141.040532,6.73607985 140.837553,7.43405334 140.837553,8.1954651 C140.837553,9.61677976 141.560856,10.8731092 142.664903,11.6091532 C141.992373,11.5838237 141.3578,11.3934708 140.812147,11.0889061 L140.812147,11.1396414 C140.812147,13.1320149 142.220797,14.781715 144.098959,15.162459 C143.756362,15.2512649 143.38832,15.3020384 143.020318,15.3020384 C142.753785,15.3020384 142.5,15.2766708 142.246165,15.2386002 C142.766488,16.8629707 144.276647,18.0431589 146.078667,18.0812676 C144.670018,19.1853147 142.906029,19.8325147 140.989835,19.8325147 C140.6472,19.8325147 140.329971,19.8198118 140,19.7817793 C141.814723,20.9492265 143.972044,21.6218323 146.294388,21.6218323 Z"
                                id="icon-twitter"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <CopyToClipboard text="Regardless of discipline, industry, or company revenue, over 90% agree that CX is a primary focus.  via Chattermill">
                  <a
                    className="stat-clipboard-icon"
                    onClick={handleShare.shareClip}
                  >
                    <svg
                      width="18px"
                      height="20px"
                      viewBox="0 0 18 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>icon-copy</title>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Customer-Experience-Statistics---V1"
                          transform="translate(-390.000000, -1083.000000)"
                          fill="#10C2ED"
                          fillRule="nonzero"
                        >
                          <g
                            id="Group-26"
                            transform="translate(250.000000, 448.000000)"
                          >
                            <g
                              id="Group-24"
                              transform="translate(0.000000, 419.500000)"
                            >
                              <g
                                id="Group"
                                transform="translate(30.000000, 212.000000)"
                              >
                                <path
                                  d="M120.624975,23.499994 C121.66051,23.499994 122.49997,22.6605338 122.49997,21.6249985 L122.49997,19.750003 L125.624963,19.750003 C126.660498,19.750003 127.499958,18.9105427 127.499958,17.8750075 L127.499958,7.40166664 C127.499958,6.97297198 127.253911,6.37898689 126.950796,6.07587176 L124.924128,4.04920423 C124.621013,3.74608911 124.027028,3.50004172 123.598333,3.50004172 L116.874984,3.50004172 C115.839448,3.50004172 114.999988,4.339502 114.999988,5.37503725 L114.999988,7.25003278 L111.874996,7.25003278 C110.83946,7.25003278 110,8.08949306 110,9.12502831 L110,21.6249985 C110,22.6605338 110.83946,23.499994 111.874996,23.499994 L120.624975,23.499994 Z M125.390588,17.8750075 L117.109358,17.8750075 C116.980002,17.8750075 116.874984,17.7699891 116.874984,17.640633 L116.874984,5.60941169 C116.874984,5.48005562 116.980002,5.37503725 117.109358,5.37503725 L121.249973,5.37503725 L121.249973,8.81252906 C121.249973,9.33029668 121.669703,9.75002682 122.187471,9.75002682 L125.624963,9.75002682 L125.624963,17.640633 C125.624963,17.7699891 125.519944,17.8750075 125.390588,17.8750075 Z M125.624969,7.87503725 L123.124969,7.87503725 L123.124969,5.37503725 L123.501211,5.37503725 C123.563353,5.37503725 123.622976,5.39971829 123.66696,5.44366349 L125.556337,7.3330404 C125.58159,7.35829363 125.603673,7.39970419 125.615589,7.44038572 L125.624969,7.4987886 L125.624969,7.87503725 Z M120.3906,21.6249985 L112.10937,21.6249985 C111.980014,21.6249985 111.874996,21.5199801 111.874996,21.3906241 L111.874996,9.35940275 C111.874996,9.23004668 111.980014,9.12502831 112.10937,9.12502831 L114.999988,9.12502831 L114.999988,17.8750075 C114.999988,18.9105427 115.839448,19.750003 116.874984,19.750003 L120.624975,19.750003 L120.624975,21.3906241 C120.624975,21.5199801 120.519956,21.6249985 120.3906,21.6249985 Z"
                                  id="icon-copy"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </CopyToClipboard>
              </div>
            </div>
          </div>

          <div className="stat-block sg1-10">
            <p className="stat-block-copy">
              42% of organizations report that their
              <span className="bold-class">CMO drives CX strategy.</span>
            </p>
            <div className="bottom-info-container">
              <a
                className="stat-block-source"
                href="https://www.acquia.com/resources/e-book/deliver-cx-they-expect-customer-experience-trends-report"
                target="_blank"
              >
                Acquia
              </a>
              <div className="stat-share-container">
                <a
                  className="stat-twitter-icon"
                  onClick={handleShare.shareTweet}
                >
                  <svg
                    width="20px"
                    height="18px"
                    viewBox="0 0 20 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-twitter</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Customer-Experience-Statistics---V1"
                        transform="translate(-420.000000, -1084.000000)"
                        fill="#10C2ED"
                        fillRule="nonzero"
                      >
                        <g
                          id="Group-26"
                          transform="translate(250.000000, 448.000000)"
                        >
                          <g
                            id="Group-24"
                            transform="translate(0.000000, 419.500000)"
                          >
                            <g
                              id="Group"
                              transform="translate(30.000000, 212.000000)"
                            >
                              <path
                                d="M146.294388,21.6218323 C153.832479,21.6218323 157.956805,15.3781796 157.956805,9.9594532 C157.956805,9.78180317 157.956805,9.60407685 157.944102,9.42642682 C158.743585,8.84266509 159.441596,8.11932392 159.999876,7.30717681 C159.26387,7.62440628 158.464388,7.85286795 157.6395,7.94167389 C158.489717,7.43409149 159.136917,6.63460914 159.44152,5.68280629 C158.654664,6.15235626 157.766376,6.49499155 156.840017,6.67264158 C156.091232,5.87315923 155.025294,5.37824159 153.845067,5.37824159 C151.573535,5.37824159 149.746109,7.21833272 149.746109,9.47720032 C149.746109,9.79446794 149.784179,10.1116974 149.847618,10.4162621 C146.44667,10.2385739 143.41365,8.61424157 141.395909,6.12695044 C141.040532,6.73607985 140.837553,7.43405334 140.837553,8.1954651 C140.837553,9.61677976 141.560856,10.8731092 142.664903,11.6091532 C141.992373,11.5838237 141.3578,11.3934708 140.812147,11.0889061 L140.812147,11.1396414 C140.812147,13.1320149 142.220797,14.781715 144.098959,15.162459 C143.756362,15.2512649 143.38832,15.3020384 143.020318,15.3020384 C142.753785,15.3020384 142.5,15.2766708 142.246165,15.2386002 C142.766488,16.8629707 144.276647,18.0431589 146.078667,18.0812676 C144.670018,19.1853147 142.906029,19.8325147 140.989835,19.8325147 C140.6472,19.8325147 140.329971,19.8198118 140,19.7817793 C141.814723,20.9492265 143.972044,21.6218323 146.294388,21.6218323 Z"
                                id="icon-twitter"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <CopyToClipboard text="42% of organizations report that their CMO drives CX strategy. via Chattermill">
                  <a
                    className="stat-clipboard-icon"
                    onClick={handleShare.shareClip}
                  >
                    <svg
                      width="18px"
                      height="20px"
                      viewBox="0 0 18 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>icon-copy</title>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Customer-Experience-Statistics---V1"
                          transform="translate(-390.000000, -1083.000000)"
                          fill="#10C2ED"
                          fillRule="nonzero"
                        >
                          <g
                            id="Group-26"
                            transform="translate(250.000000, 448.000000)"
                          >
                            <g
                              id="Group-24"
                              transform="translate(0.000000, 419.500000)"
                            >
                              <g
                                id="Group"
                                transform="translate(30.000000, 212.000000)"
                              >
                                <path
                                  d="M120.624975,23.499994 C121.66051,23.499994 122.49997,22.6605338 122.49997,21.6249985 L122.49997,19.750003 L125.624963,19.750003 C126.660498,19.750003 127.499958,18.9105427 127.499958,17.8750075 L127.499958,7.40166664 C127.499958,6.97297198 127.253911,6.37898689 126.950796,6.07587176 L124.924128,4.04920423 C124.621013,3.74608911 124.027028,3.50004172 123.598333,3.50004172 L116.874984,3.50004172 C115.839448,3.50004172 114.999988,4.339502 114.999988,5.37503725 L114.999988,7.25003278 L111.874996,7.25003278 C110.83946,7.25003278 110,8.08949306 110,9.12502831 L110,21.6249985 C110,22.6605338 110.83946,23.499994 111.874996,23.499994 L120.624975,23.499994 Z M125.390588,17.8750075 L117.109358,17.8750075 C116.980002,17.8750075 116.874984,17.7699891 116.874984,17.640633 L116.874984,5.60941169 C116.874984,5.48005562 116.980002,5.37503725 117.109358,5.37503725 L121.249973,5.37503725 L121.249973,8.81252906 C121.249973,9.33029668 121.669703,9.75002682 122.187471,9.75002682 L125.624963,9.75002682 L125.624963,17.640633 C125.624963,17.7699891 125.519944,17.8750075 125.390588,17.8750075 Z M125.624969,7.87503725 L123.124969,7.87503725 L123.124969,5.37503725 L123.501211,5.37503725 C123.563353,5.37503725 123.622976,5.39971829 123.66696,5.44366349 L125.556337,7.3330404 C125.58159,7.35829363 125.603673,7.39970419 125.615589,7.44038572 L125.624969,7.4987886 L125.624969,7.87503725 Z M120.3906,21.6249985 L112.10937,21.6249985 C111.980014,21.6249985 111.874996,21.5199801 111.874996,21.3906241 L111.874996,9.35940275 C111.874996,9.23004668 111.980014,9.12502831 112.10937,9.12502831 L114.999988,9.12502831 L114.999988,17.8750075 C114.999988,18.9105427 115.839448,19.750003 116.874984,19.750003 L120.624975,19.750003 L120.624975,21.3906241 C120.624975,21.5199801 120.519956,21.6249985 120.3906,21.6249985 Z"
                                  id="icon-copy"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </CopyToClipboard>
              </div>
            </div>
          </div>

          <div className="stat-block sg1-11">
            <p className="stat-block-copy">
              60% of marketers are concerned that they are at a{" "}
              <span className="bold-class">competitive disadvantage</span> due
              to CX.
            </p>
            <GatsbyImage
              image={getImage(statImg3)}
              alt="Two happy faces and a sad face"
            />
            <div className="bottom-info-container">
              <a
                className="stat-block-source"
                href="https://www.oracle.com/a/ocom/docs/dc/em/oracle_globalcxreport2019redwood8web.pdf?elqTrackId=78cfbb888f0c473ab9ebd021cbd337c6&elqaid=84258&elqat=2"
                target="_blank"
              >
                Oracle
              </a>
              <div className="stat-share-container">
                <a
                  className="stat-twitter-icon"
                  onClick={handleShare.shareTweet}
                >
                  <svg
                    width="20px"
                    height="18px"
                    viewBox="0 0 20 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-twitter</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Customer-Experience-Statistics---V1"
                        transform="translate(-420.000000, -1084.000000)"
                        fill="#10C2ED"
                        fillRule="nonzero"
                      >
                        <g
                          id="Group-26"
                          transform="translate(250.000000, 448.000000)"
                        >
                          <g
                            id="Group-24"
                            transform="translate(0.000000, 419.500000)"
                          >
                            <g
                              id="Group"
                              transform="translate(30.000000, 212.000000)"
                            >
                              <path
                                d="M146.294388,21.6218323 C153.832479,21.6218323 157.956805,15.3781796 157.956805,9.9594532 C157.956805,9.78180317 157.956805,9.60407685 157.944102,9.42642682 C158.743585,8.84266509 159.441596,8.11932392 159.999876,7.30717681 C159.26387,7.62440628 158.464388,7.85286795 157.6395,7.94167389 C158.489717,7.43409149 159.136917,6.63460914 159.44152,5.68280629 C158.654664,6.15235626 157.766376,6.49499155 156.840017,6.67264158 C156.091232,5.87315923 155.025294,5.37824159 153.845067,5.37824159 C151.573535,5.37824159 149.746109,7.21833272 149.746109,9.47720032 C149.746109,9.79446794 149.784179,10.1116974 149.847618,10.4162621 C146.44667,10.2385739 143.41365,8.61424157 141.395909,6.12695044 C141.040532,6.73607985 140.837553,7.43405334 140.837553,8.1954651 C140.837553,9.61677976 141.560856,10.8731092 142.664903,11.6091532 C141.992373,11.5838237 141.3578,11.3934708 140.812147,11.0889061 L140.812147,11.1396414 C140.812147,13.1320149 142.220797,14.781715 144.098959,15.162459 C143.756362,15.2512649 143.38832,15.3020384 143.020318,15.3020384 C142.753785,15.3020384 142.5,15.2766708 142.246165,15.2386002 C142.766488,16.8629707 144.276647,18.0431589 146.078667,18.0812676 C144.670018,19.1853147 142.906029,19.8325147 140.989835,19.8325147 C140.6472,19.8325147 140.329971,19.8198118 140,19.7817793 C141.814723,20.9492265 143.972044,21.6218323 146.294388,21.6218323 Z"
                                id="icon-twitter"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <CopyToClipboard text="60% of marketers are concerned that they are at a competitive disadvantage due to CX. via Chattermill">
                  <a
                    className="stat-clipboard-icon"
                    onClick={handleShare.shareClip}
                  >
                    <svg
                      width="18px"
                      height="20px"
                      viewBox="0 0 18 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>icon-copy</title>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Customer-Experience-Statistics---V1"
                          transform="translate(-390.000000, -1083.000000)"
                          fill="#10C2ED"
                          fillRule="nonzero"
                        >
                          <g
                            id="Group-26"
                            transform="translate(250.000000, 448.000000)"
                          >
                            <g
                              id="Group-24"
                              transform="translate(0.000000, 419.500000)"
                            >
                              <g
                                id="Group"
                                transform="translate(30.000000, 212.000000)"
                              >
                                <path
                                  d="M120.624975,23.499994 C121.66051,23.499994 122.49997,22.6605338 122.49997,21.6249985 L122.49997,19.750003 L125.624963,19.750003 C126.660498,19.750003 127.499958,18.9105427 127.499958,17.8750075 L127.499958,7.40166664 C127.499958,6.97297198 127.253911,6.37898689 126.950796,6.07587176 L124.924128,4.04920423 C124.621013,3.74608911 124.027028,3.50004172 123.598333,3.50004172 L116.874984,3.50004172 C115.839448,3.50004172 114.999988,4.339502 114.999988,5.37503725 L114.999988,7.25003278 L111.874996,7.25003278 C110.83946,7.25003278 110,8.08949306 110,9.12502831 L110,21.6249985 C110,22.6605338 110.83946,23.499994 111.874996,23.499994 L120.624975,23.499994 Z M125.390588,17.8750075 L117.109358,17.8750075 C116.980002,17.8750075 116.874984,17.7699891 116.874984,17.640633 L116.874984,5.60941169 C116.874984,5.48005562 116.980002,5.37503725 117.109358,5.37503725 L121.249973,5.37503725 L121.249973,8.81252906 C121.249973,9.33029668 121.669703,9.75002682 122.187471,9.75002682 L125.624963,9.75002682 L125.624963,17.640633 C125.624963,17.7699891 125.519944,17.8750075 125.390588,17.8750075 Z M125.624969,7.87503725 L123.124969,7.87503725 L123.124969,5.37503725 L123.501211,5.37503725 C123.563353,5.37503725 123.622976,5.39971829 123.66696,5.44366349 L125.556337,7.3330404 C125.58159,7.35829363 125.603673,7.39970419 125.615589,7.44038572 L125.624969,7.4987886 L125.624969,7.87503725 Z M120.3906,21.6249985 L112.10937,21.6249985 C111.980014,21.6249985 111.874996,21.5199801 111.874996,21.3906241 L111.874996,9.35940275 C111.874996,9.23004668 111.980014,9.12502831 112.10937,9.12502831 L114.999988,9.12502831 L114.999988,17.8750075 C114.999988,18.9105427 115.839448,19.750003 116.874984,19.750003 L120.624975,19.750003 L120.624975,21.3906241 C120.624975,21.5199801 120.519956,21.6249985 120.3906,21.6249985 Z"
                                  id="icon-copy"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </CopyToClipboard>
              </div>
            </div>
          </div>

          <div className="stat-block sg1-12">
            <p className="stat-block-copy">
              45% of businesses manage CX through their{" "}
              <span className="bold-class">customer service team</span>, while
              30% have <span className="bold-class">marketing</span> manage
              customer experience.
            </p>
            <div className="bottom-info-container">
              <a
                className="stat-block-source"
                href="https://genbin.genesys.com/media/Genesys-CX-Report-FINAL_06112018.pdf"
                target="_blank"
              >
                Genesys
              </a>
              <div className="stat-share-container">
                <a
                  className="stat-twitter-icon"
                  onClick={handleShare.shareTweet}
                >
                  <svg
                    width="20px"
                    height="18px"
                    viewBox="0 0 20 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>icon-twitter</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Customer-Experience-Statistics---V1"
                        transform="translate(-420.000000, -1084.000000)"
                        fill="#10C2ED"
                        fillRule="nonzero"
                      >
                        <g
                          id="Group-26"
                          transform="translate(250.000000, 448.000000)"
                        >
                          <g
                            id="Group-24"
                            transform="translate(0.000000, 419.500000)"
                          >
                            <g
                              id="Group"
                              transform="translate(30.000000, 212.000000)"
                            >
                              <path
                                d="M146.294388,21.6218323 C153.832479,21.6218323 157.956805,15.3781796 157.956805,9.9594532 C157.956805,9.78180317 157.956805,9.60407685 157.944102,9.42642682 C158.743585,8.84266509 159.441596,8.11932392 159.999876,7.30717681 C159.26387,7.62440628 158.464388,7.85286795 157.6395,7.94167389 C158.489717,7.43409149 159.136917,6.63460914 159.44152,5.68280629 C158.654664,6.15235626 157.766376,6.49499155 156.840017,6.67264158 C156.091232,5.87315923 155.025294,5.37824159 153.845067,5.37824159 C151.573535,5.37824159 149.746109,7.21833272 149.746109,9.47720032 C149.746109,9.79446794 149.784179,10.1116974 149.847618,10.4162621 C146.44667,10.2385739 143.41365,8.61424157 141.395909,6.12695044 C141.040532,6.73607985 140.837553,7.43405334 140.837553,8.1954651 C140.837553,9.61677976 141.560856,10.8731092 142.664903,11.6091532 C141.992373,11.5838237 141.3578,11.3934708 140.812147,11.0889061 L140.812147,11.1396414 C140.812147,13.1320149 142.220797,14.781715 144.098959,15.162459 C143.756362,15.2512649 143.38832,15.3020384 143.020318,15.3020384 C142.753785,15.3020384 142.5,15.2766708 142.246165,15.2386002 C142.766488,16.8629707 144.276647,18.0431589 146.078667,18.0812676 C144.670018,19.1853147 142.906029,19.8325147 140.989835,19.8325147 C140.6472,19.8325147 140.329971,19.8198118 140,19.7817793 C141.814723,20.9492265 143.972044,21.6218323 146.294388,21.6218323 Z"
                                id="icon-twitter"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <CopyToClipboard text="45% of businesses manage CX through their customer service team, while 30% have marketing manage customer experience. via Chattermill">
                  <a
                    className="stat-clipboard-icon"
                    onClick={handleShare.shareClip}
                  >
                    <svg
                      width="18px"
                      height="20px"
                      viewBox="0 0 18 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>icon-copy</title>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Customer-Experience-Statistics---V1"
                          transform="translate(-390.000000, -1083.000000)"
                          fill="#10C2ED"
                          fillRule="nonzero"
                        >
                          <g
                            id="Group-26"
                            transform="translate(250.000000, 448.000000)"
                          >
                            <g
                              id="Group-24"
                              transform="translate(0.000000, 419.500000)"
                            >
                              <g
                                id="Group"
                                transform="translate(30.000000, 212.000000)"
                              >
                                <path
                                  d="M120.624975,23.499994 C121.66051,23.499994 122.49997,22.6605338 122.49997,21.6249985 L122.49997,19.750003 L125.624963,19.750003 C126.660498,19.750003 127.499958,18.9105427 127.499958,17.8750075 L127.499958,7.40166664 C127.499958,6.97297198 127.253911,6.37898689 126.950796,6.07587176 L124.924128,4.04920423 C124.621013,3.74608911 124.027028,3.50004172 123.598333,3.50004172 L116.874984,3.50004172 C115.839448,3.50004172 114.999988,4.339502 114.999988,5.37503725 L114.999988,7.25003278 L111.874996,7.25003278 C110.83946,7.25003278 110,8.08949306 110,9.12502831 L110,21.6249985 C110,22.6605338 110.83946,23.499994 111.874996,23.499994 L120.624975,23.499994 Z M125.390588,17.8750075 L117.109358,17.8750075 C116.980002,17.8750075 116.874984,17.7699891 116.874984,17.640633 L116.874984,5.60941169 C116.874984,5.48005562 116.980002,5.37503725 117.109358,5.37503725 L121.249973,5.37503725 L121.249973,8.81252906 C121.249973,9.33029668 121.669703,9.75002682 122.187471,9.75002682 L125.624963,9.75002682 L125.624963,17.640633 C125.624963,17.7699891 125.519944,17.8750075 125.390588,17.8750075 Z M125.624969,7.87503725 L123.124969,7.87503725 L123.124969,5.37503725 L123.501211,5.37503725 C123.563353,5.37503725 123.622976,5.39971829 123.66696,5.44366349 L125.556337,7.3330404 C125.58159,7.35829363 125.603673,7.39970419 125.615589,7.44038572 L125.624969,7.4987886 L125.624969,7.87503725 Z M120.3906,21.6249985 L112.10937,21.6249985 C111.980014,21.6249985 111.874996,21.5199801 111.874996,21.3906241 L111.874996,9.35940275 C111.874996,9.23004668 111.980014,9.12502831 112.10937,9.12502831 L114.999988,9.12502831 L114.999988,17.8750075 C114.999988,18.9105427 115.839448,19.750003 116.874984,19.750003 L120.624975,19.750003 L120.624975,21.3906241 C120.624975,21.5199801 120.519956,21.6249985 120.3906,21.6249985 Z"
                                  id="icon-copy"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1
