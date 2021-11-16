import styled from "styled-components"
import { Link } from "gatsby"
import Image from "../image"
import { Container } from "react-awesome-styled-grid"

import media from "../../styles/media"

import {
  $greyUltraLight,
  $greyLight,
  $greyRegular,
  $colorSecondary,
  $colorPrimary,
} from "../../styles/variables"
import { staggeredAnimation } from "../../styles/mixins"
import {
  MediumHeading,
  TinyHeading,
  ButtonLink,
  fadeInTop,
} from "../../styles/common.styled"

export const StyledSection = styled.section`
  margin-bottom: 10rem;
`

export const ImageWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;
  a {
    display: block;
  }
`

export const StyledLink = styled(Link)``
export const StyledImg = styled(Image)``
interface StyledContainerProps {
  classNames?: string[]
}
export const StyledContainer = styled(Container)<StyledContainerProps>`
  max-width: 90rem;

  ${(props) =>
    props.classNames &&
    staggeredAnimation(fadeInTop, 0.5, 0, 0.1, props.classNames)};
  ${media.lessThan("md")`
    max-width: 73.8rem;
  `}
`

export const Article = styled.article`
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  ${media.lessThan("sm")`
    padding: 0;
    margin: 12rem -1rem 0; 
  `}
`

export const Heading = styled(MediumHeading)`
  & {
    font-size: 3.6rem;
    line-height: 1;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${$greyLight};

    ${media.lessThan("lg")`
      font-size: 3rem;
    `}
    ${media.lessThan("sm")`
      text-align:center;
      font-size: 2.6rem;
      margin-top: -4rem;
    `}
  }
`
export const Author = styled(TinyHeading)`
  text-transform: capitalize;
  letter-spacing: 1px;
  color: ${$greyRegular};
  font-size: 1.4rem !important;
`
export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 3rem;
`
export const Tag = styled.li`
  flex-shrink: 0;
  margin-right: 1rem;
  margin-bottom: 2rem;
`
export const StyledButtonLink = styled(ButtonLink)`
  &&&,
  &&&:link,
  &&&:visited {
    font-size: 1.2rem;
    padding: 0.7rem 1.5rem;
  }
`
export const Body = styled.div`
  /* .gatsby-resp-image-wrapper {
    display: block;
    max-width: 90%;
    margin: 25px auto;
  } */
  .gatsby-resp-image-background-image {
    opacity: 1 !important;
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
    font-size: 21px;
    line-height: 1.58;
    font-weight: 350;
    letter-spacing: -0.004em;
    margin: 0 0 2rem 0;
    ${media.lessThan("sm")`
    font-size: 19px;
    padding: 10px;
    margin: 0 0 0.5rem 0;
  `}
  }

  li {
    font-size: 21px;
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

  iframe {
    border: none;
    padding: 2rem 0rem;
    overflow: hidden;
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
  img {
    width: 100%;
  }
  .gatsby-image-wrapper {
    overflow: visible !important;
    margin: 40px auto 60px;
    img {
      width: auto;
      margin: 0;
    }
  }
`
