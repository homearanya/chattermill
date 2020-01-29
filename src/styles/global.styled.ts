import { createGlobalStyle } from "styled-components"

import { $colorSecondary } from "./variables"

import EuclidSquareLightWOFF from "./fonts/EuclidSquare-Light.woff"
import EuclidSquareLightWOFF2 from "./fonts/EuclidSquare-Light.woff2"

import EuclidSquareRegularWOFF from "./fonts/EuclidSquare-Regular.woff"
import EuclidSquareRegularWOFF2 from "./fonts/EuclidSquare-Regular.woff2"

import EuclidSquareBoldWOFF from "./fonts/EuclidSquare-Bold.woff"
import EuclidSquareBoldWOFF2 from "./fonts/EuclidSquare-Bold.woff2"

import RaisonneDemiBoldWOFF from "./fonts/Raisonne-DemiBold.woff"
import RaisonneDemiBoldWOFF2 from "./fonts/Raisonne-DemiBold.woff2"

export default createGlobalStyle`
@font-face {
    font-family: 'Euclid Square';
    font-display: swap;
    src: url(${EuclidSquareLightWOFF2}) format('woff2'),
        url(${EuclidSquareLightWOFF}) format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Euclid Square';
    font-display: swap;
    src: url(${EuclidSquareRegularWOFF2}) format('woff2'),
        url(${EuclidSquareRegularWOFF}) format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Euclid Square';
    font-display: swap;
    src: url(${EuclidSquareBoldWOFF2}) format('woff2'),
        url(${EuclidSquareBoldWOFF}) format('woff');

    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Raisonne';
    font-display: swap;
    src: url(${RaisonneDemiBoldWOFF2}) format('woff2'),
        url(${RaisonneDemiBoldWOFF}) format('woff');
    font-weight: 600;
    font-style: normal;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    /* 16px is usually the browser's default font-size
        10px/16px = 62.5%  ---> 1rem = 10px*/
    font-size: 62.5%;
}

body {
    font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: ${$colorSecondary};
}

.active {
  color: #332e5e;
  border-bottom: 3px solid #10c2ed;
}

`
