import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Col } from "react-awesome-styled-grid"

import media from "../../styles/media"

import {
  $greyLight,
  $greyRegular,
  $colorSecondary,
  $colorHeading,
} from "../../styles/variables"
import { staggeredAnimation } from "../../styles/mixins"
import {
  Section,
  MediumHeading,
  SmallHeading,
  TinyHeading,
  Paragraph,
  fadeInTop,
} from "../../styles/common.styled"

export const TagHeading = styled(MediumHeading)`
  text-align: center;
  margin-bottom: 8rem;
  font-size: 3.6rem;
`
export const StyledSection = styled(Section)``

export const ImageWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;
  a {
    display: block;
  }
`

export const StyledLink = styled(Link)``
export const StyledImg = styled(Img)`
  height: 22.5rem;
  transform: scale(1.1);
  transition: all 0.2s;
  ${StyledLink}:hover & {
    transform: scale(1);
    opacity: 0.8;
  }
`
interface StyledContainerProps {
  classNames: string[]
}
export const StyledContainer = styled(Container)<StyledContainerProps>`
  ${props =>
    props.classNames &&
    staggeredAnimation(fadeInTop, 0.5, 0, 0.1, props.classNames)}
  ${media.lessThan("lg")`
      max-width: 102.4rem !important;
  `}
`
export const StyledCol = styled(Col)`
  margin-bottom: 0;
`

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 37.5rem;
  padding: 3rem;
`

export const Heading = styled(SmallHeading)`
  line-height: 1;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${$greyLight};

  a,
  a:link,
  a:visited {
    color: ${$colorHeading};
    font-size: 2rem;
    text-decoration: none;
  }

  a:hover,
  a:active {
    color: ${$greyRegular};
  }
`
export const Author = styled(TinyHeading)`
  text-transform: capitalize;
  letter-spacing: 1px;
  color: ${$greyRegular};
`
export const Text = styled(Paragraph)`
  margin-bottom: 2rem;
`

export const ReadMore = styled(Link)`
  &&,
  &&:link,
  &&:visited {
    color: ${$colorSecondary};
    font-size: 1.4rem;
    align-self: flex-end;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s;
    margin-right: 3rem;
  }

  &&:hover,
  &&:active {
    color: ${$greyRegular};
  }
`
