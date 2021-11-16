import styled from "styled-components"
import { Container, Row, Col } from "react-awesome-styled-grid"
import Image from "../image"

import media from "../../styles/media"

import {
  $greyUltraLight,
  $colorSecondary,
  $colorPrimary,
  $white,
} from "../../styles/variables"
import { MediumHeading } from "../../styles/common.styled"

export const StyledSection = styled.section`
  padding: 9rem 0 0rem;
  ${media.lessThan("md")`
    padding: 5rem 0 0rem;
  `}
`
export const StyledContainer = styled(Container)`
  margin-bottom: 8rem;
`
export const StyledRow = styled(Row)`
  ${media.lessThan("md")`
    flex-direction: column-reverse;
    margin: 0 !important;
  `}
`
export const FormCol = styled(Col)`
  height: 100%;
`

export const FormWrapper = styled.div`
  margin: 0 auto;
  width: 100%;

  background-color: ${$white};
  border-color: ${$colorPrimary};
  border-radius: 2px;
  padding: 3.2rem 0 0;

  display: flex;
  flex-direction: column;

  ${media.lessThan("md")`
    max-width: 50rem;
  `}
  ${media.lessThan("sm")`
    padding: 3.2rem 0rem 0rem;
    width: 100%;
  `}
`

export const ImageCol = styled(Col)`
  height: 100%;
  width: 100%;
`
export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-left: 5rem;
  ${media.lessThan("md")`
    padding-left: 0rem;
    margin-bottom: 3rem;
  `}
`
export const StyledImage = styled(Image)``

export const Article = styled.article`
  ${media.lessThan("md")`
    display: flex;
    flex-direction: column;
  `}
`

export const Title = styled(MediumHeading)`
  & {
    font-size: 4rem;
    line-height: 1;
    margin-bottom: 1rem;

    ${media.lessThan("md")`
      text-align: center;
    `}
    ${media.lessThan("sm")`
      font-size: 2.6rem;
    `}
  }
`
export const Subtitle = styled.p`
  & {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 2rem;

    ${media.lessThan("md")`
      text-align: center;
      margin-bottom: 3rem;
    `}
    ${media.lessThan("sm")`
      font-size: 1.6rem;
    `}
  }
`

export const Body = styled.div`
  img {
    display: block;
    max-width: 90%;
    margin: 25px auto;
  }

  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin-top: 25px;
    text-transform: capitalize;
    ${media.lessThan("sm")`
    padding: 10px;
  `}
  }

  h1 {
    font-size: 34px;
    ${media.lessThan("sm")`
    font-size: 28px;
  `}
  }
  h2 {
    font-size: 3rem;
    margin-top: 30px;
    margin-bottom: 10px;
    ${media.lessThan("sm")`
    font-size: 25px;
    padding: 10px;
  `}
  }
  h3 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    margin-top: 30px;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.58;
    font-weight: 350;
    letter-spacing: -0.004em;
    margin: 0 0 2rem 0;
    ${media.lessThan("md")`
      font-size: 1.6;
      margin: 0 0 0.5rem 0;
  `}
  }

  li {
    font-size: 1.6rem;
    letter-spacing: -0.004em;
    line-height: 1.58;
    font-weight: 350;
    margin: 0 0 1rem 0;
    padding: 10px;

    ${media.lessThan("sm")`
    font-size: 19px;
    padding: 10px;
    margin: 0 0.5rem 0 0.5rem;
    `}
  }

  a {
    transition: 0.2s;
    color: ${$colorPrimary};
    &:hover {
      color: ${$colorSecondary};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  span {
    font-weight: 300 !important;
  }

  ul {
    margin: 10px;
    ol {
      font-size: 21px;
      ol:not(:last-child) {
        margin-bottom: 5px;
      }
      line-height: 1.58;
      font-weight: 350;
      letter-spacing: -0.004em;
      margin: 0 0 2rem 0;
      font-weight: 350;
      letter-spacing: -0.004em;
      margin: 1rem 0 1rem 2rem;
      &:last-child {
        margin: 0 0 3rem 2rem;
      }
      ${media.lessThan("sm")`
      font-size: 19px;
      padding: 5px;
  `}
    }

    ul {
      margin: 10px;
      li {
        font-size: 21px;
        list-style-position: initial;
        list-style: disc;
        line-height: 1.58;
        font-weight: 350;
        letter-spacing: -0.004em;
        margin: 1rem 0 1rem 2rem;
        &:last-child {
          margin: 0 0 3rem 2rem;
        }
        ${media.lessThan("sm")`
      font-size: 19px;
      padding: 5px;
  `}
      }
    }

    ol {
      span {
        font-weight: 350 !important;
      }

      li {
        font-size: 21px;
        list-style-position: initial;
        list-style: decimal;
        letter-spacing: -0.004em;
        line-height: 1.2;
        &:last-child {
          margin: 0;
        }
        ${media.lessThan("sm")`
      font-size: 17px;
      padding: 5px;
  `}
      }
    }

    hr {
      border-style: solid;
      border-color: ${$colorSecondary};
      margin: 0 0 2em 0;
    }

    blockquote {
      font-size: 1.6rem;
      font-style: italic;
      border-left: 4px solid ${$colorSecondary};
      padding: 0 0 0 0.5em;
      margin: 4em 0 4em 0;
    }

    pre {
      font-size: 1.6rem;
      padding: 1rem 2rem;
      margin: 2rem 0;
      border-radius: 2px;
      background: ${$greyUltraLight} !important;
      color: ${$colorSecondary} !important;
      span {
        background: inherit !important;
      }
    }
  }
`
