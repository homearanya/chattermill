import styled, { css } from "styled-components"
import media from "../../styles/media"

const errorCss = css`
  position: absolute;
  right: 14px;
  top: 14px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 300;
  /* padding: 2px 10px; */
  color: red;

  ${media.lessThan("lg")`
      top: 5px;
  `};
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan("lg")`
      padding: 50px 0 ;
  `};
`
export const Form = styled.form`
  background-color: white;
  max-width: 458px;
  padding: 24px;
  box-sizing: border-box;
  color: var(--text);
  border-radius: 24px;
  box-shadow: 0px 42px 84px 5px #291c4526;

  h1 {
    font-family: "Raisonne", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    padding-left: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    width: 75%;
    margin: 0;
    margin-bottom: 32px;

    ${media.lessThan("md")`
      line-height: 39px;
      font-size: 30px;
    `};
  }

  button {
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    color: #291c45;
    background: #def200;
    border-radius: 16px;
    outline: none;
    border: none;
    width: 100%;
    padding: 22px 0;
    cursor: pointer;
    text-transform: uppercase;

    &.disabled {
      opacity: 0.2;
      pointer-events: none;
    }

    ${media.lessThan("lg")`
         font-size: 16px;
         padding: 12px 0;
         border-radius: 10px;
      `};
  }

  ${media.lessThan("md")`
      width: 90%;
      padding: 10px;
    `};
`

export const Fields = styled.div`
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  box-sizing: border-box;

  div {
    position: relative;
  }

  & > :last-child {
    grid-column: span 2;
  }

  input {
    border: 1px solid #dadce0;
    border-radius: 16px;
    padding: 24px;
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    line-height: 22px;

    &:focus {
      border-color: #10c2ed;
    }

    &:focus,
    &.filled {
      height: 100%;
      outline: none;
      padding: 14px 24px;
      padding-top: 34px;

      display: flex;
      align-items: flex-end;

      & ~ label {
        font-size: 14px;
        top: 14px;
        transform: none;
        ${media.lessThan("lg")`
         top: 5px;
          font-size: 12px;
      `};
      }
      ${media.lessThan("lg")`
       padding: 5px 24px;
       padding-top: 25px;
    `};
    }
    ${media.lessThan("lg")`
       padding: 15px;
        font-size: 14px;
    `};
  }
  label {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: rgba(13, 13, 13, 0.75);
    opacity: 0.5;
    transition: all 0.2s;

    position: absolute;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${media.lessThan("lg")`
       font-size: 14px;
    `};
  }
  span {
    ${errorCss}
  }
`

export const Agreement = styled.div`
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin: 23px 0;
  margin-bottom: 35px;

  display: flex;
  gap: 16px;
  align-items: center;

  label {
    position: relative;
    p {
      opacity: 0.5;
      margin: 0;
    }
    span {
      ${errorCss}
      top: 100%;
      left: 0;
      padding: 5px 0;
    }
  }
`

export const Checkbox = styled.div`
  user-select: none;

  input {
    margin: 0;
    width: 30px;
    height: 30px;
    opacity: 0;
    position: absolute;
    z-index: 2;
  }
  input:checked ~ .check {
    border-color: #10c2ed;
    box-shadow: 0px 0px 0px 15px #10c2ed inset;
  }
  input:checked ~ .check::after {
    opacity: 1;
    transform: scale(1);
  }
  .check {
    z-index: 1;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #dadce0;
    box-shadow: 0px 0px 0px 0px #10c2ed inset;
    transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);

    ${media.lessThan("lg")`
      width: 20px;
      height: 20px;
      border-radius: 4px;
    `};
  }
  .check::after {
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 4;
    position: absolute;
    transform: scale(0);
    background-size: 50%;
    background-image: url("https://webdevtrick.com/demos/checkmark.svg");
    background-repeat: no-repeat;
    background-position: center;
    transition-delay: 0.2s !important;
    transition: all 0.25s cubic-bezier(0, 1.05, 0.72, 1.07);
  }
`
