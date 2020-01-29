import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container } from "react-awesome-styled-grid"

import media from "../../styles/media"

import {
  $greyLight,
  $greyRegular,
  $colorSecondary,
  $colorPrimary,
} from "../../styles/variables"
import { staggeredAnimation } from "../../styles/mixins"
import {
  Section,
  MediumHeading,
  TinyHeading,
  ButtonLink,
  fadeInTop,
} from "../../styles/common.styled"

export const StyledSection = styled(Section)``

export const ImageWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;
  a {
    display: block;
  }
`

export const StyledLink = styled(Link)``
export const StyledImg = styled(Img)``
interface StyledContainerProps {
  classNames: string[]
}
export const StyledContainer = styled(Container)<StyledContainerProps>`
  max-width: 90rem;

  ${props =>
    props.classNames &&
    staggeredAnimation(fadeInTop, 0.5, 0, 0.1, props.classNames)};
  ${media.lessThan("md")`
    max-width: 73.8rem;
  `}
`

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  ${media.lessThan("sm")`
    padding: 0 1.5rem;
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
  img {
    display: block;
    max-width: 90%;
    margin: 0 auto;
  }

  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.6;
    margin: 0 0 2em 0;
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

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      font-size: 1.6rem;
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      font-size: 1.6rem;
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
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
  }

  pre {
    font-size: 1.6rem;
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${$colorSecondary} !important;
    span {
      background: inherit !important;
    }
  }
`
