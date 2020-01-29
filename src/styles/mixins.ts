import { css, Keyframes } from "styled-components"

import { $white, $colorHeading, $colorPrimary } from "./variables"

export const boxShadow = `
  box-shadow: 0px 8px 24px rgba(28,10,54,0.12);
`
export const clearfix = css`
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`
export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const verticalCenter = css`
  margin: auto 0;
`

export const decorator = css`
  span {
    display: inline-block;
    position: relative;

    &.oval::before {
      content: "";
      height: 160%;
      width: 120%;
      ${absoluteCenter};
      transform: translate(-50%, -50%) rotate(-7deg);
      border: 3px solid ${$colorPrimary};
      border-radius: 50%;
      z-index: -1;
    }
    &.underline::before {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      top: 3px;
      left: 0;
      border-bottom: 3px solid ${$colorPrimary};
      z-index: -1;
    }
    &.highlight::before {
      content: "";
      height: 105%;
      width: 110%;
      ${absoluteCenter};
      background-color: #def200;
      z-index: -1;
    }
  }
`
export const centerTextBlock = css`
  max-width: 29rem;
  text-align: center;
  margin: 0 auto;
`

export function buttonStyles(
  inverted?: boolean,
  wide?: boolean,
  secondary?: boolean
) {
  return css`
    font-size: 1.4rem;
    line-height: 1;
    display: inline-block;
    background-color: ${inverted
      ? $white
      : secondary
      ? $colorHeading
      : $colorPrimary};
    color: ${inverted ? (secondary ? $colorHeading : $colorPrimary) : $white};
    text-decoration: none;
    text-align: center;
    border: 1px solid ${secondary ? $colorHeading : $colorPrimary};
    border-radius: 2.5rem;
    padding: ${wide ? "1.5rem 3rem" : "1.5rem 2.5rem"};
    transition: all 0.2s;
    /* Change for the <button> element */
    cursor: pointer;
    /* Webkit / Chrome Specific CSS to remove tap highlight color */
    -webkit-tap-highlight-color: transparent;
    /* Firefox Specific CSS to remove button differences and focus ring */
    background-image: none;
  `
}
export function buttonStylesHover(inverted?: boolean, secondary?: boolean) {
  return css`
    background-color: ${inverted
      ? secondary
        ? $colorHeading
        : $colorPrimary
      : $white};
    color: ${inverted ? $white : secondary ? $colorHeading : $colorPrimary};
  `
}

// FlexUnit
//  min, max in px
//
// At vw= 1349px
// amount px
// 6      81.96
// 8      109.28

export function toVM(x: number, y: number): number {
  return (x / y) * 100
}

export function flexUnit(
  amount: number,
  min: number,
  max: number,
  unit = "vw",
  prop = "font-size"
) {
  const minBreakpoint = (min / amount) * 100
  const maxBreakpoint = max ? (max / amount) * 100 : false
  const dimension = unit === "vw" ? "width" : "height"

  return `
    @media only screen and (max-${dimension}: ${minBreakpoint}px) {
      ${prop}: ${min}px !important;
    }

    ${
      max
        ? `
      @media only screen and (min-${dimension}: ${maxBreakpoint}px) {
        ${prop}: ${max}px !important;
      }
    `
        : ""
    }

    ${prop}: ${amount}${unit} !important
  `
}

// Animations

export function staggeredAnimation(
  animationName: Keyframes,
  animationDuration = 1,
  animationDelay = 0.2,
  animationDelayStep = 0.2,
  classNames: string[]
) {
  let delay = animationDelay
  return css`
    ${classNames.reduce((rules, className) => {
      delay += animationDelayStep
      return css`
           ${rules}
          .${className} {
            animation-name: ${animationName};
            animation-duration: ${animationDuration}s;
            animation-delay: ${delay}s;
            animation-fill-mode: both;
          }
        `
    }, css``)}
  `
}

export function animation(
  animationName: Keyframes,
  animationDuration = 1,
  animationDelay = 0
) {
  return css`
    animation-name: ${animationName};
    animation-duration: ${animationDuration}s;
    animation-delay: ${animationDelay}s;
    animation-fill-mode: both;
  `
}

// Transitions

export function transitionIntoView(
  withObserver: boolean | undefined,
  inView: boolean | undefined
) {
  return withObserver
    ? css`
        opacity: 0;
        transition: opacity 1s;

        ${inView &&
          css`
            opacity: 1;
          `}
      `
    : css``
}
export function transitionIntoViewLeft(
  withObserver: boolean | undefined,
  inView: boolean | undefined,
  delay = 0
) {
  return withObserver
    ? css`
        opacity: 0;
        transition-property: opacity, transform;
        transition-duration: 1s;
        transition-delay: ${delay}s;
        transform: translateX(-2rem);
        ${inView &&
          css`
            opacity: 1;
            transform: translateX(0);
          `}
      `
    : css``
}

export function transitionIntoViewTop(
  withObserver: boolean | undefined,
  inView: boolean | undefined,
  delay = 0
) {
  return withObserver
    ? css`
        opacity: 0;
        transition-property: opacity, transform;
        transition-duration: 1s;
        transition-delay: ${delay}s;
        transform: translateY(-2rem);
        ${inView &&
          css`
            opacity: 1;
            transform: translateY(0);
          `}
      `
    : css``
}
