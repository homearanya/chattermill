import styled from "styled-components"
import arrowIcon from "./imgs/icon-arrow-down.svg"

interface StyledWrapperProps {
  backgroundImage: string
}
export const StyledWrapper = styled.div<StyledWrapperProps>`
  /* @font-face {
    font-family: "Euclid Square";
    font-weight: 400;
    src: local("Euclid Square"),
      url(./fonts/EuclidSquare-Regular.woff2) format("woff2");
  }

  @font-face {
    font-family: "Euclid Square";
    font-weight: 700;
    src: local("Euclid Square"),
      url(./fonts/EuclidSquare-Bold.woff2) format("woff2");
  } */

  * {
    box-sizing: border-box;
    font-family: "Euclid Square", sans-serif;
    color: #332e5e;
    scroll-behavior: smooth;
  }

  body {
    font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: rgb(51, 46, 94);
  }

  .App {
    font-family: "Euclid Square", sans-serif;
  }

  .sample-size-calculator {
    width: 702px;
    max-width: 100%;
    padding: 80px 40px 110px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 0 11px 2px rgba(0, 0, 0, 0.27);
    margin: 30px auto;
    text-align: center;
  }

  .sample-size-calculator h1 {
    margin: 0 auto 40px;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.25;
  }

  .sample-size-calculator > div {
    margin-top: 40px;
    margin-bottom: 30px;
  }

  .sample-size-calculator p {
    width: 470px;
    max-width: 100%;
    font-size: 16px;
    line-height: 1.25;
    margin: auto;
  }

  .sample-size-calculator #idealSampleSizeSection p {
    font-size: 25px;
    font-weight: 700;
    line-height: 1.25;
  }

  .sample-size-calculator #idealSampleSizeSection p.ideal-sample-size {
    font-size: 54px;
    margin-top: 10px;
    color: #10c2ed;
  }

  .sample-size-calculator label {
    font-size: 20px;
    line-height: 1.25;
    margin-top: 15px;
    position: relative;
    display: block;
    margin-bottom: 15px;
  }
  .sample-size-calculator label span {
    color: #fff;
    display: inline-flex;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 600;
    position: relative;
    top: 1px;
    left: 1px;
  }

  .sample-size-calculator label > span span {
    position: absolute;
    width: 246px;
    display: flex;
    align-items: center;
    background-color: #332e5e;
    color: #fff;
    left: 35px;
    bottom: 0;
    top: 0;
    margin: auto;
    height: auto;
    min-height: 92px;
    font-size: 12px;
    line-height: 1.25;
    text-align: left;
    border-radius: 4px;
    padding: 12.5px 20px;
    opacity: 0;
    z-index: -1;
  }
  .sample-size-calculator label > span span::before {
    content: "";
    position: absolute;
    border-top: 10px solid transparent;
    border-right: 12.5px solid #332e5e;
    border-bottom: 10px solid transparent;
    left: -12px;
  }

  @media (max-width: 720px) {
    .sample-size-calculator label > span span {
      left: -116px;
      bottom: auto;
      top: -110px;
    }

    .sample-size-calculator label > span span::before {
      content: "";
      position: absolute;
      border-left: 10px solid transparent;
      border-top: 12.5px solid #332e5e;
      border-right: 10px solid transparent;
      left: auto;
      right: auto;
      bottom: -20px;
    }
  }

  .sample-size-calculator label > span:hover span,
  .sample-size-calculator label > span:focus-within span {
    opacity: 1;
    z-index: 10;
  }

  .sample-size-calculator input#populationSize,
  .sample-size-calculator select#errorMargin {
    width: 119px;
    max-width: 100%;
    min-height: 40px;
    text-align: center;
    font-size: 18px;
    padding: 10px;
    border: none;
    border: 1px solid #10c2ed;
    outline: 0;
    -webkit-appearance: none;
  }

  .sample-size-calculator #errorMargin {
    background-image: url(${arrowIcon});
    background-size: 14px 9px;
    background-repeat: no-repeat;
    background-position: 90% 50%;
  }

  #confidenceLevelSection > div > button {
    display: inline-flex;
    font-size: 18px;
    background-color: transparent;
    border: 1.5px solid #10c2ed;
    margin: 0 7.5px;
    padding: 10px 15px;
    border-radius: 7px;
    cursor: pointer;
  }

  #confidenceLevelSection > div > button:hover,
  #confidenceLevelSection > div > button:focus {
    outline: 0;
  }

  #confidenceLevelSection > div > button.active,
  #confidenceLevelSection > div > button:hover,
  #confidenceLevelSection > div > button:focus-within {
    background-color: #10c2ed;
    color: #fff;
  }
`
