import styled from "styled-components"

export const StyledWrapper = styled.div`
  /* GENERAL TWEAKS, INTRO SECTION & TOC */
  html {
    font-size: 10px;
  }

  * {
    box-sizing: border-box;
    font-family: "Euclid Square", sans-serif;
    color: #332e5e;
    scroll-behavior: smooth;
  }

  .App {
    font-family: "Euclid Square", sans-serif;
  }
  .bold-class {
    font-weight: bold;
  }

  h3,
  p {
    margin: 1em 0;
  }

  h2 {
    margin: 0.83em 0;
  }

  .header-h1 {
    font-size: 36px;
    font-weight: normal;
    padding-bottom: 10px;
    border-bottom: 1px solid #c1c0ce;
  }

  .header,
  .intro-copy,
  .text-toc,
  .body-copy,
  .outro-copy {
    width: 100%;
    max-width: 940px;
    display: block;
    margin: 54px auto 0 auto;
  }

  .header img,
  .body-copy img {
    width: 100%;
  }

  .header,
  .intro-copy,
  .text-toc,
  .body-copy,
  .outro-copy {
    width: 100%;
    max-width: 780px;
  }

  .intro-copy,
  .body-copy,
  .outro-copy {
    font-size: 21px;
    line-height: 1.57;
  }

  svg {
    pointer-events: none;
  }

  a {
    cursor: pointer;
  }

  .text-toc {
    margin-top: 80px;
    margin-bottom: 80px;
    border-top: 2px solid grey;
    border-bottom: 2px solid grey;
    padding: 4rem;
  }

  .text-toc li {
    font-size: 2.1rem;
    line-height: 3.3rem;
    color: #10c2ed;
  }
  .text-toc li a {
    text-decoration: none;
    color: #10c2ed;
  }
  .text-toc li a:hover,
  .text-toc li a:focus {
    text-decoration: underline;
  }
  .toc-title {
    font-weight: bold;
    font-size: 2.6rem;
    line-height: 3.3rem;
  }

  .text-toc ol {
    padding-left: 0;
    list-style-position: inside;
  }

  #methods {
    margin-top: 7rem;
  }
  .outro-copy img {
    width: 100%;
  }

  @media (max-width: 940px) {
    .section-wrapper,
    .intro-copy {
      padding: 0 30px 0 30px;
    }

    h1,
    .outro-copy img,
    .outro-copy p {
      padding: 0 20px 10px;
      text-align: center;
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

  .sa-type-wrapper {
    margin-top: 7rem;
  }
  .sa-type-wrapper img {
    max-width: 150px;
    margin: 0 auto;
    display: block;
  }
  .sa-text-wrapper p {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    .sa-type-wrapper {
      display: flex;
    }
    .sa-type-wrapper img {
      margin-right: 4rem;
    }
    .sa-type-wrapper h3 {
      margin-top: 0;
    }
  }

  /* Use Cases */
  .sa-use-case-wrapper {
    background-color: #f7f8fc;
    padding: 5rem 4rem 4rem;
    border-radius: 5px;
  }
  .sa-use-case-header.main-header {
    font-size: 120%;
    margin-top: 0;
  }
  .sa-use-case-header {
    color: #332e5e;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 3.3rem;
    margin-bottom: 0;
  }
  .sa-use-case-title {
    color: #10c2ed;
    margin-bottom: 0;
    font-size: 4.8rem;
    line-height: 3.8rem;
    margin-top: 3rem;
  }
  .sa-use-case-tagline {
    margin-top: 1.4rem;
    font-size: 2.1rem;
    line-height: 3.3rem;
  }

  hr {
    margin-top: 4rem;
    margin-bottom: 4rem;
    height: 1px;
    width: 100%;
    background-color: #979797;
  }

  .sa-use-case-header + p {
    margin-top: 0.8rem;
  }

  .sa-use-case-wrapper p:last-of-type {
    margin-bottom: 0;
  }
`
