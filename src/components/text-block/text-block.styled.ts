import styled, { css } from "styled-components"
import { Link } from "gatsby"

import media from "../../styles/media"
import { Paragraph } from "../../styles/common.styled"
import { $colorPrimary } from "../../styles/variables"

import Image from "../image"
import UnivButtonLink from "../universal-button-link"

interface TextBlockWrapperProps {
  withObserver?: boolean
  classNames: string[]
}
export const TextBlockWrapper = styled.div<TextBlockWrapperProps>`
  a {
    text-decoration: none;
    color: ${$colorPrimary};
  }

  .text {
    white-space: pre-line;
  }

  ${(props) =>
    props.withObserver &&
    props.classNames &&
    css`
      ${props.classNames.reduce((rules, className) => {
        return css`
           ${rules}
          .${className.replace(" ", ".")} {
            opacity: 0;
            transition: opacity 1s;
          }
          .${className.replace(" ", ".")}.animated {
              opacity: 1;
          }
        `
      }, css``)}
    `}

  ${media.lessThan("sm")`
      margin-left: 0;
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      .text{
        font-size: 1.4rem;
        line-height: 2rem;
      }
    `}
`

export const StyledImg = styled.img`
  margin-bottom: 2rem;
`

export const StyledImage = styled(Image)`
  margin-bottom: 2rem;
`

export const StyledParagraph = styled(Paragraph)`
  ${media.lessThan("sm")`
    .text{
      font-size: 1.4rem !important;
      line-height: 2rem !important;
    }
 `}
`
const linkStyles = css`
  &&,
  &&:link,
  &&:visited {
    text-decoration: none;
    color: ${$colorPrimary};
    span {
      display: inline;
      font-size: 200%;
      vertical-align: bottom;
    }
  }
`

export const StyledLink = styled(Link)`
  ${linkStyles};
`
export const StyledA = styled.a`
  ${linkStyles};
  width: 300px;
`
export const StyledUnivButtonLink = styled(UnivButtonLink)`
  margin-left: 3rem;

  ${media.lessThan("sm")`
  margin-left: 0;
  margin-top: 1rem;
`}
`
