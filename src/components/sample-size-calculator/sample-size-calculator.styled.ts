import styled from "styled-components"

export const StyledWrapper = styled.div`
  /* GENERAL TWEAKS, INTRO SECTION & TOC */

  .bold-class {
    font-weight: bold;
  }

  .header-h1 {
    font-size: 36px;
    font-weight: normal;
    padding-bottom: 10px;
    border-bottom: 1px solid #c1c0ce;
    text-align: center;
  }

  .header,
  .intro-copy,
  .ces-toc,
  .outro-copy,
  .app-section {
    width: 100%;
    max-width: 940px;
    display: block;
    margin: 54px auto 0 auto;
  }

  .app-section {
    padding: 0 1rem;
  }

  .header img {
    width: 100%;
  }

  .header,
  .intro-copy,
  .outro-copy {
    width: 100%;
    max-width: 780px;
  }

  p,
  li,
  .intro-copy,
  .outro-copy {
    font-size: 21px;
    line-height: 1.57;
  }
  ul {
    padding-left: 40px;
    margin-bottom: 2rem;
  }

  svg {
    pointer-events: none;
  }

  a {
    cursor: pointer;
  }

  p:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .blue {
    color: #0000ff;
  }
  .orange {
    color: #ff9900;
  }

  .ces-toc {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 80px;
  }

  .toc-single {
    position: relative;
    height: 195px;
    width: 220px;
    background-color: #f7f8fc;
    padding: 62px 20px 47px 20px;
    transition: 0.3s ease;
    margin: 20px;
  }

  .toc-single img {
    position: absolute;
    top: -20px;
    height: 45px;
  }

  .ces-toc a {
    text-decoration: none;
  }

  .ces-toc a:hover .toc-single {
    background-color: #dfecfd;
    transition: 0.3s ease;
  }

  .ces-toc-number {
    margin-top: 10px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1.3px;
    line-height: 0;
    color: #10c2ed;
    margin-bottom: 14px;
  }

  .ces-toc-name {
    margin: 0;
    font-size: 24px;
    line-height: 1.25;
  }

  .section-wrapper img,
  .outro-copy img {
    width: 100%;
  }

  img {
    margin: 40px 0;
  }

  .gatsby-image-wrapper {
    overflow: visible !important;
    margin: 40px 0;
  }

  .gatsby-image-wrapper img {
    margin: 0;
  }

  @media (max-width: 940px) {
    .section-wrapper,
    .intro-copy {
      padding: 0 30px 0 30px;
    }

    .ces-toc {
      justify-content: space-evenly;
    }

    .toc-single {
      margin-bottom: 45px;
    }

    h1,
    .outro-copy img,
    .outro-copy p {
      padding: 0 20px 10px;
      text-align: center;
    }
  }

  @media (max-width: 725px) {
    .ces-toc {
      margin-bottom: 50px;
    }
  }

  .end-cta {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 1440px;
    margin: 150px auto 50px auto;
    min-height: 434px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .end-cta p {
    font-size: 40px;
    font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    text-align: center;
    max-width: 583px;
    line-height: 55px;
    transition: all 1s ease 0s;
    opacity: 1;
    transform: translateX(0px);
  }

  .end-cta button {
    width: 200px;
    height: 40px;
    padding: 2.25px;
    border-radius: 2px;
    border: 1px solid rgb(45, 127, 249);
    font-size: 20px;
    background-color: rgb(45, 127, 249);
    color: rgb(255, 255, 255);
    cursor: pointer;
    margin: 15px;
    position: relative;
    z-index: 4;
  }

  .end-cta button a {
    color: rgb(255, 255, 255);
    text-decoration: none;
  }

  .end-cta button:hover,
  .end-cta button:focus {
    background-color: #96bffc;
    border: 1px solid #96bffc;
  }

  .end-cta .svg-top {
    position: absolute;
    fill: #10c2ed;
    transform: rotate(50deg);
    top: -340px;
    left: -520px;
  }

  .end-cta .svg-bottom {
    position: absolute;
    fill: #10c2ed;
    transform: rotate(210deg);
    bottom: -300px;
    right: -380px;
  }

  /* All Sections */

  /* BACKGROUND */
  #bg1 {
    background: linear-gradient(175deg, white 47%, #dfecfd 47%);
    height: 220px;
    width: 100%;
  }

  #bg2 {
    background: linear-gradient(-175deg, #dfecfd 47%, white 47%);
    height: 220px;
    width: 100%;
  }

  #section1,
  #section2,
  #section5 {
    background-color: #dfecfd;
  }

  #section2 {
    padding-top: 120px;
    width: 100%;
  }
  #section3 {
    background-color: white;
  }

  .header-circle {
    position: absolute !important;
    background-color: #90b1dd1f;
    border-radius: 50%;
    width: 600px;
    height: 600px !important;
    bottom: -90%;
    right: -80px;
    z-index: 1;
  }

  @media (max-width: 600px) {
    .header-circle {
      width: 300px;
      height: 300px !important;
      bottom: -90%;
      right: -80px;
    }
  }

  /* HEADERS */
  .section-header {
    width: 100%;
    max-width: 940px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .section-header div {
    height: 323px;
    position: relative;
  }

  .section-header-text-container {
    width: 100%;
  }

  .section-header-img-container {
    width: 55%;
  }

  .section-header-img-container img {
    width: 100%;
    position: absolute;
    right: -20px;
    top: -60px;
    z-index: 2;
  }

  .section-header-number {
    display: block;
    font-size: 20px;
    line-height: 1.25;
    font-weight: 600;
    letter-spacing: 2px;
    color: #10c2ed;
    margin: 0 0 10px 0;
  }

  .section-header-title {
    font-size: 50px;
    line-height: 1.26;
    font-weight: normal;
    letter-spacing: 0;
    margin: 0 0 40px 0;
  }

  h3.section-header-title {
    margin: 40px 0 40px 0;
    font-size: 40px;
  }

  /* GENERAL STAT GRIDS & BLOCKS */

  .section-wrapper {
    margin: 0px auto 0px auto;
    width: max-content;
    max-width: 940px;
  }

  .stats-grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 220px 220px 220px 220px;
    grid-auto-flow: row;
    justify-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }

  #section1 .stats-grid .stat-block,
  #section3 .stats-grid .stat-block,
  #section5 .stats-grid .stat-block {
    background-color: white;
    color: #291c45;
  }

  #section2 .stats-grid .stat-block,
  #section4 .stats-grid .stat-block,
  #section6 .stats-grid .stat-block {
    background-color: #dfecfd;
    color: #291c45;
  }

  .stat-block {
    position: relative;
    width: 100%;
    padding: 30px;
    padding-top: 30px;
    font-size: 18px;
    line-height: 1.5;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;
  }

  .stat-block.alt-light-blue {
    background-color: #10c2ed !important;
  }

  .alt-light-blue .stat-block-copy,
  .alt-light-blue .stat-block-source,
  .alt-light-blue .bold-class,
  .alt-dark-blue .stat-block-copy,
  .alt-dark-blue .stat-block-source,
  .alt-dark-blue .bold-class {
    color: white;
  }

  .stat-block.alt-light-blue svg path {
    fill: #291c45 !important;
  }

  .stat-block.alt-dark-blue {
    background-color: #291c45 !important;
  }

  .stat-block p {
    margin: 0;
  }

  .stat-block a:hover svg path {
    fill: #def200 !important;
  }

  .stat-img-wrapper {
    position: relative;
  }

  .stat-block img {
    display: block;
    width: 70%;
    margin: 0 auto 0 auto;
    position: relative;
    z-index: 2;
  }

  .stat-block-img-bg {
    position: absolute !important;
    background-color: #90b1dd1f;
    border-radius: 50%;
    width: 300px;
    height: 300px !important;
    left: 12%;
    top: 0;
    z-index: 1;
  }

  .bottom-info-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .stat-twitter-icon {
    margin-right: 8px;
  }

  @media (max-width: 940px) {
    .section-header {
      width: 100%;
      max-width: 100%;
      flex-direction: column;
      margin-left: 30px;
      margin-right: 30px;
    }

    .section-header div {
      height: max-content;
      margin-bottom: 40px;
    }

    .section-header-text-container,
    #section3 .section-header-text-container,
    #section4 .section-header-text-container {
      width: 100%;
    }

    .section-header-img-container,
    #section3 .section-header-img-container,
    #section4 .section-header-img-container {
      width: 100%;
      margin: 0 auto 50px auto;
      margin-bottom: 40px;
    }

    .section-wrapper {
      max-width: 100%;
    }

    .section-header-img-container img {
      width: 100%;
      position: relative;
      right: 0;
      top: 0;
    }

    .stats-grid {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .stat-block {
      width: 280px;
      height: max-content;
    }

    .stat-block p {
      margin-bottom: 20px;
    }

    .stat-block img {
      margin-top: 0px;
      margin-bottom: 20px;
    }

    .stat-block-img-bg,
    .header-circle {
      display: none;
    }
  }

  @media (max-width: 725px) {
    .section-header-title {
      font-size: 40px;
    }

    .section-wrapper {
      margin: 0px auto 0px auto;
    }

    .stats-grid {
      justify-content: space-evenly;
    }
  }

  /* Section 1 */

  .sg1 {
    grid-template-rows: 265px 265px 265px 265px;
  }

  .sg1-1 {
    grid-column: 1;
    grid-row: 1;
  }

  .sg1-2 {
    grid-column: 2;
    grid-row: 1;
  }

  .sg1-3 {
    grid-column: 3/5;
    grid-row: 1;
  }

  .sg1-4 {
    grid-column: 1/3;
    grid-row: 2;
  }

  .sg1-5 {
    grid-column: 3/5;
    grid-row: 2/4;
  }

  .sg1-6 {
    grid-column: 1/3;
    grid-row: 3;
  }

  .sg1-7 {
    grid-column: 1;
    grid-row: 4;
  }

  .sg1-8 {
    grid-column: 2;
    grid-row: 4;
  }

  .sg1-9 {
    grid-column: 3;
    grid-row: 4;
  }

  .sg1-10 {
    grid-column: 4;
    grid-row: 4;
  }

  /* Section 2 */

  .sg2 {
    grid-template-rows: 265px 265px 265px;
  }

  .sg2-1 {
    grid-column: 1/3;
    grid-row: 1/3;
  }

  .sg2-2 {
    grid-column: 3/5;
    grid-row: 1;
  }

  .sg2-3 {
    grid-column: 3/5;
    grid-row: 2;
  }

  .sg2-3 img {
    position: absolute;
    bottom: -9px;
    left: 28%;
    width: 50%;
  }

  @media (max-width: 940px) {
    .sg2-3 img {
      bottom: -26px;
    }
  }

  .sg2-4 {
    grid-column: 1/3;
    grid-row: 3;
  }

  .sg2-5 {
    grid-column: 3;
    grid-row: 3;
  }

  .sg2-6 {
    grid-column: 4;
    grid-row: 3;
  }

  .sg2-7 {
    grid-column: 1;
    grid-row: 4;
  }

  .sg2-8 {
    grid-column: 2;
    grid-row: 4;
  }

  .sg2-9 {
    grid-column: 3/5;
    grid-row: 4;
  }

  .sg2-9 img {
    width: 40%;
  }

  .sg2-10 {
    grid-column: 1/3;
    grid-row: 5;
  }

  .sg2-11 {
    grid-column: 3;
    grid-row: 5;
  }

  .sg2-12 {
    grid-column: 4;
    grid-row: 5;
  }

  /* Section 3 */

  .sg1 {
    grid-template-rows: 265px 265px 265px 265px;
  }

  .sg1-1 {
    grid-column: 1;
    grid-row: 1;
  }

  .sg1-2 {
    grid-column: 2;
    grid-row: 1;
  }

  .sg1-3 {
    grid-column: 3/5;
    grid-row: 1;
  }

  .sg1-4 {
    grid-column: 1/3;
    grid-row: 2;
  }

  .sg1-5 {
    grid-column: 3/5;
    grid-row: 2/4;
  }

  .sg1-6 {
    grid-column: 1/3;
    grid-row: 3;
  }

  .sg1-7 {
    grid-column: 1;
    grid-row: 4;
  }

  .sg1-8 {
    grid-column: 2;
    grid-row: 4;
  }

  .sg1-9 {
    grid-column: 3;
    grid-row: 4;
  }

  .sg1-10 {
    grid-column: 4;
    grid-row: 4;
  }
`
