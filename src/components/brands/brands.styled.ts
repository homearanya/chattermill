import styled from "styled-components"

import { fadeInLeft } from "../../styles/common.styled"

import { animation, transitionIntoViewLeft } from "../../styles/mixins"

interface StyledLinkProps {
  index: number
  withObserver?: boolean
  inView?: boolean
}
export const StyledLink = styled.a<StyledLinkProps>`
  position: relative;
  padding: 2rem 0;

  ${props =>
    props.withObserver
      ? transitionIntoViewLeft(
        props.withObserver,
        props.inView,
        props.index * 0.2
      )
      : animation(fadeInLeft, 1, (props.index + 1) * 0.2)};
`
export const StyledWhiteIcon = styled.img`
  opacity: 1;
  transition: opacity 0.2s;

  ${StyledLink}:hover & {
    opacity: 0;
  }
`
export const StyledColorIcon = styled.img`
  position: absolute;
  top: 10;
  left: 0;
  opacity: 0;
  transition: opacity 0.2s;
  ${StyledLink}:hover & {
    opacity: 1;
  }
`
